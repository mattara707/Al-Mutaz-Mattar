import { ServiceItem, ExperienceItem, SkillGroup, AchievementItem } from './types';

export const personalInfo = {
  nameEn: "Almutaz Mattar",
  nameAr: "المعتز مطر",
  titleEn: "EA Infrastructure & Security Architect",
  titleAr: "مهندس أول بنية تحتية للأعمال وأمن المعلومات",
  subTitleEn: "TOGAF® Certified | 20+ Years Enterprise Experience",
  subTitleAr: "اعتماد ®TOGAF العالمي | خبرة تتجاوز 20 عاماً في قطاع المؤسسات",
  contactNo: "+966559685737",
  email: "Mattara@gmail.com",
  linkedIn: "AMattar",
  locationEn: "Al Ahsa, Eastern Region, Saudi Arabia",
  locationAr: "الأحساء، المنطقة الشرقية، المملكة العربية السعودية",
  aboutEn: "IT Infrastructure and Cybersecurity Manager with over 20 years of experience leading enterprise network operations, secure infrastructure, cybersecurity controls, and mission-critical systems in governments and international organizations. Specialist in robust service availability, business continuity, and risk mitigation.",
  aboutAr: "مدير البنية التحتية لتكنولوجيا المعلومات والأمن السيبراني بخبرة تمتد لأكثر من 20 عاماً في قيادة عمليات شبكات المؤسسات، والبنية التحتية الآمنة، وضوابط الأمن السيبراني، والأنظمة الحساسة في الجهات الحكومية والمنظمات الدولية. متخصص في ضمان استمرارية الأعمال والحد من المخاطر التشغيلية وتعزيز الجودة."
};

export const achievements: AchievementItem[] = [
  {
    textEn: "Managed secure infrastructure supporting national-scale critical database and identity systems.",
    textAr: "إدارة وتأمين بنى تحتية حساسة للأنظمة الوطنية لتسجيل الهويات وقواعد البيانات الكبرى."
  },
  {
    textEn: "Led multi-site network operations in highly complex enterprise and international diplomatic environments.",
    textAr: "قيادة عمليات الشبكات متعددة المواقع في بيئات دبلوماسية ودولية عالية الحساسية والتعقيد."
  },
  {
    textEn: "Implemented strict cybersecurity controls of firewalls and servers that strengthened risk management.",
    textAr: "تطبيق ضوابط صارمة لحماية خوادم وجدران الحماية السيبرانية لتعزيز تلافي المخاطر والمقاومة التشغيلية."
  },
  {
    textEn: "Oversaw country-wide system backups, fingerprint networks, disaster recovery drills, and remote support.",
    textAr: "الإشراف على عمليات النَسخ الاحتياطي على مستوى الدولة، ودعم الشبكات وخطط التعافي الكارثي والربط البعيد."
  }
];

export const certs = [
  { name: "TOGAF® Certified", issuer: "The Open Group" },
  { name: "Cisco CCNP® (Routing & Switching)", issuer: "Cisco Systems" },
  { name: "SonicWall UTM® Certified", issuer: "SonicWall" },
  { name: "Oracle Database Administrator (DBA)", issuer: "Oracle" },
  { name: "Aastra MX-ONE PABX® Operator", issuer: "Aastra" },
  { name: "LTE Telecommunication Specialist", issuer: "Telecom Training" }
];

export const skills: SkillGroup[] = [
  {
    categoryEn: "Governance & Security Compliance",
    categoryAr: "الحوكمة والامتثال الأمني",
    skillsEn: ["Security Compliance", "Risk Management", "IT Governance", "Internal Controls", "Business Continuity", "Disaster Recovery"],
    skillsAr: ["الامتثال الأمني للمنشآت", "إدارة المخاطر التشغيلية", "حوكمة تكنولوجيا المعلومات", "الرقابة الداخلية وأنظمتها", "خطط استمرارية الأعمال", "التعافي من الكوارث واستعادة البيانات"]
  },
  {
    categoryEn: "Enterprise Infrastructure",
    categoryAr: "البنية التحتية للمؤسسات",
    skillsEn: ["Data Center Operations", "High Availability Clusters", "Network Server Rooms", "Capacity Planning", "Infrastructure Monitoring", "Virtualization (VMware/Hyper-V)"],
    skillsAr: ["إدارة عمليات مراكز البيانات", "أنظمة عالي الجهوزية والتوفر", "تصميم وتجهيز غرف الخوادم والشبكات", "تخطيط السعات الاستيعابية", "مراقبة وإدارة أداء الأنظمة", "الأنظمة الافتراضية والبيئات المشتركة"]
  },
  {
    categoryEn: "Cybersecurity & Operations",
    categoryAr: "الأمن السيبراني والعمليات والربط",
    skillsEn: ["Vulnerability Management", "Incident Response Protocols", "Firewall Administration (Fortinet/SonicWall/Cisco)", "Network Access Control (NAC)", "Site-to-Site VPN", "IP telephony & VoIP Engineering"],
    skillsAr: ["إدارة الثغرات الأمنية", "بروتوكولات الاستجابة للحوادث", "إدارة جدران الحماية (Fortinet / Cisco / SonicWall)", "التحكم في الوصول إلى الشبكات", "شبكات الربط الإلكتروني VPN للمقرات", "هندسة الاتصال الهاتفي عبر الشبكة VoIP"]
  }
];

