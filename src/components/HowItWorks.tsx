import React from 'react';
import { Search, PhoneCall, CheckSquare, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  phoneDisplay: string;
  phoneTel: string;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ phoneDisplay, phoneTel }) => {
  const steps = [
    {
      step: '01',
      title: 'Review Your Inpatient Protection Needs',
      icon: Search,
      description:
        'Consider your current major medical insurance deductible, out-of-pocket maximums, and potential daily expenses if you or a family member required hospital admission.',
      tip: 'Determine what daily benefit amount ($250, $500, $1,000+) fits your needs.'
    },
    {
      step: '02',
      title: 'Connect with a Licensed Representative',
      icon: PhoneCall,
      description:
        'Call our dedicated toll-free number to be paired with an authorized, licensed insurance representative who offers hospital indemnity policies in your state.',
      tip: 'Speak directly with a licensed professional with zero obligation.'
    },
    {
      step: '03',
      title: 'Compare Cash Benefit Tiers & Decide',
      icon: CheckSquare,
      description:
        'Review daily inpatient benefits, admission riders, and premium options. Ask questions and decide whether to apply at your own pace.',
      tip: 'Cash benefits are paid directly to you upon covered admission.'
    }
  ];

  return (
    <section id="how-it-works" className="py-14 sm:py-20 relative border-t border-slate-200/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full glass-pill text-blue-700 text-xs font-bold uppercase tracking-wider">
            Simple 3-Step Process
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            How It Works
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Connecting by phone gives you direct answers regarding hospital indemnity policies without confusing web forms.
          </p>
        </div>

        {/* Steps Grid - Liquid Glass Surfaces */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {steps.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.step}
                className="glass-panel-subtle rounded-[28px] p-6 sm:p-8 relative flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-blue-300/60"
              >
                {/* Step number badge & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-xs font-bold text-blue-700 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full backdrop-blur-xs">
                    Step {item.step}
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-700 flex items-center justify-center">
                    <IconComponent className="w-5 h-5 text-blue-700" />
                  </div>
                </div>

                <h3 className="text-lg font-extrabold text-slate-900 mb-2 leading-snug">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1">{item.description}</p>

                <div className="pt-4 border-t border-slate-200/50 text-xs text-slate-500 font-medium">
                  <span className="text-blue-700 font-semibold">Tip: </span>
                  {item.tip}
                </div>
              </div>
            );
          })}
        </div>

        {/* Action callout banner - Elevated Liquid Glass Card */}
        <div className="mt-10 glass-panel rounded-[28px] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-5 transition-all duration-300">
          <div className="text-center sm:text-left">
            <h4 className="text-base font-bold text-slate-900">Ready to speak with a licensed agent?</h4>
            <p className="text-xs text-slate-600 mt-0.5">Educational consultation · No obligation to enroll</p>
          </div>
          <a
            href={phoneTel}
            className="w-full sm:w-auto glass-btn-primary rounded-full inline-flex items-center justify-center gap-2.5 px-6 py-3 text-white font-bold text-sm shadow-xs"
          >
            <span>Call {phoneDisplay}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
