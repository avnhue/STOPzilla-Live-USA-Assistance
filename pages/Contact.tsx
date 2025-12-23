
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle, AlertCircle } from 'lucide-react';
import { BRAND_NAME, PHONE_NUMBER, PHONE_TEL, EMAIL_SUPPORT } from '../constants';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Contact {BRAND_NAME}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Get the help you need today. Our USA support team is available via phone and email for all STOPzilla inquiries.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Methods */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-security-green text-white p-3 rounded-2xl"><Phone className="w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold">Phone Support</h4>
                  <p className="text-sm text-gray-500">Immediate live help</p>
                </div>
              </div>
              <a href={PHONE_TEL} className="text-2xl font-bold text-security-dark hover:text-security-green transition-colors">{PHONE_NUMBER}</a>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-blue-500 text-white p-3 rounded-2xl"><Mail className="w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold">Email Us</h4>
                  <p className="text-sm text-gray-500">Expect a reply within 24h</p>
                </div>
              </div>
              <p className="text-lg font-bold text-gray-700">{EMAIL_SUPPORT}</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-purple-500 text-white p-3 rounded-2xl"><MapPin className="w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold">Service Area</h4>
                  <p className="text-sm text-gray-500">Coverage across the US</p>
                </div>
              </div>
              <p className="text-lg font-bold text-gray-700">Serving STOPzilla users across all 50 USA States.</p>
            </div>

            <div className="bg-orange-50 p-8 rounded-3xl border border-orange-100 flex items-start space-x-4">
              <AlertCircle className="w-8 h-8 text-orange-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-orange-800">Urgent Issues?</h4>
                <p className="text-sm text-orange-700 leading-relaxed">If you have a critical security threat or your PC is locked, please <strong>call us immediately</strong> rather than waiting for an email response.</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-xl border border-gray-100 relative overflow-hidden">
               {submitted ? (
                 <div className="text-center py-20 animate-fade-in">
                   <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                     <Send className="w-12 h-12 text-security-green" />
                   </div>
                   <h2 className="text-3xl font-bold mb-4">Message Received!</h2>
                   <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">Thank you. Your STOPzilla support request has been received. Our team will contact you shortly.</p>
                   <button 
                    onClick={() => setSubmitted(false)}
                    className="text-security-green font-bold hover:underline"
                   >
                     Send another message
                   </button>
                 </div>
               ) : (
                 <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                   <h2 className="text-3xl font-bold mb-8">Send us a message</h2>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                       <label className="text-sm font-bold text-gray-700">Full Name</label>
                       <input 
                         type="text" 
                         required
                         placeholder="John Doe"
                         className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-3 focus:outline-none focus:border-security-green"
                       />
                     </div>
                     <div className="space-y-2">
                       <label className="text-sm font-bold text-gray-700">Email Address</label>
                       <input 
                         type="email" 
                         required
                         placeholder="john@example.com"
                         className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-3 focus:outline-none focus:border-security-green"
                       />
                     </div>
                   </div>
                   <div className="space-y-2">
                     <label className="text-sm font-bold text-gray-700">Issue Type</label>
                     <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-3 focus:outline-none focus:border-security-green appearance-none">
                       <option>Installation & Setup</option>
                       <option>Login & Account Recovery</option>
                       <option>Billing & Cancellation</option>
                       <option>Malware Removal</option>
                       <option>Other STOPzilla Problems</option>
                     </select>
                   </div>
                   <div className="space-y-2">
                     <label className="text-sm font-bold text-gray-700">How can we help?</label>
                     <textarea 
                       rows={5}
                       required
                       placeholder="Please describe your issue..."
                       className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-3 focus:outline-none focus:border-security-green"
                     ></textarea>
                   </div>
                   <button 
                     type="submit" 
                     className="w-full bg-security-green hover:bg-green-600 text-white font-bold py-5 rounded-2xl text-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-3"
                   >
                     <MessageCircle className="w-6 h-6" />
                     <span>Send Request</span>
                   </button>
                 </form>
               )}
               {/* Decorative background element */}
               <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-gray-50 rounded-full z-0 opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
