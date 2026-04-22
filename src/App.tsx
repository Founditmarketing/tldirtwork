import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Contact from './pages/Contact';
import { motion, useScroll, useTransform, AnimatePresence, useInView, animate } from 'motion/react';
import { 
  Tractor, 
  Settings, 
  MapPin, 
  History, 
  Globe, 
  HardHat, 
  Handshake, 
  Anchor,
  Truck,
  Cog, 
  ArrowRight,
  Phone,
  Mail,
  ShieldCheck,
  DollarSign,
  RefreshCcw,
  Landmark,
  Headset,
  Menu,
  X,

  ChevronLeft,
  ChevronRight,
  MessageSquare,
  PhoneCall
} from 'lucide-react';

const AnimatedCounter = ({ from, to, duration, suffix = "" }: { from: number, to: number, duration: number, suffix?: string }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });
  
  useEffect(() => {
    if (inView && nodeRef.current) {
      const controls = animate(from, to, {
        duration: duration,
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.floor(value).toString() + suffix;
          }
        }
      });
      return () => controls.stop();
    }
  }, [from, to, duration, inView, suffix]);

  return <span ref={nodeRef}>{from}{suffix}</span>;
}

const FloatingContactWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Show tooltip once on page load (tied to session)
  useEffect(() => {
    if (!sessionStorage.getItem('tooltip_shown')) {
      const timer = setTimeout(() => {
        // Show tooltip after 3 seconds
        setShowTooltip(true);
        // Hide permanently after 4 seconds of display
        setTimeout(() => setShowTooltip(false), 4000); 
        sessionStorage.setItem('tooltip_shown', 'true');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {/* Floating Button & Tooltip Wrapper */}
      <div className="fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end">
        {/* Tooltip Notification */}
        <AnimatePresence>
          {showTooltip && !isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              className="mb-4 bg-white text-black p-3 lg:p-4 rounded-lg shadow-[0_10px_40px_rgba(0,0,0,0.15)] relative max-w-[220px] text-xs lg:text-sm font-semibold flex items-start cursor-pointer border border-black/5"
              onClick={() => {
                setIsOpen(true);
                setShowTooltip(false);
              }}
            >
              <div>Ready to start a new site project? Click here!</div>
              <button 
                onClick={(e) => { e.stopPropagation(); setShowTooltip(false); }}
                className="ml-2 text-black/50 hover:text-black absolute -top-2 -right-2 bg-white rounded-full shadow-sm p-1 border border-black/10"
              >
                <X size={12} />
              </button>
              {/* Tooltip triangle pointer */}
              <div className="absolute -bottom-2 right-6 w-0 h-0 border-l-[8px] border-l-transparent border-t-[8px] border-t-white border-r-[8px] border-r-transparent filter drop-shadow-sm"></div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* The Action Button */}
        <button
          onClick={() => {
             setIsOpen(!isOpen);
             setShowTooltip(false);
          }}
          className="bg-bronze hover:bg-bronze-dark text-white rounded-full p-4 lg:p-5 shadow-2xl hover:shadow-[0_10px_30px_rgba(167,54,2,0.4)] transition-all duration-300 transform hover:-translate-y-1 z-50 flex items-center justify-center"
        >
          <motion.div 
            initial={{ rotate: 0 }} 
            animate={{ rotate: isOpen ? 90 : 0 }} 
            transition={{ duration: 0.2 }}
          >
             {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
          </motion.div>
        </button>
      </div>

      {/* The Split-Screen Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              className="fixed bottom-20 sm:bottom-24 right-4 sm:right-6 w-[calc(100vw-32px)] sm:w-[400px] bg-white z-50 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col font-sans border border-bronze/30"
              style={{ maxHeight: 'calc(100dvh - 100px)' }}
            >
              {/* Top Half: Urgent Call */}
              <div className="bg-black border-b-4 border-bronze text-white p-4 sm:p-6 relative shrink-0 overflow-hidden">
                 <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%,transparent_100%)] bg-[length:4px_4px] opacity-50 z-0"></div>
                 <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors z-50 bg-black/50 p-1 cursor-pointer">
                    <X size={20} />
                 </button>
                 <div className="relative z-10">
                   <h3 className="font-heading font-black text-xl sm:text-2xl tracking-tighter uppercase mb-1 sm:mb-2 pr-6">Speak to Our Team</h3>
                   <p className="text-white/60 text-xs sm:text-sm font-light mb-4 sm:mb-6">Need an immediate quote or have an urgent situation? Call us directly.</p>
                   
                   <a href="tel:3189925948" className="flex items-center justify-between bg-neutral-900 border border-white/10 text-white p-3 sm:p-4 hover:border-bronze transition-all group">
                      <div>
                         <div className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-bronze mb-1">Office Number</div>
                         <div className="text-lg sm:text-xl font-heading font-black group-hover:text-bronze transition-colors">(318) 992-5948</div>
                      </div>
                      <div className="text-white/30 group-hover:text-bronze transition-colors p-2 flex items-center justify-center">
                         <PhoneCall size={20} />
                      </div>
                   </a>

                   <div className="mt-3 sm:mt-4 text-center">
                      <a href="tel:3184818142" className="text-[10px] sm:text-xs text-white/60 hover:text-white transition-colors flex items-center justify-center">
                         <span className="font-bold mr-2 text-bronze uppercase tracking-widest text-[9px] sm:text-[10px]">24/7 Emergency Line</span> <span className="font-heading font-bold tracking-wider">(318) 481-8142</span>
                      </a>
                   </div>
                 </div>
              </div>

              {/* Bottom Half: Contact Form */}
              <div className="p-4 sm:p-6 bg-[#fafafa] overflow-y-auto">
                 <h4 className="font-heading font-black text-xs sm:text-sm tracking-widest uppercase mb-3 sm:mb-4 text-black flex items-center">
                   <span className="w-4 h-[2px] bg-bronze mr-3"></span>
                   Submit an Inquiry
                 </h4>
                 <form className="space-y-3 sm:space-y-4" onSubmit={(e) => { e.preventDefault(); setIsOpen(false); }}>
                    <div>
                      <input type="text" placeholder="Full Name" className="w-full bg-white border border-black/10 text-black placeholder:text-neutral-500 text-xs sm:text-sm p-2 sm:p-3 focus:outline-none focus:border-bronze transition-colors rounded-none" required />
                    </div>
                    <div>
                      <input type="email" placeholder="Email Address" className="w-full bg-white border border-black/10 text-black placeholder:text-neutral-500 text-xs sm:text-sm p-2 sm:p-3 focus:outline-none focus:border-bronze transition-colors rounded-none" required />
                    </div>
                    <div>
                      <textarea placeholder="Tell us about your project..." rows={2} className="w-full bg-white border border-black/10 text-black placeholder:text-neutral-500 text-xs sm:text-sm p-2 sm:p-3 focus:outline-none focus:border-bronze transition-colors resize-none rounded-none" required></textarea>
                    </div>
                    <button type="submit" className="w-full bg-black text-white hover:bg-bronze transition-colors py-3 sm:py-4 font-heading font-black text-[10px] sm:text-xs tracking-widest uppercase mt-1 sm:mt-2 border-b-2 border-transparent hover:border-bronze-dark rounded-none">
                       Send Message
                    </button>
                 </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

function MainLayout() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingPhase, setLoadingPhase] = useState(0);
  const loadingPhrases = [
    "PREPARING YOUR SITE",
    "DEPLOYING HEAVY EQUIPMENT",
    "LAYING THE GROUNDWORK"
  ];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const galleryImages = [
    "/t&ldirtworkgallery.jpg",
    "/t&ldirtworkgallery1.jpg",
    "/t&ldirtworkgallery3.png",
    "/t&ldirtworkgallery4.png"
  ];

  const { scrollY } = useScroll();

  useEffect(() => {
    const totalDuration = 3600;
    const intervalDuration = totalDuration / loadingPhrases.length;
    
    const interval = setInterval(() => {
      setLoadingPhase(prev => Math.min(prev + 1, loadingPhrases.length - 1));
    }, intervalDuration);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, totalDuration + 200);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);
  const heroY = useTransform(scrollY, [0, 1000], [0, 300]);
  const sectionBgY = useTransform(scrollY, [0, 6000], ["-40%", "40%"]);
  const smallParallaxY = useTransform(scrollY, [0, 6000], ["-15%", "15%"]);

  const ctaRef = useRef<HTMLElement>(null);
  const { scrollYProgress: ctaScroll } = useScroll({
    target: ctaRef,
    offset: ["start end", "end start"]
  });
  const ctaImageY = useTransform(ctaScroll, [0, 1], ["-15%", "15%"]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans overflow-x-hidden flex flex-col">
      
      {/* 0. Loader */}
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            key="loader"
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] bg-[#0a0a0a] flex flex-col items-center justify-center overflow-hidden px-4"
          >
            <div className="relative inline-flex flex-col items-center justify-center px-6 md:px-16 pb-6 md:pb-8 pt-2">
              <div className="relative h-12 md:h-20 flex items-center justify-center overflow-hidden w-[300px] sm:w-[450px] md:w-[700px]">
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={loadingPhase}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                    className="absolute font-heading font-black text-sm sm:text-2xl md:text-4xl tracking-[0.2em] text-white uppercase text-center whitespace-nowrap"
                  >
                    {loadingPhrases[loadingPhase].split(' ').map((word, i, arr) => (
                      <span key={i} className={i === arr.length - 1 ? 'text-bronze' : ''}>
                        {word}{i !== arr.length - 1 ? ' ' : ''}
                      </span>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
              
              {/* Underline Load Bar */}
              <div className="absolute bottom-0 left-0 md:h-[2px] h-[1px] w-full bg-white/10 overflow-hidden rounded-full">
                <motion.div 
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  transition={{ duration: 3.6, ease: "linear" }}
                  className="absolute inset-0 bg-bronze shadow-[0_0_15px_rgba(191,135,79,0.8)] rounded-full"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. Header (Navigation) */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/95 backdrop-blur-md border-b-[0.5px] border-bronze/30 shadow-2xl' : 'bg-transparent border-b-[0.5px] border-bronze/20'}`}>
        {/* Mobile Top Nav */}
        <div className={`sm:hidden flex items-center justify-between px-4 transition-all duration-300 overflow-hidden text-[9px] tracking-widest text-bronze border-b border-bronze/20 ${isScrolled ? 'h-0 opacity-0 pointer-events-none' : 'h-[32px] py-1 opacity-100'}`}>
          <a href="tel:3189925948" className="flex items-center text-white/80 hover:text-white transition-colors">
            <Phone size={10} className="mr-1" />
            (318) 992-5948
          </a>
          <div className="flex items-center text-white/80">
            <MapPin size={10} className="mr-1" />
            Olla, LA 71465
          </div>
        </div>
        
        {/* Top Nav */}
        <div className={`hidden sm:flex items-center px-8 transition-all duration-300 overflow-hidden text-[10px] tracking-widest text-bronze uppercase border-b border-bronze/20 ${isScrolled ? 'h-0 opacity-0 overflow-hidden border-transparent opacity-0 pointer-events-none' : 'h-[34px] py-2 opacity-100'}`}>
          <div className="flex items-center w-full">
            {['T & L DIRTWORK', 'CAREERS', 'TERMS OF SERVICE', 'PRIVACY POLICY', 'MESSAGE US'].map((item, idx) => (
              <React.Fragment key={item}>
                <Link to="/" className={`px-4 hover:text-white transition-colors ${idx === 0 ? 'pl-0 font-bold' : 'text-white/50'}`}>
                  {item}
                </Link>
                {idx < 4 && <span className="h-4 w-[1px] bg-bronze/40"></span>}
              </React.Fragment>
            ))}
            <div className="ml-auto flex items-center gap-6">
              <a href="tel:3189925948" className="flex items-center text-white/80 hover:text-white transition-colors">
                <Phone size={12} className="mr-2" />
                (318) 992-5948
              </a>
              <div className="flex items-center text-white/80">
                <MapPin size={12} className="mr-2" />
                683 Highway 459, Olla, LA 71465
              </div>
            </div>
          </div>
        </div>

        {/* Main Nav */}
        <div className="flex items-center justify-between px-4 lg:px-8 py-4">
          <div className="flex items-center gap-4 lg:gap-8">
            {/* Logo Area */}
            <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
              <img src="/newt&llogo.png" alt="T & L Dirtwork, Inc." className={`h-10 w-auto object-contain transition-all duration-300 ${isScrolled ? 'lg:h-10' : 'lg:h-14'}`} />
              <div className="ml-4 h-[1px] w-12 bg-bronze hidden lg:block"></div>
            </Link>
            
            {/* Main Links */}
            <nav className="hidden lg:flex items-center gap-6 text-[11px] font-bold tracking-widest uppercase">
              {['REQUEST A QUOTE', 'OUR SERVICES', 'ABOUT US', 'PROJECTS', 'REVIEWS'].map((item, idx) => (
                <React.Fragment key={item}>
                   <Link to={item === 'REQUEST A QUOTE' ? '/contact' : '/'} className={`${idx === 0 ? 'text-bronze' : 'text-white'} hover:text-bronze transition-colors hover:underline underline-offset-4 decoration-bronze/50`}>
                     {item}
                   </Link>
                   {idx < 4 && <span className="h-3 w-[1px] bg-bronze/40"></span>}
                </React.Fragment>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <Link to="/contact" className="hidden sm:inline-block bg-bronze text-black text-[10px] lg:text-[11px] font-black px-4 lg:px-6 py-2 lg:py-3 tracking-widest uppercase hover:bg-bronze-dark transition-colors border border-bronze shadow-[0_0_15px_rgba(191,135,79,0.3)]">
              REQUEST A QUOTE
            </Link>
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden text-white p-2 hover:text-bronze transition-colors"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Pop-out Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
              className="fixed inset-0 w-full h-screen z-[100] bg-[#0a0a0a]/95 backdrop-blur-2xl flex flex-col p-8 border-l border-bronze/20 overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-12">
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center hover:opacity-80 transition-opacity">
                  <img src="/newt&llogo.png" alt="T & L Dirtwork, Inc." className="h-10 lg:h-12 w-auto object-contain" />
                </Link>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white hover:text-bronze transition-colors p-2 cursor-pointer"
                >
                  <X size={32} />
                </button>
              </div>

              <nav className="flex flex-col gap-6 text-left mb-16 w-full mt-4">
                {['REQUEST A QUOTE', 'SERVICES', 'PROJECTS', 'REVIEWS', 'ABOUT US', 'CONTACT'].map((item) => (
                  <Link 
                    key={item} 
                    to={item === 'REQUEST A QUOTE' || item === 'CONTACT' ? '/contact' : '/'} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block text-[15px] font-bold tracking-[0.2em] uppercase transition-colors w-full border-b border-white/5 pb-4 ${item === 'REQUEST A QUOTE' ? 'text-bronze' : 'text-white hover:text-bronze'}`}
                  >
                    {item}
                  </Link>
                ))}
              </nav>

              <div className="flex flex-col gap-6 text-white/70 w-full mt-auto mb-8">
                <a href="tel:3189925948" className="flex items-center hover:text-bronze transition-colors text-sm">
                  <Phone size={18} className="mr-4 text-bronze" />
                  (318) 992-5948
                </a>
                <div className="flex items-center text-sm max-w-[280px]">
                  <MapPin size={18} className="mr-4 text-bronze shrink-0" />
                  <span>683 Highway 459, Olla, LA 71465</span>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <Routes>
        <Route path="/" element={
          <>
            {/* 2. Hero Section */}
      <section className="relative h-screen flex flex-col justify-center overflow-hidden">
        {/* Background Parallax */}
        <motion.div 
          style={{ y: heroY }}
          className="absolute inset-0 w-full h-[120%] -top-[10%] z-0"
        >
          {/* Desktop Video */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            defaultMuted
            src="/t&lherobackgroundvideo.mp4" 
            className="hidden md:block w-full h-full object-cover opacity-60 scale-[1.25]"
            onCanPlay={(e) => {
              const video = e.target as HTMLVideoElement;
              video.muted = true;
              video.play().catch(() => {});
            }}
          />
          {/* Mobile Image */}
          <img 
            src="/t&lmobilehero.jpeg" 
            alt="T & L Dirtwork Hero"
            className="block md:hidden w-full h-full object-cover opacity-60 scale-[1.10]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black"></div>
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 px-4 md:px-8 lg:px-12 mt-4 md:mt-20 pb-20 md:pb-0 max-w-6xl pt-8 md:pt-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center text-bronze mb-4"
          >
            <span className="w-8 md:w-12 h-[2px] bg-bronze mr-3 md:mr-4"></span>
            <span className="font-bold tracking-widest uppercase text-[9px] md:text-[11px]">Since 2000</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-heading font-black text-4xl sm:text-5xl md:text-6xl lg:text-[64px] leading-[0.9] tracking-tighter mb-4 uppercase"
          >
            YOUR TRUSTED DIRTWORK<br />
            PARTNER FOR OVER<br />
            <span className="text-bronze">24 YRS</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-base md:text-lg text-white/80 max-w-2xl font-light mb-4 pr-4"
          >
            T & L Dirtwork, Inc. provides expert dirtwork and comprehensive site preparation with hands-on operational knowledge.
          </motion.p>
        </div>

        {/* Hero Cards Section */}
        <div className="absolute bottom-0 left-0 w-full z-20">
          <div className="flex flex-row md:grid md:grid-cols-3 bg-black/80 md:bg-black/40 backdrop-blur-md border-t border-b border-bronze/30">
            {/* Card 1 */}
            <div className="flex-1 md:w-auto p-3 md:p-8 border-r md:border-b-0 border-bronze/20 group cursor-pointer duration-500 ease-out hover:bg-bronze-dark hover:-translate-y-1 hover:shadow-[0_-5px_30px_rgba(167,54,2,0.15)] relative overflow-hidden flex flex-col items-center md:items-start text-center md:text-left justify-center pb-5 md:pb-8 transition-all">
               <div className="w-5 h-5 md:w-8 md:h-8 mb-2 md:mb-4 text-bronze md:hidden flex justify-center items-center group-hover:scale-110 group-hover:text-white transition-all duration-500">
                 <Tractor size={20} />
               </div>
               <div className="hidden md:block w-8 h-8 mb-4 text-bronze group-hover:scale-110 group-hover:text-white transition-all duration-500">
                 <Tractor size={32} />
               </div>
               <h3 className="text-[9px] sm:text-[11px] md:text-[14px] font-heading font-black md:tracking-[0.2em] mb-0 md:mb-2 uppercase leading-tight md:leading-normal group-hover:text-white transition-colors duration-500">DIRTWORK & EXCAVATION</h3>
               <p className="hidden md:block text-[11px] text-white/60 uppercase tracking-widest mb-4 z-10 relative transition-colors duration-500 group-hover:text-white/80">Solid foundations for any project.</p>
               <span className="hidden md:inline-block border-b border-bronze pb-1 text-[10px] font-bold uppercase tracking-widest text-bronze group-hover:text-white group-hover:border-white transition-colors relative z-10">Our Services</span>
            </div>
            
            {/* Card 2 */}
            <div className="flex-1 md:w-auto p-3 md:p-8 border-r md:border-b-0 border-bronze/20 group cursor-pointer duration-500 ease-out hover:bg-bronze-dark hover:-translate-y-1 hover:shadow-[0_-5px_30px_rgba(167,54,2,0.15)] relative overflow-hidden flex flex-col items-center md:items-start text-center md:text-left justify-center pb-5 md:pb-8 transition-all">
               <div className="w-5 h-5 md:w-8 md:h-8 mb-2 md:mb-4 text-bronze md:hidden flex justify-center items-center group-hover:scale-110 group-hover:text-white transition-all duration-500">
                 <Truck size={20} />
               </div>
               <div className="hidden md:block w-8 h-8 mb-4 text-bronze group-hover:scale-110 group-hover:text-white transition-all duration-500">
                 <Truck size={32} />
               </div>
               <h3 className="text-[9px] sm:text-[11px] md:text-[14px] font-heading font-black md:tracking-[0.2em] mb-0 md:mb-2 uppercase leading-tight md:leading-normal group-hover:text-white transition-colors duration-500">HAULING & AGGREGATE</h3>
               <p className="hidden md:block text-[11px] text-white/60 uppercase tracking-widest mb-4 z-10 relative transition-colors duration-500 group-hover:text-white/80">Reliable material delivery.</p>
               <span className="hidden md:inline-block border-b border-bronze pb-1 text-[10px] font-bold uppercase tracking-widest text-bronze group-hover:text-white group-hover:border-white transition-colors relative z-10">Get a Quote</span>
            </div>

            {/* Card 3 */}
            <div className="flex-1 md:w-auto p-3 md:p-8 group cursor-pointer duration-500 ease-out hover:bg-bronze-dark hover:-translate-y-1 hover:shadow-[0_-5px_30px_rgba(167,54,2,0.15)] relative overflow-hidden flex flex-col items-center md:items-start text-center md:text-left justify-center pb-5 md:pb-8 text-balance transition-all">
               <div className="w-5 h-5 md:w-8 md:h-8 mb-2 md:mb-4 text-bronze md:hidden flex justify-center items-center group-hover:scale-110 group-hover:text-white transition-all duration-500">
                 <Anchor size={20} />
               </div>
               <div className="hidden md:block w-8 h-8 mb-4 text-bronze group-hover:scale-110 group-hover:text-white transition-all duration-500">
                 <Anchor size={32} />
               </div>
               <h3 className="text-[9px] sm:text-[11px] md:text-[14px] font-heading font-black md:tracking-[0.2em] mb-0 md:mb-2 uppercase leading-tight md:leading-normal group-hover:text-white transition-colors duration-500">MARINE CONSTRUCTION</h3>
               <p className="hidden md:block text-[11px] text-white/60 uppercase tracking-widest mb-4 z-10 relative transition-colors duration-500 group-hover:text-white/80">Specialized site preparation.</p>
               <span className="hidden md:inline-block border-b border-bronze pb-1 text-[10px] font-bold uppercase tracking-widest text-bronze group-hover:text-white group-hover:border-white transition-colors relative z-10">Learn More</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Banner Hook - Infinite Marquee */}
      <section className="bg-[linear-gradient(90deg,#000_0%,#111_50%,#000_100%)] border-y border-bronze/20 py-4 md:py-8 flex overflow-hidden w-full items-center relative">
         <motion.div 
           className="flex whitespace-nowrap"
           animate={{ x: ["0%", "-50%"] }}
           transition={{ ease: "linear", duration: 40, repeat: Infinity }}
         >
           {/* Duplicate the sequence to ensure a flawless loop jump at exactly 50% translation */}
           {[1, 2, 3, 4].map((i) => (
             <div key={i} className="flex items-center">
               <p className="text-[12px] sm:text-[14px] md:text-[24px] font-heading font-black tracking-[.2em] md:tracking-[.25em] text-bronze uppercase opacity-90 px-4 md:px-8 mx-2 md:mx-4 leading-none">
                 YOUR TRUSTED DIRTWORK PARTNER FOR OVER 25 YEARS
               </p>
               <span className="text-white/20 px-2 md:px-4">•</span>
               <p className="text-[12px] sm:text-[14px] md:text-[24px] font-heading font-black tracking-[.2em] md:tracking-[.25em] text-bronze uppercase opacity-90 px-4 md:px-8 mx-2 md:mx-4 leading-none">
                 PREMIER DIRTWORK & CONTRACTING
               </p>
               <span className="text-white/20 px-2 md:px-4">•</span>
               <p className="text-[12px] sm:text-[14px] md:text-[24px] font-heading font-black tracking-[.2em] md:tracking-[.25em] text-bronze uppercase opacity-90 px-4 md:px-8 mx-2 md:mx-4 leading-none">
                 COMPREHENSIVE SITE PREPARATION
               </p>
               <span className="text-white/20 px-2 md:px-4">•</span>
             </div>
           ))}
         </motion.div>
      </section>

      {/* 4. About Us Section */}
      <section className="bg-white text-black pt-16 md:pt-0">
        <div className="flex flex-col-reverse lg:flex-row min-h-screen">
          {/* Left Side (Visual) */}
          <div className="lg:w-1/2 relative min-h-[40vh] md:min-h-[50vh] lg:min-h-full overflow-hidden bg-neutral-900 border-none">
             {/* Dark overlay for contrast */}
             <div className="absolute inset-0 bg-black/40 z-10"></div>
             <motion.img style={{ y: smallParallaxY }} src="/t&ldirtworkimage2.jpeg" alt="Partnership" className="absolute left-0 w-full h-[130%] -top-[15%] object-cover opacity-90" referrerPolicy="no-referrer" />
             <div className="absolute inset-0 z-20 p-6 md:p-12 flex flex-col justify-end items-start text-left">
               <div className="flex items-center text-bronze mb-4">
                 <span className="w-8 md:w-12 h-[2px] bg-bronze mr-3 md:mr-4 shadow-[0_0_10px_rgba(167,54,2,0.8)]"></span>
                 <span className="font-bold tracking-widest uppercase text-[9px] md:text-[11px] text-white/80 drop-shadow-md">Est. 2000</span>
               </div>
               <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-7xl tracking-tighter text-white/90 leading-[0.85]">
                 A PARTNERSHIP<br/>BUILT ON<br/><span className="text-bronze">EXPERIENCE.</span>
               </h2>
             </div>
          </div>
          
          {/* Right Side (Text) */}
          <div className="lg:w-1/2 p-6 sm:p-8 lg:p-24 flex flex-col justify-center">
            <div className="flex items-center text-bronze mb-4">
               <span className="w-8 md:w-12 h-[2px] bg-bronze mr-3 md:mr-4"></span>
               <span className="font-bold tracking-widest uppercase text-[9px] md:text-[11px] text-bronze">Expertise</span>
            </div>
            <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-5xl tracking-tighter mb-6 lg:mb-12 text-black uppercase">
              A PARTNERSHIP<br className="hidden md:block"/>BUILT ON EXPERIENCE.
            </h2>
            <div className="space-y-4 lg:space-y-8 font-light text-neutral-700 text-sm md:text-lg leading-relaxed">
              <p>
                <strong className="text-black font-bold">Contracting is our business</strong>, and we have the experience and the equipment to properly process any contract we make. We make it a point to see that all details of the work are thoroughly checked and in accordance with the specifications desired before the work is started.
              </p>
              <p>
                T & L Dirtwork, Inc. handles all phases of work on oil fields, pipelines, dirt leveling, roads, and subdivision preparation, as well as other site preparation work.
              </p>
            </div>
            
            <div className="mt-8 lg:mt-12 flex flex-col sm:flex-row gap-6">
               <div className="flex-1 border-t border-bronze/30 pt-4">
                 <p className="font-heading font-bold text-lg lg:text-2xl text-black mb-1">THE T & L DIRTWORK TEAM</p>
                 <p className="text-[10px] lg:text-sm text-bronze uppercase tracking-widest">Dedicated Expertise</p>
               </div>
               <div className="flex-1 border-t border-bronze/30 pt-4 mt-2 sm:mt-0">
                 <p className="font-heading font-bold text-lg lg:text-2xl text-black mb-1">HEAVY EQUIPMENT</p>
                 <p className="text-[10px] lg:text-sm text-bronze uppercase tracking-widest">Reliable Fleet</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Services Section */}
      <section className="bg-black text-white py-12 lg:py-24 border-t-[0.5px] border-bronze/20">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="mb-12 flex flex-col items-start">
            <div className="flex items-center text-bronze mb-3 md:mb-4">
               <span className="w-8 md:w-12 h-[2px] bg-bronze mr-3 md:mr-4"></span>
               <span className="font-bold tracking-widest uppercase text-[9px] md:text-[11px]">What We Do</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl tracking-tighter uppercase text-white">
              OUR <span className="text-bronze">SERVICES</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {[
              { 
                title: "DIRTWORK", 
                desc: "Expert site preparation, grading, and excavation.",
                img: "/t&ldirtwork.jpeg", 
                delay: 0 
              },
              { 
                title: "HAULING", 
                desc: "Reliable transportation of materials, equipment, and debris.",
                img: "/t&lhauling.jpeg", 
                delay: 0.1 
              },
              { 
                title: "AGGREGATE", 
                desc: "Supplying top-quality aggregate materials for roads and foundations.",
                img: "/t&laggregate.jpeg", 
                delay: 0.2 
              },
              { 
                title: "MARINE CONSTRUCTION", 
                desc: "Specialized marine and coastal construction and preparation.",
                img: "/t&lmarineconstruction.jpeg", 
                delay: 0.3 
              }
            ].map((service, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: service.delay, duration: 0.6 }}
                key={i} 
                className="group relative h-[400px] lg:h-[450px] overflow-hidden bg-neutral-900 border-[0.5px] border-white/10 cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 lg:from-black/90 via-black/20 to-transparent group-hover:from-black/95 transition-colors duration-500 z-10"></div>
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="absolute inset-0 w-full h-full object-cover transform scale-110 lg:scale-100 group-hover:scale-110 transition-transform duration-700 ease-out opacity-50 lg:opacity-80 group-hover:opacity-50"
                  referrerPolicy="no-referrer"
                />
                
                {/* Corner Embellishments */}
                <div className="absolute top-6 left-6 w-8 h-[1px] bg-bronze z-20 scale-x-100 lg:scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
                <div className="absolute top-6 left-6 w-[1px] h-8 bg-bronze z-20 scale-y-100 lg:scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-500 ease-out"></div>
                <div className="absolute bottom-6 right-6 w-8 h-[1px] bg-bronze z-20 scale-x-100 lg:scale-x-0 origin-right group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
                <div className="absolute bottom-6 right-6 w-[1px] h-8 bg-bronze z-20 scale-y-100 lg:scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-out"></div>

                <div className="absolute bottom-0 left-0 w-full p-8 z-20 flex flex-col items-start translate-y-0 lg:translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="w-full lg:w-12 h-[2px] bg-bronze mb-4 transform group-hover:w-full transition-all duration-700 ease-out"></div>
                  <h3 className="font-heading font-black text-2xl lg:text-3xl text-white tracking-tighter uppercase mb-2">
                    {service.title}
                  </h3>
                  
                  <div className="max-h-32 lg:max-h-0 group-hover:max-h-32 overflow-hidden transition-all duration-500 ease-in-out">
                    <p className="text-sm font-light text-white/70 mb-6 mt-2 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {service.desc}
                    </p>
                  </div>

                  <span className="flex items-center text-bronze font-bold text-xs tracking-widest uppercase opacity-100 lg:opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    Learn More <ArrowRight size={14} className="ml-2" />
                  </span>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* 6. Why Choose Us / Advantage */}
      <section className="bg-black text-white py-8 lg:py-12 relative overflow-hidden border-t-[0.5px] border-white/10">
        
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <motion.img 
            style={{ y: sectionBgY }} 
            src="/t&ldirtworkimage1.jpeg" 
            alt="Why Choose Us Background" 
            className="absolute inset-0 w-full h-[180%] -top-[40%] object-cover opacity-100 scale-105" 
          />
          <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black opacity-60"></div>
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-stretch w-full py-8 lg:py-12 overflow-hidden">
          
          {/* Header Content - Left Aligned */}
          <div className="flex flex-col justify-center text-left lg:w-1/2 px-4 lg:pl-[max(2rem,calc(50vw-700px))] lg:pr-12 py-8">
            <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl tracking-tighter uppercase text-white mb-6 drop-shadow-xl">
              WHY CHOOSE <span className="text-bronze">US?</span>
            </h2>
            <div className="w-24 h-[4px] bg-bronze mb-8 shadow-[0_0_15px_rgba(167,54,2,0.5)]"></div>
            
            <p className="text-2xl md:text-3xl text-white font-bold mb-6 font-heading tracking-tight drop-shadow-md">
              When it comes to dirtwork and contracting, you need more than just equipment — you need a partner you can trust.
            </p>
            <p className="text-white/70 leading-relaxed font-light text-lg md:text-xl drop-shadow-sm">
              We take pride in offering quality contracting, honest pricing, and dependable service to customers across our region. Whether it's site preparation, dirt leveling, or excavation, we make the process straightforward and stress-free.
            </p>
          </div>

          {/* Animated Stats Cards - Staggered Right Bleed */}
          <div className="flex flex-col justify-center gap-6 relative w-full lg:w-1/2 items-center lg:items-end py-8">
             <div className="w-[90%] sm:w-[80%] lg:w-[85%] px-8 py-8 lg:px-12 flex flex-row items-center justify-between text-left bg-bronze/60 backdrop-blur-md shadow-[0_15px_50px_rgba(0,0,0,0.6)] rounded-none relative overflow-hidden border-none">
                <span className="font-heading font-black text-5xl lg:text-6xl tracking-tighter text-white relative z-10 drop-shadow-md">
                   <AnimatedCounter from={0} to={245} duration={2} suffix="+" />
                </span>
                <span className="font-bold tracking-widest uppercase text-xs lg:text-sm text-white/90 relative z-10 ml-6 text-right drop-shadow-sm">Satisfied<br/>Clients</span>
             </div>
             
             <div className="w-[90%] sm:w-[80%] lg:w-[98%] px-8 py-8 lg:px-12 flex flex-row items-center justify-between text-left bg-bronze/60 backdrop-blur-md shadow-[0_15px_50px_rgba(0,0,0,0.6)] rounded-none relative overflow-hidden border-none">
                <span className="font-heading font-black text-5xl lg:text-6xl tracking-tighter text-white relative z-10 drop-shadow-md">
                   <AnimatedCounter from={0} to={2000} duration={2.5} suffix="+" />
                </span>
                <span className="font-bold tracking-widest uppercase text-xs lg:text-sm text-white/90 relative z-10 ml-6 text-right drop-shadow-sm">Projects<br/>Completed</span>
             </div>
             
             <div className="w-[90%] sm:w-[80%] lg:w-[75%] px-8 py-8 lg:px-12 flex flex-row items-center justify-between text-left bg-bronze/60 backdrop-blur-md shadow-[0_15px_50px_rgba(0,0,0,0.6)] rounded-none relative overflow-hidden border-none">
                <span className="font-heading font-black text-5xl lg:text-6xl tracking-tighter text-white relative z-10 drop-shadow-md">
                   <AnimatedCounter from={0} to={24} duration={1.5} suffix="+" />
                </span>
                <span className="font-bold tracking-widest uppercase text-xs lg:text-sm text-white/90 relative z-10 ml-6 text-right drop-shadow-sm">Years<br/>Experience</span>
             </div>
          </div>
          
        </div>
      </section>

      {/* 7. Our Work / Featured Inventory (Dynamic Gallery) */}
      <section className="pt-16 pb-4 md:py-24 bg-neutral-950 border-t border-white/5">
        <div className="max-w-[1600px] mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-0 mb-8 md:mb-12">
             <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl tracking-tighter uppercase text-white leading-tight">THE T & L DIRTWORK STANDARD</h2>
             <div className="hidden md:block h-[1px] flex-1 bg-white/10 mx-8"></div>
             <button className="text-bronze font-bold tracking-widest text-sm uppercase hover:text-white transition-colors flex items-center">
               View All <ArrowRight size={16} className="ml-2" />
             </button>
          </div>
          
          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] md:auto-rows-[300px] gap-4">
            <div 
              onClick={() => { setLightboxIndex(0); setLightboxOpen(true); }}
              className="md:col-span-2 md:row-span-2 relative group overflow-hidden bg-neutral-900 border-[0.5px] border-white/10 cursor-pointer"
            >
               <img src={galleryImages[0]} alt="Gallery 1" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            </div>
            <div 
              onClick={() => { setLightboxIndex(1); setLightboxOpen(true); }}
              className="relative group overflow-hidden bg-neutral-900 border-[0.5px] border-white/10 cursor-pointer"
            >
               <img src={galleryImages[1]} alt="Gallery 2" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            </div>
            <div 
               onClick={() => { setLightboxIndex(2); setLightboxOpen(true); }}
               className="relative group overflow-hidden bg-neutral-900 border-[0.5px] border-white/10 cursor-pointer"
            >
               <img src={galleryImages[2]} alt="Gallery 3" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            </div>
            <div 
               onClick={() => { setLightboxIndex(3); setLightboxOpen(true); }}
               className="md:col-span-2 relative group overflow-hidden bg-neutral-900 border-[0.5px] border-white/10 cursor-pointer"
            >
               <img src={galleryImages[3]} alt="Gallery 4" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* 8. Call to Action */}
      <section ref={ctaRef} className="relative py-32 bg-black overflow-hidden flex items-center justify-center border-y border-bronze/30">
        <div className="absolute inset-0 opacity-40 overflow-hidden">
          <motion.img style={{ y: ctaImageY }} src="/t&ldirtworkimage3.jpeg" alt="Sunset Port" className="absolute left-0 w-full h-[130%] -top-[15%] object-cover" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-black/60 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h2 className="font-heading font-black text-4xl md:text-6xl tracking-tighter uppercase mb-6 drop-shadow-2xl">
            READY TO START YOUR NEXT SITE PROJECT?
          </h2>
          <p className="text-xl text-neutral-300 font-light mb-12 drop-shadow-md">
            Connect with T & L Dirtwork, Inc. for expert site preparation, hauling, and marine construction services.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-bronze hover:bg-white hover:text-black text-white font-heading font-bold tracking-widest text-sm px-10 py-5 transition-colors border border-bronze hover:border-white">
              CONTACT OUR TEAM
            </button>
            <button className="bg-transparent hover:bg-bronze text-white font-heading font-bold tracking-widest text-sm px-10 py-5 transition-colors border border-bronze">
              OUR SERVICES
            </button>
          </div>
        </div>
      </section>

      {/* 8.5. Headquarters Location Map */}
      <section className="relative w-full h-[70vh] min-h-[600px] bg-white overflow-hidden border-b-[0.5px] border-black/5">
        {/* Embedded Location Map */}
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13418.156557613563!2d-92.24729096738283!3d31.848529999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x862f1e2920fecbad%3A0xe3f1e1a5f6e80b43!2s683%20Hwy%20459%2C%20Olla%2C%20LA%2071465!5e0!3m2!1sen!2sus!4v1713292415177!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={false} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 z-0"
        ></iframe>

        {/* Floating Location Card */}
        <div className="absolute z-20 bottom-12 left-1/2 -translate-x-1/2 lg:left-12 lg:translate-x-0 bg-neutral-900 border border-white/5 border-t-4 border-t-bronze p-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col min-w-[320px]">
          <h3 className="font-heading font-black text-2xl text-white tracking-tighter uppercase mb-2">HEADQUARTERS</h3>
          <div className="w-12 h-[2px] bg-white/20 mb-6"></div>
          <p className="text-white/70 font-light flex items-start mb-2">
            <MapPin className="text-bronze mr-4 mt-1" size={20} />
            <span className="text-lg leading-snug text-white">683 Highway 459<br/>Olla, LA 71465</span>
          </p>
          <a href="https://maps.google.com/?q=683+Highway+459,+Olla,+LA+71465" target="_blank" rel="noreferrer" className="text-bronze hover:text-white transition-colors text-xs font-bold tracking-widest uppercase mt-6 flex items-center group">
             Get Directions <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

          </>
        } />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* 9. Footer */}
      <footer className="bg-neutral-950 pt-0 relative z-10">
        
        {/* Main Footer Content */}
        <div className="max-w-[1600px] mx-auto px-8 py-20 border-b-[0.5px] border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            
            {/* Col 1 */}
            <div>
               <div className="mb-6">
                  <img src="/newt&llogo.png" alt="T & L Dirtwork, Inc." className="h-14 md:h-16 w-auto object-contain" />
               </div>
               <p className="text-bronze font-heading font-bold tracking-widest text-xs uppercase mb-6">Experience. Integrity. Value.</p>
               <p className="text-neutral-500 font-light text-sm max-w-xs">
                 Expert dirtwork, clearing, and site preparation contractors based in Olla, LA.
               </p>
            </div>

            {/* Col 2 */}
            <div>
               <h4 className="text-white font-heading font-bold tracking-widest text-sm uppercase mb-6">Quick Links</h4>
               <ul className="space-y-3 text-neutral-400 font-light text-sm">
                 <li><a href="#" className="hover:text-bronze transition-colors">New Equipment</a></li>
                 <li><a href="#" className="hover:text-bronze transition-colors">Used Equipment</a></li>
                 <li><a href="#" className="hover:text-bronze transition-colors">Sell Your Equipment</a></li>
                 <li><a href="#" className="hover:text-bronze transition-colors">About the Partners</a></li>
               </ul>
            </div>

            {/* Col 3 */}
            <div>
               <h4 className="text-white font-heading font-bold tracking-widest text-sm uppercase mb-6">Contact Us</h4>
               <ul className="space-y-4 text-neutral-400 font-light text-sm">
                 <li className="flex items-start">
                   <MapPin size={18} className="text-bronze mr-3 flex-shrink-0 mt-0.5" />
                   <span>Headquarters<br/>683 Highway 459, Olla, LA 71465</span>
                 </li>
                 <li className="flex items-start">
                   <Phone size={18} className="text-bronze mr-3 flex-shrink-0 mt-0.5" />
                   <div className="flex flex-col">
                     <a href="tel:3189925948" className="hover:text-white transition-colors">Office: (318) 992-5948</a>
                     <a href="tel:3184818142" className="text-bronze hover:text-white transition-colors mt-1 font-bold">Emergency 24/7: (318) 481-8142</a>
                   </div>
                 </li>
                 <li className="flex items-start">
                   <History size={18} className="text-bronze mr-3 flex-shrink-0 mt-0.5" />
                   <span>Monday – Friday<br/>8am – 4pm</span>
                 </li>
                 <li className="flex items-start">
                   <Mail size={18} className="text-bronze mr-3 flex-shrink-0 mt-0.5" />
                   <a href="mailto:tony@tldirtwork.com" className="hover:text-white transition-colors">tony@tldirtwork.com</a>
                 </li>
               </ul>
            </div>

            {/* Col 4 */}
            <div>
               <h4 className="text-white font-heading font-bold tracking-widest text-sm uppercase mb-6">Connect</h4>
               <form className="flex flex-col gap-3">
                 <input 
                   type="text" 
                   placeholder="Name" 
                   className="bg-neutral-900/50 border border-white/10 text-white text-sm px-4 py-2.5 focus:outline-none focus:border-bronze transition-colors w-full"
                 />
                 <input 
                   type="email" 
                   placeholder="Email Address" 
                   className="bg-neutral-900/50 border border-white/10 text-white text-sm px-4 py-2.5 focus:outline-none focus:border-bronze transition-colors w-full"
                 />
                 <textarea 
                   placeholder="Message" 
                   rows={2}
                   className="bg-neutral-900/50 border border-white/10 text-white text-sm px-4 py-2.5 focus:outline-none focus:border-bronze transition-colors resize-none w-full"
                 />
                 <button 
                   type="button" 
                   className="bg-bronze hover:bg-white hover:text-black text-white font-bold tracking-widest text-[10px] uppercase py-3 transition-colors mt-1 border border-transparent hover:border-white w-full"
                 >
                   Send Message
                 </button>
               </form>
            </div>

          </div>
        </div>

        {/* Copyright */}
        <div className="max-w-[1600px] mx-auto px-8 py-8 flex flex-col md:flex-row items-center justify-between text-neutral-600 text-xs font-light">
          <p>&copy; {new Date().getFullYear()} T & L Dirtwork, Inc. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </footer>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[110] bg-black/95 backdrop-blur-md flex items-center justify-center"
          >
            <button 
              onClick={() => setLightboxOpen(false)}
              className="absolute top-6 right-6 text-white hover:text-bronze transition-colors z-[120] p-2"
            >
              <X size={32} />
            </button>
            
            <button 
              onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex - 1 + galleryImages.length) % galleryImages.length); }}
              className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 text-white hover:text-bronze transition-colors z-[120] p-4"
            >
              <ChevronLeft size={48} />
            </button>
            
            <button 
              onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex + 1) % galleryImages.length); }}
              className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 text-white hover:text-bronze transition-colors z-[120] p-4"
            >
              <ChevronRight size={48} />
            </button>

            <motion.img 
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              src={galleryImages[lightboxIndex]}
              alt="Lightbox Image"
              className="max-w-[90vw] max-h-[85vh] object-contain border-[0.5px] border-white/10"
              referrerPolicy="no-referrer"
            />
            
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 text-sm font-bold tracking-widest uppercase z-[120]">
               {lightboxIndex + 1} / {galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <FloatingContactWidget />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
}
