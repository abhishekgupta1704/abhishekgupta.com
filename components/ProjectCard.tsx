
import React, { useState, useEffect, useRef } from 'react';
import { Project } from '../types';
import { Play, Trophy } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offsetY, setOffsetY] = useState(0);
  const hasPoster = Boolean(project.posterUrl);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollProgress = (rect.top / window.innerHeight);
      setOffsetY(scrollProgress * 20); // subtle shift
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="group relative overflow-hidden bg-neutral-900 rounded-lg aspect-[2/3] transition-all duration-700 hover:scale-[1.01] cursor-pointer shadow-xl"
    >
      {/* Poster Image with Parallax */}
      <div 
        className="absolute inset-0 w-full h-[120%] -top-[10%] transition-transform duration-700 ease-out group-hover:scale-105"
        style={{ transform: `translateY(${offsetY}px)` }}
      >
        {hasPoster ? (
          <img 
            src={project.posterUrl} 
            alt={project.title}
            className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-40 group-hover:grayscale-0 transition-all duration-700"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.2),transparent_42%),linear-gradient(160deg,#1a1a1a_0%,#090909_58%,#111827_100%)] px-8 text-center">
            <div>
              <div className="mb-5 text-[9px] uppercase tracking-[0.55em] text-amber-400/70">
                Poster Placeholder
              </div>
              <div className="font-serif text-4xl font-bold tracking-tight text-white">
                {project.placeholderLabel ?? project.title}
              </div>
              {project.format && (
                <div className="mt-4 text-[11px] uppercase tracking-[0.45em] text-white/35">
                  {project.format}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      
      {/* Cinematic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end transform transition-all duration-500 group-hover:translate-y-[-10px]">
        <div className="mb-4">
          {(project.platforms || project.year || project.credit || project.episodes) && (
            <div className="flex flex-wrap gap-2 mb-3">
              {project.platforms?.map(p => (
                <span key={p} className="text-[9px] uppercase tracking-[0.3em] bg-amber-500/20 px-2 py-1 rounded text-amber-500 font-bold backdrop-blur-md">
                  {p}
                </span>
              ))}
              {project.year && (
                <span className="text-[9px] uppercase tracking-[0.3em] bg-white/10 px-2 py-1 rounded text-white/75 font-bold backdrop-blur-md">
                  {project.year}
                </span>
              )}
              {project.credit && (
                <span className="text-[9px] uppercase tracking-[0.3em] bg-white/10 px-2 py-1 rounded text-white/75 font-bold backdrop-blur-md">
                  {project.credit}
                </span>
              )}
              {project.episodes && (
                <span className="text-[9px] uppercase tracking-[0.3em] bg-white/10 px-2 py-1 rounded text-white/75 font-bold backdrop-blur-md">
                  {project.episodes}
                </span>
              )}
            </div>
          )}
          <h3 className="text-3xl font-serif font-bold tracking-tight text-white group-hover:text-amber-200 transition-colors leading-tight">
            {project.title}
          </h3>
        </div>

        <p className="text-sm text-neutral-300 line-clamp-2 mb-6 opacity-0 group-hover:opacity-100 group-hover:line-clamp-none transition-all duration-700 delay-100">
          {project.synopsis}
        </p>

        <div className="flex flex-wrap gap-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-200">
          {project.trailerUrl && (
            <a 
              href={project.trailerUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest bg-white text-black px-6 py-3 rounded-full hover:bg-amber-400 transition-colors"
            >
              <Play size={12} fill="currentColor" /> Play Trailer
            </a>
          )}
          
          {project.awards && project.awards.length > 0 && (
            <div className="w-full mt-4 border-t border-white/10 pt-6">
              <div className="flex items-center gap-2 text-amber-200/80 text-[9px] uppercase tracking-[0.2em] mb-3 font-black">
                <Trophy size={14} /> Accolades
              </div>
              <ul className="space-y-2">
                {project.awards.map((award, idx) => (
                  <li key={idx} className="text-[10px] text-neutral-400 flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-amber-500/40 mt-1.5 shrink-0" />
                    <span>
                      <span className="text-neutral-200 font-semibold">{award.title}:</span> {award.festival}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
