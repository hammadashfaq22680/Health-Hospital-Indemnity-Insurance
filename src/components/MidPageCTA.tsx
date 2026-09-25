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
    <section className="bg-slate-900/95 backdrop-blur-2xl text-white py-16 sm:py-24 relative overflow-hidden border-y border-white/10">
      {/* Liquid Glass ambient lighting elements over dark navy */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-blue-500/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-teal-500/10 blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        {/* Floating Frosted Dark Panel */}
        <div className="glass-dark-card rounded-[32px] p-8 sm:p-12 transition-all duration-300">
          {/* Eyebrow Label (Unified Frosted Pill) */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-blue-200 text-xs font-bold uppercase tracking-wider mb-5 backdrop-blur-md">
            <Headphones className="w-3.5 h-3.5 text-blue-300" />
            <span>Toll-Free Licensed Agent Assistance</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white max-w-2xl mx-auto leading-tight">
            Have Questions About Hospital Indemnity Coverage?
          </h2>

          <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Skip confusing questionnaires. Speak directly with an authorized representative who can explain fixed cash benefit tiers and check hospital indemnity carrier availability in your state.
          </p>

          {/* Primary Call Action Card (Translucent Blue Glass Pill + Secondary Pill) */}
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={phoneTel}
              id="midpage-primary-call-btn"
              className="w-full sm:w-auto glass-btn-primary rounded-full inline-flex items-center justify-center gap-3.5 px-8 py-4 sm:py-4.5 text-white font-extrabold text-xl sm:text-2xl focus:outline-hidden focus-visible:ring-4 focus-visible:ring-blue-400"
              aria-label={`Call licensed representative at ${phoneDisplay}`}
            >
              <div className="p-2 rounded-full bg-white/20 border border-white/30 backdrop-blur-xs">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <span className="block text-[10px] font-bold text-blue-100 uppercase tracking-wider">
                  Call Now
                </span>
                <span className="tracking-tight">{phoneDisplay}</span>
              </div>
            </a>

            <button
              onClick={handleCopy}
              type="button"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white/10 hover:bg-white/15 active:bg-white/20 text-slate-200 text-sm font-semibold border border-white/20 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 cursor-pointer shadow-sm"
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
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>Mon–Fri 9:30 AM–6:30 PM ET · Sat 10:00 AM–3:00 PM ET</span>
            </div>
            <span>·</span>
            <button
              onClick={onOpenCallbackModal}
              className="text-blue-300 hover:text-blue-200 underline underline-offset-2 cursor-pointer font-medium"
            >
              Request a Scheduled Call Back
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
