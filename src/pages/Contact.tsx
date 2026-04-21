import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, ArrowRight, Instagram, Facebook, Linkedin, Tractor } from 'lucide-react';

export default function Contact() {
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 md:pt-32 pb-24 min-h-screen bg-[#0a0a0a] text-white flex flex-col font-sans relative overflow-hidden">
      {/* Background styling to match the theme */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-bronze/10 via-[#0a0a0a] to-[#0a0a0a] -z-10 pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto w-full px-4 lg:px-8 relative z-10 flex flex-col pt-12 lg:pt-20">
        
        {/* Contact Page Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-center text-bronze mb-4">
            <span className="w-8 md:w-12 h-[2px] bg-bronze mr-4"></span>
            <span className="font-bold tracking-widest uppercase text-[11px]">Get In Touch</span>
          </div>
          <h1 className="font-heading font-black text-5xl md:text-7xl lg:text-8xl tracking-tighter uppercase leading-[0.9]">
            READY TO <br />
            <span className="text-bronze">WORK?</span>
          </h1>
        </motion.div>

        {/* Main Content Split */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Left Column: Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-3/5"
          >
            <div className="bg-neutral-900 border border-white/5 p-8 md:p-12 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-bronze/10 blur-3xl -z-10 rounded-full"></div>
               <h3 className="font-heading font-black text-2xl lg:text-3xl uppercase tracking-tighter mb-8 text-white">
                  Request a Quote
               </h3>
               
               <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label className="text-[10px] font-bold tracking-widest uppercase text-white/50">First Name</label>
                     <input type="text" className="w-full bg-black/50 border border-white/10 p-4 font-light text-white focus:outline-none focus:border-bronze transition-colors" placeholder="John" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-[10px] font-bold tracking-widest uppercase text-white/50">Last Name</label>
                     <input type="text" className="w-full bg-black/50 border border-white/10 p-4 font-light text-white focus:outline-none focus:border-bronze transition-colors" placeholder="Doe" />
                   </div>
                 </div>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label className="text-[10px] font-bold tracking-widest uppercase text-white/50">Email Address</label>
                     <input type="email" className="w-full bg-black/50 border border-white/10 p-4 font-light text-white focus:outline-none focus:border-bronze transition-colors" placeholder="john@example.com" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-[10px] font-bold tracking-widest uppercase text-white/50">Phone Number</label>
                     <input type="tel" className="w-full bg-black/50 border border-white/10 p-4 font-light text-white focus:outline-none focus:border-bronze transition-colors" placeholder="(555) 123-4567" />
                   </div>
                 </div>

                 <div className="space-y-2">
                     <label className="text-[10px] font-bold tracking-widest uppercase text-white/50">Project Type</label>
                     <select className="w-full bg-black/50 border border-white/10 p-4 font-light text-white/60 focus:outline-none focus:border-bronze transition-colors appearance-none rounded-none">
                       <option value="">Select a service category...</option>
                       <option value="dirtwork">Dirtwork & Excavation</option>
                       <option value="hauling">Hauling & Aggregate</option>
                       <option value="marine">Marine Construction</option>
                       <option value="other">Other Inquiry</option>
                     </select>
                 </div>

                 <div className="space-y-2">
                     <label className="text-[10px] font-bold tracking-widest uppercase text-white/50">Project Details</label>
                     <textarea rows={4} className="w-full bg-black/50 border border-white/10 p-4 font-light text-white focus:outline-none focus:border-bronze transition-colors resize-none" placeholder="Provide some background on your site needs..."></textarea>
                 </div>

                 <button className="bg-bronze hover:bg-white hover:text-black transition-colors border border-transparent hover:border-white text-white font-heading font-black tracking-widest text-xs uppercase px-12 py-5 w-full md:w-auto mt-4 shadow-[0_10px_30px_rgba(167,54,2,0.3)]">
                   Submit Inquiry
                 </button>
               </form>
            </div>
          </motion.div>

          {/* Right Column: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full lg:w-2/5 flex flex-col justify-start"
          >
             <h3 className="font-heading font-black text-2xl lg:text-3xl uppercase tracking-tighter mb-8 text-white">
                Contact Details
             </h3>
             <p className="text-white/60 font-light mb-10 text-lg leading-relaxed">
               Need an immediate estimate? Our team is standing by to deploy the right equipment and expertise for your job site today.
             </p>

             <div className="space-y-8">
               
               {/* Contact Cards */}
               <div className="group border-b border-white/5 pb-8 flex items-start">
                 <div className="bg-bronze/10 text-bronze p-4 group-hover:bg-bronze group-hover:text-white transition-colors duration-500 mr-6 shadow-xl">
                   <Phone size={24} />
                 </div>
                 <div>
                   <p className="font-bold text-[10px] tracking-widest uppercase text-white/50 mb-1">Direct Line</p>
                   <a href="tel:3189925948" className="text-xl sm:text-2xl font-heading font-black group-hover:text-bronze transition-colors">(318) 992-5948</a>
                 </div>
               </div>

               <div className="group border-b border-white/5 pb-8 flex items-start">
                 <div className="bg-bronze/10 text-bronze p-4 group-hover:bg-bronze group-hover:text-white transition-colors duration-500 mr-6 shadow-xl">
                   <Phone size={24} />
                 </div>
                 <div>
                   <p className="font-bold text-[10px] tracking-widest uppercase text-bronze mb-1">24/7 Emergency Line</p>
                   <a href="tel:3184818142" className="text-xl sm:text-2xl font-heading font-black group-hover:text-white transition-colors text-white/80">(318) 481-8142</a>
                 </div>
               </div>

               <div className="group border-b border-white/5 pb-8 flex items-start">
                 <div className="bg-bronze/10 text-bronze p-4 group-hover:bg-bronze group-hover:text-white transition-colors duration-500 mr-6 shadow-xl">
                   <Mail size={24} />
                 </div>
                 <div>
                   <p className="font-bold text-[10px] tracking-widest uppercase text-white/50 mb-1">Email inquiries</p>
                   <a href="mailto:tony@tldirtwork.com" className="text-lg font-light text-white/80 group-hover:text-bronze transition-colors">tony@tldirtwork.com</a>
                 </div>
               </div>
               
               <div className="group pb-8 flex items-start">
                 <div className="bg-bronze/10 text-bronze p-4 group-hover:bg-bronze group-hover:text-white transition-colors duration-500 mr-6 shadow-xl">
                   <MapPin size={24} />
                 </div>
                 <div>
                   <p className="font-bold text-[10px] tracking-widest uppercase text-white/50 mb-1">Headquarters</p>
                   <p className="text-lg font-light text-white/80 mb-4">683 Highway 459<br/>Olla, LA 71465</p>
                   <a href="https://maps.google.com/?q=683+Highway+459,+Olla,+LA+71465" target="_blank" rel="noreferrer" className="text-bronze hover:text-white transition-colors text-xs font-bold tracking-widest uppercase flex items-center group/btn">
                     Get Directions <ArrowRight size={14} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                   </a>
                 </div>
               </div>

             </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
