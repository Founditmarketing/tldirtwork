import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MarineConstruction() {
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { scrollY } = useScroll();
  const ctaImageY = useTransform(scrollY, [0, 6000], [0, -400]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col font-sans relative overflow-hidden">
      {/* Background styling to match the theme */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-bronze/10 via-[#0a0a0a] to-[#0a0a0a] -z-10 pointer-events-none"></div>
      {/* Hero Section */}
      <section className="relative w-full flex flex-col justify-end min-h-[50vh] lg:min-h-[auto] pt-32 lg:pt-[208px] pb-16 lg:pb-0 overflow-hidden lg:overflow-visible">
        {/* Mobile Header Image Background */}
        <div className="absolute inset-0 w-full h-full lg:hidden block z-0 bg-[#0a0a0a]">
          <img src="/t&lmarineconstruction.jpeg" alt="T & L Marine Construction" className="w-full h-full object-cover opacity-60 mix-blend-luminosity" />
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
              <span className="font-bold tracking-widest uppercase text-[11px] text-white">Our Services</span>
            </div>
            <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tighter uppercase leading-[0.9] drop-shadow-2xl">
              MARINE <span className="text-bronze">CONSTRUCTION</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Body Section */}
      <section className="w-full bg-white text-black relative flex flex-col lg:flex-row overflow-hidden">
        {/* Left Column: Text */}
        <div className="w-full lg:w-1/2 py-20 lg:py-32 flex justify-center">
          <div className="w-full max-w-[750px] px-4 lg:px-10 xl:px-14 relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center"
            >
              <h2 className="font-heading font-black text-3xl md:text-5xl uppercase tracking-tighter mb-8 leading-tight">
                Mastering the Coastal Environment
              </h2>
              <div className="w-16 h-1 bg-bronze mb-8"></div>
              
              <p className="text-black/70 font-light text-base md:text-lg mb-6 leading-relaxed">
                Operating around coastal waterways requires specialized equipment and unique engineering insight. At T & L Dirtwork, Inc., we extend our heavy construction expertise into the water, providing top-tier marine construction and coastline preparation services.
              </p>
              
              <p className="text-black/70 font-light text-base md:text-lg mb-8 leading-relaxed">
                From dredging channels and installing massive retaining bulkheads to complete dock and pier foundation establishment, we understand how to protect against coastal erosion while ensuring the structural integrity of your marine project holds strong against the water.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <div className="flex items-center">
                   <CheckCircle2 size={20} className="text-bronze mr-3" />
                   <span className="font-bold tracking-widest uppercase text-[10px]">Dredging & Shoreline</span>
                </div>
                <div className="flex items-center">
                   <CheckCircle2 size={20} className="text-bronze mr-3" />
                   <span className="font-bold tracking-widest uppercase text-[10px]">Bulkhead Construction</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Column: Full bleed image */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="hidden lg:block lg:w-1/2 relative lg:min-h-full"
        >
          <img 
            src="/t&lmarineconstruction.jpeg" 
            alt="T & L Marine Operations" 
            className="absolute inset-0 w-full h-full object-cover" 
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </section>

      {/* CTA Section (Recycled Template Component) */}
      <section className="relative py-32 bg-black overflow-hidden flex items-center justify-center border-y border-bronze/30">
        <div className="absolute inset-0 opacity-40 overflow-hidden bg-black flex justify-center">
          <motion.img style={{ y: ctaImageY, height: 'calc(100% + 1200px)', top: '-600px' }} src="/t&ldirtworkimage3.jpeg" alt="Machinery Silhouette" className="absolute w-full left-0 object-cover object-center" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-black/60 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h2 className="font-heading font-black text-4xl md:text-6xl tracking-tighter uppercase mb-6 drop-shadow-2xl">
            READY TO START YOUR NEXT SITE PROJECT?
          </h2>
          <p className="text-xl text-neutral-300 font-light mb-12 drop-shadow-md">
            Connect with T & L Dirtwork, Inc. for expert site preparation, hauling, and marine construction services.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/contact" className="w-full sm:w-auto">
              <button className="bg-bronze text-white hover:text-black font-heading font-bold tracking-widest text-sm px-10 py-5 border border-bronze hover:border-white btn-slide slide-bg-white w-full">
                <span className="relative z-10">CONTACT OUR TEAM</span>
              </button>
            </Link>
            <Link to="/" className="w-full sm:w-auto">
              <button className="bg-transparent text-white font-heading font-bold tracking-widest text-sm px-10 py-5 border border-bronze btn-slide slide-bg-bronze w-full">
                <span className="relative z-10">OUR SERVICES</span>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
