import React from 'react';
import { Phone } from 'lucide-react';
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
    <div className="fixed bottom-14 inset-x-3 z-40 sm:hidden max-w-md mx-auto">
      <div className="glass-panel rounded-full p-2.5 px-4 shadow-[0_12px_36px_rgba(15,23,42,0.18)] flex items-center justify-between gap-3">
        {/* Availability status micro info */}
        <div className="flex flex-col text-left pl-1">
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-800">
            <span
              className={`w-2 h-2 rounded-full ${
                operatingHours.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'
              }`}
            ></span>
            <span>{operatingHours.isOpen ? 'Agents Ready' : 'Lines Open in ET'}</span>
          </div>
          <span className="text-[10px] text-slate-500 font-medium">Direct · No Obligation</span>
        </div>

        {/* Primary Call Action Button (Translucent Blue Glass Pill) */}
        <a
          href={phoneTel}
          id="mobile-sticky-call-btn"
          className="flex-1 glass-btn-primary rounded-full inline-flex items-center justify-center gap-2 py-3 px-4 text-white font-extrabold text-sm focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600"
          aria-label={`Call licensed representative at ${phoneDisplay}`}
        >
          <Phone className="w-4 h-4 text-white" />
          <span>Call {phoneDisplay}</span>
        </a>
      </div>
    </div>
  );
};
