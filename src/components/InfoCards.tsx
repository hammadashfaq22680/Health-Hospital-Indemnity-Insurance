import React from 'react';
import { Banknote, ShieldPlus, Users, Check } from 'lucide-react';

interface InfoCardsProps {
  phoneTel?: string;
}

export const InfoCards: React.FC<InfoCardsProps> = () => {
  const cards = [
    {
      id: 'card-cash-benefits',
      title: 'Fixed Cash Benefits',
      icon: Banknote,
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
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
            Hospital Indemnity Overview
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            How Hospital Indemnity Coverage Protects You
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Learn how fixed indemnity policies provide an extra financial safety net during hospitalizations.
          </p>
        </div>

        {/* 3 Purely Informational Cards Grid (Identical spacing, border-radius, and shadow) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.id}
                id={card.id}
                className="flex flex-col bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs hover:border-blue-200 transition-all duration-200"
              >
                {/* Clean Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-5 shrink-0">
                  <IconComponent className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-2.5 tracking-tight">
                  {card.title}
                </h3>

                {/* One short description line */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {card.description}
                </p>

                {/* Existing Bullet List with Teal Checkmarks */}
                <div className="space-y-2.5 pt-5 border-t border-slate-100 mt-auto">
                  {card.points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-normal">
                      <div className="w-4 h-4 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
