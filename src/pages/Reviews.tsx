import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Star, MessageSquareQuote, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Reviews() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { scrollY } = useScroll();
  const ctaImageY = useTransform(scrollY, [0, 4000], [0, -300]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col font-sans relative overflow-hidden">
      {/* Background styling */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-bronze/10 via-[#0a0a0a] to-[#0a0a0a] -z-10 pointer-events-none"></div>
      
      {/* Hero Section */}
      <section className="relative w-full flex flex-col justify-end min-h-[50vh] lg:min-h-[auto] pt-32 lg:pt-[208px] pb-16 lg:pb-0 overflow-hidden lg:overflow-visible">
        {/* Mobile Header Image Background */}
        <div className="absolute inset-0 w-full h-full lg:hidden block z-0 bg-[#0a0a0a]">
          <img src="/t&ldirtworkgallery3.png" alt="T & L Reviews" className="w-full h-full object-cover opacity-60 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent"></div>
        </div>

        <div className="max-w-[1400px] mx-auto w-full px-4 lg:px-8 relative z-10 flex flex-col">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-0 lg:mb-24"
            >
              <div className="flex items-center text-bronze mb-4 drop-shadow-md">
                <span className="w-8 md:w-12 h-[2px] bg-bronze mr-4"></span>
                <span className="font-bold tracking-widest uppercase text-[11px] text-white">Client Feedback</span>
              </div>
              <h1 className="font-heading font-black text-5xl md:text-7xl lg:text-8xl tracking-tighter uppercase leading-[0.9] drop-shadow-2xl">
                OUR <span className="text-bronze">REVIEWS</span>
              </h1>
            </motion.div>
        </div>
      </section>

      {/* Reviews Content */}
      <section className="w-full bg-white text-black py-16 lg:py-32 px-4 lg:px-8 flex-grow">
        <div className="max-w-[1400px] mx-auto w-full flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Main Review Card */}
          <div className="flex-1">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#fafafa] border border-black/5 p-6 md:p-12 shadow-2xl relative"
            >
              <MessageSquareQuote strokeWidth={1} className="w-12 h-12 md:w-16 md:h-16 text-bronze/20 absolute top-4 right-4 md:top-8 md:right-8 z-0" />
              <div className="flex text-bronze mb-6 md:mb-8 relative z-10">
                <Star size={20} className="md:w-6 md:h-6" fill="currentColor" />
                <Star size={20} className="md:w-6 md:h-6" fill="currentColor" />
                <Star size={20} className="md:w-6 md:h-6" fill="currentColor" />
                <Star size={20} className="md:w-6 md:h-6" fill="currentColor" />
                <Star size={20} className="md:w-6 md:h-6" fill="currentColor" />
              </div>
              <p className="font-heading font-black text-lg md:text-3xl lg:text-4xl leading-tight md:leading-snug text-black mb-8 md:mb-10 uppercase tracking-tighter relative z-10">
                "T & L Dirtwork Inc. has over 12 Years Experience. The firm provides a full range of construction management and general contracting services for clients in United States"
              </p>
              <div className="flex items-center relative z-10">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-black flex items-center justify-center rounded-full mr-4 shadow-lg shrink-0">
                  <span className="text-white font-heading font-black text-lg md:text-xl">Y</span>
                </div>
                <div>
                  <p className="font-bold text-sm tracking-widest uppercase">Yelp User</p>
                  <p className="text-neutral-500 text-xs tracking-wider">Verified Review</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* CTA Side Panel */}
          <div className="w-full lg:w-[450px] flex flex-col pt-4">
             <div className="bg-black text-white p-10 lg:p-12 border-b-2 border-bronze shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-bronze/10 rounded-full blur-3xl"></div>
               <h3 className="font-heading font-black text-3xl mb-6 tracking-tighter uppercase relative z-10">Had a good experience?</h3>
               <p className="text-neutral-400 font-light mb-10 text-sm leading-relaxed relative z-10">
                 We pride ourselves on delivering top-tier service. If we recently completed a project for you, let us know how we did. Your feedback helps us continue to improve and serve others.
               </p>
               <a 
                 href="https://www.yelp.com/biz/t-and-l-dirtwork-olla#reviews" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="group w-full inline-flex items-center justify-center bg-bronze text-white hover:text-white font-heading font-bold tracking-[0.2em] text-[10px] uppercase py-5 px-6 border border-bronze hover:border-white transition-all btn-slide slide-bg-black relative z-10"
               >
                 <span className="relative z-10 flex items-center">
                   LEAVE A REVIEW ON YELP
                   <ArrowRight size={14} className="ml-3 group-hover:translate-x-1 transition-transform" />
                 </span>
               </a>
             </div>
          </div>

        </div>
      </section>

      {/* Hero CTA Block Recycled */}
      <section className="relative py-32 bg-black overflow-hidden flex items-center justify-center border-t border-bronze/30">
        <div className="absolute inset-0 opacity-30 overflow-hidden bg-black flex justify-center">
          <motion.img style={{ y: ctaImageY, height: 'calc(100% + 1200px)', top: '-600px' }} src="/t&ldirtworkgallery4.png" alt="Machinery background" className="absolute w-full left-0 object-cover object-center" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-black/60 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl tracking-tighter uppercase mb-6 drop-shadow-2xl">
            READY FOR YOUR OWN 5-STAR PROJECT?
          </h2>
          <p className="text-lg md:text-xl text-neutral-300 font-light mb-12 drop-shadow-md">
            Connect with T & L Dirtwork, Inc. for expert site preparation, hauling, and marine construction services.
          </p>
          <div className="flex justify-center">
            <Link to="/contact">
              <button className="bg-bronze text-white hover:text-black font-heading font-black tracking-widest text-xs px-10 py-5 border border-bronze hover:border-white btn-slide slide-bg-white shadow-[0_0_20px_rgba(205,127,50,0.15)]">
                <span className="relative z-10">CONTACT OUR TEAM</span>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