export const services: ServiceItem[] = [
  {
    id: "comp_repair_sw",
    titleEn: "Computer Repair (Software)",
    titleAr: "إصلاح هاردوير وسوفتوير - برمجيات",
    category: "systems",
    priceSAR: 150,
    unitEn: "service base",
    unitAr: "مقطوعة أساسية",
    pricingType: "fixed",
    descEn: "Full system optimization, malware & virus removal, registry fixes, slow boot repair, and dynamic driver updates.",
    descAr: "تحسين كامل للنظام، إزالة الفيروسات والبرمجيات الخبيثة، إصلاح ملفات التسجيل، تسريع الإقلاع، وحل مشاكل توافق التعريفات.",
    detailsEn: [
      "Virus and Spyware deep cleansing",
      "System Registry & OS file optimization",
      "Driver troubleshooting for accessories",
      "Performance diagnosis report included"
    ],
    detailsAr: [
      "مسح عميق وتنظيف كامل من الفيروسات وبرامج التجسس",
      "تحسين جودة وتشغيل ملفات السجل وملفات النظام الأساسية",
      "حل مشاكل التعريفات والملحقات والبرمجيات المتعطلة",
      "تضمين تقرير تشخيصي متكامل للأداء وبطء الاستجابة"
    ]
  },
  {
    id: "comp_repair_hw",
    titleEn: "Computer Repair (Hardware)",
    titleAr: "إصلاح وصيانة عتاد الكمبيوتر - هاردوير",
    category: "systems",
    priceSAR: 250,
    unitEn: "device",
    unitAr: "للجهاز الواحد",
    pricingType: "starting",
    descEn: "Hardware diagnostics, components replacement (SSD, RAM, CPU throttling checks), deep cleaning, and thermo-paste renewal.",
    descAr: "تشخيص الأعطال الفيزيائية، تركيب قطع الغيار (ترقية أقراص SSD، الذاكرة العشوائية RAM، معالجة معاجين بالتبريد) مع تنظيف الهيكل الداخلي.",
    detailsEn: [
      "Excludes spare parts cost",
      "Replacement and component testing with benchmarks",
      "Thermal maintenance (premium paste application)",
      "Power Supply and Motherboard voltage test"
    ],
    detailsAr: [
      "لا يشمل قيمة قطع الغيار البديلة",
      "اختبار توافق ومقاييس الأداء للقطع الجديدة والمرقّاة",
      "صيانة حرارية شاملة وتنظيف المراوح وتجديد المعجون المبرد",
      "فحص جهود مزود الطاقة واللوحة الأم بمقاييس مخصصة"
    ]
  },
  {
    id: "win_install",
    titleEn: "Windows 10/11 Professional Installation",
    titleAr: "تثبيت وضبط نظام تشغيل ويندوز 10/11",
    category: "systems",
    priceSAR: 130,
    unitEn: "installation",
    unitAr: "للتثبيت والتهيئة",
    pricingType: "fixed",
    descEn: "Clean installation of Windows OS, installation of all missing original drivers, utility configuration, and data preservation.",
    descAr: "تثبيت نظيف لأحدث نسخ ويندوز، تحصيل وضبط التعريفات الأصلية المتوافقة بالكامل، تفعيل ترخيص العميل وتثبيت حزمة البرامج الضرورية.",
    detailsEn: [
      "User profile backup and restoration",
      "Hardware-specific original certified drivers search",
      "Critical security updates applied",
      "License key activation support (client provides activation key)"
    ],
    detailsAr: [
      "نسخ احتياطي واسترجاع ملفات المستخدم الخاصة بشكل موثوق",
      "تحميل التعريفات الأصلية والمعتمدة الملائمة لبطاقة الرسوميات والصوت والمنافذ",
      "تضمين آخر التحديثات الأمنية الهامة وحزم حماية ويندوز",
      "دعم تفعيل مفاتيح الترخيص للعميل (المفاتيح الرسمية يوفرها العميل)"
    ]
  },
  {
    id: "data_recovery",
    titleEn: "Professional Data Recovery",
    titleAr: "استعادة الملقات والبيانات التالفة والمحذوفة",
    category: "systems",
    priceSAR: 350,
    unitEn: "drive",
    unitAr: "للقرص الصلب",
    pricingType: "starting",
    descEn: "Expert structural partition recovery of deleted photos, spreadsheets, documents, and media from formatted, corrupted drives.",
    descAr: "استعادة متقدمة للملفات المفقودة والمحذوفة والوثائق والملفات والمستندات المحاسبية من الأقراص الصلبة التالفة أو المفرمّتة بطريق الخطأ.",
    detailsEn: [
      "High probability recovery techniques",
      "Supported on HDD, SSD, USB, and SD memory cards",
      "Integrity check for extracted directories and databases",
      "Zero-exposure confidentiality standard for personal data"
    ],
    detailsAr: [
      "تقنيات استعادة بنية الملفات والتقاط القطاعات التالفة بمعدلات نجاح ممتازة",
      "دعم الأقراص الصلبة HDD, SSD وذاكرة الفلاش والميموري كارد",
      "فحص سلامة المجلدات المستخرجة والتأكد من فتح قواعد البيانات الحيوية",
      "سرية تامة ومطلقة ومحكمة للبيانات الشخصية والشركات المستعادة"
    ]
  },
  {
    id: "cctv_install",
    titleEn: "CCTV Installation & Cabling",
    titleAr: "تمديد وتركيب كاميرات المراقبة الأمنية",
    category: "cctv",
    priceSAR: 180,
    unitEn: "camera point",
    unitAr: "لكل نقطة كاميرا",
    pricingType: "per_camera",
    descEn: "Physical and logical installation of modern CCTV cameras (analog HD or IP cameras), NVR/DVR setups, PoE switch routing, and remote mobile viewing.",
    descAr: "تمديد كابلات الكاميرات والتركيب الفيزيائي والبرمجي لكاميرات المراقبة (IP أو تشابهية HD)، إعداد جهاز NVR/DVR وترتيب الصورة والبث للجوال.",
    detailsEn: [
      "Waterproof outdoor bracket fitting and termination",
      "Configure NVR/DVR recording schedule & cloud parameters",
      "Router setup for secure remote view app on smartphones",
      "Point-to-point cable test & standard tags"
    ],
    detailsAr: [
      "تثبيت الكاميرات في حوامل خاضعة للعزل المائي والحراري خارجيّاً",
      "ضبط نظام تسجيل الكاميرات على الهارد ديسك الداخلي وجدولة التسجيل الحركي",
      "ربط المودم لإتاحة الرؤية والمتابعة المباشرة عبر الجوال بأمان",
      "فحص واختبار دقة الكبل عند التوصيل وتصنيف الكيبل برقم النقطة"
    ]
  },
  {
    id: "ip_phones",
    titleEn: "IP Phone Systems Setup & PBX",
    titleAr: "تأسيس وبرمجة سنترالات الهواتف الشبكية IP Phone",
    category: "network",
    priceSAR: 220,
    unitEn: "user/extension",
    unitAr: "لكل تحويلة وتلفون",
    pricingType: "starting",
    descEn: "Installation of IP PBX server systems, SIP trunks routing, Interactive Voice Response (IVR) setup, voicemail routing, and employee handset configuration.",
    descAr: "تركيب خادم السنترال الهاتفي IP PBX، دمج خطوط الاتصالات SIP Trunks، تفعيل خدمة الرد الآلي الصوتي الترحيبي والتوزيع الذكي للاتصالات.",
    detailsEn: [
      "Extensions design pattern (e.g. 100 to 500 mapping)",
      "Digital receptionist / IVR routing flow configured",
      "Yealink, Cisco, Avaya, or Grandstream certified firmware sync",
      "Call transfer, call waiting, and phone directory mapping"
    ],
    detailsAr: [
      "تصميم خطة الترقيم الداخلي للتحويلات (الخطة الهاتفية للمقر)",
      "بناء مسار الرد الهاتفي الآلي (اضغط 1 للمبيعات، 2 للإدارة)",
      "مزامنة وضبط الهواتف الشبكية لعلامات الماركات الشهيرة مثل Yealink و Cisco",
      "تفعيل خصائص تحويل المكالمات، قوائم الانتظار، بريد صوتي للبريد الإلكتروني"
    ]
  },
  {
    id: "net_install_point",
    titleEn: "Structured Network Cabling per Point",
    titleAr: "تمديد وتأريض كابلات الشبكات لكل نقطة",
    category: "network",
    priceSAR: 150,
    unitEn: "network point",
    unitAr: "لكل نقطة شبكة ممددة",
    pricingType: "per_point",
    descEn: "Premium clean run of CAT6/CAT6A copper cables, standard faceplate installation, patch panel termination, and fluke performance certification.",
    descAr: "تمديد كوابل الشبكة النحاسية عالية السرعة فئة CAT6 أو CAT6A، تركيب القواعد الحائطية والجدارية، والإنهاء على لوحة التوزيع الباتش بانيل بفحص متكامل.",
    detailsEn: [
      "Rigid cable management & pvc conduit routing",
      "Keystone jack termination & testing",
      "Patch panels labeling & switch linkage",
      "Signal integrity and high speed assurance"
    ],
    detailsAr: [
      "التمديد عبر مجارٍ ومرابط بلاستيكية PVC لإخفاء الأسلاك تماماً",
      "إنهاء وتركيب الأفياش الجدارية (RJ45 Keystone Jack)",
      "ترميز شامل لنقاط التوزيع وربطها بسويتش الشبكة الرئيسي",
      "اختبار نقل البيانات والتأكد من القدرة على تشغيل سرعة 1Gbps كاملة"
    ]
  },
  {
    id: "net_server_room",
    titleEn: "Network Server Room Design & Rack Setup",
    titleAr: "تجهيز وتركيب كبائن وغرف خوادم شبكات متكاملة",
    category: "servers",
    priceSAR: 4500,
    unitEn: "room / custom implementation",
    unitAr: "للغرفة والمقود بناء على الحجم",
    pricingType: "starting",
    descEn: "Heavy-duty server cabinet mounting, clean logic restructuring of chaotic switches, routing of fiber uplinks, UPS backup setup, and firewall hardware integration.",
    descAr: "تأسيس وتركيب الكبائن Rack Cabinets، ربط السويتشات، تنظيم الأسلاك المبعثرة، ربط الألياف الضوئية، مخازن الطاقة UPS، وتهيئة الفايروول الرئيسي.",
    detailsEn: [
      "Restructuring messy cables into systematic path blocks",
      "Firewall & Core Switch logical layout and security barriers",
      "Uninterruptible Power Supply (UPS) monitoring path configure",
      "Rack ventilation and thermal security setup"
    ],
    detailsAr: [
      "ترتيب وتصفيف وإعادة هيكلة الأسلاك والشبكات الفوضوية والكبائن بشكل تجميلي هائل",
      "إرساء خريطة اتصال آمنة بين السويتش المركزي وجدار الحماية السيبراني لحجب المواقع وعزل الإدارات",
      "توصيل وبرمجة بطاريات حفظ طاقة الكهرباء لعدم انقطاع العمل",
      "مراجعة تهوية ومكان كابينة السيرفر وعوامل سلامة الأجهزة وطرد الحرارة"
    ]
  },
  {
    id: "win_server_install",
    titleEn: "Windows Server Installation & Hyper-V",
    titleAr: "تثبيت وضبط أنظمة السيرفر ويندوز سيرفر",
    category: "servers",
    priceSAR: 2500,
    unitEn: "server node",
    unitAr: "لكل خادم فيزيائي",
    pricingType: "starting",
    descEn: "Deployment of Microsoft Windows Server (2019/2022) with custom RAID arrays, storage structures, hypervisor Virtual Machines, and automatic backup routines.",
    descAr: "تنزيل وإعداد نظام ويندوز سيرفر 2019 / 2022، تهيئة مصفوفات الأقراص RAID لحماية البيانات ضد التلف، وبناء الخوادم الوهمية عبر Hyper-V.",
    detailsEn: [
      "RAID Controller bios array custom configs (RAID 1/5/10)",
      "Hyper-V virtual machines implementation for separation",
      "Local server health notification setup",
      "Centralized system automation backup tasks"
    ],
    detailsAr: [
      "برمجة إقلاع مصفوفات الهارد ديسك RAID 1, 5, 10 لتجنب فقد البيانات عند تلف الأقراص",
      "تفعيل البيئات الوهمية هايبر في (Hyper-V VMs) لتقسيم الخدمات بأمان وسهولة صيانة",
      "تجهيز لوحة التنبيهات وأخطاء العتاد المسبقة",
      "إبرام سيناريو ونصوص برمجية للنسخ الاحتياطي التلقائي لمجلدات السيرفر في هارد خارجي أو سحابي"
    ]
  },
  {
    id: "domain_config",
    titleEn: "Active Directory & Domain Controller Configuration",
    titleAr: "إعداد النطاق ومتحكم الدومين Active Directory",
    category: "servers",
    priceSAR: 3000,
    unitEn: "domain forest",
    unitAr: "للنطاق وهيكلية الأجهزة",
    pricingType: "starting",
    descEn: "Establish directory security standard. Setup domain (.local / .com), Active Directory Users and Computers, Group Policies (GPO) to secure client PCs, DHCP and DNS roles.",
    descAr: "تأسيس متحكم الدومين لحماية شبكة المنشأة. تحويل الأجهزة المنفردة بنطاق مركزي، تصميم صلاحيات الموظفين، تكوين DNS وسيرفر DHCP لتوزيع الأيبيهات وتقييد صلاحيات الفلاش والمنافذ.",
    detailsEn: [
      "Centralized group policy objects (GPO) to enforce security rules on devices",
      "Organizational Units (OUs) reflecting business divisions and privileges",
      "Enterprise DHCP scope layout & redundant secure DNS forwarding",
      "Profile integration and file sharing access rights restriction mapped"
    ],
    detailsAr: [
      "بناء سياسات المجموعة GPO لمنع الموظفين من تغيير الإعدادات أو تشغيل فلاش ميموري ضار",
      "تقسيم الأقسام والهيكل الوظيفي داخل الدومين (الإدارة، المحاسبة، الموارد البشرية)",
      "إنشاء مجالات توزيع عناوين الأجهزة DHCP وتأمين خادوم أسماء النطاقات DNS",
      "أرشفة وهيكلة ملفات المشاركة وصلاحيات قراءة/تعديل البيانات حسب رتبة الموظف"
    ]
  }
];

