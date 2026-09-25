import React, { useState } from 'react';
import { Phone, Shield, Menu, X, Clock, HelpCircle, FileText, ChevronRight } from 'lucide-react';
import { PageView } from '../types';
import { OperatingHours } from '../types';

interface HeaderProps {
  phoneDisplay: string;
  phoneTel: string;
  operatingHours: OperatingHours;
  currentPage: PageView;
  onNavigate: (page: PageView, sectionId?: string) => void;
  onOpenCallbackModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  phoneDisplay,
  phoneTel,
  operatingHours,
  currentPage,
  onNavigate,
  onOpenCallbackModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: PageView, sectionId?: string) => {
    setMobileMenuOpen(false);
    onNavigate(page, sectionId);
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-xs">
      {/* Top micro-bar for regulatory clarity and hours */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="font-medium text-slate-200">Independent Consumer Guide</span>
            <span className="hidden sm:inline text-slate-400">|</span>
            <span className="hidden sm:inline text-slate-300">Mon–Fri 9:30 AM–6:30 PM ET, Sat 10 AM–3 PM ET</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <button
              onClick={onOpenCallbackModal}
              className="text-slate-300 hover:text-white underline underline-offset-2 transition-colors cursor-pointer"
            >
              Request Call Back
            </button>
            <span className="text-slate-400">|</span>
            <span className="text-slate-300 font-normal">Toll-Free Assistance</span>
          </div>
        </div>
      </div>

      {/* Main navigation container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg p-1 cursor-pointer"
          aria-label="Health Coverage Guide Home"
        >
          <div className="w-10 h-10 rounded-xl bg-blue-700 text-white flex items-center justify-center shadow-xs">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div>
            <span className="block font-bold text-slate-900 text-lg leading-tight tracking-tight">
              Health Coverage <span className="text-blue-700">Guide</span>
            </span>
            <span className="block text-xs font-medium text-slate-500 tracking-wide uppercase">
              Independent Information
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700" aria-label="Main Navigation">
          <button
            onClick={() => handleNavClick('home', 'coverage-options')}
            className="hover:text-blue-700 transition-colors py-1 cursor-pointer"
          >
            Coverage Options
          </button>
          <button
            onClick={() => handleNavClick('home', 'how-it-works')}
            className="hover:text-blue-700 transition-colors py-1 cursor-pointer"
          >
            How It Works
          </button>
          <button
            onClick={() => handleNavClick('home', 'who-its-for')}
            className="hover:text-blue-700 transition-colors py-1 cursor-pointer"
          >
            Who It&apos;s For
          </button>
          <button
            onClick={() => handleNavClick('home', 'faq')}
            className="hover:text-blue-700 transition-colors py-1 cursor-pointer"
          >
            FAQ
          </button>
          <button
            onClick={() => handleNavClick('disclaimer')}
            className={`transition-colors py-1 cursor-pointer ${
              currentPage === 'disclaimer' ? 'text-blue-700 font-semibold' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Disclosures
          </button>
        </nav>

        {/* Header Call CTA Button (Unified Primary Blue #1d4ed8) */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={phoneTel}
            className="inline-flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 active:bg-blue-900 text-white font-semibold text-sm shadow-xs transition-all duration-150 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600"
            aria-label={`Call licensed representative at ${phoneDisplay}`}
          >
            <Phone className="w-4 h-4 text-white" />
            <div className="text-left leading-tight">
              <span className="block text-[11px] font-normal uppercase tracking-wider text-blue-100">
                Speak With a Representative
              </span>
              <span className="block text-sm font-bold tracking-tight">{phoneDisplay}</span>
            </div>
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <div className="flex items-center gap-2 sm:hidden">
          <a
            href={phoneTel}
            className="p-2.5 rounded-xl bg-blue-700 text-white flex items-center justify-center"
            aria-label="Call Now"
          >
            <Phone className="w-5 h-5 text-white" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600 cursor-pointer"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[96px] bottom-0 bg-white/95 backdrop-blur-md z-50 border-b border-slate-200 overflow-y-auto px-5 py-6">
          <div className="flex flex-col gap-4">
            {/* Primary Mobile Call Card */}
            <div className="bg-slate-900 rounded-2xl p-5 text-white shadow-xs">
              <div className="flex items-center gap-2 text-xs text-blue-300 font-medium mb-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{operatingHours.isOpen ? 'Representatives Available Now' : 'Call Center Hours Mon–Sat'}</span>
              </div>
              <p className="text-sm text-slate-200 mb-3.5">
                Speak directly with an authorized, licensed insurance representative.
              </p>
              <a
                href={phoneTel}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-base shadow-xs"
              >
                <Phone className="w-5 h-5 text-white" />
                <span>Call {phoneDisplay}</span>
              </a>
            </div>

            {/* Navigation links */}
            <div className="space-y-1 pt-2">
              <button
                onClick={() => handleNavClick('home', 'coverage-options')}
                className="w-full flex items-center justify-between py-3 px-3 rounded-lg text-left font-medium text-slate-800 hover:bg-slate-50 text-base"
              >
                <span>Coverage Options</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
              <button
                onClick={() => handleNavClick('home', 'how-it-works')}
                className="w-full flex items-center justify-between py-3 px-3 rounded-lg text-left font-medium text-slate-800 hover:bg-slate-50 text-base"
              >
                <span>How It Works</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
              <button
                onClick={() => handleNavClick('home', 'who-its-for')}
                className="w-full flex items-center justify-between py-3 px-3 rounded-lg text-left font-medium text-slate-800 hover:bg-slate-50 text-base"
              >
                <span>Who It&apos;s For</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
              <button
                onClick={() => handleNavClick('home', 'faq')}
                className="w-full flex items-center justify-between py-3 px-3 rounded-lg text-left font-medium text-slate-800 hover:bg-slate-50 text-base"
              >
                <span>Frequently Asked Questions</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
              <button
                onClick={() => handleNavClick('disclaimer')}
                className="w-full flex items-center justify-between py-3 px-3 rounded-lg text-left font-medium text-slate-800 hover:bg-slate-50 text-base"
              >
                <span>Full Disclosures &amp; Disclaimers</span>
                <FileText className="w-4 h-4 text-slate-400" />
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full flex items-center justify-between py-3 px-3 rounded-lg text-left font-medium text-slate-800 hover:bg-slate-50 text-base"
              >
                <span>Contact &amp; Assistance</span>
                <HelpCircle className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCallbackModal();
                }}
                className="w-full py-2.5 text-center text-sm font-medium text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors cursor-pointer"
              >
                Can&apos;t Call Now? Request a Callback
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
