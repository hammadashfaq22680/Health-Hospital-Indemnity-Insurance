import React, { useState } from 'react';
import { Phone, Clock, Copy, Check, Headphones } from 'lucide-react';
import { OperatingHours } from '../types';

interface MidPageCTAProps {
  phoneDisplay: string;
  phoneTel: string;
  operatingHours: OperatingHours;
  onOpenCallbackModal: () => void;
}

export const MidPageCTA: React.FC<MidPageCTAProps> = ({
  phoneDisplay,
  phoneTel,
  operatingHours,
  onOpenCallbackModal,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(phoneDisplay);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="bg-slate-900 text-white py-14 sm:py-18 relative overflow-hidden">
      {/* Subtle geometric background styling */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-teal-300 text-xs font-semibold mb-4">
          <Headphones className="w-3.5 h-3.5" />
          <span>Toll-Free Licensed Agent Assistance</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white font-sans max-w-2xl mx-auto">
          Have Questions About Hospital Indemnity Coverage?
        </h2>

        <p className="mt-3 sm:mt-4 text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Skip confusing questionnaires. Speak directly with an authorized representative who can explain fixed cash benefit tiers and check hospital indemnity carrier availability in your state.
        </p>

        {/* Primary Call Action Card */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={phoneTel}
            id="midpage-primary-call-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3.5 px-8 py-4 rounded-xl bg-teal-500 hover:bg-teal-400 active:bg-teal-600 text-slate-950 font-extrabold text-xl sm:text-2xl shadow-lg shadow-teal-900/30 transition-all transform hover:-translate-y-0.5 focus:outline-hidden focus-visible:ring-4 focus-visible:ring-teal-300"
            aria-label={`Call licensed representative at ${phoneDisplay}`}
          >
            <Phone className="w-6 h-6 text-slate-950" />
            <div className="text-left">
              <span className="block text-[10px] font-bold text-teal-950 uppercase tracking-wider">
                Call Now
              </span>
              <span className="tracking-tight">{phoneDisplay}</span>
            </div>
          </a>

          <button
            onClick={handleCopy}
            type="button"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold border border-slate-700 transition-colors cursor-pointer"
            aria-label="Copy phone number to clipboard"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Copied Number</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-slate-400" />
                <span>Copy Number</span>
              </>
            )}
          </button>
        </div>

        {/* Operating hours note & fallback */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>Mon–Fri 9:30 AM–6:30 PM ET · Sat 10:00 AM–3:00 PM ET</span>
          </div>
          <span>·</span>
          <button
            onClick={onOpenCallbackModal}
            className="text-teal-300 hover:text-teal-200 underline underline-offset-2 cursor-pointer font-medium"
          >
            Request a Scheduled Call Back
          </button>
        </div>
      </div>
    </section>
  );
};
