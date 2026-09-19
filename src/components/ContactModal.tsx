import React, { useState } from 'react';
import { X, Send, Mail, Phone, CheckCircle2, Leaf } from 'lucide-react';
import { CONSULTANT_DATA } from '../data/content.ts';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [subject, setSubject] = useState('Consulta ESG / Sustentabilidade');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto fallback with prefilled content
    const mailSubject = encodeURIComponent(`[Contacto YSM] ${subject} - ${company || name}`);
    const mailBody = encodeURIComponent(
      `Nome: ${name}\nEmpresa: ${company}\nEmail: ${email}\nAssunto: ${subject}\n\nMensagem:\n${message}`
    );
    
    window.location.href = `mailto:${CONSULTANT_DATA.email}?subject=${mailSubject}&body=${mailBody}`;
    
    setSent(true);
    setTimeout(() => {
      setSent(false);
      onClose();
    }, 2200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl border border-slate-200 shadow-2xl p-6 sm:p-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Accent top gradient bar */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#19A69C] via-[#1073B8] to-[#F8EA3F]" />

        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
          title="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700 mb-1">
            <Leaf className="w-3.5 h-3.5" />
            <span>YSM Consulting • Contacto Direto</span>
          </div>
          <h3 className="text-2xl font-extrabold text-[#0B2538] font-['Plus_Jakarta_Sans']">
            Falar com Ruy Ferreira Amaral
          </h3>
          <p className="text-xs text-slate-600 mt-1">
            Inicie a correspondência direta com o consultor para esclarecer desafios de ESG, auditoria ou liderança.
          </p>
        </div>

        {sent ? (
          <div className="py-12 text-center flex flex-col items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-3">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <p className="text-lg font-bold text-slate-900">Mensagem Preparada</p>
            <p className="text-xs text-slate-600 mt-1">
              A abrir o cliente de correio para o envio seguro para {CONSULTANT_DATA.email}...
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="O seu nome"
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 focus:outline-hidden bg-slate-50 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Empresa / Organização
                </label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Nome da empresa"
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 focus:outline-hidden bg-slate-50 transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  E-mail *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@empresa.pt"
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 focus:outline-hidden bg-slate-50 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Área de Interesse
                </label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 focus:outline-hidden bg-slate-50 transition-all"
                >
                  <option value="Consulta ESG / Sustentabilidade">ESG &amp; Sustentabilidade</option>
                  <option value="Customer Success & Retenção">Customer Success</option>
                  <option value="Auditoria & Diagnóstico">Auditoria Organizacional</option>
                  <option value="Palestra ou Formação Corporativa">Palestra / Formação</option>
                  <option value="Liderança e Saúde Mental">Liderança &amp; Saúde Mental</option>
                  <option value="Outro Assunto">Outro Assunto</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Mensagem *
              </label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Descreva sumariamente as suas necessidades ou o projeto em causa..."
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 focus:outline-hidden bg-slate-50 transition-all"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-[11px] text-slate-500 font-mono">
                Envio direto para {CONSULTANT_DATA.email}
              </span>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#19A69C] hover:bg-[#148980] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-xs cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Enviar Mensagem</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
