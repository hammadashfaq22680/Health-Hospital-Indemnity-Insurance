import React from 'react';
import { Shield, Phone, AlertCircle, FileText, Lock, Scale, HelpCircle } from 'lucide-react';
import { PageView } from '../types';
import { MANDATORY_DISCLOSURES } from '../config';

interface FooterProps {
  phoneDisplay: string;
  phoneTel: string;
  onNavigate: (page: PageView) => void;
}

export const Footer: React.FC<FooterProps> = ({
  phoneDisplay,
  phoneTel,
  onNavigate,
}) => {
  return (
    <footer className="bg-slate-900 text-slate-400 text-xs border-t border-slate-800 pt-12 pb-24 sm:pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top Footer: Brand, Phone, Quick Nav */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800">
          {/* Brand Summary */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-700 text-white flex items-center justify-center shadow-xs">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                Health Coverage <span className="text-blue-400">Guide</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              Health Coverage Guide is an independent educational and referral website dedicated to helping consumers learn about supplemental hospital indemnity insurance options and connect directly with licensed insurance professionals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] mb-3">
              Information &amp; Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('privacy')}
                  className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <Lock className="w-3.5 h-3.5 text-slate-500" />
                  <span>Privacy Policy</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('terms')}
                  className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <Scale className="w-3.5 h-3.5 text-slate-500" />
                  <span>Terms &amp; Conditions</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('disclaimer')}
                  className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-slate-500" />
                  <span>Full Disclosures &amp; Disclaimers</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <HelpCircle className="w-3.5 h-3.5 text-slate-500" />
                  <span>Contact &amp; Support</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Phone Assistance */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] mb-3">
              Telephone Assistance
            </h4>
            <div className="space-y-2">
              <a
                href={phoneTel}
                className="inline-flex items-center gap-2 text-white font-bold text-base hover:text-blue-300 transition-colors"
              >
                <Phone className="w-4 h-4 text-blue-400" />
                <span>{phoneDisplay}</span>
              </a>
              <p className="text-[11px] text-slate-400">
                Mon–Fri: 9:30 AM – 6:30 PM ET<br />
                Sat: 10:00 AM – 3:00 PM ET
              </p>
              <p className="text-[11px] text-blue-400 font-medium">
                Toll-free informational consultation
              </p>
            </div>
          </div>
        </div>

        {/* Mandatory Regulatory Disclosures (Strict Compliance) */}
        <div className="py-8 space-y-4 text-[11px] leading-relaxed text-slate-400 border-b border-slate-800">
          <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-300 flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <p>
              <strong className="text-white">Non-Government Entity Notice:</strong> Health Coverage Guide is privately owned and operated. We are NOT affiliated with, endorsed by, or connected to the United States Government, the Department of Health and Human Services (HHS), Healthcare.gov, Medicare, or Medicaid. For official government healthcare information, visit <a href="https://www.healthcare.gov" target="_blank" rel="noopener noreferrer" className="underline text-blue-400">Healthcare.gov</a>.
            </p>
          </div>

          <p>
            <strong className="text-slate-300">Advertising &amp; Relationship Disclosure:</strong> {MANDATORY_DISCLOSURES.relationshipDisclosure}
          </p>

          <p>
            <strong className="text-slate-300">Coverage &amp; Benefit Limitations:</strong> {MANDATORY_DISCLOSURES.heroDisclaimer} Hospital indemnity insurance policies are supplemental and pay fixed cash benefits upon covered hospital confinement. They are not a replacement for major medical health insurance or minimum essential coverage. We do not guarantee approval, specific cash amounts, or acceptance. Policy benefits, exclusions, waiting periods, and limitations vary by state and carrier.
          </p>
        </div>

        {/* Copyright & Bottom Microcopy */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-[11px]">
          <p>© {new Date().getFullYear()} Health Coverage Guide. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <button onClick={() => onNavigate('privacy')} className="hover:text-slate-300 cursor-pointer">
              Privacy Policy
            </button>
            <span>•</span>
            <button onClick={() => onNavigate('terms')} className="hover:text-slate-300 cursor-pointer">
              Terms &amp; Conditions
            </button>
            <span>•</span>
            <button onClick={() => onNavigate('disclaimer')} className="hover:text-slate-300 cursor-pointer">
              Disclaimers
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
