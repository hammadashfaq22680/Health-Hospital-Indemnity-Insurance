/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageView, OperatingHours } from './types';
import { getTrackingPhoneNumber, getOperatingHoursStatus } from './config';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { InfoCards } from './components/InfoCards';
import { HowItWorks } from './components/HowItWorks';
import { IsThisForYou } from './components/IsThisForYou';
import { MidPageCTA } from './components/MidPageCTA';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { StickyBottomBar } from './components/StickyBottomBar';
import { CallbackFormModal } from './components/CallbackFormModal';
import { LegalPages } from './components/LegalPages';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [phoneInfo, setPhoneInfo] = useState(() => getTrackingPhoneNumber());
  const [operatingHours, setOperatingHours] = useState<OperatingHours>(() =>
    getOperatingHoursStatus()
  );
  const [isCallbackModalOpen, setIsCallbackModalOpen] = useState(false);

  // Update operating hours periodically (every minute)
  useEffect(() => {
    const timer = setInterval(() => {
      setOperatingHours(getOperatingHoursStatus());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  // Listen for browser popstate / back button
  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.replace('#', '');
      if (['privacy', 'terms', 'disclaimer', 'contact'].includes(hash)) {
        setCurrentPage(hash as PageView);
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (page: PageView, sectionId?: string) => {
    setCurrentPage(page);

    if (page === 'home') {
      window.history.pushState(null, '', window.location.pathname + (sectionId ? `#${sectionId}` : ''));
      if (sectionId) {
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 80);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      window.history.pushState(null, '', `#${page}`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-100/60 to-slate-50 text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white relative overflow-x-hidden">
      {/* iOS 26 Liquid Glass Ambient Gradient Blobs (Calm, Soft, Heavily Blurred behind Glass) */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        {/* Soft Sky Blue Blob top-left */}
        <div className="absolute -top-32 -left-32 w-[34rem] h-[34rem] rounded-full bg-blue-300/22 blur-[120px] mix-blend-multiply" />
        {/* Soft Cyan/Teal Blob middle-right */}
        <div className="absolute top-[28%] -right-24 w-[32rem] h-[32rem] rounded-full bg-teal-200/20 blur-[130px] mix-blend-multiply" />
        {/* Soft Indigo/Blue Blob lower-left */}
        <div className="absolute top-[58%] -left-20 w-[30rem] h-[30rem] rounded-full bg-indigo-200/18 blur-[120px] mix-blend-multiply" />
        {/* Soft Blue/Teal Blob bottom-right */}
        <div className="absolute bottom-16 -right-16 w-[28rem] h-[28rem] rounded-full bg-sky-200/22 blur-[110px] mix-blend-multiply" />
      </div>

      {/* Main Global Header */}
      <div className="relative z-40">
        <Header
          phoneDisplay={phoneInfo.display}
          phoneTel={phoneInfo.tel}
          operatingHours={operatingHours}
          currentPage={currentPage}
          onNavigate={handleNavigate}
          onOpenCallbackModal={() => setIsCallbackModalOpen(true)}
        />
      </div>

      {/* Page Content */}
      <main className="flex-1 relative z-10">
        {currentPage === 'home' ? (
          <>
            <Hero
              phoneDisplay={phoneInfo.display}
              phoneTel={phoneInfo.tel}
              operatingHours={operatingHours}
              onOpenCallbackModal={() => setIsCallbackModalOpen(true)}
            />

            <InfoCards phoneTel={phoneInfo.tel} />

            <HowItWorks
              phoneDisplay={phoneInfo.display}
              phoneTel={phoneInfo.tel}
            />

            <IsThisForYou
              phoneDisplay={phoneInfo.display}
              phoneTel={phoneInfo.tel}
            />

            <MidPageCTA
              phoneDisplay={phoneInfo.display}
              phoneTel={phoneInfo.tel}
              operatingHours={operatingHours}
              onOpenCallbackModal={() => setIsCallbackModalOpen(true)}
            />

            <FAQSection
              phoneDisplay={phoneInfo.display}
              phoneTel={phoneInfo.tel}
            />

            <FinalCTA
              phoneDisplay={phoneInfo.display}
              phoneTel={phoneInfo.tel}
              operatingHours={operatingHours}
              onOpenCallbackModal={() => setIsCallbackModalOpen(true)}
            />
          </>
        ) : (
          <LegalPages
            currentPage={currentPage}
            onNavigate={handleNavigate}
            phoneDisplay={phoneInfo.display}
            phoneTel={phoneInfo.tel}
          />
        )}
      </main>

      {/* Global Footer with All Disclosures & Sub-page Links */}
      <div className="relative z-10">
        <Footer
          phoneDisplay={phoneInfo.display}
          phoneTel={phoneInfo.tel}
          onNavigate={handleNavigate}
        />
      </div>

      {/* Mobile Sticky Bottom Call Bar (Only shown on home page view) */}
      {currentPage === 'home' && (
        <StickyBottomBar
          phoneDisplay={phoneInfo.display}
          phoneTel={phoneInfo.tel}
          operatingHours={operatingHours}
        />
      )}

      {/* Secondary Callback Request Form Modal */}
      <CallbackFormModal
        isOpen={isCallbackModalOpen}
        onClose={() => setIsCallbackModalOpen(false)}
        phoneDisplay={phoneInfo.display}
        phoneTel={phoneInfo.tel}
      />
    </div>
  );
}