export const experience: ExperienceItem[] = [
  {
    period: "Oct 2024 – Aug 2025",
    periodAr: "أكتوبر ٢٠٢٤ – أغسطس ٢٠٢٥",
    roleEn: "Infrastructure Consultant",
    roleAr: "مستشار البنية التحتية والشبكات",
    companyEn: "Sudanese Embassy - Cairo",
    companyAr: "السفارة السودانية - القاهرة",
    locationEn: "Cairo, Egypt",
    locationAr: "القاهرة، جمهورية مصر العربية",
    detailsEn: [
      "Architected safe infrastructure supporting embassy daily operations, compliance, security & speed metrics.",
      "Established multi-site secure Video conferencing and enterprise IP telephony VoIP routing.",
      "Designed and configured smart queuing systems & digital customer alerts.",
      "Deployed high-definition CCTV security camera systems, access control matrices, and attendance logging."
    ],
    detailsAr: [
      "تصميم وبناء بنية تحتية هندسية آمنة لدعم العمليات اليومية للسفارة ومعايير الحماية والأداء وسرعة المعالجة.",
      "تأسيس قنوات اتصال مرئية آمنة بين المقرات والسنترالات الهاتفية الذكية VoIP للربط الخارجي والداخلي.",
      "تصميم وبرمجة أنظمة ترتيب وقوائم انتظار المراجعيين الذكية وتنبيه العملاء.",
      "تركيب وإعداد شبكة كاميرات المراقبة الأمنية CCTV، وأنظمة التحكم بالدخول وبصمات الحضور والانصراف."
    ]
  },
  {
    period: "Apr 2020 – Dec 2023",
    periodAr: "أبريل ٢٠٢٠ – ديسمبر ٢٠٢٣",
    roleEn: "Regional IT Infrastructure Coordinator",
    roleAr: "المنسق الإقليمي للبنية التحتية لتكنولوجيا المعلومات",
    companyEn: "UNISFA - United Nations Mission",
    companyAr: "بعثة الأمم المتحدة الأمنية المؤقتة - يونيستفا",
    locationEn: "Kadugli, United Nations Camp",
    locationAr: "كادوقلي، قطاع عمليات الأمم المتحدة",
    detailsEn: [
      "Managed remote site multi-spectrum network uplinks, fiber trunks, and regional satellite solutions.",
      "Supervised camp wired and wireless secure networking utilizing Cisco switches and Access Points controllers.",
      "Led full lifecycle Datacenter operations, central backups, and server virtualization layout routing.",
      "Engineered corporate VoIP communications using specialized Aastra MX-ONE PABX servers.",
      "Administered cloud directory user directories and Azure Active Directory domain synchronization."
    ],
    detailsAr: [
      "إدارة خطوط الربط والشبكات متعددة الأطياف للمواقع النائية، وتمديدات الفايبر والاتصالات الفضائية الإقليمية.",
      "الإشراف على الشبكات السلكية واللاسلكية للبعثة باستخدام محولات سيسكو ومتحكمات نقاط البث اللاسلكي.",
      "إدارة كاملة لعمليات مركز البيانات (Datacenter)، النسخ الاحتياطي المركزي، والبيئات الوهمية وإرشاد الخوادم.",
      "هندسة وتنسيق سنترالات الهواتف العملاقة باستخدام سيرفرات السنترال المتطور Aastra MX-ONE.",
      "إدارة ومزامنة هويات المستخدمين وصلاحيات الدخول عبر السحابة باستخدام Azure Active Directory."
    ]
  },
  {
    period: "May 2019 – Apr 2020",
    periodAr: "مايو ٢٠١٩ – أبريل ٢٠٢٠",
    roleEn: "IT Consultant (Systems & Security Architect)",
    roleAr: "مستشار تقني (مهندس أنظمة وحل أمني سيبراني)",
    companyEn: "Ministry of Finance",
    companyAr: "وزارة المالية",
    locationEn: "Khartoum, SD",
    locationAr: "الخرطوم، السودان",
    detailsEn: [
      "Strengthened enterprise core switches routing, datacenter security barriers, and logical network subnet segregation.",
      "Re-engineered corporate backup protocols, RAID arrays, and storage recovery readiness drills."
    ],
    detailsAr: [
      "تحصين المسارات بالسويتشات المركزية بالوزارة ورفع كفاءة جدران الحماية الأمنية لمراكز البيانات وفصل صلاحيات الأجهزة.",
      "إعادة تصميم وهيكلة خطط النسخ الاحتياطي التلقائي ومصفوفات التخزين لضمان جهوزية التعافي في حالات الكوارث."
    ]
  },
  {
    period: "Sep 2018 – Apr 2020",
    periodAr: "سبتمبر ٢٠١٨ – أبريل ٢٠٢٠",
    roleEn: "Cloud & Infrastructure Consultant",
    roleAr: "مستشار الحلول السحابية والشبكات",
    companyEn: "Golden Square Services",
    companyAr: "جولدن سكوير للحلول التقنية",
    locationEn: "Enterprise Solutions Division",
    locationAr: "قطاع حلول المنشآت والشركات",
    detailsEn: [
      "Designed private cloud-clustered multi-resource VMware solutions supporting Map Harvesting processing.",
      "Implemented virtualization workspaces mounting high-performance graphical server processors to client nodes."
    ],
    detailsAr: [
      "تصميم وبناء مصفوفات تخزين سحابية خاصة VMware لدعم معالجة الخرائط الجغرافية الشاسعة وسرعات تحليلها.",
      "تأسيس بيئات العمل والسطوح الافتراضية للعملاء وربطها بمعالجات رسومية عالية الكفاءة عبر الخوادم المشتركة."
    ]
  },
  {
    period: "Jun 2012 – May 2019",
    periodAr: "يونيو ٢٠١٢ – مايو ٢٠١٩",
    roleEn: "Network Security & Infrastructure Manager",
    roleAr: "مدير البنية التحتية وأمن شبكات الأحوال المدنية",
    companyEn: "Ministry of Interior (Civilroll HQ)",
    companyAr: "وزارة الداخلية - الإدارة العامة للأحوال المدنية",
    locationEn: "National Civil Database Agency",
    locationAr: "الهيئة الوطنية لقاعدة البيانات والبطاقة المدنية",
    detailsEn: [
      "Redesigned the entire core network from scratch to eliminate network drops, lag, and security loopholes.",
      "Enforced rigid firewall parameters and site-to-site VPN linkages between Ministry branches and Civilroll Headquarters.",
      "Safeguarded crucial databases containing nationwide fingerprint structures, SAN backups, and security ID printers.",
      "Boosted nationwide service SLA, uptime performance, and incident response matrices."
    ],
    detailsAr: [
      "إعادة تصميم وتأسيس كامل لشبكة الاتصالات الكبرى للأحوال لمنع انقطاعات الخدمة والبطء وسد الثغرات.",
      "تطبيق وتدريع حوائط الحماية السيبرانية وتمديد خطوط الربط المباشرة VPN بين فروع الوزارة والمركز الرئيسي للبيانات.",
      "تأمين وضمان استمرارية قواعد البيانات الوطنية الدقيقة ومسجلات البصمة، وأنظمة الطابعات المشفرة للبطاقات.",
      "رفع مؤشرات جودة واستجابة واستقرار الخدمة على مستوى الدولة ووضع كفاءة عالية للاستجابة لحوادث الشبكات."
    ]
  }
];

