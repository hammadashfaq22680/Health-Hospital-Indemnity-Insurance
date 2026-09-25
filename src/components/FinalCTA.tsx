import React from 'react';
import { Phone, Clock, ShieldCheck } from 'lucide-react';
import { OperatingHours } from '../types';

interface FinalCTAProps {
  phoneDisplay: string;
  phoneTel: string;
  operatingHours: OperatingHours;
  onOpenCallbackModal: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({
  phoneDisplay,
  phoneTel,
  operatingHours,
  onOpenCallbackModal,
}) => {
  return (
    <section className="py-14 sm:py-20 bg-gradient-to-b from-white to-slate-100 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Unified Eyebrow */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
          <ShieldCheck className="w-4 h-4 text-blue-700" />
          <span>Independent &amp; No-Obligation Assistance</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight max-w-2xl mx-auto">
          Ready to Explore Hospital Indemnity Cash Protection?
        </h2>

        <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Speak with a licensed representative who can explain daily hospital admission benefit schedules, ICU coverage riders, and carrier availability in your state.
        </p>

        {/* Big Call Button Card */}
        <div className="mt-8 max-w-md mx-auto">
          <a
            href={phoneTel}
            id="footer-primary-call-btn"
            className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-blue-700 hover:bg-blue-800 active:bg-blue-900 text-white font-extrabold text-xl sm:text-2xl shadow-sm hover:shadow-md transition-all focus:outline-hidden focus-visible:ring-4 focus-visible:ring-blue-300"
            aria-label={`Call toll-free representative at ${phoneDisplay}`}
          >
            <div className="p-2 rounded-lg bg-blue-800/80 text-white">
              <Phone className="w-6 h-6" />
            </div>
            <div className="text-left leading-tight">
              <span className="block text-[11px] font-medium uppercase tracking-wider text-blue-200">
                Toll-Free Phone Consultation
              </span>
              <span className="tracking-tight">{phoneDisplay}</span>
            </div>
          </a>

          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>
              {operatingHours.isOpen ? (
                <strong className="text-emerald-700">Lines Open Now</strong>
              ) : (
                <span>Next open: {operatingHours.nextOpenText}</span>
              )}
              {' '}· Mon–Fri 9:30 AM–6:30 PM ET, Sat 10:00 AM–3:00 PM ET
            </span>
          </div>

          <div className="mt-4 text-xs text-slate-500">
            Cannot call at this moment?{' '}
            <button
              onClick={onOpenCallbackModal}
              className="text-blue-700 font-semibold underline underline-offset-2 cursor-pointer"
            >
              Request a scheduled callback
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
