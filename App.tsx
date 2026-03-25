
import React, { useState, useEffect, useCallback } from 'react';
import { ProjectCard } from './components/ProjectCard';
import { BIO, FILMOGRAPHY, PROJECTS } from './constants';
import { Menu, X, ArrowRight, ArrowDown, Instagram, Linkedin, Mail, Facebook, Film } from 'lucide-react';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setScrolled(currentScrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['work', 'bio', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) setActiveSection(current);
      else if (currentScrollY < 100) setActiveSection('home');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed nav
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: id === 'home' ? 0 : offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  }, []);

  const shorts = PROJECTS.filter(p => p.category === 'Shorts');
  const series = PROJECTS.filter(p => p.category === 'Series');

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-amber-500 selection:text-black overflow-x-hidden">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 px-6 py-4 md:px-12 ${
          scrolled || isMenuOpen ? 'bg-black/95 backdrop-blur-md py-3 border-b border-white/5 shadow-2xl' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center relative">
          <a 
            href="#home" 
            onClick={(e) => scrollTo(e, 'home')}
            className="text-xl font-serif font-black tracking-tighter uppercase cursor-pointer group"
          >
            Abhishek Gupta<span className="text-amber-500 text-xs ml-1 font-sans group-hover:animate-ping inline-block">.</span>
          </a>
          
          <div className="hidden md:flex gap-10 items-center">
            {['Work', 'Bio', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => scrollTo(e, item.toLowerCase())}
                className={`text-[10px] uppercase tracking-[0.4em] font-medium transition-all duration-300 hover:text-amber-400 ${
                  activeSection === item.toLowerCase() ? 'text-amber-500' : 'text-neutral-400'
                }`}
              >
                {item}
              </a>
            ))}
            <a 
              href="mailto:abhishekgupta1704@gmail.com" 
              className="text-[10px] uppercase tracking-[0.3em] font-bold bg-white text-black px-6 py-3 hover:bg-amber-400 transition-all duration-300 rounded-sm"
            >
              Start Collaboration
            </a>
          </div>

          <button 
            className="md:hidden text-white relative z-[110] p-2 hover:bg-white/5 rounded-full transition-colors" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black z-[90] flex flex-col items-center justify-center gap-12 transition-all duration-700 cubic-bezier(0.85, 0, 0.15, 1) ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <div className="flex flex-col items-center gap-8">
          {['Work', 'Bio', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => scrollTo(e, item.toLowerCase())}
              className="text-5xl font-serif font-bold tracking-widest hover:text-amber-400 transition-colors transform hover:scale-110 duration-300"
            >
              {item}
            </a>
          ))}
        </div>
        
        <div className="flex gap-6 mt-12 opacity-50">
          <a href="https://www.instagram.com/1704.abhishek" target="_blank" rel="noopener noreferrer">
            <Instagram size={20} className="hover:text-amber-400 cursor-pointer" />
          </a>
          <a href="https://www.facebook.com/abhishekgupta1704" target="_blank" rel="noopener noreferrer">
            <Facebook size={20} className="hover:text-amber-400 cursor-pointer" />
          </a>
          <a href="https://www.linkedin.com/placeholder/" target="_blank" rel="noopener noreferrer">
            <Linkedin size={20} className="hover:text-amber-400 cursor-pointer" />
          </a>
          <a href="https://www.imdb.com/name/nm9967492/" target="_blank" rel="noopener noreferrer">
            <Film size={20} className="hover:text-amber-400 cursor-pointer" />
          </a>
          <a href="mailto:abhishekgupta1704@gmail.com">
            <Mail size={20} className="hover:text-amber-400 cursor-pointer" />
          </a>
        </div>
      </div>

      {/* Hero Section with Parallax */}
      <header id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{ transform: `translateY(${scrollY * 0.4}px)` }}
        >
          <img 
            src="/film-posters/2018,SacredGames,WebSeries,Netflix.webp" 
            className="w-full h-full object-cover opacity-30 grayscale scale-110"
            alt="Cinematic background"
          />
          <div className="absolute inset-0 cinematic-overlay" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                    <h1 className="text-6xl md:text-9xl font-serif font-bold tracking-tighter text-white mb-8 leading-none drop-shadow-2xl">
            ABHISHEK <br /> GUPTA
          </h1>
          <p className="text-sm md:text-xl text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
            Film Editor & Filmmaker based in Europe. 
            Crafting atmosphere and human nuance for 
            <span className="text-white font-medium italic px-2">Netflix, Amazon Prime</span> & Global Cinema.
          </p>
          
          <div className="mt-16 flex flex-col md:flex-row gap-6 justify-center items-center">
            <a 
              href="#work" 
              onClick={(e) => scrollTo(e, 'work')}
              className="group flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] font-bold border border-white/20 px-12 py-6 hover:bg-white hover:text-black transition-all duration-500 rounded-full bg-black/40 backdrop-blur-sm"
            >
              Explore Portfolio <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Floating Decorative Elements */}
        <div 
          className="absolute top-1/4 right-[10%] text-[15vw] font-serif font-black text-white/[0.02] select-none pointer-events-none"
          style={{ transform: `translateY(${scrollY * -0.1}px)` }}
        >
          REEL
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
           <div className="w-[1px] h-20 bg-gradient-to-b from-transparent to-white/30" />
           <span className="text-[8px] uppercase tracking-[0.5em] text-white/40 rotate-90">Scroll</span>
        </div>
      </header>

      {/* Featured Series Section */}
      <section id="work" className="relative py-32 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-20">
        <div 
          className="absolute -left-20 top-0 text-[20vw] font-serif font-black text-white/[0.03] select-none pointer-events-none vertical-text"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        >
          WORK
        </div>

        <div className="relative flex flex-col md:flex-row justify-between items-end mb-20 gap-6 z-10">
          <div className="max-w-2xl">
            <span className="text-amber-500 text-[10px] uppercase tracking-[0.5em] font-black mb-4 block">Selected Works</span>
            <h2 className="text-5xl md:text-7xl font-serif font-bold tracking-tight mb-4">Mainstream Series_</h2>
            <p className="text-neutral-500 text-lg italic font-light">
              Collaborations with global streaming giants and visionaries.
            </p>
          </div>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 z-10">
          {series.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Shorts Section */}
      <section className="relative py-32 bg-neutral-900/20 border-y border-white/5 overflow-hidden">
        <div 
          className="absolute right-0 bottom-0 text-[15vw] font-serif font-black text-white/[0.02] select-none pointer-events-none"
          style={{ transform: `translateX(${(scrollY - 1500) * 0.1}px)` }}
        >
          FESTIVALS
        </div>

        <div className="px-6 md:px-12 max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
            <div className="max-w-2xl">
              <span className="text-amber-500 text-[10px] uppercase tracking-[0.5em] font-black mb-4 block">Festival Circuit</span>
              <h2 className="text-5xl md:text-7xl font-serif font-bold tracking-tight mb-4">Short Films_</h2>
              <p className="text-neutral-500 text-lg italic font-light">
                Exploring the boundaries of narrative and visual poetry.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {shorts.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
        <div
          className="absolute left-0 top-12 text-[16vw] font-serif font-black text-white/[0.03] select-none pointer-events-none"
          style={{ transform: `translateY(${(scrollY - 1900) * 0.08}px)` }}
        >
          IMDb
        </div>

        <div className="relative z-10 mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-3xl">
            <span className="text-amber-500 text-[10px] uppercase tracking-[0.5em] font-black mb-4 block">Verified Credits</span>
            <h2 className="text-5xl md:text-7xl font-serif font-bold tracking-tight mb-4">Filmography_</h2>
            <p className="text-neutral-500 text-lg italic font-light">
              A broader credit roll pulled from the IMDb profile, spanning series, features, shorts, and current productions.
            </p>
          </div>

          <a
            href="https://www.imdb.com/name/nm9967492/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest border border-white/10 bg-white/5 px-6 py-4 rounded-full hover:border-amber-500/40 hover:text-amber-300 transition-colors"
          >
            <Film size={14} /> Open IMDb Profile <ArrowRight size={14} />
          </a>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {FILMOGRAPHY.map((group) => (
            <article key={group.title} className="rounded-3xl border border-white/8 bg-white/[0.03] backdrop-blur-sm p-8 shadow-2xl">
              <span className="text-amber-500 text-[9px] uppercase tracking-[0.4em] font-black mb-4 block">{group.eyebrow}</span>
              <h3 className="text-3xl font-serif font-bold tracking-tight text-white mb-8">{group.title}</h3>

              <div className="space-y-5">
                {group.credits.map((credit) => (
                  <div key={`${group.title}-${credit.title}-${credit.year}`} className="border-t border-white/8 pt-5 first:border-t-0 first:pt-0">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="text-lg font-serif text-white tracking-tight">{credit.title}</h4>
                        <p className="mt-2 text-[11px] uppercase tracking-[0.28em] text-neutral-500">
                          {credit.format} • {credit.credit}
                          {credit.episodes ? ` • ${credit.episodes}` : ''}
                        </p>
                      </div>
                      <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 whitespace-nowrap">{credit.year}</span>
                    </div>

                    {(credit.status || credit.note) && (
                      <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                        {credit.status ? <span className="text-neutral-200">{credit.status}</span> : null}
                        {credit.status && credit.note ? ' • ' : ''}
                        {credit.note ?? ''}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Bio Section with Parallax Image */}
      <section id="bio" className="relative py-48 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-20 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center relative z-10">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg group">
            <div 
              className="w-full h-[120%] absolute -top-[10%]"
              style={{ transform: `translateY(${(scrollY - 2500) * 0.05}px)` }}
            >
              <img 
                src="/film-posters/2025,Umbral,ShortFilm.webp" 
                className="w-full h-full object-cover grayscale opacity-70 group-hover:opacity-90 transition-opacity duration-700"
                alt="Abhishek Gupta portrait"
              />
            </div>
            <div className="absolute inset-0 border border-white/10 m-4 pointer-events-none" />
          </div>
          
          <div className="relative">
            <span className="text-amber-500 text-[10px] uppercase tracking-[0.6em] font-black mb-10 block">The Filmmaker</span>
            <h2 className="text-5xl md:text-8xl font-serif font-bold mb-12 leading-tight tracking-tighter">Story. Atmosphere. Nuance._</h2>
            <div className="space-y-8 text-neutral-400 leading-relaxed text-xl font-light">
              <p>{BIO}</p>
            </div>
            
            <div className="mt-16 pt-16 border-t border-white/5 grid grid-cols-2 gap-12">
              <div>
                <h4 className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-3">Currently Based</h4>
                <p className="text-neutral-200 text-lg font-serif italic">Europe / Tallinn</p>
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-3">Craft Focus</h4>
                <p className="text-neutral-200 text-lg font-serif italic">Narrative Editing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Awards Ticker */}
      <div className="py-24 border-y border-white/5 bg-black/50 overflow-hidden flex whitespace-nowrap relative z-10">
        <div className="flex animate-marquee gap-24 items-center text-white/10 hover:text-white/30 transition-colors duration-500">
          {[...Array(5)].map((_, i) => (
            <React.Fragment key={i}>
              <span className="text-6xl font-serif italic tracking-widest uppercase">BAFTA Breakthrough 2024</span>
              <span className="w-3 h-3 rounded-full bg-amber-500/20" />
              <span className="text-6xl font-serif italic tracking-widest uppercase">Int. Emmy Nominee</span>
              <span className="w-3 h-3 rounded-full bg-amber-500/20" />
              <span className="text-6xl font-serif italic tracking-widest uppercase">Erasmus Mundus Scholar</span>
              <span className="w-3 h-3 rounded-full bg-amber-500/20" />
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Footer / Contact Section */}
      <footer id="contact" className="relative pt-40 pb-16 px-6 md:px-12 bg-black scroll-mt-20 overflow-hidden">
        <div 
          className="absolute left-1/2 -translate-x-1/2 top-0 text-[30vw] font-serif font-black text-white/[0.01] select-none pointer-events-none"
          style={{ transform: `translate(-50%, ${(scrollY - 4000) * 0.1}px)` }}
        >
          EDIT
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-40">
            <span className="text-amber-500 text-[10px] uppercase tracking-[0.8em] font-black mb-12 block">Collaborations & Inquiries</span>
            <a 
              href="mailto:abhishekgupta1704@gmail.com" 
              className="text-lg md:text-2xl uppercase tracking-[0.3em] font-bold bg-white text-black px-12 py-6 hover:bg-amber-400 transition-all duration-300 rounded-sm inline-block"
            >
              Start Collaboration
            </a>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-12 border-t border-white/5 pt-16">
            <div className="flex gap-10">
              <a href="https://www.instagram.com/1704.abhishek" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-all transform hover:-translate-y-1">
                <Instagram size={22} />
              </a>
              <a href="https://www.facebook.com/abhishekgupta1704" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-all transform hover:-translate-y-1">
                <Facebook size={22} />
              </a>
              <a href="https://www.linkedin.com/placeholder/" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-all transform hover:-translate-y-1">
                <Linkedin size={22} />
              </a>
              <a href="https://www.imdb.com/name/nm9967492/" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-all transform hover:-translate-y-1">
                <Film size={22} />
              </a>
              <a href="mailto:abhishekgupta1704@gmail.com" className="text-neutral-500 hover:text-white transition-all transform hover:-translate-y-1">
                <Mail size={22} />
              </a>
            </div>
            
            <div className="text-[9px] uppercase tracking-[0.5em] text-neutral-700 font-bold">
              © 2026 Abhishek Gupta • Cinematic Post-Production
            </div>
            
            <button 
              onClick={(e) => scrollTo(e, 'home')}
              className="text-[9px] uppercase tracking-[0.5em] text-neutral-400 hover:text-white transition-colors flex items-center gap-4 group"
            >
              Back to Top <div className="w-10 h-[1px] bg-neutral-800 group-hover:bg-amber-500 transition-colors" />
            </button>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;