export const translationDict = {
  en: {
    heroTag: "Executive IT Infrastructure Specialist",
    heroHeading: "Secure, Resilient, Enterprise-Grade IT Solutions",
    heroDesc: "Empowering businesses across Al Ahsa and the Eastern Region with battle-tested systems coordination, advanced cybersecurity, and professional infrastructure setups. Backed by 20+ years of high-availability experience.",
    contactBtn: "Contact Now",
    servicesBtn: "View Services & Prices",
    experienceBtn: "Technical Resume",
    aboutHeading: "Enterprise Consultant Serving Eastern Region",
    yearsExp: "Years Enterprise Experience",
    certifications: "Professional Certifications",
    availStatus: "Based in Al Ahsa - On-Site Services available across Eastern Province (Hofuf, Mubarraz, Khobar, Dammam, Jubail, Abqaiq)",
    availableTitle: "Geographic Coverage",
    pricingTitle: "Professional IT Service Packages & Rates",
    pricingSubtitle: "Transparent calculations as per Saudi average pricing guidelines. Ideal for businesses, medical centers, commercial shops, and residential sites searching for qualified execution.",
    serviceCategory_all: "All Services",
    serviceCategory_systems: "Computers & Data",
    serviceCategory_network: "Network & Phones",
    serviceCategory_cctv: "Security & CCTV",
    serviceCategory_servers: "Windows Server & Domain",
    pricingNote: "* Prices are indicative averages for professional labor. Hardware components (cables, mounting brackets, camera hardware, servers, licensing keys) are to be provided by the client or invoiced separately based on requirements.",
    calculatorTitle: "Interactive Cost Estimator",
    calculatorDesc: "Select services, customize quantities, and instantly build an estimated price quote in Saudi Riyals (SAR) for your upcoming installation or repair.",
    totalEstimate: "Total Estimated Labor Cost",
    requestConsultMessage: "Get in touch directly with Almutaz Mattar to book an on-site evaluation in Al Ahsa or receive a detailed quotation.",
    sendWhatsApp: "Discuss on WhatsApp",
    callPhone: "Call Direct Phone",
    sendEmail: "Send Email Proposal",
    viewLinkedIn: "View LinkedIn",
    experienceTitle: "Professional Work Experience & Career Track",
    experienceSubtitle: "Representing over two decades of critical infrastructure management alongside international entities and government ministries.",
    skillsTitle: "Core Competency Domains",
    skillsSubtitle: "Deep operational mastery across multi-layered systems, security frameworks, and disaster readiness.",
    achievementsTitle: "Selected Enterprise Accomplishments",
    contactTitle: "Secure Your Infrastructure Today",
    contactSubtitle: "Based in Al Ahsa. Ready to assist commercial, government, educational, or private projects with enterprise excellence.",
    fullName: "Your Full Name / Company Name",
    emailAddr: "Email Address",
    phoneNo: "Phone Number (Saudi format)",
    locationLabel: "Your Location in Eastern Region",
    messageLabel: "Project Brief & Requirements",
    submitBtn: "Submit Service Inquiry",
    locationPlaceholder: "e.g., Al Hofuf, Al Mubarraz, Dammam, Al Ahsa Industrial Area",
    sentSuccess: "Thank you! Your request has been simulated successfully. Feel free to use the direct WhatsApp link for instant confirmation.",
    qty: "Qty",
    avgPrice: "Average Price",
    sar: "SAR",
    per: "per",
    enterpriseTag: "TOGAF CERTIFIED ARCHITECT",
    phoneDisclaimer: "Direct Phone: +966 55 968 5737 | Available 8:00 AM - 8:00 PM",
    viewCV: "Download Brief CV Profile",
  },
  ar: {
    heroTag: "خبير ومستشار البنية التحتية لتكنولوجيا المعلومات والشبكات",
    heroHeading: "أنظمة تقنية متكاملة، آمنة ومستقرة لأعمالك",
    heroDesc: "تمكين الشركات والمؤسسات في الأحساء والمنطقة الشرقية من خلال تصميم وإرساء شبكات وبنى تحتية فائقة الأمان بمعايير عالمية خالية من المشاكل. بدعم من خبرة تشغيلية واحترافية تتجاوز 20 عاماً في المؤسسات الحكومية والدبلوماسية.",
    contactBtn: "تواصل لمناقشة مشروعك",
    servicesBtn: "عرض الخدمات والأسعار",
    experienceBtn: "السيرة المهنية والخبرات",
    aboutHeading: "مستشار وخبير تقني معتمد لخدمة المقرات والشركات",
    yearsExp: "عاماً من الخبرة التقنية الفائقة",
    certifications: "شهادات واعتمادات دولية وحكومية",
    availStatus: "المقر الرئيسي: الأحساء - متاح للزيارات والتأسيس الميداني في كامل المنطقة الشرقية (الهفوف، المبرز، الخبر، الدمام، الجبيل، بقيق)",
    availableTitle: "التغطية الميدانية للخدمات",
    pricingTitle: "باقة الخدمات الفنية وقائمة أسعار العمل الفعلي",
    pricingSubtitle: "أسعار شفافة وعادلة متوافقة مع متوسط تكاليف العمل الفني المتخصص والمحترف بالمملكة العربية السعودية وتناسب الشركات، العيادات، المتاجر والمنازل المستقرة.",
    serviceCategory_all: "جميع الخدمات",
    serviceCategory_systems: "الكمبيوتر واستعادة البيانات",
    serviceCategory_network: "الشبكات والسنترالات",
    serviceCategory_cctv: "كاميرات المراقبة والأمان",
    serviceCategory_servers: "ويندوز سيرفر والدومين",
    pricingNote: "* هذه الأسعار لخدمة العمل الفني وضبط الأجهزة، وتعتمد على متوسط الأسعار السعودي. قطع الغيار ومواد التأسيس وسويتشات الشبكات والكاميرات وتراخيص الأنظمة يتكفل بها العميل أو تفوتر بشكل منفصل حسب احتياج المقر.",
    calculatorTitle: "آلة حاسبة تفاعلية لتقدير التكاليف",
    calculatorDesc: "اختر الخدمات المطلوبة وحدد الكميات التقريبية لنقاط المراقبة أو نقاط الشبكة لحساب إجمالي الفاتورة المتوقعة بالريال السعودي بشكل فوري.",
    totalEstimate: "إجمالي التكلفة التقريبية للعمل والتركيب",
    requestConsultMessage: "تواصل مباشرة مع المهندس المعتز مطر لطلب معاينة ميدانية لمقر عملك في الأحساء أو للحصول على عرض سعر رسمي موثق.",
    sendWhatsApp: "دردشة واتساب مباشرة",
    callPhone: "اتصال هاتفي مباشر",
    sendEmail: "إرسال رسالة رسمية",
    viewLinkedIn: "لينكد إن LinkedIn",
    experienceTitle: "مسيرة الخبرة والعمليات المهنية السابقة",
    experienceSubtitle: "استعراض لأبرز المواقع القيادية للبنية التحتية وإدارة الأمن السحابي والشبكي بالوزارات والمنظمات العالمية المرموقة.",
    skillsTitle: "محاور الكفاءة والقدرات التقنية المصقولة",
    skillsSubtitle: "تمكن عميق من الأنظمة الأساسية والمدرعة لحماية قواعد البيانات والحوكمة والتشغيل الموزع.",
    achievementsTitle: "إنجازات ونجاحات موثقة بمؤسسات الدولة",
    contactTitle: "احجز جلستك الاستشارية أو اطلب الخدمة الآن",
    contactSubtitle: "المقر: الأحساء. جاهز ومستعد لخدمة القطاعات التجارية، الصناعية، الصحية، والمنشآت التعليمية والفلل الخاصة في المنطقة الشرقية.",
    fullName: "الاسم الكريم / اسم المنشأة أو الشركة",
    emailAddr: "البريد الإلكتروني",
    phoneNo: "رقم الجوال الفعال (صيغة سعودية)",
    locationLabel: "الموقع الجغرافي / الحي (في المنطقة الشرقية)",
    messageLabel: "تفاصيل ونوع الخدمة المطلوبة بمقركم ومساحة المبنى",
    submitBtn: "إرسال طلب المعاينة والاستفسار",
    locationPlaceholder: "مثال: الهفوف، المبرز، الدمام، المنطقة الصناعية بالأحساء",
    sentSuccess: "تم استلام معلومات طلبك بنجاح! يسعدنا تواصلك الفوري بنا عبر الواتساب لتأكيد موعد المعاينة وتدقيق المتطلبات الفنية.",
    qty: "العدد",
    avgPrice: "متوسط السعر",
    sar: "ريال سعودي",
    per: "لكل",
    enterpriseTag: "مهندس معماري تقني معتمد TOGAF",
    phoneDisclaimer: "الاتصال المباشر: +966 55 968 5737 | متاح من الساعة 8:00 صباحاً حتى 8:00 مساءً",
    viewCV: "تحميل ملف السيرة الذاتية الوجيز",
  }
};
