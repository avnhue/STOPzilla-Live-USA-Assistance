
import React from 'react';
import { Phone, CheckCircle, Monitor, ShieldCheck, CreditCard, RefreshCw, Key, Trash2 } from 'lucide-react';
import { PHONE_NUMBER, PHONE_TEL } from '../constants';

const Services: React.FC = () => {
  const serviceItems = [
    {
      title: 'Installation & First-Time Setup',
      desc: 'Let our technicians guide you through a clean installation of STOPzilla on your Windows PC to ensure maximum protection from day one.',
      icon: <Monitor className="w-10 h-10 text-blue-500" />
    },
    {
      title: 'Uninstallation & Clean Reinstall',
      desc: 'If your software is corrupted, we provide complete removal services and a fresh reinstall to get your system back to normal.',
      icon: <Trash2 className="w-10 h-10 text-red-500" />
    },
    {
      title: 'Reactivation & License Keys',
      desc: 'Struggling with a license key that won’t validate? We help verify your subscription status and activate your security software properly.',
      icon: <Key className="w-10 h-10 text-yellow-500" />
    },
    {
      title: 'Bug Fixes & Error Removal',
      desc: 'We troubleshoot application crashes, freezing, and error messages that prevent STOPzilla from protecting your machine.',
      icon: <ShieldCheck className="w-10 h-10 text-security-green" />
    },
    {
      title: 'Billing & Payment Assistance',
      desc: 'Resolve issues with expired credit cards, declined payments, double charges, and other subscription-related billing queries.',
      icon: <CreditCard className="w-10 h-10 text-emerald-500" />
    },
    {
      title: 'Renewal & Plan Changes',
      desc: 'Want to upgrade your protection or change your renewal settings? Our USA team provides clear guidance on all plan options.',
      icon: <RefreshCw className="w-10 h-10 text-orange-500" />
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-security-dark">STOPzilla Support Services</h1>
          <p className="text-xl text-gray-600">Comprehensive technical and billing assistance for STOPzilla users across the USA. If it’s STOPzilla related, we can help.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {serviceItems.map((service, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-2xl transition-all border border-transparent hover:border-security-green">
              <div className="bg-gray-50 w-20 h-20 rounded-2xl flex items-center justify-center mb-8">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">{service.desc}</p>
              <div className="mt-auto">
                <a 
                  href={PHONE_TEL} 
                  className="inline-flex items-center text-security-green font-bold hover:underline"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Support: {PHONE_NUMBER}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 bg-security-dark rounded-[40px] p-12 text-white flex flex-col md:flex-row items-center justify-between shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-security-green opacity-10 rounded-full -mr-32 -mt-32"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Don’t see your issue listed?</h2>
            <p className="text-gray-400 text-lg">We handle hundreds of unique STOPzilla problems every day. Give us a call for custom assistance.</p>
          </div>
          <div className="relative z-10 mt-8 md:mt-0">
            <a href={PHONE_TEL} className="bg-security-green hover:bg-green-600 text-white px-10 py-5 rounded-2xl text-2xl font-bold transition-all transform hover:scale-105 inline-block">
              {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
