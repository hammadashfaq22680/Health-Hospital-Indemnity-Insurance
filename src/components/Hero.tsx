import React from 'react';
import { Phone, Clock, ShieldCheck, CheckCircle2, UserCheck, Banknote, Calendar } from 'lucide-react';
import { OperatingHours } from '../types';
import { MANDATORY_DISCLOSURES } from '../config';

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
    <section className="relative bg-gradient-to-b from-white via-slate-50 to-slate-100/70 pt-8 pb-14 sm:pt-12 sm:pb-20 border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Trust & Non-Government Subtitle Badge */}
        <div className="flex items-center justify-center mb-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-900 text-xs font-semibold tracking-wide">
            <ShieldCheck className="w-4 h-4 text-blue-700" />
            <span>Independent Supplemental Insurance Information</span>
          </div>
        </div>

        {/* Hero Main Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.18] font-sans">
            Hospital Indemnity <span className="text-blue-700">Insurance</span>
          </h1>

          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Understand how supplemental hospital indemnity coverage pays a set cash amount directly to you if you are admitted to a hospital. Learn how cash benefits can help offset deductibles and daily living expenses while recovering.
          </p>
        </div>

        {/* Primary Call Action Box */}
        <div className="mt-8 max-w-2xl mx-auto bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-lg shadow-slate-200/50">
          <div className="flex flex-col items-center text-center">
            {/* Live Availability Status Badge (Strictly Dynamic) */}
            {operatingHours.isOpen ? (
              <div className="flex items-center gap-2 text-xs font-semibold px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Agents Available Now</span>
                <span className="text-emerald-400">·</span>
                <span className="font-normal text-emerald-700">Lines Open Today</span>
              </div>
            ) : (
              <button
                onClick={onOpenCallbackModal}
                type="button"
                className="flex items-center gap-2 text-xs font-semibold px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200 hover:bg-amber-100 transition-colors mb-4 cursor-pointer"
                title="Click to request a scheduled callback"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                <span>Currently Closed — Request a Call Back</span>
                <span className="text-amber-400">·</span>
                <span className="font-normal text-amber-800">{operatingHours.nextOpenText}</span>
              </button>
            )}

            <p className="text-sm font-semibold text-slate-700 mb-1">
              Speak with a Licensed Insurance Representative:
            </p>

            {/* Large Primary Phone Button */}
            <a
              href={phoneTel}
              id="hero-primary-call-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-blue-700 hover:bg-blue-800 active:bg-blue-900 text-white font-bold text-xl sm:text-2xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 focus:outline-hidden focus-visible:ring-4 focus-visible:ring-blue-300"
              aria-label={`Call licensed representative at ${phoneDisplay}`}
            >
              <div className="p-2 rounded-lg bg-blue-800/80 text-teal-300">
                <Phone className="w-6 h-6" />
              </div>
              <div className="text-left">
                <span className="block text-[11px] font-medium text-blue-200 uppercase tracking-wider">
                  Toll-Free Phone Assistance
                </span>
                <span className="tracking-tight">{phoneDisplay}</span>
              </div>
            </a>

            {/* Value reassuring points */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 text-xs text-slate-600 font-medium w-full pt-3 border-t border-slate-100">
              <div className="flex items-center justify-center gap-1.5">
                <Banknote className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                <span>Direct Cash Payouts</span>
              </div>
              <div className="flex items-center justify-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                <span>No Obligation to Enroll</span>
              </div>
              <div className="flex items-center justify-center gap-1.5">
                <UserCheck className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                <span>Authorized Licensed Agents</span>
              </div>
            </div>

            {/* Secondary Option: Callback link */}
            <div className="mt-5 text-xs text-slate-500 pt-3 border-t border-slate-100 w-full flex items-center justify-center gap-1.5">
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

        {/* Mandatory Hero Disclosure Area (SINGLE designated location for no-cost claim) */}
        <div className="mt-6 max-w-2xl mx-auto text-center space-y-2">
          <p className="text-xs text-slate-600 font-medium leading-relaxed bg-white/70 p-3 rounded-xl border border-slate-200/60 shadow-2xs">
            <strong className="text-slate-800">Important Disclosure:</strong>{' '}
            No cost or obligation to speak with a representative. Hospital indemnity insurance is a supplemental policy that pays fixed cash benefits and is not a replacement for major medical health insurance.
          </p>

          <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>
              <strong>Representative Hours:</strong> Mon–Fri 9:30 AM–6:30 PM ET · Sat 10:00 AM–3:00 PM ET
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
