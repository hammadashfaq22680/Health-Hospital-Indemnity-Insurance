import React from 'react';
import { Banknote, ShieldPlus, Users, Check, ArrowUpRight } from 'lucide-react';

interface InfoCardsProps {
  phoneTel: string;
}

export const InfoCards: React.FC<InfoCardsProps> = ({ phoneTel }) => {
  const cards = [
    {
      id: 'card-cash-benefits',
      title: 'Fixed Cash Benefits',
      icon: Banknote,
      badge: 'Direct Payment',
      description:
        'Hospital indemnity insurance pays a set cash benefit directly to you (or your provider) upon covered hospital admission, regardless of any other health insurance you hold.',
      points: [
        'Predetermined daily or per-admission cash benefit',
        'Use cash for medical deductibles or daily expenses',
        'Direct payout with no network restrictions'
      ]
    },
    {
      id: 'card-supplemental-purpose',
      title: 'Supplemental Protection',
      icon: ShieldPlus,
      badge: 'Gap Coverage',
      description:
        'Built to work alongside your existing health insurance. It helps protect your savings against unexpected hospital bills, high deductibles, and lost income while in recovery.',
      points: [
        'Supplements existing health coverage',
        'Not an ACA or major medical replacement',
        'Protection against unexpected inpatient bills'
      ]
    },
    {
      id: 'card-licensed-support',
      title: '1-on-1 Licensed Guidance',
      icon: Users,
      badge: 'Telephone Support',
      description:
        'Speak directly with a licensed insurance representative who can explain benefit schedules, daily inpatient limits, waiting periods, and available carrier options.',
      points: [
        'Speak directly with authorized licensed agents',
        'Review available benefit tiers and riders',
        'Independent educational phone consultation'
      ]
    }
  ];

  return (
    <section id="coverage-options" className="py-14 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full">
            Hospital Indemnity Overview
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            How Hospital Indemnity Coverage Protects You
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Learn how fixed indemnity policies provide an extra financial safety net during hospitalizations.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.id}
                id={card.id}
                className="flex flex-col bg-slate-50/80 rounded-2xl border border-slate-200/90 p-6 sm:p-7 hover:border-blue-300 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-900 text-teal-300 flex items-center justify-center shadow-xs">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-semibold text-blue-800 bg-blue-100/70 px-2.5 py-0.8 rounded-md">
                    {card.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2.5 tracking-tight">{card.title}</h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">{card.description}</p>

                <div className="space-y-2.5 pt-4 border-t border-slate-200/70 mb-5">
                  {card.points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={phoneTel}
                  className="mt-auto inline-flex items-center justify-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-900 bg-white hover:bg-blue-50/50 border border-slate-200 py-2 px-3 rounded-lg transition-colors"
                >
                  <span>Discuss by Phone</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
