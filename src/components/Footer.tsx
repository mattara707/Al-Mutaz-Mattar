import { translationDict } from '../data';
import { Language } from '../types';
import { ShieldAlert, ArrowUp } from 'lucide-react';

interface FooterProps {
  lang: Language;
}

export default function Footer({ lang }: FooterProps) {
  const t = translationDict[lang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-blue-950/40">
      <div id="footer-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-blue-950/40 text-center md:text-left rtl:md:text-right">
          
          {/* Footer Logo segment */}
          <div className="flex items-center gap-3">
            <div className="p-2 bg-slate-900 rounded-lg text-blue-500 border border-blue-900/30">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white font-extrabold tracking-tight text-sm">
                {lang === 'en' ? 'Almutaz Mattar' : 'م. المعتز مطر'}
              </p>
              <p className="text-[11px] text-slate-500 mt-0.5">
                {lang === 'en' ? 'EA Infrastructure & Security consultant' : 'مستشار ومهندس أمن المعلومات والشبكات للمؤسسات'}
              </p>
            </div>
          </div>

          {/* Quick link actions */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <a href="#pricing-catalog" className="hover:text-white transition-colors">{lang === 'en' ? 'Pricing Tags' : 'قائمة الأسعار'}</a>
            <span className="text-slate-800">•</span>
            <a href="#experience" className="hover:text-white transition-colors">{lang === 'en' ? 'Work Record' : 'السيرة المهنية'}</a>
            <span className="text-slate-800">•</span>
            <a href="#skills" className="hover:text-white transition-colors">{lang === 'en' ? 'Capabilities' : 'كفاءات العمل'}</a>
            <span className="text-slate-800">•</span>
            <a href="#contact" className="hover:text-white transition-colors">{lang === 'en' ? 'Consult Now' : 'معاينة الموقع'}</a>
          </div>

          {/* Scroll to Top Trigger button */}
          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-850 border border-slate-850 cursor-pointer text-xs flex items-center gap-1 hover:border-slate-800 shrink-0"
            title="Scroll to main view"
          >
            <span>{lang === 'en' ? 'Back to top' : 'الرجوع للأعلى'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

        {/* Lower footer copyright references */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left rtl:sm:text-right text-[11px] text-slate-500">
          
          <div>
            <p className="leading-relaxed">
              &copy; {new Date().getFullYear()} {lang === 'en' ? 'Almutaz Mattar. All rights reserved.' : 'م. المعتز مطر. جميع الحقوق محفوظة.'}
            </p>
            <p className="mt-1 text-slate-600">
              {lang === 'en' 
                ? 'TOGAF® is a registered trademark of The Open Group. Standard KSA indicative price averages calculated.' 
                : 'علامة ®TOGAF مسجلة بموجب اتفاقيات The Open Group. تخضع مؤشرات الأسعار لمتوسط الأسعار الفنية السعودية.'}
            </p>
          </div>

          <div className="shrink-0 bg-slate-900/60 border border-slate-900 px-3.5 py-1.5 rounded-lg">
            <p className="text-[10px] text-slate-400 font-mono">
              {lang === 'en' ? 'Al Ahsa - Eastern Region, KSA' : 'الأحساء - المنطقة الشرقية، السعودية'}
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}
