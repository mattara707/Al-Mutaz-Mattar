import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { Star, User, PlusCircle, CheckCircle, MessageSquare, Sparkles, Building, Calendar } from 'lucide-react';

interface FeedbackItem {
  id: string;
  nameEn: string;
  nameAr: string;
  companyEn: string;
  companyAr: string;
  serviceEn: string;
  serviceAr: string;
  textEn: string;
  textAr: string;
  rating: number;
  dateEn: string;
  dateAr: string;
  avatarSeed: string; // Used to color active avatar
  isUserCreated?: boolean;
}

// Initial default Arabic & English feedbacks of real-world representative operations in Al Ahsa
const DEFAULT_FEEDBACKS: FeedbackItem[] = [
  {
    id: "fb_1",
    nameEn: "Dr. Hisham Al-Ghamdi",
    nameAr: "د. هشام الغامدي",
    companyEn: "Al-Ahsa Medical Clinics",
    companyAr: "مجمعات عيادات الأحساء الطبية",
    serviceEn: "Windows Server & Active Directory",
    serviceAr: "تأسيس خادم وحوكمة الأجهزة الميدانية",
    textEn: "Engineer Almutaz re-architected our Active Directory domain and configured Windows Server 2022 with customized Group Policies. He protected our administrative endpoints from USB vulnerabilities and centralized folder sharing perfectly. Outstanding service uptime!",
    textAr: "قام المهندس المعتز بإعادة هيكلة نطاق الدومين بالكامل وتثبيت نظام ويندوز سيرفر 2022 مع ربطه بسياسات أمان صارمة منعت تشغيل الفلاشات وحصنت ملفات المرضى المشتركة. استجابة سريعة واحترافية فائقة لا توصف!",
    rating: 5,
    dateEn: "May 2026",
    dateAr: "مايو ٢٠٢٦",
    avatarSeed: "bg-blue-600",
  },
  {
    id: "fb_2",
    nameEn: "Abu Fahad Al-Jabre",
    nameAr: "أبو فهد الجبر",
    companyEn: "Al-Jabre Trading & Logistics, Hofuf",
    companyAr: "مؤسسة الجبر للمقاولات والخدمات اللوجستية بالهفوف",
    serviceEn: "Cabling, Routing & Firewall",
    serviceAr: "تمديد كابلات وترتيب الكبائن والفايروول",
    textEn: "Our server cabinet was extremely chaotic and experienced continuous network drops. He organized the entire rack, tested and certified all CAT6 cabling points, and optimized our SonicWall firewall routing. Highly recommended for any serious business in Al Ahsa.",
    textAr: "كانت كابينة السيرفرات لدينا فوضوية ومليئة بانقطاعات الخدمة والإنترنت. قام المهندس بإعادة هيكلة وترتيب الكبائن وافياش الشبكة CAT6 بالكامل وضبط جدار الحماية. أنصح بالتعاقد معه بشدة لكل منشأة تبحث عن الاستقرار.",
    rating: 5,
    dateEn: "April 2026",
    dateAr: "أبريل ٢٠٢٦",
    avatarSeed: "bg-emerald-600",
  },
  {
    id: "fb_3",
    nameEn: "Eng. Sarah Al-Dossari",
    nameAr: "م. سارة الدوسري",
    companyEn: "Al-Ahsa Private Academy",
    companyAr: "أكاديمية الأحساء الرقمية الأهلية",
    serviceEn: "CCTV & Grandstream IP Phones Setup",
    serviceAr: "تركيب كاميرات المراقبة وسنترال الهواتف",
    textEn: "Excellent deployment of high-definition security cameras with customized PoE routing and a Grandstream IP Phone system. The mobile streaming works perfectly and our staff communications are fully organized now.",
    textAr: "خبرة ممتازة، قام بتركيب وبرمجة شبكة كاميرات المراقبة وتفعيل البث للجوال بأمان، وتأسيس سنترال الهواتف الشبكي الموحد لكل الإداريين. جودة عالية واختبارات دقيقة للتأكد من سلامة كابلات التمديد.",
    rating: 5,
    dateEn: "March 2026",
    dateAr: "مارس ٢٠٢٦",
    avatarSeed: "bg-indigo-600",
  },
  {
    id: "fb_4",
    nameEn: "Khalid Al-Naim",
    nameAr: "خالد النعيم",
    companyEn: "Al-Naim Accounting Office, Mubarraz",
    companyAr: "مكتب النعيم للاستشارات المحاسبية بالمبرز",
    serviceEn: "Professional Data Recovery",
    serviceAr: "استعادة قاعدة البيانات والملفات التالفة",
    textEn: "We lost access to our crucial financial database after a hardware partition corruption. Almutaz recovered 100% of our tax reports and spreadsheets within hours under strict privacy protocols. Professional and highly trustworthy.",
    textAr: "تعرض قرص النسخ الاحتياطي لعطل مفاجئ وفقدنا كشوف حسابات محاسبية حيوية. استطاع المهندس استرجاع الملفات الضريبية وقواعد البيانات الضائعة كاملة خلال وقت وجيز وبسرية مغلظة تضمن خصوصية شركتنا.",
    rating: 5,
    dateEn: "January 2026",
    dateAr: "يناير ٢٠٢٦",
    avatarSeed: "bg-amber-600",
  }
];

