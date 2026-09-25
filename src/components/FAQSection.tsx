import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, AlertCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../config';

interface FAQSectionProps {
  phoneDisplay: string;
  phoneTel: string;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ phoneDisplay, phoneTel }) => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-4', 'faq-5']);

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const expandAll = () => {
    setOpenIds(FAQ_ITEMS.map((f) => f.id));
  };

  const collapseAll = () => {
    setOpenIds([]);
  };

  return (
    <section id="faq" className="py-14 sm:py-20 relative border-t border-slate-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full glass-pill text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Clear Answers to Common Questions
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Review detailed information regarding our service, representative licensing, coverage options, and compliance disclosures.
          </p>

          <div className="mt-4 flex items-center justify-center gap-3 text-xs">
            <button
              onClick={expandAll}
              className="text-blue-700 hover:text-blue-900 font-semibold underline underline-offset-2 cursor-pointer"
            >
              Expand All
            </button>
            <span className="text-slate-300">•</span>
            <button
              onClick={collapseAll}
              className="text-slate-600 hover:text-slate-900 font-semibold underline underline-offset-2 cursor-pointer"
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* FAQ Accordion List (Frosted Glass Shells, Crisp Inner Text for Perfect Readability) */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIds.includes(item.id);
            const isImportantDisclaimer = item.id === 'faq-4' || item.id === 'faq-5';

            return (
              <div
                key={item.id}
                id={item.id}
                className={`glass-panel-subtle rounded-2xl transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-blue-300/80 shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.9),0_8px_24px_-6px_rgba(29,78,216,0.12)]'
                    : 'hover:border-white'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full text-left p-4 sm:p-5 flex items-start justify-between gap-4 cursor-pointer focus:outline-hidden focus-visible:bg-white/40"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-xs font-bold text-slate-400 mt-0.5">
                      0{idx + 1}
                    </span>
                    <span className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      {item.question}
                    </span>
                  </div>

                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-transform duration-200 border ${
                      isOpen
                        ? 'rotate-180 bg-blue-600/15 border-blue-400/40 text-blue-700'
                        : 'bg-white/70 border-white/90 text-slate-500 shadow-2xs'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    className="px-4 pb-5 sm:px-5 sm:pb-5 text-sm text-slate-700 leading-relaxed border-t border-slate-200/50 pt-3"
                  >
                    {isImportantDisclaimer && (
                      <div className="mb-3 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-950 text-xs font-medium flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
                        <span>Official Regulatory &amp; Relationship Disclosure</span>
                      </div>
                    )}
                    <p className="whitespace-pre-line pl-6 font-normal">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box (Standardized Liquid Glass Card) */}
        <div className="mt-10 glass-panel rounded-[28px] p-6 sm:p-8 text-center transition-all duration-300">
          <h3 className="text-xl font-extrabold text-slate-900">Have a specific question not covered here?</h3>
          <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            Licensed representatives are available by phone to answer questions about health coverage categories and carrier availability.
          </p>

          <div className="mt-6">
            <a
              href={phoneTel}
              className="glass-btn-primary rounded-full inline-flex items-center gap-2.5 px-7 py-3.5 text-white font-bold text-sm shadow-xs"
            >
              <Phone className="w-4 h-4 text-white" />
              <span>Call Toll-Free: {phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
