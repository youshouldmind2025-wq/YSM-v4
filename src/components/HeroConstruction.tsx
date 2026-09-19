import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowDown, 
  Leaf, 
  Sparkles, 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX
} from 'lucide-react';

const TypewriterText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let timeout: number;
    
    if (displayText.length < text.length) {
      timeout = window.setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, 40);
    } else {
      timeout = window.setTimeout(() => {
        setDisplayText('');
      }, 5000);
    }
    
    return () => window.clearTimeout(timeout);
  }, [displayText, text]);

  return (
    <span>
      {displayText}
      <span className="animate-pulse inline-block w-1.5 h-[1.1em] bg-[#19A69C] ml-1 align-middle opacity-80" />
    </span>
  );
};

interface HeroConstructionProps {
  onScrollToProfile: () => void;
  onContactClick: () => void;
}

export const HeroConstruction: React.FC<HeroConstructionProps> = ({ onScrollToProfile, onContactClick }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="hero-section" className="relative flex items-center min-h-[85vh] pt-16 pb-20 md:pt-24 md:pb-28 border-b border-slate-200/80 overflow-hidden">
      
      {/* Absolute Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover object-center filter brightness-95"
        >
          <source src="/videos/statistics-report.mp4" type="video/mp4" />
          O seu navegador não suporta a reprodução de vídeo HTML5.
        </video>
        
        {/* Dynamic Overlays for readability and Sustentare aesthetic */}
        <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2538]/95 via-[#0B2538]/70 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Top Status Pill - Adjusted for dark background */}
        <div className="flex flex-wrap items-center gap-3 mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#F8EA3F]/10 border border-[#F8EA3F]/30 text-[#F8EA3F] text-xs font-semibold shadow-xs backdrop-blur-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F8EA3F] animate-pulse" />
            <span>Website em Construção &amp; Manutenção</span>
          </div>
        </div>

        {/* Hero Main Block */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-['Plus_Jakarta_Sans'] leading-[1.12]">
            Este website está em <span className="text-[#19A69C] underline decoration-[#F8EA3F] decoration-4 underline-offset-8">construção</span>.
          </h1>

          {/* Submessage */}
          <p className="mt-6 text-lg sm:text-xl text-slate-200 font-normal leading-relaxed max-w-2xl text-center">
            Estamos a preparar uma nova experiência alinhada com a visão<br />
            <strong className="block mt-2 font-black text-3xl sm:text-4xl text-white tracking-tight">
              YOU SHOULD MIND
            </strong>
          </p>

          {/* Key Phrase Highlight Card */}
          <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg relative overflow-hidden text-left w-full max-w-3xl mx-auto">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#19A69C] to-[#F8EA3F]" />
            
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-300 mb-3">
              <Leaf className="w-4 h-4 text-[#19A69C]" />
              <span>Propósito Estratégico</span>
            </div>

            <p className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-['Plus_Jakarta_Sans']">
              “Para uma nova visão de sustentabilidade.”
            </p>

            <p className="mt-4 text-base text-slate-200 leading-relaxed max-w-2xl min-h-[4.5rem]">
              <TypewriterText text="Ajudamos empresas a transformar requisitos ambientais, sociais e de governação (ESG) em mecanismos práticos de competitividade, criação de valor e retenção de clientes." />
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onScrollToProfile}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#19A69C] hover:bg-[#148980] text-white text-sm font-semibold shadow-md transition-all cursor-pointer group"
            >
              <span>Conhecer o Consultor</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={onContactClick}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 text-sm font-semibold shadow-xs transition-colors cursor-pointer"
            >
              <span>Entrar em Contacto</span>
            </button>
          </div>
        </div>
      </div>

      {/* Floating Video Controls */}
      <div className="absolute bottom-5 right-5 z-20 flex flex-col items-end gap-2">
        <div className="px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white text-[10px] font-medium tracking-wider uppercase">
          Ambiente YSM
        </div>
        <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md rounded-full p-1.5 border border-white/20 shadow-lg">
          <button
            onClick={togglePlay}
            className="p-2 rounded-full hover:bg-white/20 text-white transition-colors cursor-pointer"
            title={isPlaying ? 'Pausar vídeo' : 'Reproduzir vídeo'}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
          <button
            onClick={toggleMute}
            className="p-2 rounded-full hover:bg-white/20 text-white transition-colors cursor-pointer"
            title={isMuted ? 'Ativar som' : 'Silenciar'}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

    </section>
  );
};
