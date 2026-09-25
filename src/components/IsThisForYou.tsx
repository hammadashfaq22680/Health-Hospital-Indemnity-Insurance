import React from 'react';
import { CheckCircle2, HelpCircle, Phone } from 'lucide-react';

interface IsThisForYouProps {
  phoneDisplay: string;
  phoneTel: string;
}

export const IsThisForYou: React.FC<IsThisForYouProps> = ({ phoneDisplay, phoneTel }) => {
  const goodFitItems = [
    'You have existing health insurance (such as an employer plan, ACA policy, or high-deductible plan) and want extra financial protection against hospital stays.',
    'You want cash paid directly to you if admitted to a hospital, giving you funds to cover out-of-pocket medical bills, copays, or living expenses.',
    'You want the freedom to spend your cash benefit however you choose—whether on rent, groceries, transportation, or recovery needs.',
    'You prefer speaking directly with a licensed insurance representative to compare daily cash benefit amounts ($250, $500, $1,000+ per day) and rider options.'
  ];

  const expectationsItems = [
    'Hospital indemnity insurance is a supplemental policy and is NOT a substitute for comprehensive major medical health insurance or minimum essential coverage.',
    'Benefits are paid as fixed, predetermined cash amounts according to the policy schedule upon covered hospital admission, not as full bill reimbursement.',
    'Plan availability, specific benefit amounts, and eligibility requirements vary by state and are subject to insurance carrier underwriting.'
  ];

  return (
    <section id="who-its-for" className="py-14 sm:py-20 bg-white border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
            Clear Expectations
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Is Hospital Indemnity Insurance Right for You?
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Review who benefits most from supplemental hospital indemnity coverage and what to expect when you connect with a representative.
          </p>
        </div>

        {/* 2-Card Grid (Standardized Card Tokens) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Who It Is Helpful For */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-5 text-slate-900">
                <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Hospital Indemnity Can Help If:</h3>
              </div>

              <ul className="space-y-3.5 text-sm text-slate-700">
                {goodFitItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-2"></span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-100">
              <a
                href={phoneTel}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-blue-700 hover:bg-blue-800 active:bg-blue-900 text-white text-sm font-bold shadow-xs transition-colors"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>Call {phoneDisplay} to Learn More</span>
              </a>
            </div>
          </div>

          {/* Important Understanding / Realistic Expectations */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-5 text-slate-900">
                <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Important Things to Know:</h3>
              </div>

              <ul className="space-y-3.5 text-sm text-slate-700">
                {expectationsItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0 mt-2"></span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-100">
              <div className="text-xs text-slate-500 bg-slate-50 p-3.5 rounded-xl border border-slate-200/80 leading-relaxed">
                <strong>Independent Guidance:</strong> Speaking with a licensed representative is an educational consultation to help evaluate available hospital cash plans in your area.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
