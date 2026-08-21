import React, { useState } from 'react';
import { X, Phone, CheckCircle2, Shield, AlertCircle } from 'lucide-react';
import { CallbackRequest } from '../types';
import { MANDATORY_DISCLOSURES } from '../config';

interface CallbackFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  phoneDisplay: string;
  phoneTel: string;
}

export const CallbackFormModal: React.FC<CallbackFormModalProps> = ({
  isOpen,
  onClose,
  phoneDisplay,
  phoneTel,
}) => {
  const [formData, setFormData] = useState<CallbackRequest>({
    fullName: '',
    phoneNumber: '',
    zipCode: '',
    preferredTime: 'Morning (9:30 AM - 12:00 PM ET)',
    tcpaConsent: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }
    const cleanPhone = formData.phoneNumber.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      newErrors.phoneNumber = 'Please enter a valid 10-digit phone number.';
    }
    if (!formData.zipCode.trim() || !/^\d{5}$/.test(formData.zipCode.trim())) {
      newErrors.zipCode = 'Please enter a 5-digit ZIP code.';
    }
    if (!formData.tcpaConsent) {
      newErrors.tcpaConsent = 'TCPA consent is required to request a phone callback.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, '').slice(0, 10);
    let formatted = digits;
    if (digits.length > 6) {
      formatted = `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
    } else if (digits.length > 3) {
      formatted = `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    }
    setFormData({ ...formData, phoneNumber: formatted });
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="callback-modal-title"
    >
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden transform transition-all my-auto max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="bg-slate-900 text-white p-4 sm:p-6 flex items-start justify-between shrink-0">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-300">
              Secondary Option
            </span>
            <h3 id="callback-modal-title" className="text-lg sm:text-xl font-bold text-white mt-0.5">
              Request a Scheduled Callback
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Need immediate answers? Call <a href={phoneTel} className="underline text-teal-200 font-bold">{phoneDisplay}</a> directly.
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors cursor-pointer shrink-0 ml-2"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">Callback Request Received</h4>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Thank you, {formData.fullName}. A licensed insurance representative will attempt to reach you at <strong>{formData.phoneNumber}</strong> during regular business hours.
              </p>

              {/* Direct call prompt for faster service */}
              <div className="mt-6 p-4 rounded-xl bg-blue-50 border border-blue-200 text-left">
                <div className="flex items-center gap-2 text-xs font-bold text-blue-900 mb-1">
                  <Phone className="w-4 h-4 text-blue-700" />
                  <span>Don&apos;t wait for a callback:</span>
                </div>
                <p className="text-xs text-slate-600 mb-3">
                  Representative lines are currently open. You can call directly to speak with an agent right now.
                </p>
                <a
                  href={phoneTel}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 text-teal-300" />
                  <span>Call {phoneDisplay} Now</span>
                </a>
              </div>

              <div className="mt-6">
                <button
                  onClick={onClose}
                  className="px-5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Jane Doe"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className={`w-full px-3.5 py-2 text-sm bg-white border rounded-lg focus:outline-hidden focus:ring-1 ${
                    errors.fullName
                      ? 'border-red-400 focus:ring-red-400'
                      : 'border-slate-300 focus:border-blue-600 focus:ring-blue-600'
                  }`}
                />
                {errors.fullName && <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="(555) 000-0000"
                    value={formData.phoneNumber}
                    onChange={handlePhoneChange}
                    className={`w-full px-3.5 py-2 text-sm bg-white border rounded-lg focus:outline-hidden focus:ring-1 ${
                      errors.phoneNumber
                        ? 'border-red-400 focus:ring-red-400'
                        : 'border-slate-300 focus:border-blue-600 focus:ring-blue-600'
                    }`}
                  />
                  {errors.phoneNumber && (
                    <p className="mt-1 text-xs text-red-600">{errors.phoneNumber}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    ZIP Code <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    maxLength={5}
                    placeholder="e.g. 90210"
                    value={formData.zipCode}
                    onChange={(e) =>
                      setFormData({ ...formData, zipCode: e.target.value.replace(/\D/g, '') })
                    }
                    className={`w-full px-3.5 py-2 text-sm bg-white border rounded-lg focus:outline-hidden focus:ring-1 ${
                      errors.zipCode
                        ? 'border-red-400 focus:ring-red-400'
                        : 'border-slate-300 focus:border-blue-600 focus:ring-blue-600'
                    }`}
                  />
                  {errors.zipCode && <p className="mt-1 text-xs text-red-600">{errors.zipCode}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Preferred Time Window
                </label>
                <select
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600 text-slate-700"
                >
                  <option value="Morning (9:30 AM - 12:00 PM ET)">Morning (9:30 AM - 12:00 PM ET)</option>
                  <option value="Afternoon (12:00 PM - 4:00 PM ET)">Afternoon (12:00 PM - 4:00 PM ET)</option>
                  <option value="Evening (4:00 PM - 6:30 PM ET)">Evening (4:00 PM - 6:30 PM ET)</option>
                  <option value="Saturday (10:00 AM - 3:00 PM ET)">Saturday (10:00 AM - 3:00 PM ET)</option>
                </select>
              </div>

              {/* Explicit TCPA Consent Checkbox (Strict Compliance) */}
              <div className="pt-2">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.tcpaConsent}
                    onChange={(e) => setFormData({ ...formData, tcpaConsent: e.target.checked })}
                    className="mt-1 h-4 w-4 rounded-sm border-slate-300 text-blue-600 focus:ring-blue-500 shrink-0"
                  />
                  <span className="text-[11px] text-slate-500 leading-relaxed">
                    <strong className="text-slate-700">TCPA Authorization &amp; Consent:</strong>{' '}
                    {MANDATORY_DISCLOSURES.tcpaText}
                  </span>
                </label>
                {errors.tcpaConsent && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.tcpaConsent}</span>
                  </p>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm rounded-lg transition-colors cursor-pointer"
                >
                  Submit Callback Request
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-sm rounded-lg transition-colors cursor-pointer"
                >
                  Cancel
                </button>
              </div>

              {/* Reminder to call */}
              <p className="text-[11px] text-center text-slate-500 pt-1">
                For immediate support, call <a href={phoneTel} className="font-bold text-blue-700 underline">{phoneDisplay}</a> directly.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
