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
    <section id="faq" className="py-14 sm:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/70 text-blue-900 text-xs font-bold uppercase tracking-wider mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Clear Answers to Common Questions
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Review detailed information regarding our service, representative licensing, coverage options, and compliance disclosures.
          </p>

          <div className="mt-4 flex items-center justify-center gap-3 text-xs">
            <button
              onClick={expandAll}
              className="text-blue-700 hover:text-blue-900 font-medium underline underline-offset-2 cursor-pointer"
            >
              Expand All
            </button>
            <span className="text-slate-300">•</span>
            <button
              onClick={collapseAll}
              className="text-slate-600 hover:text-slate-900 font-medium underline underline-offset-2 cursor-pointer"
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIds.includes(item.id);
            const isImportantDisclaimer = item.id === 'faq-4' || item.id === 'faq-5';

            return (
              <div
                key={item.id}
                id={item.id}
                className={`bg-white rounded-xl border transition-all duration-150 overflow-hidden ${
                  isOpen
                    ? 'border-blue-300 shadow-xs'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full text-left p-4 sm:p-5 flex items-start justify-between gap-4 cursor-pointer focus:outline-hidden focus-visible:bg-slate-50"
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
                    className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    className="px-4 pb-5 sm:px-5 sm:pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3"
                  >
                    {isImportantDisclaimer && (
                      <div className="mb-3 p-2.5 rounded-lg bg-amber-50 border border-amber-200/80 text-amber-900 text-xs font-medium flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
                        <span>Official Regulatory &amp; Relationship Disclosure</span>
                      </div>
                    )}
                    <p className="whitespace-pre-line pl-6">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-10 bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 text-center">
          <h3 className="text-lg font-bold text-slate-900">Have a specific question not covered here?</h3>
          <p className="mt-1.5 text-sm text-slate-600 max-w-md mx-auto">
            Licensed representatives are available by phone to answer questions about health coverage categories and carrier availability.
          </p>

          <div className="mt-4">
            <a
              href={phoneTel}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm shadow-xs transition-colors"
            >
              <Phone className="w-4 h-4 text-teal-300" />
              <span>Call Toll-Free: {phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
