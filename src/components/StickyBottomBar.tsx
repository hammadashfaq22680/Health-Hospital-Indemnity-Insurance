import React from 'react';
import { Phone, Clock } from 'lucide-react';
import { OperatingHours } from '../types';

interface StickyBottomBarProps {
  phoneDisplay: string;
  phoneTel: string;
  operatingHours: OperatingHours;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({
  phoneDisplay,
  phoneTel,
  operatingHours,
}) => {
  return (
    <div className="fixed bottom-16 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-b border-slate-200 p-3 shadow-xl sm:hidden">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        {/* Availability status micro info */}
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-800">
            <span
              className={`w-2 h-2 rounded-full ${
                operatingHours.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'
              }`}
            ></span>
            <span>{operatingHours.isOpen ? 'Agents Available' : 'Lines Open in ET'}</span>
          </div>
          <span className="text-[10px] text-slate-500 font-medium">Direct Call · No Obligation</span>
        </div>

        {/* Primary Call Action Button */}
        <a
          href={phoneTel}
          id="mobile-sticky-call-btn"
          className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-700 active:bg-blue-900 text-white font-bold text-base shadow-md focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600"
          aria-label={`Call licensed representative at ${phoneDisplay}`}
        >
          <Phone className="w-4 h-4 text-teal-300 animate-pulse" />
          <span>Call {phoneDisplay}</span>
        </a>
      </div>
    </div>
  );
};
