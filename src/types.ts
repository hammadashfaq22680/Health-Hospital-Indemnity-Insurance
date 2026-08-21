export interface NavItem {
  label: string;
  href: string;
  page?: 'home' | 'privacy' | 'terms' | 'disclaimer' | 'contact';
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  highlight?: string;
}

export interface OperatingHours {
  isOpen: boolean;
  statusText: string;
  nextOpenText: string;
  hoursSchedule: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
}

export interface CallbackRequest {
  fullName: string;
  phoneNumber: string;
  zipCode: string;
  preferredTime: string;
  tcpaConsent: boolean;
}

export type PageView = 'home' | 'privacy' | 'terms' | 'disclaimer' | 'contact';