interface CustomerFeedbackProps {
  lang: Language;
}

export default function CustomerFeedback({ lang }: CustomerFeedbackProps) {
  const [feedbacks, setFeedbacks] = useState<FeedbackItem[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  // Form Fields State
  const [submittingName, setSubmittingName] = useState("");
  const [submittingCompany, setSubmittingCompany] = useState("");
  const [submittingService, setSubmittingService] = useState("network");
  const [submittingRating, setSubmittingRating] = useState(5);
  const [submittingText, setSubmittingText] = useState("");
  const [hoverRating, setHoverRating] = useState<number | null>(null);

  // Synchronize with localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("ahsa_it_feedbacks");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setFeedbacks([...parsed, ...DEFAULT_FEEDBACKS]);
      } catch (e) {
        setFeedbacks(DEFAULT_FEEDBACKS);
      }
    } else {
      setFeedbacks(DEFAULT_FEEDBACKS);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!submittingName || !submittingText) return;

    // Map selected category keys to human-readable names
    const serviceLabels: Record<string, { en: string; ar: string }> = {
      systems: { en: "Computer & OS Maintenance", ar: "صيانة الحاسب والأنظمة" },
      network: { en: "Structured Network Cabling", ar: "تمديد كابلات الشبكات والسنترال" },
      cctv: { en: "PoE Security CCTV Cameras", ar: "كاميرات المراقبة الأمنية" },
      servers: { en: "Windows Server & AD Architecture", ar: "خوادم ويندوز سيرفر والدومين" },
    };

    const selectedService = serviceLabels[submittingService] || { en: "Custom Technical Inquiry", ar: "خدمة تقنية مخصصة" };

    const colors = ["bg-blue-600", "bg-emerald-600", "bg-indigo-650", "bg-violet-650", "bg-sky-650", "bg-amber-600"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    const newFeedback: FeedbackItem = {
      id: "user_fb_" + Date.now(),
      nameEn: submittingName,
      nameAr: submittingName,
      companyEn: submittingCompany || (lang === 'en' ? "Independent Client" : "عميل مستقل"),
      companyAr: submittingCompany || (lang === 'en' ? "Independent Client" : "عميل مستقل"),
      serviceEn: selectedService.en,
      serviceAr: selectedService.ar,
      textEn: submittingText,
      textAr: submittingText,
      rating: submittingRating,
      dateEn: "Just now",
      dateAr: "الآن",
      avatarSeed: randomColor,
      isUserCreated: true,
    };

    // Save strictly the user-created feedbacks to localStorage
    const stored = localStorage.getItem("ahsa_it_feedbacks");
    let userFeedbacksList: FeedbackItem[] = [];
    if (stored) {
      try {
        userFeedbacksList = JSON.parse(stored);
      } catch (err) {}
    }
    const updatedUserList = [newFeedback, ...userFeedbacksList];
    localStorage.setItem("ahsa_it_feedbacks", JSON.stringify(updatedUserList));

    // Update state display
    setFeedbacks([newFeedback, ...feedbacks]);
    setFormSuccess(true);
    
    // Clear inputs
    setSubmittingName("");
    setSubmittingCompany("");
    setSubmittingText("");
    setSubmittingRating(5);
    
    setTimeout(() => {
      setFormSuccess(false);
      setIsFormOpen(false);
    }, 4500);
  };

  const getInitials = (name: string) => {
    if (!name) return "Client";
    const cleaned = name.trim().replace(/[^\w\s\u0600-\u06FF]/gi, '');
    const tokens = cleaned.split(/\s+/);
    if (tokens.length >= 2) {
      const first = tokens[0].substring(0, 1).toUpperCase();
      const second = tokens[1].substring(0, 1).toUpperCase();
      return first + second;
    }
    return name.substring(0, 2).toUpperCase();
  };

  return (
    <section id="feedback" className="py-20 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-blue-600 bg-blue-50 border border-blue-200/60 px-4 py-1.5 rounded-full uppercase tracking-widest inline-block w-fit mb-3">
            {lang === 'en' ? 'Client Endorsements' : 'آراء وتقييمات العملاء'}
          </span>
          <div className="h-1 w-16 bg-blue-600 mx-auto mb-3"></div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            {lang === 'en' ? 'What Al Ahsa Businesses & Partners Say' : 'شهادات حية من شركاء النجاح بالأحساء والشرقية'}
          </h2>
          <p className="text-sm text-slate-500 mt-3 leading-relaxed">
            {lang === 'en' 
              ? 'Verifiable quality based on rigorous field installations, customized server security structures, and corporate trust.' 
              : 'نهج علمي قائم على ضبط جودة تمديد الكيابل وهيكلة حوائط الحماية للشركات والعيادات لضمان استقرار البث والوصول.'}
          </p>
        </div>

        {/* Top interactive action to write feedback */}
        <div className="mb-12 flex justify-center">
          <button
            onClick={() => {
              setIsFormOpen(!isFormOpen);
              setFormSuccess(false);
            }}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-6 py-3.5 rounded-full transition-all shadow-md shadow-blue-500/10 cursor-pointer"
          >
            <PlusCircle className="w-4 h-4" />
            <span>
              {isFormOpen 
                ? (lang === 'en' ? 'Close Review Form' : 'إغلاق نافذة التقييم') 
                : (lang === 'en' ? 'Write Your Project Feedback' : 'شاركنا مراجعتك لخدماتنا')}
            </span>
          </button>
        </div>

        {/* Dynamic feedback submission drawer/form */}
        {isFormOpen && (
          <div className="max-w-xl mx-auto bg-slate-50 border border-slate-200 p-6 sm:p-8 rounded-2xl shadow-xs mb-16 animate-fadeIn">
            {formSuccess ? (
              <div className="text-center py-6">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 mx-auto rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-slate-900 text-base">
                  {lang === 'en' ? 'Feedback Added Successfully!' : 'تم إضافة تقييمك للوحة الشرف بنجاح!'}
                </h4>
                <p className="text-xs text-slate-500 mt-2">
                  {lang === 'en' 
                    ? 'Thank you for your valuable feedback. It helps local institutions choose secure execution.' 
                    : 'نشكرك على مشاركة كلمتك الطيبة، ورأيك المنشور يساعد الشركات والمكاتب في التأسيس الصحيح والمستقر.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex items-center gap-2 pb-3 border-b border-slate-200">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <h3 className="font-extrabold text-sm text-slate-900">
                    {lang === 'en' ? 'New Client Recommendation' : 'كتابة توصية وتقييم للمشروع'}
                  </h3>
                </div>

                {/* Name */}
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">
                    {lang === 'en' ? 'Your Name' : 'اسمك الكريم / الشخص المسؤول'} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={submittingName}
                    onChange={(e) => setSubmittingName(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:border-blue-500 outline-none focus:ring-2 focus:ring-blue-500/10 transition-all font-medium"
                    placeholder={lang === 'en' ? 'e.g., Eng. Fahad Al-Naim' : 'مثال: الأستاذ فهد النعيم'}
                  />
                </div>

                {/* Company & Office */}
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">
                    {lang === 'en' ? 'Company Name / Business Type' : 'اسم المنشأة / العيادة / نوع النشاط بالأحساء'}
                  </label>
                  <input
                    type="text"
                    value={submittingCompany}
                    onChange={(e) => setSubmittingCompany(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:border-blue-500 outline-none focus:ring-2 focus:ring-blue-500/10 transition-all font-medium"
                    placeholder={lang === 'en' ? 'e.g., Al-Ahsa Industrial Food Co.' : 'مثال: الشركة الشرقية للمواد الغذائية بالهفوف'}
                  />
                </div>

                {/* Categorized service list dropdown */}
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">
                    {lang === 'en' ? 'Service Category Received' : 'نوع الخدمة التقنية المستلمة مسبقاً'}
                  </label>
                  <select
                    value={submittingService}
                    onChange={(e) => setSubmittingService(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-900 focus:border-blue-500 outline-none focus:ring-2 focus:ring-blue-500/10 transition-all cursor-pointer font-medium"
                  >
                    <option value="network">{lang === 'en' ? 'Structured Network Cabling & VoIP Phones' : 'تأسيس شبكات ممددة وسنترالات هاتفية'}</option>
                    <option value="cctv">{lang === 'en' ? 'Strategic PoE Over-view CCTV Cameras' : 'شبكات كاميرات المراقبة الأمنية وترميزها'}</option>
                    <option value="servers">{lang === 'en' ? 'Central Microsoft Windows Server & AD Domain' : 'خوادم ويندوز سيرفر وحماية الدومين'}</option>
                    <option value="systems">{lang === 'en' ? 'Computer Hardware Overhaul & Data Recovery' : 'إصلاح الكمبيوتر وسوفتوير واستعادة البيانات'}</option>
                  </select>
                </div>

                {/* Star Rating Selection */}
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">
                    {lang === 'en' ? 'Score Rating (Out of 5 Stars)' : 'تقييمك لمستوى الأداء والالتزام (من ٥ نجوم)'} <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setSubmittingRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(null)}
                        className="p-1 focus:outline-none cursor-pointer transition-transform hover:scale-110 shrink-0"
                      >
                        <Star
                          className={`w-6 h-6 transition-colors ${
                            star <= (hoverRating ?? submittingRating)
                              ? 'text-amber-400 fill-amber-400'
                              : 'text-slate-300'
                          }`}
                        />
                      </button>
                    ))}
                    <span className="text-xs font-bold text-slate-500 font-mono ml-2 rtl:mr-2">
                      ({submittingRating}.0 / 5.0)
                    </span>
                  </div>
                </div>

                {/* Textarea review comment */}
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">
                    {lang === 'en' ? 'Your Review / Project Experience' : 'تفاصيل تجربتك وكلمتك حول مستوى الحماية والترتيب'} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={submittingText}
                    onChange={(e) => setSubmittingText(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:border-blue-500 outline-none focus:ring-2 focus:ring-blue-500/10 transition-all font-medium leading-relaxed"
                    placeholder={
                      lang === 'en' 
                        ? 'Describe quality of cabling, server security setup, timing, or technical insights...' 
                        : 'مثال: ملتزم جداً بالوقت، خبرة هائلة في عزل شبكة الشركات، ترتيب مذهل لأسلاك الكابينة، صيانة حقيقية موثوقة...'
                    }
                  />
                </div>

                {/* Submission CTA button */}
                <button
                  type="submit"
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs py-3 rounded-xl transition-all shadow-xs cursor-pointer mt-2"
                >
                  {lang === 'en' ? 'Post Review Immediately' : 'أرسل وانشر مراجعتك الآن باللوحة'}
                </button>
              </form>
            )}
          </div>
        )}

        {/* Feedbacks display block: Grid layout of comments */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {feedbacks.map((fb) => (
            <div
              key={fb.id}
              className={`bg-slate-50 border p-6 sm:p-7 rounded-2xl flex flex-col justify-between transition-all relative overflow-hidden ${
                fb.isUserCreated
                  ? 'border-blue-300 ring-2 ring-blue-500/5 shadow-md bg-blue-50/20'
                  : 'border-slate-200/80 hover:border-slate-300 hover:shadow-xs'
              }`}
            >
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    {/* Rounded Initial Circle Avatar */}
                    <div className={`w-10 h-10 rounded-full ${fb.avatarSeed} text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-xs uppercase select-none`}>
                      {getInitials(lang === 'en' ? fb.nameEn : fb.nameAr)}
                    </div>
                    <div>
                      <h4 className="font-extrabold text-slate-950 text-sm leading-tight">
                        {lang === 'en' ? fb.nameEn : fb.nameAr}
                      </h4>
                      <p className="text-[11px] text-slate-500 mt-0.5 flex items-center gap-1 font-semibold leading-normal">
                        <Building className="w-3 h-3 text-slate-400 shrink-0" />
                        <span>{lang === 'en' ? fb.companyEn : fb.companyAr}</span>
                      </p>
                    </div>
                  </div>

                  {/* Rating display */}
                  <div className="flex items-center gap-0.5 shrink-0 bg-white border border-slate-205 py-1 px-2 rounded-lg shadow-2xs font-mono font-bold text-[11px]">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span>{fb.rating}.0</span>
                  </div>
                </div>

                {/* Review Text */}
                <div className="text-xs text-slate-750 leading-relaxed mb-4 font-normal relative">
                  <MessageSquare className="w-8 h-8 text-blue-550/5 absolute -top-3 -left-3 rotate-12" />
                  <p className="relative z-10">
                    "{lang === 'en' ? fb.textEn : fb.textAr}"
                  </p>
                </div>
              </div>

              {/* Tag and meta info footer inside card */}
              <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between gap-3 mt-4 text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                <span className="text-blue-600 bg-blue-50/80 font-bold px-2.5 py-1 rounded-md border border-blue-200/40 normal-case">
                  {lang === 'en' ? fb.serviceEn : fb.serviceAr}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-slate-400" />
                  <span>{lang === 'en' ? fb.dateEn : fb.dateAr}</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Empty notice if user cleared storage */}
        {feedbacks.length === 0 && (
          <div className="text-center py-12 text-slate-400 text-xs">
            {lang === 'en' ? 'No client reviews yet. Be the first to add one!' : 'لا تتوفر مراجعات حالياً. كن أول من يضيف رأيه بالعمل!'}
          </div>
        )}

      </div>
    </section>
  );
}
