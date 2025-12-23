
import React from 'react';
import { Shield, Check, Phone } from 'lucide-react';
import { BRAND_NAME, PHONE_NUMBER, PHONE_TEL, IMAGES } from '../constants';

const About: React.FC = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
              About {BRAND_NAME}
            </h1>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We are a dedicated tech support team specializing in assisting STOPzilla antivirus and antispyware users across the United States. In an era where digital threats are constant, having a reliable support partner for your security software is essential.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team focuses on delivering clear, non-technical guidance to help users of all experience levels manage their STOPzilla subscriptions and software performance. Whether you are dealing with a critical system crash or a simple billing inquiry, we are here to help.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start space-x-3">
                <div className="bg-green-100 p-1 rounded-full"><Check className="text-green-600 w-5 h-5" /></div>
                <span className="font-medium text-gray-700">USA-Based Technical Support</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-green-100 p-1 rounded-full"><Check className="text-green-600 w-5 h-5" /></div>
                <span className="font-medium text-gray-700">Security Software Specialists</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-green-100 p-1 rounded-full"><Check className="text-green-600 w-5 h-5" /></div>
                <span className="font-medium text-gray-700">Billing & License Recovery</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-green-100 p-1 rounded-full"><Check className="text-green-600 w-5 h-5" /></div>
                <span className="font-medium text-gray-700">Live Phone Assistance</span>
              </div>
            </div>

            <div className="bg-gray-100 p-8 rounded-2xl border-l-8 border-security-green">
              <h4 className="text-xl font-bold mb-2">Need Immediate Help?</h4>
              <p className="text-gray-600 mb-4">Our USA-based technicians are ready to take your call and solve your STOPzilla issues today.</p>
              <a href={PHONE_TEL} className="inline-flex items-center text-security-green text-2xl font-bold hover:underline">
                <Phone className="w-6 h-6 mr-3" />
                {PHONE_NUMBER}
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-security-green opacity-10 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-500 opacity-10 rounded-full"></div>
            <img 
              src={IMAGES.dashboard} 
              alt="STOPzilla antivirus style dashboard showing system protection status" 
              className="rounded-3xl shadow-2xl relative z-10 border-8 border-white"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hidden md:block">
              <Shield className="w-12 h-12 text-security-green mb-3 mx-auto" />
              <p className="text-center font-bold">100% Security Focused</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
