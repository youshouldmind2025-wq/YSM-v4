import React, { useState } from 'react';
import { Header } from './components/Header.tsx';
import { HeroConstruction } from './components/HeroConstruction.tsx';
import { CompanyLogos } from './components/CompanyLogos.tsx';
import { ConsultantProfile } from './components/ConsultantProfile.tsx';
import { Footer } from './components/Footer.tsx';
import { ContactModal } from './components/ContactModal.tsx';

export default function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-teal-600 selection:text-white">
      {/* Top Header with Brand */}
      <Header 
        onContactClick={() => setIsContactModalOpen(true)} 
        onNavigateSection={scrollToSection}
      />

      {/* Main Single Page Content */}
      <main className="flex-1">
        {/* 1. Hero: Website Under Construction with Sustentare ESG styling */}
        <HeroConstruction 
          onScrollToProfile={() => scrollToSection('unified-section')} 
          onContactClick={() => setIsContactModalOpen(true)}
        />

        {/* 2. Unified 2nd Page Section (Profile & Partners) */}
        <section id="unified-section" className="bg-slate-50/50 py-16 lg:py-24 border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Left Column: Partner Companies (Expanded) */}
              <div className="xl:col-span-7">
                <CompanyLogos />
              </div>

              {/* Right Column: Consultant Profile (Compact) */}
              <div className="xl:col-span-5">
                <ConsultantProfile />
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* 4. Minimalist Footer with exact phrase */}
      <Footer />

      {/* Optional Contact Form / Mailto Bridge */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
}
