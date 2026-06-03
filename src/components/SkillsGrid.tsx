import { skills, translationDict } from '../data';
import { Language } from '../types';
import { CheckCircle, Shield, Award, Terminal, Network, Settings } from 'lucide-react';

interface SkillsGridProps {
  lang: Language;
}

export default function SkillsGrid({ lang }: SkillsGridProps) {
  const t = translationDict[lang];

  return (
    <section id="skills" className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-blue-600 bg-blue-50 border border-blue-200/60 px-4 py-1.5 rounded-full uppercase tracking-widest block w-fit mx-auto mb-3">
            {lang === 'en' ? 'Core Capabilities' : 'محاور القدرات والامتثال الفني الكلي'}
          </span>
          <div className="h-1 w-16 bg-blue-650 mx-auto mb-3"></div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            {t.skillsTitle}
          </h2>
          <p className="text-sm text-slate-500 mt-3">
            {t.skillsSubtitle}
          </p>
        </div>

        {/* Competency Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((group, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col justify-between hover:border-blue-300 hover:shadow-xs transition-all duration-300"
            >
              <div>
                {/* Header Icon base on index */}
                <div className="mb-6 flex items-center justify-between">
                  <div className={`p-3 rounded-xl border ${
                    index === 0 ? 'bg-amber-50 text-amber-600 border-amber-200/50' :
                    index === 1 ? 'bg-blue-50 text-blue-600 border-blue-200/50' :
                    'bg-indigo-50 text-indigo-600 border-indigo-200/50'
                  }`}>
                    {index === 0 ? <Award className="w-6 h-6" /> :
                     index === 1 ? <Network className="w-6 h-6" /> :
                     <Shield className="w-6 h-6" />}
                  </div>
                  <span className="text-2xl font-black font-mono text-slate-200/80">0{index + 1}</span>
                </div>

                {/* Group Title */}
                <h3 className="text-lg font-black text-slate-950 mb-4 pb-2 border-b border-slate-200/60 leading-tight">
                  {lang === 'en' ? group.categoryEn : group.categoryAr}
                </h3>

                {/* Skills Checklist style */}
                <ul className="space-y-3">
                  {(lang === 'en' ? group.skillsEn : group.skillsAr).map((skill, sIdx) => (
                    <li key={sIdx} className="flex gap-2.5 items-start text-xs sm:text-sm text-slate-700 leading-normal">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="font-bold text-slate-700">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Subtext decorator */}
              <div className="mt-8 pt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-xs text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>{lang === 'en' ? 'Implemented in critical sectors' : 'مطبق ومفعل بمستويات أمان عالية'}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Core Platforms Highlight Ribbon (Tools and Platforms) */}
        <div className="mt-16 bg-gradient-to-r from-blue-950 to-indigo-950 text-white rounded-2xl p-6 sm:p-8 border border-blue-900/40 shadow-xl overflow-hidden relative">
          {/* Ambient graphic blur */}
          <div className="absolute top-0 right-0 w-44 h-44 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-blue-900/60 text-blue-300 rounded-xl border border-blue-800/40">
                <Terminal className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-extrabold text-white text-base">
                  {lang === 'en' ? 'Core Technologies & Systems' : 'الأنظمة والتقنيات وجدران الحماية المُدارة'}
                </h4>
                <p className="text-xs text-blue-200/80 mt-1">
                  {lang === 'en' 
                    ? 'Deep integration and protocol compliance with industry leading software & devices.' 
                    : 'امتثال تقني وتوافق تام مع أشهر منتجات البنية التحتية والشبكة في العالم.'}
                </p>
              </div>
            </div>

            {/* Scrolling / Flex box of platforms mentioned in resume */}
            <div className="flex flex-wrap gap-2.5 justify-center md:justify-end max-w-xl">
              {['Cisco', 'Fortinet', 'SonicWall', 'Cisco ASA', 'Linux', 'Windows Server', 'VMware', 'Oracle', 'Active Directory', 'IP PBX', 'VPN Routing'].map((platform, idx) => (
                <span 
                  key={idx} 
                  className="bg-blue-900/40 text-blue-100 text-xs font-semibold font-mono tracking-wide px-3 py-1.5 rounded-lg border border-blue-800/30 hover:bg-blue-900/60 hover:text-white transition-colors cursor-default"
                >
                  {platform}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
