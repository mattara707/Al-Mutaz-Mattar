import { translationDict } from '../data';
import { Language } from '../types';
import { Phone, Globe, Shield, MapPin } from 'lucide-react';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

export default function Header({ lang, setLang }: HeaderProps) {
  const t = translationDict[lang];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 text-slate-900 shadow-xs transition-all">
      <div id="header-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo and Architect Badge */}
        <div id="logo-block" className="flex items-center gap-3">
          <div id="logo-icon" className="p-2.5 bg-blue-600 rounded-lg text-white shadow-sm shadow-blue-600/10">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <h1 id="expert-name" className="text-xl font-extrabold tracking-tight text-slate-900 flex items-center gap-2">
              {lang === 'en' ? 'Almutaz Mattar' : 'المعتز مطر'}
              <span className="text-xs bg-blue-50 text-blue-600 border border-blue-200/60 px-2 py-0.5 rounded-full font-bold">
                TOGAF®
              </span>
            </h1>
            <p id="expert-title" className="text-xs text-blue-600 font-semibold uppercase tracking-wider">
              {lang === 'en' ? 'Eastern Region • EA Infrastructure & Security' : 'المنطقة الشرقية • مستشار البنية التحتية وأمن المعلومات'}
            </p>
          </div>
        </div>

        {/* Dynamic Location and Status indicators */}
        <div id="header-status" className="hidden lg:flex items-center gap-4 text-xs">
          <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200 text-slate-600">
            <MapPin className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
            <span className="font-medium">Al Ahsa & Eastern Region | الأحساء والشرقية</span>
          </div>
          <div className="flex items-center gap-2 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 text-emerald-700 font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{lang === 'en' ? 'Available Off/On-Site' : 'متاح للخدمات الميدانية والنهائية'}</span>
          </div>
        </div>

        {/* Controls and Actions */}
        <div id="header-controls" className="flex items-center gap-4">
          {/* Language Selector Button */}
          <button
            id="lang-toggle-btn"
            onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
            className="flex items-center gap-2 px-3.5 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg text-sm text-slate-700 transition-colors cursor-pointer font-medium"
            title={lang === 'en' ? 'تغيير اللغة إلى العربية' : 'Switch to English'}
          >
            <Globe className="w-4 h-4 text-blue-600" />
            <span className="font-bold">{lang === 'en' ? 'العربية' : 'English'}</span>
          </button>

          {/* Direct CTA */}
          <a
            id="call-now-hdr"
            href="tel:+966559685737"
            className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold px-5 py-2.5 rounded-full transition-all shadow-md shadow-slate-900/15 cursor-pointer"
          >
            <Phone className="w-4 h-4" />
            <span>{t.callPhone.split(':')[0]}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
