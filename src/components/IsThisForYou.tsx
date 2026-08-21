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
          <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
            Clear Expectations
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Is Hospital Indemnity Insurance Right for You?
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Review who benefits most from supplemental hospital indemnity coverage and what to expect when you connect with a representative.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Who It Is Helpful For */}
          <div className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-4 text-blue-900">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Hospital Indemnity Can Help If:</h3>
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

            <div className="mt-6 pt-5 border-t border-slate-200">
              <a
                href={phoneTel}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold transition-colors"
              >
                <Phone className="w-4 h-4 text-teal-300" />
                <span>Call {phoneDisplay} to Learn More</span>
              </a>
            </div>
          </div>

          {/* Important Understanding / Realistic Expectations */}
          <div className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-4 text-slate-800">
                <div className="w-8 h-8 rounded-lg bg-slate-200 text-slate-700 flex items-center justify-center">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Important Things to Know:</h3>
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

            <div className="mt-6 pt-5 border-t border-slate-200">
              <div className="text-xs text-slate-500 bg-white p-3 rounded-lg border border-slate-200/80 leading-relaxed">
                <strong>Independent Guidance:</strong> Speaking with a licensed representative is an educational consultation to help evaluate available hospital cash plans in your area.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
