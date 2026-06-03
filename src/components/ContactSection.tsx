import React, { useState, useEffect } from 'react';
import { translationDict, personalInfo } from '../data';
import { Language } from '../types';
import { Phone, Mail, Linkedin, MapPin, Send, CheckCircle, HelpCircle, PhoneCall, Globe } from 'lucide-react';

interface ContactSectionProps {
  lang: Language;
  estimatedText: string;
}

export default function ContactSection({ lang, estimatedText }: ContactSectionProps) {
  const t = translationDict[lang];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync estimatedText from Calculator if requested
  useEffect(() => {
    if (estimatedText) {
      setFormData(prev => ({
        ...prev,
        message: estimatedText
      }));
    }
  }, [estimatedText]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      return; // Quick validate
    }

    // Since this is a client-only prototype, we simulate a successful reservation
    setIsSubmitted(true);
    setTimeout(() => {
      // Clear form after delay
      setFormData({
        name: '',
        email: '',
        phone: '',
        location: '',
        message: ''
      });
    }, 4500);
  };

  // Pre-configured WhatsApp text link from form data
  const handleDirectWhatsApp = () => {
    let body = "";
    if (lang === 'en') {
      body = `Hello Eng. Almutaz,\nMy Name is: ${formData.name || 'Visitor'}\nPhone: ${formData.phone || ''}\nLocation: ${formData.location || 'Al Ahsa'}\nMy Request Details: ${formData.message || 'I would like to schedule a system diagnostic evaluation.'}`;
    } else {
      body = `السلام عليكم م. المعتز مطر،\nالاسم: ${formData.name || 'زائر الموقع'}\nالجوال: ${formData.phone || ''}\nالموقع: ${formData.location || 'الأحساء'}\nتفاصيل الطلب: ${formData.message || 'أود حجز موعد للمعاينة الفنية للمقر وضبط الشبكات والأنظمة.'}`;
    }
    window.open(`https://wa.me/966559685737?text=${encodeURIComponent(body)}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200 scroll-mt-6">
      <div id="contact-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-blue-600 bg-blue-50 border border-blue-200/60 px-4 py-1.5 rounded-full uppercase tracking-widest block w-fit mx-auto mb-3">
            {lang === 'en' ? 'Direct Dialogue' : 'التواصل المباشر وحسابات الخدمة الميدانية'}
          </span>
          <div className="h-1 w-16 bg-blue-650 mx-auto mb-3"></div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            {t.contactTitle}
          </h2>
          <p className="text-sm text-slate-500 mt-3">
            {t.contactSubtitle}
          </p>
        </div>

        {/* Form and Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Form: interactive submission box (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
            
            {isSubmitted ? (
              <div className="py-16 text-center animate-fadeIn">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {lang === 'en' ? 'Inquiry Submitted!' : 'تم تقديم كشف طلبك بنجاح!'}
                </h3>
                <p className="text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
                  {t.sentSuccess}
                </p>

                {/* Instant WhatsApp alternative triggers */}
                <button
                  type="button"
                  onClick={handleDirectWhatsApp}
                  className="mt-6 inline-flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-6 py-3 rounded-xl transition-transform active:scale-95 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{t.sendWhatsApp}</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
                      {t.fullName} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-xl px-4 py-3 text-sm text-slate-950 transition-colors focus:ring-2 focus:ring-blue-500/10 outline-none"
                      placeholder={lang === 'en' ? 'e.g., Al Ahsa Medical Center' : 'مثال: شركة تلال الأحساء العقارية'}
                    />
                  </div>

                  {/* Phone number field */}
                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
                      {t.phoneNo} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      dir="ltr"
                      className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-xl px-4 py-3 text-sm text-slate-950 transition-colors focus:ring-2 focus:ring-blue-500/10 outline-none font-mono text-left"
                      placeholder="e.g., +966 5x xxx xxxx"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email field */}
                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
                      {t.emailAddr}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-xl px-4 py-3 text-sm text-slate-950 transition-colors focus:ring-2 focus:ring-blue-500/10 outline-none"
                      placeholder="name@company.com"
                    />
                  </div>

                  {/* Geographic Location Selection in Eastern Region */}
                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
                      {t.locationLabel}
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-xl px-4 py-3 text-sm text-slate-950 transition-colors focus:ring-2 focus:ring-blue-500/10 outline-none"
                      placeholder={t.locationPlaceholder}
                    />
                  </div>
                </div>

                {/* Message input */}
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
                    {t.messageLabel}
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-xl px-4 py-3 text-sm text-slate-950 transition-colors focus:ring-2 focus:ring-blue-500/10 outline-none resize-none leading-relaxed"
                    placeholder={lang === 'en' ? 'Describe CCTV points count, network room setup or Windows Server tasks...' : 'مثال: نحتاج تمديد شبكة مكتب جديد بـ ١٥ نقطة مع تركيب ٦ كاميرات مراقبة وسنترال للهواتف...'}
                  />
                </div>

                {/* Submit Action Block */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <p className="text-[10px] text-slate-400 max-w-sm text-center sm:text-left rtl:sm:text-right leading-normal select-none">
                    {lang === 'en' ? 'Fields marked with * are required. Estimates directly export here.' : 'الحقول المعلمة بـ * هي حقول إجبارية للتأكيد.'}
                  </p>
                  
                  <div className="flex gap-2 w-full sm:w-auto">
                    {/* Submit Email Form */}
                    <button
                      type="submit"
                      className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm px-7 py-3.5 rounded-xl transition-all shadow-md shadow-blue-500/15 cursor-pointer text-center"
                    >
                      {t.submitBtn}
                    </button>

                    {/* WhatsApp prefilled directly button */}
                    <button
                      type="button"
                      onClick={handleDirectWhatsApp}
                      className="p-3 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-700 rounded-xl transition-colors cursor-pointer shrink-0"
                      title="Direct Chat WhatsApp"
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                </div>

              </form>
            )}

          </div>

          {/* Right Cards: Contact parameters, and Interactive coverage map (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            
            {/* Quick Consultation credentials card */}
            <div className="bg-gradient-to-br from-blue-950 to-indigo-950 text-white p-6 sm:p-8 rounded-3xl border border-blue-900/50 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-xl pointer-events-none" />

              <h3 className="text-lg font-black text-white mb-5 pb-3 border-b border-blue-900/30">
                {lang === 'en' ? 'Direct Communication Hub' : 'البيانات الرسمية للمستشار'}
              </h3>

              <div className="space-y-4">
                
                {/* Phone Call link */}
                <a href="tel:+966559685737" className="flex items-center gap-4 bg-blue-950/70 p-3.5 rounded-xl border border-blue-900/30 hover:border-blue-800 transition-colors cursor-pointer min-h-[64px]">
                  <div className="p-2.5 bg-blue-500/10 text-blue-300 rounded-lg shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-blue-200 uppercase tracking-widest block font-bold">{lang === 'en' ? 'Direct Mobile' : 'الجوال المباشر'}</span>
                    <span className="font-mono font-bold text-slate-100 text-sm block mt-0.5">
                      <span dir="ltr">+966 55 968 5737</span>
                    </span>
                  </div>
                </a>

                {/* Email proposal link */}
                <a href="mailto:Mattara@gmail.com?subject=IT Service Inquiry" className="flex items-center gap-4 bg-blue-950/70 p-3.5 rounded-xl border border-blue-900/30 hover:border-blue-800 transition-colors cursor-pointer min-h-[64px]">
                  <div className="p-2.5 bg-blue-500/10 text-blue-300 rounded-lg shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-blue-200 uppercase tracking-widest block font-bold">{lang === 'en' ? 'Corporate Email' : 'البريد الإلكتروني المخدم'}</span>
                    <span className="font-mono text-slate-100 text-xs sm:text-sm block mt-0.5 truncate max-w-[210px] sm:max-w-xs">Mattara@gmail.com</span>
                  </div>
                </a>

                {/* LinkedIn Professional profiling */}
                <a href="https://linkedin.com/in/AMattar" target="_blank" rel="noreferrer" className="flex items-center gap-4 bg-blue-950/70 p-3.5 rounded-xl border border-blue-900/30 hover:border-blue-800 transition-colors cursor-pointer min-h-[64px]">
                  <div className="p-2.5 bg-blue-500/10 text-blue-300 rounded-lg shrink-0">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-blue-200 uppercase tracking-widest block font-bold">{lang === 'en' ? 'LinkedIn Identity' : 'الملف المهني لينكد إن'}</span>
                    <span className="font-mono text-blue-350 text-sm block mt-0.5 hover:underline">LinkedIn: AMattar</span>
                  </div>
                </a>

              </div>

              {/* Working hours metadata block */}
              <div className="mt-6 pt-4 border-t border-blue-900/30 text-center">
                <p className="text-[10px] text-blue-200/80 uppercase tracking-wider">
                  {lang === 'en' ? 'Available 8:00 AM - 8:00 PM | Sun - Thu' : 'أوقات العمل: من 8:00 صباحاً حتى 8:00 مساءً | الأحد - الخميس'}
                </p>
              </div>

            </div>

            {/* Geographical Interactive visual representation tag representing Alahsa */}
            <div className="bg-gradient-to-br from-blue-950 to-indigo-950 border border-blue-900/50 rounded-3xl p-6 text-white overflow-hidden relative flex-1 flex flex-col justify-between">
              
              {/* Symbolic styled coverage map design representing Saudi Arabia */}
              <div className="absolute right-0 bottom-0 select-none opacity-10 pointer-events-none transform translate-x-10 translate-y-10 scale-125">
                <Globe className="w-64 h-64 text-blue-400" />
              </div>

              <div className="relative">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="text-blue-400 w-5 h-5 animate-bounce" />
                  <h4 className="font-black text-sm text-white uppercase tracking-wider">{t.availableTitle}</h4>
                </div>
                
                <h5 className="font-extrabold text-base text-blue-200 leading-snug">
                  {lang === 'en' ? 'Base: Al Ahsa Province' : 'مقر الحضور الفني: محافظة الأحساء'}
                </h5>
                <p className="text-xs text-blue-100 mt-2 leading-relaxed opacity-90">
                  {lang === 'en' 
                    ? 'Providing physical structured installation, switch routing, servers and hardware troubleshooting in Hofuf, Mubarraz and rural Al Ahsa, alongside regional operations in Dammam and Khobar.' 
                    : 'صيانة وتمديدات شبكات وتركيب كاميرات المراقبة الأمنية والسنترالات مع ترحيل السيرفرات في الهفوف، المبرز وكافة أحياء الأحساء والمناطق الملاصقة مع التغطية الموسعة لمدن الدمام والخبر.'}
                </p>
              </div>

              {/* Verified Badge and status details */}
              <div className="bg-blue-950/80 p-4 rounded-xl border border-blue-900/40 mt-4 relative z-10 flex items-center justify-between gap-2.5">
                <div>
                  <span className="text-[9px] text-blue-300 uppercase font-bold tracking-wider block">
                    {lang === 'en' ? 'Service Radius' : 'النطاق الميداني'}
                  </span>
                  <span className="text-emerald-400 text-xs font-bold block mt-0.5">
                    {lang === 'en' ? 'Eastern Province-wide' : 'الشرقية وأحياء المبرز والهفوف'}
                  </span>
                </div>
                
                <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded font-black font-semibold">
                  {lang === 'en' ? 'KSA COVERAGE' : 'المنطقة الشرقية'}
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
