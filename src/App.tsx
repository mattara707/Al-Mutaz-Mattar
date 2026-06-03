import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import AchievementsCerts from './components/AchievementsCerts';
import ServiceCatalog from './components/ServiceCatalog';
import ExperienceTimeline from './components/ExperienceTimeline';
import SkillsGrid from './components/SkillsGrid';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { Language } from './types';

export default function App() {
  const [lang, setLang] = useState<Language>('ar'); // Default to Arabic as requested by local profile, but easily toggleable
  const [estimatedText, setEstimatedText] = useState<string>('');

  // Automatically configure document direction on language change to ensure flawless Arabic RTL rendering
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  // Handler to export estimated calculations into the contact message field
  const handleSelectEstimatedServices = (summary: string) => {
    setEstimatedText(summary);
  };

  return (
    <div 
      dir={lang === 'ar' ? 'rtl' : 'ltr'} 
      className={`min-h-screen bg-slate-50 transition-colors duration-300 ${
        lang === 'ar' ? 'font-cairo' : 'font-sans'
      }`}
    >
      {/* Upper Navigation & Language toggle switch */}
      <Header lang={lang} setLang={setLang} />

      {/* Main content block wrapped in standard fade animate entrance */}
      <motion.main
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full flex flex-col"
      >
        {/* Core Hero section */}
        <Hero lang={lang} />

        {/* Certifications and Key National level accomplishments */}
        <AchievementsCerts lang={lang} />

        {/* Interactive Services Catalog with Saudi Average Pricing + Live Calculator */}
        <ServiceCatalog 
          lang={lang} 
          onSelectEstimatedServices={handleSelectEstimatedServices} 
        />

        {/* Technical Competencies Skills Grid */}
        <SkillsGrid lang={lang} />

        {/* Career Timeline / Executive Record */}
        <ExperienceTimeline lang={lang} />

        {/* Dynamic Contact and consultation booking block */}
        <ContactSection 
          lang={lang} 
          estimatedText={estimatedText} 
        />
      </motion.main>

      {/* Footer copyright and licensing segment */}
      <Footer lang={lang} />
    </div>
  );
}
