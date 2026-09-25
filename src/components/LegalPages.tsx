import React, { useState } from 'react';
import { Shield, ArrowLeft, Phone, Mail, MapPin, Clock, FileText, CheckCircle2, AlertCircle } from 'lucide-react';
import { PageView } from '../types';
import { MANDATORY_DISCLOSURES } from '../config';

interface LegalPagesProps {
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
  phoneDisplay: string;
  phoneTel: string;
}

export const LegalPages: React.FC<LegalPagesProps> = ({
  currentPage,
  onNavigate,
  phoneDisplay,
  phoneTel,
}) => {
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', subject: 'General Inquiry', message: '' });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contactForm.name && contactForm.email && contactForm.message) {
      setContactSubmitted(true);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Back navigation button */}
        <div className="mb-6">
          <button
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900 bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-2xs transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home Overview</span>
          </button>
        </div>

        {/* Tab switcher */}
        <div className="flex flex-wrap gap-2 mb-8 bg-white p-1.5 rounded-xl border border-slate-200 shadow-2xs">
          <button
            onClick={() => onNavigate('privacy')}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-colors cursor-pointer ${
              currentPage === 'privacy'
                ? 'bg-blue-700 text-white'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            Privacy Policy
          </button>
          <button
            onClick={() => onNavigate('terms')}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-colors cursor-pointer ${
              currentPage === 'terms'
                ? 'bg-blue-700 text-white'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            Terms &amp; Conditions
          </button>
          <button
            onClick={() => onNavigate('disclaimer')}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-colors cursor-pointer ${
              currentPage === 'disclaimer'
                ? 'bg-blue-700 text-white'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            Disclosures &amp; Disclaimers
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-colors cursor-pointer ${
              currentPage === 'contact'
                ? 'bg-blue-700 text-white'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            Contact &amp; Support
          </button>
        </div>

        {/* Page Container */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs">
          {/* ================= PRIVACY POLICY ================= */}
          {currentPage === 'privacy' && (
            <div className="space-y-6 text-slate-700 text-sm leading-relaxed">
              <div className="border-b border-slate-200 pb-5">
                <span className="text-xs font-bold uppercase text-blue-700 tracking-wider">Legal Document</span>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">Privacy Policy</h1>
                <p className="text-xs text-slate-500 mt-1">Last Updated: August 2026</p>
              </div>

              <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100 text-xs text-blue-900 leading-relaxed">
                <strong>Summary:</strong> Health Coverage Guide (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy. This policy explains how we handle consumer information when you visit our website or connect with our licensed insurance agency partners.
              </div>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-slate-900">1. Information We Collect</h2>
                <p>We may collect information directly from you and automatically through your use of our website:</p>
                <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                  <li><strong>Voluntary Form Information:</strong> If you submit a callback request or contact inquiry, we collect your name, telephone number, ZIP code, and preferred contact time.</li>
                  <li><strong>Telephone Call Metadata:</strong> When you dial our toll-free phone number, our call-routing partners record standard telephony metadata, including the calling phone number, call duration, timestamp, and routing destination.</li>
                  <li><strong>Device and Technical Data:</strong> IP address, browser type, operating system, referring URLs, campaign identifiers (UTM parameters), and general geographic location based on IP.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-slate-900">2. How We Use Information</h2>
                <p>Collected information is used strictly to:</p>
                <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                  <li>Connect you with licensed insurance agents and marketing partners who can discuss health coverage options.</li>
                  <li>Verify compliance with TCPA and telemarketing regulations.</li>
                  <li>Measure campaign effectiveness and optimize web accessibility.</li>
                  <li>Maintain site security and prevent fraudulent inquiries.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-slate-900">3. Information Sharing &amp; Third Parties</h2>
                <p>
                  We are a referral service and share consumer inquiries with authorized third-party insurance agencies, carriers, and marketing partners. We do not sell personal data to unrelated marketing databases for non-insurance purposes.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-slate-900">4. California Privacy Rights (CCPA/CPRA)</h2>
                <p>
                  California residents have specific rights regarding their personal information, including the right to request disclosure of categories of personal information collected, request deletion, and opt-out of data sharing. To exercise these rights, email privacy@healthcoverageguide.example.com.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-slate-900">5. Children&apos;s Privacy</h2>
                <p>
                  Our website is intended for adults aged 18 and older. We do not knowingly collect personal data from individuals under 18 years of age.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-slate-900">6. Security Measures</h2>
                <p>
                  We implement industry-standard administrative, physical, and technical safeguards designed to protect personal data from unauthorized access or disclosure.
                </p>
              </section>
            </div>
          )}

          {/* ================= TERMS & CONDITIONS ================= */}
          {currentPage === 'terms' && (
            <div className="space-y-6 text-slate-700 text-sm leading-relaxed">
              <div className="border-b border-slate-200 pb-5">
                <span className="text-xs font-bold uppercase text-blue-700 tracking-wider">Terms of Service</span>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">Terms &amp; Conditions</h1>
                <p className="text-xs text-slate-500 mt-1">Last Updated: August 2026</p>
              </div>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-slate-900">1. Acceptance of Terms</h2>
                <p>
                  By accessing or using Health Coverage Guide (&quot;Site&quot;), or placing a telephone call to our published telephone numbers, you agree to be bound by these Terms &amp; Conditions and our Privacy Policy.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-slate-900">2. Educational &amp; Referral Nature of Service</h2>
                <p>
                  Health Coverage Guide is not an insurance company, health plan provider, or insurance brokerage. We do not underwrite insurance policies, process insurance claims, or make underwriting decisions. All insurance products discussed via our phone lines are offered by independent, third-party licensed insurance representatives.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-slate-900">3. No Guarantee of Eligibility or Rates</h2>
                <p>
                  Information on this website is for general educational purposes only. We make no representations or guarantees regarding individual eligibility, plan availability, pricing, or premium savings. All rates and terms are subject to carrier underwriting and state guidelines.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-slate-900">4. TCPA Consent and Telephonic Communications</h2>
                <p>
                  By submitting your telephone number on any form or calling our number, you agree that you are initiating an inquiry and consent to receive communications (including voice calls and SMS text messages) from us and our licensed partners regarding health coverage options.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-slate-900">5. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by applicable law, Health Coverage Guide and its affiliates shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use of this website or communications with third-party insurance representatives.
                </p>
              </section>
            </div>
          )}

          {/* ================= DISCLAIMERS & DISCLOSURES ================= */}
          {currentPage === 'disclaimer' && (
            <div className="space-y-6 text-slate-700 text-sm leading-relaxed">
              <div className="border-b border-slate-200 pb-5">
                <span className="text-xs font-bold uppercase text-blue-700 tracking-wider">Regulatory Compliance</span>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                  Disclosures &amp; Disclaimers
                </h1>
                <p className="text-xs text-slate-500 mt-1">Transparency &amp; Advertising Disclosures</p>
              </div>

              {/* Prominent Non-Government Box */}
              <div className="p-5 rounded-xl bg-amber-50 border border-amber-300/80 text-amber-950 text-xs sm:text-sm space-y-2">
                <div className="flex items-center gap-2 font-bold text-amber-900 text-sm">
                  <AlertCircle className="w-5 h-5 text-amber-700 shrink-0" />
                  <span>Important Non-Government Affiliation Statement</span>
                </div>
                <p className="leading-relaxed">
                  Health Coverage Guide is a privately owned and operated independent informational website. We are <strong>NOT</strong> owned, operated, endorsed by, or affiliated with the U.S. Federal Government, the Department of Health and Human Services (HHS), the federal Health Insurance Marketplace (Healthcare.gov), state health benefit exchanges, Medicare, or Medicaid.
                </p>
                <p className="text-xs text-amber-800">
                  For official government healthcare marketplace assistance, please visit <a href="https://www.healthcare.gov" target="_blank" rel="noopener noreferrer" className="underline font-bold">Healthcare.gov</a> or call 1-800-318-2596 (TTY: 1-855-889-4325).
                </p>
              </div>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-slate-900">Advertising &amp; Compensation Disclosure</h2>
                <p>
                  {MANDATORY_DISCLOSURES.relationshipDisclosure}
                </p>
                <p>
                  Calling our toll-free phone number connects you with a licensed insurance agent or third-party marketing partner. We receive compensation when consumers make telephone calls or enroll through these partner connections. This compensation does not increase the premium or cost of any insurance policy you may choose to purchase.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-slate-900">Coverage Availability &amp; Plan Limitations</h2>
                <p>
                  Health insurance plans, benefits, riders, and carrier participation vary widely based on your state of residence, county, ZIP code, age, and individual qualifications. Not all plans or coverage types are available in all geographic areas. We do not offer every plan available in your area. Any information we provide is limited to those plans we or our partner agents represent in your area.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-slate-900">Licensing &amp; Agent Responsibility</h2>
                <p>
                  All discussions concerning specific plan benefits, deductibles, copayments, exclusions, and enrollment are conducted exclusively by licensed insurance agents authorized by the respective insurance carriers and state departments of insurance.
                </p>
              </section>
            </div>
          )}

          {/* ================= CONTACT & SUPPORT ================= */}
          {currentPage === 'contact' && (
            <div className="space-y-6 text-slate-700 text-sm leading-relaxed">
              <div className="border-b border-slate-200 pb-5">
                <span className="text-xs font-bold uppercase text-blue-700 tracking-wider">Customer Inquiries</span>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">Contact &amp; Assistance</h1>
                <p className="text-xs text-slate-500 mt-1">We are here to answer your questions regarding our informational website.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Contact details */}
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-4">
                  <h2 className="text-base font-bold text-slate-900">Direct Contact Information</h2>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-slate-500">Toll-Free Phone Line</span>
                      <a href={phoneTel} className="text-base font-bold text-blue-700 hover:underline">
                        {phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-200 text-slate-700 flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-slate-500">Representative Hours</span>
                      <span className="text-xs text-slate-700 block">Mon–Fri: 9:30 AM – 6:30 PM ET</span>
                      <span className="text-xs text-slate-700 block">Sat: 10:00 AM – 3:00 PM ET</span>
                      <span className="text-xs text-slate-500 block">Sunday: Closed</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-200 text-slate-700 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-slate-500">Compliance &amp; Inquiries Email</span>
                      <span className="text-xs text-slate-700">support@healthcoverageguide.example.com</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-200 text-slate-700 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-slate-500">Mailing Address</span>
                      <span className="text-xs text-slate-700 block">Health Coverage Guide Services</span>
                      <span className="text-xs text-slate-700 block">100 Enterprise Way, Suite 400</span>
                      <span className="text-xs text-slate-700 block">Wilmington, DE 19801</span>
                    </div>
                  </div>
                </div>

                {/* Email Form */}
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <h2 className="text-base font-bold text-slate-900 mb-3">Send a Message</h2>
                  {contactSubmitted ? (
                    <div className="text-center py-6">
                      <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
                      <h4 className="font-bold text-slate-900">Message Received</h4>
                      <p className="text-xs text-slate-600 mt-1">
                        Thank you for contacting us. We will review your inquiry within 1-2 business days.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleContactSubmit} className="space-y-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Your Name</label>
                        <input
                          type="text"
                          required
                          value={contactForm.name}
                          onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                          className="w-full px-3 py-1.5 text-xs bg-white border border-slate-300 rounded-md focus:outline-hidden focus:border-blue-600"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Your Email</label>
                        <input
                          type="email"
                          required
                          value={contactForm.email}
                          onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                          className="w-full px-3 py-1.5 text-xs bg-white border border-slate-300 rounded-md focus:outline-hidden focus:border-blue-600"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Message</label>
                        <textarea
                          rows={3}
                          required
                          value={contactForm.message}
                          onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                          placeholder="How can we assist you?"
                          className="w-full px-3 py-1.5 text-xs bg-white border border-slate-300 rounded-md focus:outline-hidden focus:border-blue-600"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-md transition-colors cursor-pointer"
                      >
                        Submit Inquiry
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
