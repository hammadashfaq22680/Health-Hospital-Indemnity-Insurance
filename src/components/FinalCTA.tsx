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
    <section className="py-16 sm:py-24 relative border-t border-slate-200/60 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Elevated Liquid Glass Panel */}
        <div className="glass-panel rounded-[32px] p-8 sm:p-12 transition-all duration-300">
          {/* Unified Eyebrow */}
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full glass-pill text-blue-700 text-xs font-bold uppercase tracking-wider mb-5">
            <ShieldCheck className="w-4 h-4 text-blue-700" />
            <span>Independent &amp; No-Obligation Assistance</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight max-w-2xl mx-auto leading-tight">
            Ready to Explore Hospital Indemnity Cash Protection?
          </h2>

          <p className="mt-4 text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Speak with a licensed representative who can explain daily hospital admission benefit schedules, ICU coverage riders, and carrier availability in your state.
          </p>

          {/* Big Call Button Card (Translucent Blue Glass Pill) */}
          <div className="mt-8 max-w-md mx-auto">
            <a
              href={phoneTel}
              id="footer-primary-call-btn"
              className="w-full glass-btn-primary rounded-full inline-flex items-center justify-center gap-3.5 px-7 py-4 sm:py-4.5 text-white font-extrabold text-xl sm:text-2xl focus:outline-hidden focus-visible:ring-4 focus-visible:ring-blue-300"
              aria-label={`Call toll-free representative at ${phoneDisplay}`}
            >
              <div className="p-2.5 rounded-full bg-white/20 border border-white/30 backdrop-blur-xs text-white">
                <Phone className="w-6 h-6" />
              </div>
              <div className="text-left leading-tight">
                <span className="block text-[10px] font-semibold uppercase tracking-wider text-blue-100">
                  Toll-Free Phone Consultation
                </span>
                <span className="tracking-tight">{phoneDisplay}</span>
              </div>
            </a>

            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500 font-medium">
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
      </div>
    </section>
  );
};
