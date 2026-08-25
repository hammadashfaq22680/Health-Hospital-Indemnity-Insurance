import { FAQItem, OperatingHours } from './types';

// Your official rented MarketCall tracking phone line
export const DEFAULT_PHONE_NUMBER = '1-888-217-0102';
export const DEFAULT_PHONE_DISPLAY = '(888) 217-0102';
export const DEFAULT_PHONE_TEL = 'tel:18882170102';

/**
 * Parses and strictly sanitizes phone number from URL parameter if present, else returns default.
 * Only accepts clean digits (10 digits or 11 digits starting with 1), rejecting any malicious input or script injection.
 */
export function getTrackingPhoneNumber(): { raw: string; display: string; tel: string } {
  if (typeof window !== 'undefined') {
    try {
      const params = new URLSearchParams(window.location.search);
      const rawParam = params.get('phone') || params.get('tel') || params.get('tollfree');
      if (rawParam) {
        // Strip everything that is not an ASCII digit
        const digits = rawParam.replace(/[^0-9]/g, '');
        // Validate valid US phone number format: 10 digits, or 11 digits starting with 1
        if (digits.length === 10 && /^[2-9]\d{9}$/.test(digits)) {
          const area = digits.slice(0, 3);
          const prefix = digits.slice(3, 6);
          const line = digits.slice(6, 10);
          return {
            raw: `1-${area}-${prefix}-${line}`,
            display: `(${area}) ${prefix}-${line}`,
            tel: `tel:1${digits}`
          };
        } else if (digits.length === 11 && digits.startsWith('1') && /^[2-9]/.test(digits.slice(1))) {
          const area = digits.slice(1, 4);
          const prefix = digits.slice(4, 7);
          const line = digits.slice(7, 11);
          return {
            raw: `1-${area}-${prefix}-${line}`,
            display: `(${area}) ${prefix}-${line}`,
            tel: `tel:${digits}`
          };
        }
      }
    } catch {
      // Fallback on default if URL parsing fails
    }
  }

  return {
    raw: DEFAULT_PHONE_NUMBER,
    display: DEFAULT_PHONE_DISPLAY,
    tel: DEFAULT_PHONE_TEL
  };
}

/**
 * Calculates current call center status based on Eastern Time (ET):
 * Mon-Fri: 9:30 AM - 6:30 PM ET
 * Sat: 10:00 AM - 3:00 PM ET
 * Sun: Closed
 */
export function getOperatingHoursStatus(): OperatingHours {
  const schedule = {
    weekdays: 'Mon–Fri 9:30 AM–6:30 PM ET',
    saturday: 'Sat 10:00 AM–3:00 PM ET',
    sunday: 'Sunday: Closed'
  };

  try {
    const now = new Date();
    // Convert to US Eastern Time (ET)
    const etFormatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/New_York',
      hour12: false,
      weekday: 'short',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    });

    const parts = etFormatter.formatToParts(now);
    let weekdayStr = '';
    let hour = 0;
    let minute = 0;

    for (const part of parts) {
      if (part.type === 'weekday') weekdayStr = part.value;
      if (part.type === 'hour') hour = parseInt(part.value, 10);
      if (part.type === 'minute') minute = parseInt(part.value, 10);
    }

    const currentMinutes = hour * 60 + minute;
    let isOpen = false;
    let nextOpenText = 'Opens Mon at 9:30 AM ET';

    // Monday through Friday: 9:30 AM (570m) to 6:30 PM (1110m)
    if (['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].includes(weekdayStr)) {
      if (currentMinutes >= 570 && currentMinutes < 1110) {
        isOpen = true;
        nextOpenText = 'Representatives available now';
      } else if (currentMinutes < 570) {
        nextOpenText = 'Opens today at 9:30 AM ET';
      } else {
        nextOpenText = weekdayStr === 'Fri' ? 'Opens Sat at 10:00 AM ET' : 'Opens tomorrow at 9:30 AM ET';
      }
    } else if (weekdayStr === 'Sat') {
      // Saturday: 10:00 AM (600m) to 3:00 PM (900m)
      if (currentMinutes >= 600 && currentMinutes < 900) {
        isOpen = true;
        nextOpenText = 'Representatives available now';
      } else if (currentMinutes < 600) {
        nextOpenText = 'Opens today at 10:00 AM ET';
      } else {
        nextOpenText = 'Opens Mon at 9:30 AM ET';
      }
    } else {
      // Sunday
      nextOpenText = 'Opens Mon at 9:30 AM ET';
    }

    return {
      isOpen,
      statusText: isOpen ? 'Agents Available Now' : 'Currently Closed — Request a Call Back',
      nextOpenText,
      hoursSchedule: schedule
    };
  } catch {
    return {
      isOpen: false,
      statusText: 'Currently Closed — Request a Call Back',
      nextOpenText: 'Mon–Fri 9:30 AM–6:30 PM ET, Sat 10:00 AM–3:00 PM ET',
      hoursSchedule: schedule
    };
  }
}

