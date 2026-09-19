import React from 'react';
import { ArrowUp, Leaf, Phone, Mail, Globe, Shield } from 'lucide-react';
import { CONSULTANT_DATA } from '../data/content.ts';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B2538] text-slate-300 py-16 border-t border-slate-800 relative overflow-hidden">
      {/* Subtle ambient light in footer */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 mb-3">
              <img src="/Logo_Name_W.png" alt="YSM Logo" className="h-8 object-contain" />
            </div>

            {/* Required Key Signature Phrase */}
            <p className="text-xl sm:text-2xl font-extrabold text-[#F8EA3F] font-['Plus_Jakarta_Sans'] tracking-tight">
              Para uma nova visão de sustentabilidade.
            </p>
            
            <p className="text-sm text-slate-400 mt-3 max-w-2xl leading-relaxed">
              • Consultoria em Sustentabilidade (ESG), Customer Success, Auditoria e Liderança Organizacional •
            </p>
          </div>

          {/* Quick Contact & Back to Top */}
          <div className="lg:col-span-4 flex flex-col lg:items-end justify-between gap-6">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 px-4 py-2.5 rounded-full border border-slate-700 transition-colors cursor-pointer w-fit"
            >
              <span>Voltar ao Topo</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#F8EA3F]" />
            </button>

            <div className="space-y-1.5 text-xs text-slate-400 font-mono">
              <div>
                <a href={`mailto:${CONSULTANT_DATA.email}`} className="hover:text-teal-300 transition-colors">
                  {CONSULTANT_DATA.email}
                </a>
              </div>
              <div>
                <a href={`tel:${CONSULTANT_DATA.phone.replace(/\s+/g, '')}`} className="hover:text-teal-300 transition-colors">
                  {CONSULTANT_DATA.phone}
                </a>
              </div>
              <div>
                <a href={`http://${CONSULTANT_DATA.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-teal-300 transition-colors">
                  {CONSULTANT_DATA.website}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © 2026 YSM Consultancy Agency. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-3">
            <span>Lisboa • Luanda • Internacional</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
