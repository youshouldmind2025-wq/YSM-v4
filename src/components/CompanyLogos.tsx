import React from 'react';
import { ExternalLink, Building2, CheckCircle2 } from 'lucide-react';
import { PARTNER_COMPANIES } from '../data/content.ts';

export const CompanyLogos: React.FC = () => {
  return (
    <div className="w-full bg-teal-50/30 p-6 sm:p-8 lg:p-10 rounded-[2rem] border border-teal-100/50 shadow-xs h-full flex flex-col">
      {/* Section Header in Sustentare style */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5 text-teal-600" />
            <span>Ecossistema Corporativo</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0B2538] font-['Plus_Jakarta_Sans']">
            Empresas Acompanhadas
          </h2>

          <p className="mt-3 text-base text-slate-600">
            Organizações de referência com consultoria contínua, auditoria e alinhamento em práticas de sustentabilidade (ESG) e Customer Success.
          </p>
        </div>

        {/* 6 Logo Cards in Sustentare modern grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {PARTNER_COMPANIES.map((company) => (
            <div
              key={company.id}
              className="group relative flex flex-col p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md hover:border-teal-300 transition-all duration-300"
            >
              {/* Top micro metadata & external link icon */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 group-hover:bg-teal-50 group-hover:text-teal-800 transition-colors">
                  {company.category}
                </span>
                
                <a 
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-teal-600 group-hover:text-white group-hover:border-teal-600 transition-all"
                  title={`Visitar ${company.name}`}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Graphic Logo Rendering */}
              <div className="py-4 flex items-center justify-center min-h-[90px] border-b border-slate-100/80 mb-4 px-4 opacity-80 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0">
                {company.id === 'brain-global' && (
                  <img src="https://brain.global/wp-content/uploads/2022/03/Brain-Entertainment-Logo-color-1.png" alt="Brain Global Logo" className="h-8 object-contain" />
                )}

                {company.id === 'avila-spaces' && (
                  <img src="https://avilaspaces.com/wp-content/uploads/2025/09/avilaspaces-logo-white.svg" alt="Avila Spaces Logo" className="h-7 object-contain filter invert" />
                )}

                {company.id === 'lopes-ribeiro' && (
                  <img src="https://le-de.cdn-website.com/387beed58def4d64b21279e7beabf37e/dms3rep/multi/opt/asset+1-336w.jpeg" alt="Lopes Ribeiro Logo" className="h-10 object-contain mix-blend-multiply" />
                )}

                {company.id === 'revista-business-portugal' && (
                  <img src="https://revistabusinessportugal.pt/wp-content/uploads/2024/05/banner_cabecalho_site_novo-logo_-_comunicamos-por-si_CORES-SETA_CABECALHO_PREMIO-PRESTIGE-AWARDS-06.png" alt="Revista Business Portugal" className="h-10 object-contain mix-blend-multiply" />
                )}

                {company.id === 'pga-portugal' && (
                  <img src="https://pgaportugal.pt/wp-content/uploads/2022/05/PGA_logos_main.jpg" alt="PGA Portugal Logo" className="h-10 object-contain mix-blend-multiply" />
                )}

                {company.id === 'junk-service' && (
                  <img src="https://junkservice.pt/wp-content/uploads/2023/03/Junk-Service-Logo-Blue.png" alt="Junk Service Logo" className="h-9 object-contain" />
                )}
              </div>

              {/* Bottom description & Future Testimonial */}
              <div className="pt-2 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                    {company.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    {company.description}
                  </p>
                </div>
                
                {/* Future Testimonial Placeholder */}
                <div className="mt-4 pt-3 border-t border-slate-50 border-dashed opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-[10px] text-slate-400 italic flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-teal-300"></span>
                    Testemunho brevemente...
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sustentare Trust Marker */}
        <div className="mt-8 p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-slate-700">
              Acompanhamento contínuo em conformidade ESG, governação participativa e impacto social positivo.
            </span>
          </div>
          <span className="text-xs font-semibold text-teal-700 shrink-0">
            Garantia de Confidencialidade &amp; Rigor
          </span>
        </div>

    </div>
  );
};
