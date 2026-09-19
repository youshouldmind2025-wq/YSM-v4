import React, { useState } from 'react';
import { 
  Phone, 
  Globe, 
  Mail, 
  Check, 
  Copy, 
  Download, 
  GraduationCap, 
  Heart, 
  Award, 
  ShieldCheck, 
  Quote as QuoteIcon,
  ExternalLink,
  MessageCircle,
  Briefcase,
  Linkedin
} from 'lucide-react';
import { CONSULTANT_DATA } from '../data/content.ts';

export const ConsultantProfile: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);

  const handleCopy = (text: string, fieldId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldId);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleDownloadVCard = () => {
    const vCardData = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      `FN:${CONSULTANT_DATA.name}`,
      `N:Amaral;Ruy;Ferreira;;`,
      `ORG:YSM (youSHOULDmind – Consultancy Agency)`,
      `TITLE:Fundador e CEO`,
      `TEL;TYPE=CELL,VOICE:${CONSULTANT_DATA.phone}`,
      `EMAIL;TYPE=PREF,INTERNET:${CONSULTANT_DATA.email}`,
      `URL:${CONSULTANT_DATA.website}`,
      `NOTE:Auditor. Especialista em Customer Success e Sustentabilidade (ESG).`,
      'END:VCARD',
    ].join('\n');

    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Ruy_Ferreira_Amaral_YSM.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="consultant-section" className="w-full">
        {/* Section header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-[10px] font-semibold uppercase tracking-wider mb-2">
            <Award className="w-3.5 h-3.5 text-teal-600" />
            <span>Perfil &amp; Liderança Estratégica</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#0B2538] font-['Plus_Jakarta_Sans']">
            Sobre o Consultor
          </h2>
        </div>

        {/* Unified Discreet Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
          
          {/* Top/Left Section: Photo & Contacts */}
          <div className="w-full bg-slate-50/50 flex flex-col items-center border-b border-slate-100">
            
            {/* Photograph Container (Full Width Square) */}
            <div className="relative w-full aspect-square overflow-hidden border-b border-slate-200/60 bg-gradient-to-br from-[#0B2538] to-teal-900 mx-auto">
              {/* Fallback Text: Displayed when image is not available, fails to load, or is loading */}
              {(!imageLoaded || imageFailed) && (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center select-none z-0">
                  <div className="text-4xl font-extrabold font-['Space_Grotesk'] tracking-wider text-white mb-2">
                    RFA
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#F8EA3F]">
                    {CONSULTANT_DATA.name}
                  </span>
                </div>
              )}

              {/* Consultant Photo: Centered on the speaker (focal point at 68% width, 28% height) */}
              {!imageFailed && (
                <img 
                  src="/ruy-ferreira-amaral.jpg" 
                  alt={CONSULTANT_DATA.name}
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageFailed(true)}
                  className={`absolute inset-0 w-full h-full object-cover object-[68%_28%] z-10 transition-opacity duration-300 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                  referrerPolicy="no-referrer"
                />
              )}
            </div>

            {/* Direct Contacts Mini */}
            <div className="pt-6 pb-6 px-5 w-full max-w-[260px] mx-auto">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 text-center mb-4">
                Contactos Oficiais
              </div>
              
              <div className="flex items-center justify-center gap-4 mb-5">
                {/* Telephone */}
                <a 
                  href={`tel:${CONSULTANT_DATA.phone.replace(/\s+/g, '')}`} 
                  className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 hover:text-teal-600 hover:border-teal-300 transition-all hover:-translate-y-0.5"
                  title={CONSULTANT_DATA.phone}
                >
                  <Phone className="w-4 h-4" />
                </a>

                {/* Email */}
                <a 
                  href={`mailto:${CONSULTANT_DATA.email}`} 
                  className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 hover:text-teal-600 hover:border-teal-300 transition-all hover:-translate-y-0.5"
                  title={CONSULTANT_DATA.email}
                >
                  <Mail className="w-4 h-4" />
                </a>

                {/* LinkedIn */}
                <a 
                  href={CONSULTANT_DATA.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 hover:text-[#0A66C2] hover:border-[#0A66C2]/50 transition-all hover:-translate-y-0.5"
                  title="Perfil LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
              
              {/* VCard Button */}
              <button
                onClick={handleDownloadVCard}
                className="w-full py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer border border-slate-200 shadow-xs hover:shadow-sm"
              >
                <Download className="w-3.5 h-3.5 text-teal-600" />
                <span>Guardar Contacto (vCard)</span>
              </button>
            </div>
          </div>

          {/* Bottom/Right Section: Information & Bio */}
          <div className="flex-1 p-5 sm:p-6 flex flex-col justify-center">
            
            {/* Header Titles */}
            <div className="mb-4">
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#0B2538] font-['Plus_Jakarta_Sans'] tracking-tight">
                {CONSULTANT_DATA.name}
              </h3>
              <div className="mt-1 text-xs sm:text-sm font-bold text-teal-700">
                {CONSULTANT_DATA.title}
              </div>
              {CONSULTANT_DATA.agencyRole && (
                <p className="mt-1 text-[11px] text-slate-500 font-medium">
                  {CONSULTANT_DATA.agencyRole}
                </p>
              )}
            </div>

            {/* Official Credentials List */}
            <div className="mb-5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2 border-b border-slate-100 pb-1.5">
                Percurso &amp; Responsabilidades
              </span>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {CONSULTANT_DATA.roles.map((role, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#19A69C] mt-1 shrink-0" />
                    <span className="font-medium leading-tight">{role}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Education & Personal (Combined Compact) */}
            <div className="grid grid-cols-1 gap-3 mb-5">
              <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-1">
                  <GraduationCap className="w-3.5 h-3.5 text-teal-700 shrink-0" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Formação</span>
                </div>
                <p className="text-[11px] text-slate-800 font-medium">{CONSULTANT_DATA.education[0]}</p>
              </div>
              <div className="bg-amber-50/40 rounded-xl p-3 border border-amber-100/50 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-1">
                  <Heart className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Dimensão Pessoal</span>
                </div>
                <p className="text-[11px] text-slate-800 font-medium italic">{CONSULTANT_DATA.passions[0]}</p>
              </div>
            </div>

            {/* Subtle Quote */}
            <div className="relative pl-4 py-1.5 border-l-2 border-[#19A69C]">
              <QuoteIcon className="absolute -top-1 -left-2.5 w-4 h-4 text-teal-100 bg-white" />
              <blockquote className="text-xs font-semibold text-slate-700 italic leading-snug">
                “{CONSULTANT_DATA.quote}”
              </blockquote>
              <div className="mt-1 text-[9px] font-bold font-mono text-teal-700 uppercase">
                — {CONSULTANT_DATA.quoteAuthor}
              </div>
            </div>

          </div>
        </div>

    </div>
  );
};
