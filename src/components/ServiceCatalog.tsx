import { useState } from 'react';
import { services, translationDict } from '../data';
import { Language, ServiceItem } from '../types';
import { Laptop, Database, Video, HardDrive, Phone, HelpCircle, Network, Server, Key, Calculator, Check, ShoppingCart, Send } from 'lucide-react';

interface ServiceCatalogProps {
  lang: Language;
  onSelectEstimatedServices?: (summaryText: string) => void;
}

export default function ServiceCatalog({ lang, onSelectEstimatedServices }: ServiceCatalogProps) {
  const t = translationDict[lang];
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  // States for Calculator
  const [selectedServices, setSelectedServices] = useState<Record<string, boolean>>({
    comp_repair_sw: false,
    comp_repair_hw: false,
    win_install: false,
    data_recovery: false,
    cctv_install: false,
    ip_phones: false,
    net_install_point: false,
    net_server_room: false,
    win_server_install: false,
    domain_config: false,
  });

  const [quantities, setQuantities] = useState<Record<string, number>>({
    cctv_install: 4,      // standard cameras count
    net_install_point: 8, // standard network points
    ip_phones: 5,         // standard phone extensions
  });

  // Toggle selection
  const handleToggleService = (serviceId: string) => {
    setSelectedServices(prev => ({
      ...prev,
      [serviceId]: !prev[serviceId]
    }));
  };

  // Adjust quantity
  const handleQuantityChange = (serviceId: string, val: number) => {
    setQuantities(prev => ({
      ...prev,
      [serviceId]: Math.max(1, Math.min(100, val))
    }));
  };

  // Categorization mapping
  const categories = [
    { id: 'all', label: t.serviceCategory_all },
    { id: 'systems', label: t.serviceCategory_systems },
    { id: 'network', label: t.serviceCategory_network },
    { id: 'cctv', label: t.serviceCategory_cctv },
    { id: 'servers', label: t.serviceCategory_servers },
  ];

  // Filtering services
  const filteredServices = services.filter(s => activeCategory === 'all' || s.category === activeCategory);

  // Icon mapping
  const getServiceIcon = (id: string, className = "w-6 h-6") => {
    switch (id) {
      case 'comp_repair_sw':
        return <Laptop className={className} />;
      case 'comp_repair_hw':
        return <HardDrive className={className} />;
      case 'win_install':
        return <Laptop className={className} />;
      case 'data_recovery':
        return <Database className={className} />;
      case 'cctv_install':
        return <Video className={className} />;
      case 'ip_phones':
        return <Phone className={className} />;
      case 'net_install_point':
        return <Network className={className} />;
      case 'net_server_room':
        return <Server className={className} />;
      case 'win_server_install':
        return <Server className={className} />;
      case 'domain_config':
        return <Key className={className} />;
      default:
        return <HelpCircle className={className} />;
    }
  };

  // Calculation total
  const calculateTotal = () => {
    let total = 0;
    services.forEach(s => {
      if (selectedServices[s.id]) {
        if (s.pricingType === 'per_camera' && s.id === 'cctv_install') {
          total += s.priceSAR * (quantities.cctv_install || 1);
        } else if (s.pricingType === 'per_point' && s.id === 'net_install_point') {
          total += s.priceSAR * (quantities.net_install_point || 1);
        } else if (s.id === 'ip_phones') {
          total += s.priceSAR * (quantities.ip_phones || 1);
        } else {
          total += s.priceSAR;
        }
      }
    });
    return total;
  };

  // Submit calculated summary to contact form
  const handleExportEstimate = () => {
    const total = calculateTotal();
    if (total === 0) return;

    let summaryParts: string[] = [];
    services.forEach(s => {
      if (selectedServices[s.id]) {
        const title = lang === 'en' ? s.titleEn : s.titleAr;
        if (s.id === 'cctv_install') {
          summaryParts.push(`${title} (${quantities.cctv_install} x ${s.priceSAR} SAR)`);
        } else if (s.id === 'net_install_point') {
          summaryParts.push(`${title} (${quantities.net_install_point} x ${s.priceSAR} SAR)`);
        } else if (s.id === 'ip_phones') {
          summaryParts.push(`${title} (${quantities.ip_phones} x ${s.priceSAR} SAR)`);
        } else {
          summaryParts.push(`${title} (${s.priceSAR} SAR)`);
        }
      }
    });

    const summaryText = lang === 'en' 
      ? `Requested Estimate Configuration [Total: ${total} SAR]:\n- ` + summaryParts.join('\n- ') + `\n\nLocation: Al Ahsa\nMessage: Please coordinate for evaluation.`
      : `قائمة كشف الحساب التقديري [الإجمالي المتوقع: ${total} ريال سعودي]:\n- ` + summaryParts.join('\n- ') + `\n\nالمنطقة: الأحساء\nالرجاء المعاينة والتأكيد.`;

    if (onSelectEstimatedServices) {
      onSelectEstimatedServices(summaryText);
    }

    // Scroll to contact form
    const contactSec = document.getElementById('contact');
    if (contactSec) {
      contactSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Generate WhatsApp text for selection
  const getWhatsAppSelectionLink = () => {
    const total = calculateTotal();
    let text = "";
    if (lang === 'en') {
      text = `Hello Eng. Almutaz, I visited your IT Expert landing page and estimated these services:\n`;
      services.forEach(s => {
        if (selectedServices[s.id]) {
          const qty = s.id === 'cctv_install' ? quantities.cctv_install : s.id === 'net_install_point' ? quantities.net_install_point : s.id === 'ip_phones' ? quantities.ip_phones : null;
          text += `- ${s.titleEn}${qty ? ` x${qty}` : ''}\n`;
        }
      });
      text += `Estimated Total Labor Cost: ${total} SAR\nI would like to book a consultation in Al Ahsa.`;
    } else {
      text = `السلام عليكم م. المعتز مطر، قمت بتقدير الخدمات التالية عبر موقعك الإلكتروني:\n`;
      services.forEach(s => {
        if (selectedServices[s.id]) {
          const qty = s.id === 'cctv_install' ? quantities.cctv_install : s.id === 'net_install_point' ? quantities.net_install_point : s.id === 'ip_phones' ? quantities.ip_phones : null;
          text += `- ${s.titleAr}${qty ? ` (العدد: ${qty})` : ''}\n`;
        }
      });
      text += `تكلفة العمل التقديرية: ${total} ريال سعودي\nأود طلب مراجعة ومعاينة لموقعنا في الأحساء.`;
    }
    return `https://wa.me/966559685737?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="pricing-catalog" className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-blue-600 bg-blue-50 border border-blue-200/60 px-4 py-1.5 rounded-full uppercase tracking-widest block w-fit mx-auto mb-3">
            {lang === 'en' ? 'Transparent Saudi Average Pricing' : 'الأسعار والتكلفة للخدمات الميدانية والشركات'}
          </span>
          <div className="h-1 w-16 bg-blue-650 mx-auto mb-3"></div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            {t.pricingTitle}
          </h2>
          <p className="text-sm text-slate-500 mt-3 max-w-xl mx-auto">
            {t.pricingSubtitle}
          </p>
        </div>

        {/* Categories Navigation Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 pb-2 border-b border-slate-200">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredServices.map((service) => {
            const isSelected = selectedServices[service.id];
            return (
              <div
                key={service.id}
                id={`card-${service.id}`}
                className={`bg-white rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 relative overflow-hidden ${
                  isSelected 
                    ? 'border-blue-500 ring-2 ring-blue-500/10 shadow-md' 
                    : 'border-slate-200 hover:border-blue-300 hover:shadow-sm'
                }`}
              >
                {/* Visual Accent Category Bar */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 ${
                  service.category === 'systems' ? 'bg-indigo-600' :
                  service.category === 'network' ? 'bg-cyan-600' :
                  service.category === 'cctv' ? 'bg-teal-600' : 'bg-blue-600'
                }`} />

                <div>
                  {/* Card Header */}
                  <div className="flex justify-between items-start gap-3 mb-4 mt-1">
                    <div className="p-2.5 bg-slate-50 rounded-xl text-slate-700 border border-slate-150">
                      {getServiceIcon(service.id, "w-6 h-6 text-blue-600")}
                    </div>
                    
                    {/* Select Checklist Checkbox */}
                    <button
                      onClick={() => handleToggleService(service.id)}
                      className={`text-xs font-semibold px-3 py-1.5 rounded-lg border transition-colors flex items-center gap-1.5 cursor-pointer ${
                        isSelected 
                          ? 'bg-emerald-50 text-emerald-600 border-emerald-200' 
                          : 'bg-white text-slate-500 hover:bg-slate-50 border-slate-200'
                      }`}
                    >
                      {isSelected ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : null}
                      <span>{isSelected ? (lang === 'en' ? 'Checked' : 'محدد') : (lang === 'en' ? 'Estimate' : 'احسب معاً')}</span>
                    </button>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight leading-snug">
                    {lang === 'en' ? service.titleEn : service.titleAr}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    {lang === 'en' ? service.descEn : service.descAr}
                  </p>

                  {/* Inclusions Detail list */}
                  <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2">
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                      {lang === 'en' ? 'Inclusions & Scope:' : 'مشمولات العمل الفني:'}
                    </p>
                    <ul className="text-xs text-slate-600 flex flex-col gap-1.5">
                      {(lang === 'en' ? service.detailsEn : service.detailsAr).map((det, index) => (
                        <li key={index} className="flex gap-2 items-start text-[11px] leading-relaxed">
                          <span className="text-blue-500 shrink-0 font-bold">✓</span>
                          <span className="text-slate-600">{det}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Price Layout */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-bold">
                      {service.pricingType === 'starting' ? (lang === 'en' ? 'Starting From' : 'سعر البدء من') : (lang === 'en' ? 'Estimated Fee' : 'قيمة الأتعاب')}
                    </span>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-xl sm:text-2xl font-black font-mono text-slate-900 border-t-0">{service.priceSAR}</span>
                      <span className="text-xs text-slate-500 font-bold">{t.sar}</span>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 block">{lang === 'en' ? 'Pricing basis' : 'معيار القياس'}</span>
                    <span className="bg-slate-100 text-slate-700 text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-md mt-1 block">
                      {lang === 'en' ? service.unitEn : service.unitAr}
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Pricing Disclosure Notice */}
        <div className="bg-white p-4 rounded-xl border border-slate-200 text-xs text-slate-500 leading-normal mb-16 shadow-xs select-none">
          <p className="font-semibold text-slate-700">{lang === 'en' ? 'Standard Exclusions & Notes:' : 'ملاحظات هامة حول تسعير التكلفة الفنية:'}</p>
          <p className="mt-1">{t.pricingNote}</p>
        </div>


        {/* Interactive Cost Estimator Builder (Calculator Card) */}
        <div id="cost-calculator" className="bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-10 border border-blue-800 shadow-2xl relative overflow-hidden">
          {/* Ambient visual background glow in calculator */}
          <div className="absolute top-1/2 left-3/4 -translate-y-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Calculator description */}
            <div className="lg:col-span-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-blue-500/20 text-blue-300 rounded-lg">
                  <Calculator className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-black tracking-tight text-white">
                  {t.calculatorTitle}
                </h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {t.calculatorDesc}
              </p>

              {/* Calculator adjustments for variable units */}
              <div className="mt-6 space-y-4 pt-6 border-t border-slate-800">
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                  {lang === 'en' ? 'Customize Services Quantities:' : 'تخصيص والتحكم في كمية النقاط الممددة:'}
                </p>

                {/* CCTV Point Quantity Adjuster */}
                <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                  <div className="flex items-center gap-2">
                    <Video className="w-4 h-4 text-teal-400" />
                    <div>
                      <span className="text-xs font-bold text-white block">
                        {lang === 'en' ? 'CCTV Camera Points' : 'عدد كاميرات المراقبة الأمنية'}
                      </span>
                      <span className="text-[10px] text-slate-400">180 SAR / point</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleQuantityChange('cctv_install', quantities.cctv_install - 1)}
                      className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center justify-center text-sm font-bold border border-slate-700 cursor-pointer"
                    >
                      -
                    </button>
                    <span className="w-10 text-center font-bold text-white text-sm font-mono bg-slate-900 border border-slate-800 py-1 rounded-md">
                      {quantities.cctv_install}
                    </span>
                    <button
                      onClick={() => handleQuantityChange('cctv_install', quantities.cctv_install + 1)}
                      className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center justify-center text-sm font-bold border border-slate-700 cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Structured Network Point adjuster */}
                <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                  <div className="flex items-center gap-2">
                    <Network className="w-4 h-4 text-cyan-400" />
                    <div>
                      <span className="text-xs font-bold text-white block">
                        {lang === 'en' ? 'Network Outlets (CAT6/A)' : 'نقاط تمديدات الشبكة الجدارية'}
                      </span>
                      <span className="text-[10px] text-slate-400">150 SAR / point</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleQuantityChange('net_install_point', quantities.net_install_point - 1)}
                      className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center justify-center text-sm font-bold border border-slate-700 cursor-pointer"
                    >
                      -
                    </button>
                    <span className="w-10 text-center font-bold text-white text-sm font-mono bg-slate-900 border border-slate-800 py-1 rounded-md">
                      {quantities.net_install_point}
                    </span>
                    <button
                      onClick={() => handleQuantityChange('net_install_point', quantities.net_install_point + 1)}
                      className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center justify-center text-sm font-bold border border-slate-700 cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* IP Phones system count */}
                <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-indigo-400" />
                    <div>
                      <span className="text-xs font-bold text-white block">
                        {lang === 'en' ? 'IP Phone extensions' : 'سنترال الهواتف والتحويلات'}
                      </span>
                      <span className="text-[10px] text-slate-400">220 SAR / extension</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleQuantityChange('ip_phones', quantities.ip_phones - 1)}
                      className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center justify-center text-sm font-bold border border-slate-700 cursor-pointer"
                    >
                      -
                    </button>
                    <span className="w-10 text-center font-bold text-white text-sm font-mono bg-slate-900 border border-slate-800 py-1 rounded-md">
                      {quantities.ip_phones}
                    </span>
                    <button
                      onClick={() => handleQuantityChange('ip_phones', quantities.ip_phones + 1)}
                      className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center justify-center text-sm font-bold border border-slate-700 cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Calculator interactive output bill */}
            <div className="lg:col-span-6 bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 flex flex-col justify-between h-full">
              
              <div>
                <h4 className="font-extrabold text-sm text-slate-200 uppercase tracking-wider pb-3 border-b border-slate-800">
                  {lang === 'en' ? 'Calculation Sheet' : 'كشف حساب تقدير التكلفة والكمية'}
                </h4>

                {/* Dynamically list selected services */}
                <div className="mt-4 space-y-2.5 max-h-48 overflow-y-auto pr-1">
                  {services.filter(s => selectedServices[s.id]).length === 0 ? (
                    <div className="py-8 text-center">
                      <p className="text-xs text-slate-500 italic">
                        {lang === 'en' 
                          ? 'No services selected above. Check card buttons in the catalog to calculate an estimate.' 
                          : 'لم تقم بتحديد أي خدمة بعد. انقر على زر (احسب معاً) في بطاقات الخدمات أعلاه لتظهر التكلفة تقديريّاً.'}
                      </p>
                    </div>
                  ) : (
                    services.map(s => {
                      if (!selectedServices[s.id]) return null;
                      
                      let qtyValue = null;
                      let itemCost = s.priceSAR;
                      if (s.id === 'cctv_install') {
                        qtyValue = quantities.cctv_install;
                        itemCost = s.priceSAR * qtyValue;
                      } else if (s.id === 'net_install_point') {
                        qtyValue = quantities.net_install_point;
                        itemCost = s.priceSAR * qtyValue;
                      } else if (s.id === 'ip_phones') {
                        qtyValue = quantities.ip_phones;
                        itemCost = s.priceSAR * qtyValue;
                      }

                      return (
                        <div key={s.id} className="flex items-center justify-between text-xs text-slate-300 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800/80">
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                            <span className="font-medium truncate max-w-xs block">
                              {lang === 'en' ? s.titleEn : s.titleAr}
                            </span>
                            {qtyValue ? (
                              <span className="bg-blue-900/40 text-blue-300 font-mono text-[10px] px-1.5 py-0.5 rounded border border-blue-800/30">
                                x{qtyValue}
                              </span>
                            ) : null}
                          </div>
                          <span className="font-mono font-bold text-slate-100 shrink-0">
                            {itemCost} {t.sar}
                          </span>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>

              {/* Total Calculation outcome section */}
              <div className="mt-8 pt-6 border-t border-slate-800">
                <div className="flex justify-between items-baseline mb-4">
                  <span className="text-xs font-bold text-slate-400 capitalize">
                    {t.totalEstimate}:
                  </span>
                  <div className="text-right">
                    <span className="text-3xl font-black font-mono text-blue-400">
                      {calculateTotal()}
                    </span>
                    <span className="text-xs text-blue-400 font-bold ml-1.5 rtl:mr-1.5">
                      {t.sar}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-4">
                  {/* WhatsApp send button */}
                  <a
                    href={getWhatsAppSelectionLink()}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-xs transition-transform cursor-pointer ${
                      calculateTotal() === 0 
                        ? 'bg-slate-800 text-slate-500 pointer-events-none' 
                        : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/10 active:scale-95'
                    }`}
                  >
                    <Send className="w-4 h-4 text-white" />
                    <span>{t.sendWhatsApp}</span>
                  </a>

                  {/* Pre-fill Form Button */}
                  <button
                    onClick={handleExportEstimate}
                    disabled={calculateTotal() === 0}
                    className={`flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-xs transition-colors cursor-pointer ${
                      calculateTotal() === 0 
                        ? 'bg-slate-800 text-slate-500 cursor-not-allowed' 
                        : 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/10'
                    }`}
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span>{lang === 'en' ? 'Refine Quote in Form' : 'نقل التكلفة ومراجعة العقد'}</span>
                  </button>
                </div>

                <p className="text-[10px] text-slate-500 text-center mt-3 select-none leading-relaxed">
                  {lang === 'en' ? '* Excludes server hardware/license keys cost. Exact quote requires physical inspection.' : '* لا تشمل قطع الغيار أو كوابل الفايبر والترخيص. تُدقق وتُعتمد الأسعار بعد المعاينة العينية والتعاقد.'}
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
