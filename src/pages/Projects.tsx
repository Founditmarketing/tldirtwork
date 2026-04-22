import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

type MediaType = 'image' | 'video';

interface GalleryMedia {
  src: string;
  type: MediaType;
  alt: string;
}

export default function Projects() {
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { scrollY } = useScroll();
  const ctaImageY = useTransform(scrollY, [0, 6000], [0, -400]);

  // Gallery Data
  const mediaItems: GalleryMedia[] = [
    { src: '/TL.mp4', type: 'video', alt: 'T & L Dirtwork Operations Video' },
    { src: '/t&ldirtworkgallery.jpg', type: 'image', alt: 'Site Preparation Gallery 1' },
    { src: '/t&ldirtworkgallery1.jpg', type: 'image', alt: 'Site Preparation Gallery 2' },
    { src: '/t&ldirtworkgallery3.png', type: 'image', alt: 'Site Preparation Gallery 3' },
    { src: '/t&ldirtworkgallery4.png', type: 'image', alt: 'Site Preparation Gallery 4' },
    { src: '/t&ldirtwork.jpeg', type: 'image', alt: 'Dirtwork Project' },
    { src: '/t&lhauling.jpeg', type: 'image', alt: 'Hauling Project' },
    { src: '/t&laggregate.jpeg', type: 'image', alt: 'Aggregate Project' },
    { src: '/t&lmarineconstruction.jpeg', type: 'image', alt: 'Marine Construction Project' }
  ];

  // Lightbox State
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = 'auto';
  };

  const nextMedia = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % mediaItems.length);
    }
  };

  const prevMedia = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + mediaItems.length) % mediaItems.length);
    }
  };

  // Setup Keyboard Navigation for Lightbox
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (lightboxIndex === null) return;
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % mediaItems.length : null));
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev !== null ? (prev - 1 + mediaItems.length) % mediaItems.length : null));
      } else if (e.key === 'Escape') {
        closeLightbox();
      }
    }
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, mediaItems.length]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col font-sans relative overflow-hidden">
      {/* Background styling to match the theme */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-bronze/10 via-[#0a0a0a] to-[#0a0a0a] -z-10 pointer-events-none"></div>
      
      {/* Hero Section */}
      <section className="relative w-full flex flex-col justify-end min-h-[50vh] lg:min-h-[auto] pt-32 lg:pt-[208px] pb-16 lg:pb-0 overflow-hidden lg:overflow-visible">
        {/* Mobile Header Image Background */}
        <div className="absolute inset-0 w-full h-full lg:hidden block z-0 bg-[#0a0a0a]">
          <img src="/t&ldirtworkgallery.jpg" alt="T & L Projects" className="w-full h-full object-cover opacity-60 mix-blend-luminosity" />
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
              <span className="font-bold tracking-widest uppercase text-[11px] text-white">Our Work</span>
            </div>
            <h1 className="font-heading font-black text-5xl md:text-7xl lg:text-8xl tracking-tighter uppercase leading-[0.9] drop-shadow-2xl">
              PROJECT <span className="text-bronze">GALLERY</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Body Section: Grid */}
      <section className="w-full bg-[#0a0a0a] relative p-4 lg:p-8">
        <div className="w-full mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 grid-flow-row-dense auto-rows-[250px] md:auto-rows-[300px] gap-2 md:gap-4 lg:gap-4">
            {mediaItems.map((item, index) => {
              const gridClasses = [
                'md:col-span-2 md:row-span-2', // 0 (Video - Large Block)
                'md:col-span-2 md:row-span-1', // 1 (Horizontal wide)
                'md:col-span-1 md:row-span-1', // 2
                'md:col-span-1 md:row-span-2', // 3 (Vertical tall)
                'md:col-span-2 md:row-span-1', // 4
                'md:col-span-1 md:row-span-1', // 5
                'md:col-span-2 md:row-span-1', // 6
                'md:col-span-1 md:row-span-1', // 7
                'md:col-span-1 md:row-span-1'  // 8
              ];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className={`group relative w-full h-full overflow-hidden bg-black cursor-pointer shadow-xl shadow-black/10 ${gridClasses[index % gridClasses.length]}`}
                  onClick={() => openLightbox(index)}
                >
                {item.type === 'video' ? (
                  <div className="w-full h-full relative">
                    <video 
                      src={item.src} 
                      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105"
                      muted loop playsInline
                    />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-active:scale-95 transition-transform duration-300">
                      <div className="w-16 h-16 rounded-full bg-bronze/90 flex items-center justify-center shadow-2xl backdrop-blur-sm">
                        <Play fill="white" className="text-white ml-1 w-6 h-6" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <img 
                    src={item.src} 
                    alt={item.alt}
                    className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" 
                  />
                )}
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox Rendering */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Top Bar */}
            <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-50">
              <span className="text-white/50 text-xs font-bold tracking-[0.2em]">{lightboxIndex + 1} / {mediaItems.length}</span>
              <button 
                onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
                className="text-white hover:text-bronze transition-colors p-2"
              >
                <X size={32} />
              </button>
            </div>

            {/* Navigation Buttons */}
            <button 
              onClick={prevMedia}
              className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 text-white hover:text-bronze transition-colors p-4 z-50 mix-blend-difference"
            >
              <ChevronLeft size={48} strokeWidth={1} />
            </button>
            
            <button 
              onClick={nextMedia}
              className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 text-white hover:text-bronze transition-colors p-4 z-50 mix-blend-difference"
            >
              <ChevronRight size={48} strokeWidth={1} />
            </button>

            {/* Media Content */}
            <div 
              className="relative w-full h-full flex items-center justify-center p-4 lg:p-20"
              onClick={(e) => e.stopPropagation()} // Prevent clicks on media from closing lightbox
            >
              <AnimatePresence mode="wait">
                <motion.div
                   key={lightboxIndex}
                   initial={{ opacity: 0, scale: 0.95 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0, scale: 1.05 }}
                   transition={{ duration: 0.3 }}
                   className="w-full h-full flex items-center justify-center"
                >
                  {mediaItems[lightboxIndex].type === 'video' ? (
                    <video 
                      src={mediaItems[lightboxIndex].src} 
                      className="max-w-full max-h-full object-contain shadow-2xl"
                      controls autoPlay loop playsInline
                    />
                  ) : (
                    <img 
                      src={mediaItems[lightboxIndex].src} 
                      alt={mediaItems[lightboxIndex].alt}
                      className="max-w-full max-h-full object-contain shadow-2xl select-none"
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

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
