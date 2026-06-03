import { translationDict, achievements, certs } from '../data';
import { Language } from '../types';
import { FileText, Trophy, ShieldCheck, Milestone } from 'lucide-react';

interface AchievementsCertsProps {
  lang: Language;
}

export default function AchievementsCerts({ lang }: AchievementsCertsProps) {
  const t = translationDict[lang];

  return (
    <section id="credentials" className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div id="creds-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-blue-600 bg-blue-50 border border-blue-200/60 px-4 py-1.5 rounded-full uppercase tracking-widest block w-fit mx-auto mb-3">
            {lang === 'en' ? 'Verified Credentials' : 'الوثائق والشهادات والمكتسبات'}
          </span>
          <div className="h-1 w-16 bg-blue-650 mx-auto mb-3"></div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {lang === 'en' ? 'Certifications & National Achievements' : 'الشهادات التقنية الدولية وحصيلة الإنجازات الوطنية'}
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            {lang === 'en' 
              ? 'Globally certified systems architect ensuring optimal standard configuration.' 
              : 'اعتمادات رصينة من كبرى المنظمات والشركات التقنية العالمية لضمان جودة الأداء وهندستها.'}
          </p>
        </div>

        {/* Outer Grid: Left are certifications, Right are key achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Certifications (5 columns / 12) */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-950 flex items-center gap-2 mb-6">
                <ShieldCheck className="w-5 h-5 text-blue-600" />
                <span>{t.certifications}</span>
              </h3>

              <div className="flex flex-col gap-3">
                {certs.map((cert, index) => (
                  <div key={index} className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/60 shadow-xs flex items-center gap-3.5 hover:border-blue-300 transition-colors">
                    <div className="text-blue-600 bg-blue-50 p-2 rounded-lg shrink-0 font-bold text-xs font-mono">
                      0{index + 1}
                    </div>
                    <div>
                      <h4 className="font-extrabold text-slate-900 text-sm leading-tight">{cert.name}</h4>
                      <p className="text-[10px] text-slate-500 mt-0.5 tracking-wide uppercase font-semibold">{cert.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Subtext info */}
            <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center gap-2 text-xs text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <span>{lang === 'en' ? 'Verifiable licenses across security frameworks' : 'رخص معتمدة وسارية للتعاقد المؤسساتي'}</span>
            </div>
          </div>

          {/* Key Achievements on national systems (7 columns / 12) */}
          <div className="lg:col-span-7 bg-gradient-to-br from-blue-900 to-indigo-900 text-white p-6 sm:p-8 rounded-2xl flex flex-col justify-between relative overflow-hidden shadow-md">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-6">
                <Trophy className="w-5 h-5 text-amber-400" />
                <span>{t.achievementsTitle}</span>
              </h3>

              <div className="flex flex-col gap-5">
                {achievements.map((item, index) => (
                  <div key={index} className="flex gap-4 items-start border-l-2 border-blue-500/30 rtl:border-l-0 rtl:border-r-2 rtl:border-blue-500/30 pl-4 rtl:pl-0 rtl:pr-4 py-1">
                    <div className="bg-blue-950/60 text-amber-400 w-7 h-7 rounded-lg flex items-center justify-center font-bold font-mono text-xs shrink-0 border border-blue-800/30">
                      ★
                    </div>
                    <div>
                      <p className="text-sm text-blue-100 leading-relaxed font-semibold">
                        {lang === 'en' ? item.textEn : item.textAr}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dynamic summary phrase */}
            <div className="mt-8 bg-blue-950/70 p-4 rounded-xl border border-blue-800/50 flex items-center gap-3">
              <div className="bg-blue-600/20 p-2 rounded-lg text-blue-400">
                <Milestone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-blue-200 leading-normal">
                  {lang === 'en' 
                    ? "Applying country-wide security standards to private businesses, schools, and offices in Hofuf, Mubarraz and Al Ahsa."
                    : "تطبيق معايير أمن المعلومات وحزم حماية الشركات الكبرى على المكاتب والشركات المحلية والعيادات والقطاع الخاص بالأحساء."}
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
