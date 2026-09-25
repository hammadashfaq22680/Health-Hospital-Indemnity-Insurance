import React from 'react';
import { Phone, Clock, ShieldCheck, CheckCircle2, UserCheck, Banknote, Calendar } from 'lucide-react';
import { OperatingHours } from '../types';

interface HeroProps {
  phoneDisplay: string;
  phoneTel: string;
  operatingHours: OperatingHours;
  onOpenCallbackModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  phoneDisplay,
  phoneTel,
  operatingHours,
  onOpenCallbackModal,
}) => {
  return (
    <section className="relative pt-8 pb-14 sm:pt-14 sm:pb-20 border-b border-slate-200/60 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Trust & Non-Government Subtitle Eyebrow Badge (Glass Pill) */}
        <div className="flex items-center justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-blue-700 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-blue-700 shrink-0" />
            <span>Independent Supplemental Insurance Information</span>
          </div>
        </div>

        {/* Hero Main Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.14]">
            Hospital Indemnity <span className="text-blue-700">Insurance</span>
          </h1>

          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
            Understand how supplemental hospital indemnity coverage pays a set cash amount directly to you if you are admitted to a hospital. Learn how cash benefits can help offset deductibles and daily living expenses while recovering.
          </p>
        </div>

        {/* Primary Consolidated Action Panel (Single Clean Liquid Glass Card, 28-32px continuous curve) */}
        <div className="mt-9 max-w-2xl mx-auto glass-panel rounded-[28px] sm:rounded-[32px] p-6 sm:p-9 transition-all duration-300">
          <div className="flex flex-col items-center text-center">
            {/* Live Availability Status Badge */}
            {operatingHours.isOpen ? (
              <div className="flex items-center gap-2 text-xs font-semibold px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-800 border border-emerald-500/20 backdrop-blur-md mb-4 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Agents Available Now</span>
                <span className="text-emerald-400">·</span>
                <span className="font-normal text-emerald-700">Lines Open Today</span>
              </div>
            ) : (
              <button
                onClick={onOpenCallbackModal}
                type="button"
                className="flex items-center gap-2 text-xs font-semibold px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-900 border border-amber-500/25 backdrop-blur-md hover:bg-amber-500/15 transition-all mb-4 cursor-pointer shadow-2xs"
                title="Click to request a scheduled callback"
              >
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                <span>Currently Closed — Request a Call Back</span>
                <span className="text-amber-400">·</span>
                <span className="font-normal text-amber-800">{operatingHours.nextOpenText}</span>
              </button>
            )}

            <p className="text-sm font-semibold text-slate-700 mb-3">
              Speak with a Licensed Insurance Representative:
            </p>

            {/* Large Primary Phone Button (Translucent Blue Glass Pill) */}
            <a
              href={phoneTel}
              id="hero-primary-call-btn"
              className="w-full sm:w-auto glass-btn-primary rounded-full inline-flex items-center justify-center gap-3.5 px-8 py-4 sm:py-4.5 text-white font-extrabold text-xl sm:text-2xl focus:outline-hidden focus-visible:ring-4 focus-visible:ring-blue-300"
              aria-label={`Call licensed representative at ${phoneDisplay}`}
            >
              <div className="p-2.5 rounded-full bg-white/20 border border-white/30 backdrop-blur-xs text-white">
                <Phone className="w-6 h-6" />
              </div>
              <div className="text-left">
                <span className="block text-[10px] font-semibold text-blue-100 uppercase tracking-wider">
                  Toll-Free Phone Assistance
                </span>
                <span className="tracking-tight">{phoneDisplay}</span>
              </div>
            </a>

            {/* Value reassuring points (Clean consolidated layout, no inner divider border) */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-xs text-slate-600 font-medium w-full">
              <div className="flex items-center justify-center gap-1.5">
                <Banknote className="w-4 h-4 text-blue-700 shrink-0" />
                <span>Direct Cash Payouts</span>
              </div>
              <div className="flex items-center justify-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>No Obligation to Enroll</span>
              </div>
              <div className="flex items-center justify-center gap-1.5">
                <UserCheck className="w-4 h-4 text-blue-700 shrink-0" />
                <span>Authorized Licensed Agents</span>
              </div>
            </div>

            {/* Secondary Option: Callback link (Continuous, no inner border) */}
            <div className="mt-4 text-xs text-slate-500 w-full flex items-center justify-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>Prefer to schedule a call?</span>
              <button
                onClick={onOpenCallbackModal}
                className="text-blue-700 font-semibold hover:underline cursor-pointer"
              >
                Request a Call Back
              </button>
            </div>
          </div>
        </div>

        {/* Hero Fine-Print Disclosure (Plain text, no bordered box, lower contrast) */}
        <div className="mt-6 max-w-2xl mx-auto text-center space-y-2">
          <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed max-w-xl mx-auto">
            <strong className="text-slate-600 font-semibold">Important Disclosure:</strong>{' '}
            No cost or obligation to speak with a representative. Hospital indemnity insurance is a supplemental policy that pays fixed cash benefits and is not a replacement for major medical health insurance.
          </p>

          <div className="flex items-center justify-center gap-1.5 text-[11px] sm:text-xs text-slate-400">
            <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span>
              <strong>Representative Hours:</strong> Mon–Fri 9:30 AM–6:30 PM ET · Sat 10:00 AM–3:00 PM ET
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
