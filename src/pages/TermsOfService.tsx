import React, { useEffect } from 'react';
import { motion } from 'motion/react';

export default function TermsOfService() {
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
              Terms of <span className="text-bronze">Service</span>
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
              <h2 className="font-heading font-black text-2xl md:text-3xl text-black uppercase tracking-tighter mb-4">1. Acceptance of Terms</h2>
              <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this website's particular services, you shall be subject to any posted guidelines or rules applicable to such services.</p>
            </div>
            
            <div>
              <h2 className="font-heading font-black text-2xl md:text-3xl text-black uppercase tracking-tighter mb-4">2. Provision of Services</h2>
              <p>T & L Dirtwork, Inc. provides advanced site preparation, hauling, dirtwork, aggregate delivery, and marine construction. Project specific terms, operational timelines, and liability clauses will be uniquely outlined in official quotes or contractual agreements executed prior to the commencement of any physical labor.</p>
            </div>

            <div>
              <h2 className="font-heading font-black text-2xl md:text-3xl text-black uppercase tracking-tighter mb-4">3. Intellectual Property</h2>
              <p>The site and its original content, features, photography, and functionality are owned by T & L Dirtwork, Inc. and are protected by international copyright, trademark, patent, trade secret and other intellectual property or proprietary rights laws. You may not reproduce, distribute, or create derivative works from this content.</p>
            </div>
            
            <div>
              <h2 className="font-heading font-black text-2xl md:text-3xl text-black uppercase tracking-tighter mb-4">4. Limitation of Liability</h2>
              <p>This website is provided on an "as is" and "as available" basis. T & L Dirtwork, Inc. makes no representations or warranties of any kind, express or implied, as to the operation of their website or the information, content, materials, or products included on this site. You expressly agree that your use of this site is at your sole risk.</p>
            </div>

            <div className="pt-8 border-t border-black/10">
              <h2 className="font-heading font-black text-2xl md:text-3xl text-black uppercase tracking-tighter mb-4">Contact Information</h2>
              <p>To ask questions or comment about these Terms of Service, contact us at:</p>
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
