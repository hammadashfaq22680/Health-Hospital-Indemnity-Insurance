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
    <section id="who-its-for" className="py-14 sm:py-20 relative border-t border-slate-200/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full glass-pill text-blue-700 text-xs font-bold uppercase tracking-wider">
            Clear Expectations
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Is Hospital Indemnity Insurance Right for You?
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Review who benefits most from supplemental hospital indemnity coverage and what to expect when you connect with a representative.
          </p>
        </div>

        {/* 2-Card Grid (Standardized Liquid Glass Tokens) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Who It Is Helpful For */}
          <div className="glass-panel-subtle rounded-[28px] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-blue-300/60">
            <div>
              <div className="flex items-center gap-3 mb-6 text-slate-900">
                <div className="w-10 h-10 rounded-2xl bg-teal-500/15 border border-teal-500/25 text-teal-600 flex items-center justify-center shrink-0 shadow-2xs">
                  <CheckCircle2 className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900">Hospital Indemnity Can Help If:</h3>
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

            <div className="mt-7 pt-5 border-t border-slate-200/50">
              <a
                href={phoneTel}
                className="w-full glass-btn-primary rounded-full inline-flex items-center justify-center gap-2.5 py-3.5 px-5 text-white text-sm font-bold shadow-xs"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>Call {phoneDisplay} to Learn More</span>
              </a>
            </div>
          </div>

          {/* Important Understanding / Realistic Expectations */}
          <div className="glass-panel-subtle rounded-[28px] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300">
            <div>
              <div className="flex items-center gap-3 mb-6 text-slate-900">
                <div className="w-10 h-10 rounded-2xl bg-slate-200/60 border border-slate-300/50 text-slate-700 flex items-center justify-center shrink-0 shadow-2xs">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900">Important Things to Know:</h3>
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

            <div className="mt-7 pt-5 border-t border-slate-200/50">
              <div className="text-xs text-slate-600 bg-white/50 backdrop-blur-xs p-4 rounded-2xl border border-white/60 leading-relaxed shadow-2xs">
                <strong className="text-slate-700">Independent Guidance:</strong> Speaking with a licensed representative is an educational consultation to help evaluate available hospital cash plans in your area.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
