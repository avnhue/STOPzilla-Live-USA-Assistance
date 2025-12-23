
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle, ShieldAlert, XCircle, Key, CreditCard, User, RotateCcw, AlertTriangle } from 'lucide-react';
import { BRAND_NAME, PHONE_NUMBER, PHONE_TEL, IMAGES } from '../constants';

const Home: React.FC = () => {
  const commonIssues = [
    { title: 'Installation & Setup', icon: <CheckCircle className="text-green-500" />, desc: 'Troubleshooting installation errors and setup failures for your device.' },
    { title: 'Removal Problems', icon: <XCircle className="text-red-500" />, desc: 'Expert help with incomplete uninstallation or forced removal of software.' },
    { title: 'License Activation', icon: <Key className="text-yellow-500" />, desc: 'Solving reactivation errors or cases where the license key is not accepted.' },
    { title: 'App Performance', icon: <ShieldAlert className="text-blue-500" />, desc: 'Fixing STOPzilla crashing, freezing, or failing to open correctly.' },
    { title: 'Billing & Payments', icon: <CreditCard className="text-emerald-500" />, desc: 'Help with expired cards, declined payments, or billing inquiries.' },
    { title: 'Account Access', icon: <User className="text-purple-500" />, desc: 'Recovery assistance for login issues and account management.' },
    { title: 'Renewals & Plans', icon: <RotateCcw className="text-orange-500" />, desc: 'Clarifying cancellation procedures and subscription renewal questions.' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        {/* Actual Image Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.hero} 
            alt="STOPzilla support agents providing live USA assistance by phone" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              {BRAND_NAME}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed">
              Facing installation, reactivation, login, or renewal problems? Get instant, professional STOPzilla help across the USA.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <a 
                href={PHONE_TEL} 
                className="bg-security-green hover:bg-green-600 text-white text-xl font-bold px-8 py-4 rounded-lg flex items-center justify-center space-x-3 transition-transform hover:scale-105"
              >
                <Phone className="w-6 h-6" />
                <span>Call Now {PHONE_NUMBER}</span>
              </a>
              <Link 
                to="/services-stopzilla-tech-assistance" 
                className="bg-white hover:bg-gray-100 text-gray-900 text-xl font-bold px-8 py-4 rounded-lg text-center transition-transform hover:scale-105"
              >
                View STOPzilla Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white border-b border-gray-100 py-10 shadow-sm relative z-20 -mt-10 mx-4 rounded-xl max-w-6xl md:mx-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4 border-r border-gray-100 last:border-0 justify-center">
              <ShieldAlert className="w-10 h-10 text-security-green" />
              <div>
                <h4 className="font-bold">USA Service Area</h4>
                <p className="text-sm text-gray-500">Serving STOPzilla users nationwide</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 border-r border-gray-100 last:border-0 justify-center">
              <AlertTriangle className="w-10 h-10 text-red-500" />
              <div>
                <h4 className="font-bold">Live Support</h4>
                <p className="text-sm text-gray-500">Step-by-step troubleshooting calls</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 border-r border-gray-100 last:border-0 justify-center">
              <CheckCircle className="w-10 h-10 text-blue-500" />
              <div>
                <h4 className="font-bold">Secure Guidance</h4>
                <p className="text-sm text-gray-500">Spyware & malware removal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Issues Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-security-dark">Common STOPzilla Issues We Fix</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our specialized USA technicians are trained to handle a wide variety of STOPzilla antivirus and antispyware challenges.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commonIssues.map((issue, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow group">
                <div className="mb-6 p-4 bg-gray-50 inline-block rounded-xl group-hover:bg-security-green group-hover:text-white transition-colors">
                  {React.cloneElement(issue.icon as React.ReactElement, { className: 'w-8 h-8' })}
                </div>
                <h3 className="text-xl font-bold mb-3">{issue.title}</h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {issue.desc}
                </p>
                <div className="pt-4 border-t border-gray-50">
                   <p className="text-xs font-semibold text-gray-400 mb-2">USA Support Hotline:</p>
                   <a href={PHONE_TEL} className="text-security-green font-bold text-lg hover:underline flex items-center">
                     <Phone className="w-4 h-4 mr-2" />
                     {PHONE_NUMBER}
                   </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reassurance Section */}
      <section className="py-20 bg-security-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10">Why Choose STOPzilla Live USA Assistance?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6 border border-security-green">
                <ShieldAlert className="w-8 h-8 text-security-green" />
              </div>
              <h4 className="text-xl font-bold">Privacy Focused</h4>
              <p className="text-gray-400">Your data security is our top priority while we assist with your security software needs.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6 border border-security-green">
                <User className="w-8 h-8 text-security-green" />
              </div>
              <h4 className="text-xl font-bold">Native USA Help</h4>
              <p className="text-gray-400">Clear communication and friendly technicians based right here in the United States.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6 border border-security-green">
                <CheckCircle className="w-8 h-8 text-security-green" />
              </div>
              <h4 className="text-xl font-bold">Proven Results</h4>
              <p className="text-gray-400">We have helped thousands of USA users regain control of their computer security.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
