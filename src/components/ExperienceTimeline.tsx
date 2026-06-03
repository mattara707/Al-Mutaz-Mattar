import { useState } from 'react';
import { experience, translationDict } from '../data';
import { Language } from '../types';
import { Calendar, Briefcase, MapPin, Building, ChevronDown, ChevronUp } from 'lucide-react';

interface ExperienceTimelineProps {
  lang: Language;
}

export default function ExperienceTimeline({ lang }: ExperienceTimelineProps) {
  const t = translationDict[lang];
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0); // First expanded by default

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 text-white relative overflow-hidden border-b border-blue-950">
      
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f60a_1px,transparent_1px),linear-gradient(to_bottom,#3b82f60a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-blue-200 bg-blue-950/85 border border-blue-800/60 px-4 py-1.5 rounded-full uppercase tracking-widest block w-fit mx-auto mb-3">
            {lang === 'en' ? 'Professional Track' : 'الخبرات والمناصب القيادية السابقة'}
          </span>
          <div className="h-1 w-16 bg-blue-500 mx-auto mb-3"></div>
          <h2 className="text-3xl font-black text-white tracking-tight">
            {t.experienceTitle}
          </h2>
          <p className="text-sm text-blue-200/85 mt-3">
            {t.experienceSubtitle}
          </p>
        </div>

        {/* Timeline Path Stack */}
        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-blue-900/50 rtl:border-l-0 rtl:border-r-2 rtl:border-blue-900/50 pl-6 sm:pl-10 rtl:pl-0 rtl:pr-6 sm:rtl:pr-10 space-y-12">
            
            {experience.map((exp, idx) => {
              const isExpanded = expandedIndex === idx;
              
              return (
                <div key={idx} className="relative group">
                  
                  {/* Timeline Badge Dot Indicator */}
                  <div className="absolute -left-[35px] sm:-left-[51px] rtl:-left-0 rtl:-right-[35px] sm:rtl:-right-[51px] top-1.5 w-6 h-6 rounded-full bg-blue-950 border-2 border-blue-500 flex items-center justify-center transition-all group-hover:border-blue-400 shadow-lg shadow-blue-500/20 z-20">
                    <Briefcase className="w-3 h-3 text-blue-400" />
                  </div>

                  {/* Header Title Information Box */}
                  <div className="bg-blue-950/65 p-6 rounded-2xl border border-blue-900/60 hover:border-blue-800 transition-colors shadow-2xl">
                    
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-blue-905/40">
                      
                      <div>
                        {/* Period Date Tag */}
                        <div className="flex items-center gap-1.5 text-xs text-blue-300 font-bold mb-1.5">
                          <Calendar className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                          <span>{lang === 'en' ? exp.period : exp.periodAr}</span>
                        </div>
                        
                        <h3 className="text-lg font-black text-white leading-snug group-hover:text-blue-300 transition-colors">
                          {lang === 'en' ? exp.roleEn : exp.roleAr}
                        </h3>
                      </div>

                      {/* Expand / Collapse buttons */}
                      <button 
                        onClick={() => toggleExpand(idx)}
                        className="self-start sm:self-center p-2 rounded-xl bg-blue-900/50 border border-blue-800 text-blue-200 hover:text-white hover:bg-blue-800/80 transition-all flex items-center gap-1 text-xs font-semibold cursor-pointer"
                      >
                        <span>{isExpanded ? (lang === 'en' ? 'Collapse' : 'طي التفاصيل') : (lang === 'en' ? 'Expand Details' : 'عرض التفاصيل والمهام')}</span>
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 text-blue-400" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-blue-400" />
                        )}
                      </button>

                    </div>

                    {/* Workplace & Location */}
                    <div className="flex flex-wrap gap-4 items-center mt-3 text-xs text-blue-200/80 font-medium pb-2">
                      <span className="flex items-center gap-1">
                        <Building className="w-3.5 h-3.5 text-blue-300 shrink-0" />
                        <span className="text-white font-bold">{lang === 'en' ? exp.companyEn : exp.companyAr}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-blue-305 shrink-0" />
                        <span>{lang === 'en' ? exp.locationEn : exp.locationAr}</span>
                      </span>
                    </div>

                    {/* Expandable Project details list */}
                    {isExpanded && (
                      <div className="mt-4 pt-4 border-t border-blue-900/50 animate-fadeIn">
                        <p className="text-[10px] text-blue-300 font-black tracking-widest uppercase mb-2.5">
                          {lang === 'en' ? 'Core Deliverables & Projects:' : 'أبرز المشاريع والمهام المنجزة:'}
                        </p>
                        <ul className="space-y-3">
                          {(lang === 'en' ? exp.detailsEn : exp.detailsAr).map((detail, dIdx) => (
                            <li key={dIdx} className="flex gap-2.5 items-start text-xs sm:text-sm text-blue-100 leading-relaxed">
                              <span className="text-blue-500 font-extrabold text-base select-none mt-[-2px] shrink-0">▪</span>
                              <span className="text-blue-100 font-normal">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                  </div>

                </div>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
}
