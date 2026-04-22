import React, { useEffect } from 'react';
import { motion } from 'motion/react';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col font-sans relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-bronze/10 via-[#0a0a0a] to-[#0a0a0a] -z-10 pointer-events-none"></div>
      
      <section className="w-full pt-40 lg:pt-56 pb-20 px-4 lg:px-8 border-b border-white/5">
        <div className="max-w-[1000px] mx-auto w-full">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-heading font-black text-4xl md:text-6xl tracking-tighter uppercase mb-4"
            >
              Privacy <span className="text-bronze">Policy</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-neutral-400 font-bold tracking-[0.2em] uppercase text-xs"
            >
              Last Updated: {new Date().toLocaleDateString()}
            </motion.p>
        </div>
      </section>

      <section className="w-full bg-white text-black py-20 lg:py-32 px-4 lg:px-8 flex-grow">
        <div className="max-w-[1000px] mx-auto w-full">
          <div className="space-y-12 text-black/70 font-light text-base md:text-lg leading-relaxed">
            <div>
              <h2 className="font-heading font-black text-2xl md:text-3xl text-black uppercase tracking-tighter mb-4">1. Introduction</h2>
              <p>At T & L Dirtwork, Inc., we respect your privacy and are committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit our website, and our practices for collecting, using, maintaining, protecting, and disclosing that information.</p>
            </div>
            
            <div>
              <h2 className="font-heading font-black text-2xl md:text-3xl text-black uppercase tracking-tighter mb-4">2. Information We Collect</h2>
              <p>We may collect personal information that you knowingly and willingly provide by way of forms (such as contact and quote requests) to us. This information includes your name, email address, phone number, and project details.</p>
            </div>

            <div>
              <h2 className="font-heading font-black text-2xl md:text-3xl text-black uppercase tracking-tighter mb-4">3. How We Use Your Information</h2>
              <p>We use information that we collect about you or that you provide to us, including any personal information, to present our website and its contents to you, to provide you with information, products, or services that you request from us, and to carry out our obligations and enforce our rights arising from any contracts entered into between you and us.</p>
            </div>
            
            <div>
              <h2 className="font-heading font-black text-2xl md:text-3xl text-black uppercase tracking-tighter mb-4">4. Data Security</h2>
              <p>We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. However, the transmission of information via the internet is not completely secure, and we cannot guarantee the absolute security of your personal information transmitted to our website.</p>
            </div>

            <div className="pt-8 border-t border-black/10">
              <h2 className="font-heading font-black text-2xl md:text-3xl text-black uppercase tracking-tighter mb-4">Contact Information</h2>
              <p>To ask questions or comment about this privacy policy and our privacy practices, contact us at:</p>
              <ul className="mt-4 space-y-2 font-bold text-black text-sm tracking-wide">
                <li>Email: tony@tldirtwork.com</li>
                <li>Phone: (318) 992-5948</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
