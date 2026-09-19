import React from 'react';
import { Shield, Sparkles, Mail, Leaf, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onContactClick?: () => void;
  onNavigateSection?: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onContactClick, onNavigateSection }) => {
  const handleNav = (id: string) => {
    if (onNavigateSection) {
      onNavigateSection(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/70 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand identity */}
        <div className="flex items-center group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src="/Logo_Name_W.png" alt="YSM Logo" className="h-10 object-contain invert" />
        </div>

        {/* Navigation Links & Action */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
          <button 
            onClick={() => handleNav('hero-section')} 
            className="hover:text-teal-700 transition-colors cursor-pointer"
          >
            Início
          </button>
          <button 
            onClick={() => handleNav('partners-section')} 
            className="hover:text-teal-700 transition-colors cursor-pointer"
          >
            Empresas Acompanhadas
          </button>
          <button 
            onClick={() => handleNav('consultant-section')} 
            className="hover:text-teal-700 transition-colors cursor-pointer"
          >
            Sobre o Consultor
          </button>
        </div>

        {/* Direct Contact CTA */}
        <div className="flex items-center gap-3 sm:gap-4">
          
          {/* Primary Action Button (Sustentare pill style with teal gradient) */}
          <button
            onClick={onContactClick}
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-[#19A69C] hover:bg-[#148980] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Falar com o Consultor</span>
          </button>
        </div>

      </div>
    </header>
  );
};
