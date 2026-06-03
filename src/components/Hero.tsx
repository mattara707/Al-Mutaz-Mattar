import { translationDict, personalInfo } from '../data';
import { Language } from '../types';
import { Award, ShieldAlert, CheckCircle, Database, PhoneCall, HelpCircle } from 'lucide-react';

interface HeroProps {
  lang: Language;
}

export default function Hero({ lang }: HeroProps) {
  const t = translationDict[lang];

  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 text-white pt-12 pb-18 lg:py-24 border-b border-blue-950">
      {/* Visual background lights */}
      <div id="hero-ambient-light" className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
      <div id="hero-ambient-light-2" className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div id="hero-container" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="hero-grid" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Metadata */}
          <div id="hero-text-block" className="lg:col-span-7 flex flex-col items-start gap-6 text-center lg:text-left rtl:lg:text-right">
            
            {/* TOGAF & Expert Badge */}
            <div id="hero-badge" className="mx-auto lg:mx-0 flex items-center gap-2 bg-blue-550/25 border border-blue-400/40 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-blue-200">
              <Award className="w-4 h-4 text-blue-300" />
              <span>{t.enterpriseTag}</span>
            </div>

            {/* Main Catchy Heading */}
            <h1 id="hero-main-title" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight w-full">
              {t.heroHeading}
            </h1>

            {/* Subtitle description */}
            <p id="hero-desc" className="text-base sm:text-lg text-blue-100/90 leading-relaxed max-w-2xl">
              {t.heroDesc}
            </p>

            {/* Quick credentials pills */}
            <div id="hero-pills" className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-lg mt-2 text-sm text-slate-100 text-left rtl:text-right">
              <div className="flex items-center gap-2.5 bg-blue-900/45 p-3 rounded-xl border border-blue-800/40">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>{lang === 'en' ? '20+ Years Enterprise IT' : 'أكثر من ٢٠ سنة في خدمات تكنولوجيا معلومات'}</span>
              </div>
              <div className="flex items-center gap-2.5 bg-blue-900/45 p-3 rounded-xl border border-blue-800/40">
                <Award className="w-5 h-5 text-amber-400 shrink-0" />
                <span>{lang === 'en' ? 'TOGAF & CCNP Certified' : 'اعتمادات دقيقة ومستوى استشاري مرخص'}</span>
              </div>
              <div className="flex items-center gap-2.5 bg-blue-900/45 p-3 rounded-xl border border-blue-800/40">
                <Database className="w-5 h-5 text-blue-300 shrink-0" />
                <span>{lang === 'en' ? 'Enterprise Server Rooms' : 'تجهيز السيرفرات وشبكات الألياف'}</span>
              </div>
              <div className="flex items-center gap-2.5 bg-blue-900/45 p-3 rounded-xl border border-blue-800/40">
                <ShieldAlert className="w-5 h-5 text-blue-400 shrink-0" />
                <span>{lang === 'en' ? 'Cybersecurity & Firewalls' : 'الأمن وحماية البيانات الحساسة'}</span>
              </div>
            </div>

            {/* Call to Actions */}
            <div id="hero-actions" className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto self-center lg:self-start">
              <a
                id="hero-cta-services"
                href="#pricing-catalog"
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-base px-8 py-3.5 rounded-full transition-all text-center shadow-lg shadow-blue-500/20 cursor-pointer"
              >
                {t.servicesBtn}
              </a>
              <a
                id="hero-cta-contact"
                href="#contact"
                className="bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-base px-6 py-3.5 rounded-full transition-colors text-center cursor-pointer"
              >
                {t.contactBtn}
              </a>
            </div>
          </div>

          {/* Right Hero Professional Card */}
          <div id="hero-graphics" className="lg:col-span-5 w-full flex justify-center">
            <div className="relative w-full max-w-md bg-gradient-to-br from-slate-900 to-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-2xl relative overflow-hidden">
              {/* Highlight ribbon representing Base location */}
              <div className="absolute top-0 right-0 bg-sky-600 text-white text-[10px] font-black px-4 py-1.5 uppercase rounded-bl-xl tracking-wider">
                {lang === 'en' ? 'Al Ahsa based' : 'مركز الأحساء'}
              </div>

              {/* Card Header Profile Info */}
              <div className="flex items-center gap-4 border-b border-slate-800 pb-5">
                <div className="w-16 h-16 rounded-full bg-slate-800 border-2 border-sky-500 flex items-center justify-center shrink-0">
                  <span className="text-xl font-extrabold text-sky-400 font-mono">AM</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white leading-tight">{lang === 'en' ? personalInfo.nameEn : personalInfo.nameAr}</h3>
                  <p className="text-xs text-slate-400 mt-1 font-semibold">{lang === 'en' ? personalInfo.titleEn : personalInfo.titleAr}</p>
                </div>
              </div>

              {/* Service details & local availability */}
              <div className="py-5 flex flex-col gap-4 text-sm text-slate-300">
                <div className="flex items-start gap-2">
                  <span className="text-sky-500 font-bold shrink-0">✓</span>
                  <div>
                    <h4 className="font-bold text-white text-xs">{lang === 'en' ? 'Geographic Location' : 'التغطية الميدانية'}</h4>
                    <p className="text-xs text-slate-400 mt-1">{lang === 'en' ? 'Serving Al Ahsa, Al Hofuf, Al Mubarraz, and all Eastern Region cities.' : 'خدمة جميع أحياء الهفوف والمبرز وقرى الأحساء وكافة مدن المنطقة الشرقية.'}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <span className="text-sky-500 font-bold shrink-0">✓</span>
                  <div>
                    <h4 className="font-bold text-white text-xs">{lang === 'en' ? 'Immediate Technical Readiness' : 'جاهزية المعاينة التقنية'}</h4>
                    <p className="text-xs text-slate-400 mt-1">{lang === 'en' ? 'On-site structured network layout, server cabinets provisioning, CCTV deployment.' : 'تأسيس شبكات مكاتب ومواقع جديدة، هيكلة الكبائن، وتركيب وصيانة السيرفرات.'}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <span className="text-sky-500 font-bold shrink-0">✓</span>
                  <div>
                    <h4 className="font-bold text-white text-xs">{lang === 'en' ? 'Experience Level' : 'مستوى الخبرة والترخيص'}</h4>
                    <p className="text-xs text-slate-400 mt-1">{lang === 'en' ? '20+ years, former manager of Ministry of Interior (Civilroll) networks.' : 'أكثر من ٢٠ سنة - مدير شبكات وبنية تحتية بوزارة الداخلية (الأحوال المدنية) سابقاً.'}</p>
                  </div>
                </div>
              </div>

              {/* Foot of the card */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 mt-2 flex items-center justify-between gap-2">
                <div>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest">{lang === 'en' ? 'Consultancy Hotline' : 'الرقم المباشر'}</p>
                  <a href="tel:+966559685737" className="text-sky-400 font-mono font-bold text-sm block mt-1 hover:underline">
                    +966 55 968 5737
                  </a>
                </div>
                <a href="#contact" className="bg-sky-600/20 hover:bg-sky-600/30 text-sky-400 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors border border-sky-500/20">
                  {lang === 'en' ? 'Inquire' : 'استفسر'}
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
