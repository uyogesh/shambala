
import React from 'react';

interface HeroSectionProps {
  id: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ id }) => {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section 
      id={id} 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-slate-100 relative overflow-hidden px-4"
    >
      {/* Subtle abstract background pattern for dark theme */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="heroPatternDark" patternUnits="userSpaceOnUse" width="80" height="80" patternTransform="scale(1) rotate(30)">
              <circle cx="10" cy="10" r="1.5" fill="currentColor"/>
              <circle cx="40" cy="50" r="1" fill="currentColor"/>
              <path d="M0 0 L10 10 M30 0 L40 10 M0 30 L10 40 M30 30 L40 40" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroPatternDark)" />
        </svg>
      </div>
      
      <div className="relative z-10 text-center space-y-10 max-w-4xl">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-400 to-pink-500" style={{fontFamily: "'Playfair Display', serif"}}>
          Shambala LLC
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
          Innovative Software Solutions: From Advanced Web Development to Cutting-Edge AI Workflows & Agentic Systems.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-5 sm:space-y-0 sm:space-x-6 pt-4">
          <a
            href="#contact"
            onClick={scrollToContact}
            className="text-white font-semibold py-3.5 px-10 rounded-xl text-lg shadow-lg 
                       bg-gradient-to-r from-sky-500 via-purple-600 to-pink-600 
                       hover:from-sky-600 hover:via-purple-700 hover:to-pink-700
                       transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-500/50"
          >
            Get In Touch
          </a>
          <a
            href="#services"
            onClick={(e) => {
                e.preventDefault();
                document.getElementById('services')?.scrollIntoView({behavior: 'smooth'});
            }}
            className="text-slate-100 font-semibold py-3.5 px-10 rounded-xl text-lg shadow-lg 
                       bg-slate-700/50 border-2 border-slate-600 hover:border-sky-500
                       hover:bg-slate-700/80 hover:text-white
                       transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-sky-500/50"
          >
            Our Services
          </a>
        </div>
      </div>
       {/* Animated Chevrons */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });}} className="animate-bounce block p-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-sky-400 opacity-70 hover:opacity-100">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;