// 7 Complete Hospital Indemnity Insurance FAQs with detailed answers
export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is hospital indemnity insurance and how does it work?',
    answer:
      'Hospital indemnity insurance is a type of supplemental health insurance policy that pays a predetermined, fixed cash benefit directly to you (or your designated provider) if you are admitted to a hospital due to a covered illness or accidental injury. Unlike major medical insurance, benefits are paid in cash regardless of other coverage you have, and you may use the payout for any purpose—including medical deductibles, prescription costs, mortgage or rent, transportation, child care, or everyday living expenses while recovering.'
  },
  {
    id: 'faq-2',
    question: 'How much does it cost to speak with a representative and how are policy premiums structured?',
    answer:
      'There is no cost or obligation to speak with a representative. Our telephone referral service is provided with zero consultation charge. If you choose to apply for a hospital indemnity policy, monthly premiums are paid directly to the issuing insurance carrier. Premium amounts depend on the daily or per-admission cash benefit amount you select, your age, tobacco usage, and any additional optional policy riders you choose.'
  },
  {
    id: 'faq-3',
    question: 'Who will I speak with when I call?',
    answer:
      'When you call our published toll-free number, you will be connected directly with an authorized, licensed insurance representative who is appointed and qualified to present hospital indemnity insurance options in your state. Representatives can explain policy terms, admission benefit triggers, daily confinement amounts, waiting periods, and assist you with the application process if you decide to enroll.'
  },
  {
    id: 'faq-4',
    question: 'Is Health Coverage Guide an insurance company or carrier?',
    answer:
      'No. Health Coverage Guide is an independent educational resource and referral service. We are not an insurance company, carrier, or underwriter. We do not issue insurance policies, underwrite risk, or process claims. Our purpose is to provide clear consumer information on supplemental insurance and connect individuals with licensed agents and insurance partners.'
  },
  {
    id: 'faq-5',
    question: 'Is this website affiliated with or endorsed by the U.S. government or Healthcare.gov?',
    answer:
      'No. Health Coverage Guide is privately owned and operated. We are NOT affiliated with, endorsed by, or connected to the U.S. Federal Government, the Department of Health and Human Services (HHS), the federal Health Insurance Marketplace (Healthcare.gov), state health exchanges, Medicare, or Medicaid. Hospital indemnity plans are supplemental policies and are NOT a substitute for minimum essential coverage under the Affordable Care Act.'
  },
  {
    id: 'faq-6',
    question: 'Are hospital indemnity plans available in all states?',
    answer:
      'Hospital indemnity insurance policies, specific benefit amounts, carrier options, and underwriting criteria vary by state based on individual state insurance regulations and carrier filings. When you speak with a licensed representative, they will confirm which specific hospital indemnity plans and carriers are currently available in your state of residence.'
  },
  {
    id: 'faq-7',
    question: 'How are eligibility, benefit levels, and policy rates determined?',
    answer:
      'Eligibility, benefit tiers, and monthly premiums for hospital indemnity insurance are established directly by the underwriting insurance carrier in accordance with state guidelines. Factors that influence pricing and qualification typically include your age at enrollment, state of residence, tobacco status, selected daily admission or per-confinement benefit amounts (e.g., $250, $500, or $1,000+ per day), and basic health history questions. We do not guarantee policy approval or specific rates.'
  }
];

export const MANDATORY_DISCLOSURES = {
  heroDisclaimer: 'No cost or obligation to speak with a representative. Hospital indemnity insurance is a supplemental policy that pays fixed cash benefits and is not a replacement for major medical health insurance.',
  relationshipDisclosure:
    'Advertising & Relationship Disclosure: Health Coverage Guide is an independent informational and referral service. We receive financial compensation from our licensed insurance agency partners when consumers call or connect through our website. This compensation may impact which partners are presented. We do not offer every plan available in your area.',
  nonGovernmentDisclosure:
    'Not affiliated with or endorsed by the U.S. Government, Healthcare.gov, Medicare, or Medicaid. Hospital indemnity insurance does not satisfy the Affordable Care Act (ACA) requirement for minimum essential coverage.',
  tcpaText:
    'By submitting your request, you provide your express written consent for Health Coverage Guide and its licensed insurance partners to contact you at the phone number provided regarding hospital indemnity insurance options via phone call or SMS text message, including automated dialing technology and prerecorded messages. Consent is not a condition of purchase. Message and data rates may apply. You may revoke consent at any time.'
};
