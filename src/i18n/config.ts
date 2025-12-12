import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

const resources = {
  en: { translation: {
    brand: 'AC Repair Pro',
    companyName: 'Fahad Musleh Al Otaibi Est.',
    professionalService: 'Professional AC Repair',
    nav: { home: 'Home', services: 'Services', about: 'About', contact: 'Contact' },
    hero: { 
      title: 'Cool Solutions for Every Hot Problem', 
      subtitle: 'Expert refrigeration and AC repair services in Riyadh. We bring the chill back to your space with cutting-edge technology and unmatched expertise.',
      stats: { clients: 'Happy Clients', emergency: 'Emergency Service', experience: 'Years Experience' }
    },
    cta: { contact: 'Get Instant Quote', explore: 'Our Services' },
    services: {
      title: 'Expert Repair Solutions',
      subtitle: 'From air conditioning to kitchen appliances, we provide comprehensive repair services with cutting-edge technology and unmatched expertise.',
      splitAc: { title: 'Split AC Repair', desc: 'Professional split AC installation, maintenance, and repair services' },
      washingMachine: { title: 'Washing Machine Service', desc: 'Complete washing machine repair and maintenance solutions' },
      refrigerator: { title: 'Refrigerator Repair', desc: 'Expert refrigerator and freezer repair services' },
      kitchenAppliances: { title: 'Kitchen Appliances', desc: 'Comprehensive kitchen appliance repair and maintenance' },
      features: {
        installation: 'Installation', maintenance: 'Maintenance', emergency: 'Emergency Repair', support: '24/7 Support',
        drumRepair: 'Drum Repair', motorService: 'Motor Service', leakFixing: 'Leak Fixing', performanceTune: 'Performance Tune',
        coolingIssues: 'Cooling Issues', compressorRepair: 'Compressor Repair', thermostatFix: 'Thermostat Fix', energyOptimization: 'Energy Optimization',
        ovenRepair: 'Oven Repair', microwaveService: 'Microwave Service', dishwasherFix: 'Dishwasher Fix', gasLineCheck: 'Gas Line Check'
      },
      ourServices: 'Our Services',
      learnMore: 'Learn More',
      partsTitle: 'Common Parts We Service & Replace',
      stats: {
        repairs: 'Repairs Completed',
        emergency: 'Emergency Service',
        experience: 'Years Experience',
        rating: 'Customer Rating'
      }
    },
    process: {
      title: 'How We Work',
      subtitle: 'Our streamlined 4-step process ensures fast, reliable, and transparent AC repair services',
      call: { title: 'Call/WhatsApp', desc: 'Share your issue and location with our support team' },
      visit: { title: 'Rapid Visit', desc: 'Our certified engineer inspects and explains the issue' },
      quote: { title: 'Transparent Quote', desc: 'Get a clear, upfront price before any work begins' },
      fix: { title: 'Fix & Test', desc: 'We repair your AC and verify optimal cooling performance' }
    },
    about: { 
      title: '15+ Years of Excellence in AC Repair Services', 
      subtitle: 'Fahad Musleh Al Otaibi Est. has been serving Riyadh with professional refrigeration and air conditioning services since 2008. We combine traditional expertise with modern technology to deliver unmatched service quality.',
      whyChoose: 'Why Choose Our AC Repair Services?',
      description: 'With over 15 years of experience in the HVAC industry, we\'ve built our reputation on delivering reliable, efficient, and affordable air conditioning solutions. Our team of certified technicians uses state-of-the-art diagnostic tools and genuine parts to ensure your cooling system operates at peak performance.',
      features: {
        certified: { title: 'Certified Technicians', desc: 'All our technicians are certified and trained to handle the latest AC technologies' },
        emergency: { title: '24/7 Emergency Service', desc: 'Round-the-clock emergency repair services for urgent cooling needs' },
        guarantee: { title: 'Quality Guarantee', desc: 'We stand behind our work with comprehensive warranties on all repairs' },
        response: { title: 'Fast Response', desc: 'Quick diagnosis and efficient repairs to get your AC running smoothly' }
      },
      brands: 'Authorized Service Provider for Leading Brands',
      aboutUs: 'About Us',
      happyCustomers: 'Happy Customers',
      successRate: 'Success Rate',
      serviceInfo: 'Service Information',
      location: 'Kingdom of Saudi Arabia - Riyadh',
      licensed: 'Licensed & Insured Service Provider'
    },
    contact: { 
      title: 'Ready to Fix Your AC Today?', 
      subtitle: 'Don\'t let the heat get to you! Our expert technicians are standing by 24/7 to provide immediate assistance for all your cooling needs.',
      emergency: 'AC Breakdown? We\'re Here 24/7!',
      emergencyDesc: 'Emergency repairs available around the clock. No extra charges for weekend or holiday service calls.',
      callEmergency: 'Call Emergency Line',
      serviceHours: 'Service Hours',
      serviceArea: 'Service Area',
      methods: {
        call: { title: 'Call Us Now', subtitle: 'Emergency Hotline' },
        alternative: { title: 'Alternative Line', subtitle: 'Service Booking' },
        whatsapp: { title: 'WhatsApp', subtitle: 'Quick Support', value: 'Chat with us' },
        email: { title: 'Email Support', subtitle: 'Technical Queries' }
      },
      getInTouch: 'Get In Touch',
      emergencyBanner: 'EMERGENCY SERVICE',
      days: {
        weekdays: 'Monday - Friday',
        saturday: 'Saturday',
        sunday: 'Sunday',
        emergency: 'Emergency Service',
        available: '24/7 Available'
      },
      areaDescription: 'We provide comprehensive AC repair services throughout Riyadh and surrounding areas.',
      areas: {
        central: 'Central Riyadh',
        north: 'North Riyadh',
        east: 'East Riyadh',
        west: 'West Riyadh'
      }
    },
    footer: {
      description: 'Your trusted partner for professional refrigeration and air conditioning services in Riyadh. We bring comfort back to your space with expert repairs and maintenance.',
      stats: { repairs: 'Repairs', service: 'Service', years: 'Years' },
      contactUs: 'Contact Us',
      serviceHours: 'Service Hours',
      serviceArea: 'Service Area',
      serviceAreaDesc: 'Riyadh & Surrounding Areas',
      copyright: 'All rights reserved.',
      emergency247: 'Emergency 24/7'
    },
    qrCode: {
      title: 'Scan to Visit Website',
      description: 'Scan this QR code with your phone camera to instantly visit our website',
      downloadPNG: 'Download QR Code (PNG)',
      printPDF: 'Print as PDF',
      footer: 'Perfect for business cards, flyers, and promotional materials'
    },
  } },
  ar: { translation: {
    brand: 'خبير إصلاح المكيفات',
    companyName: 'مؤسسة فهد مصلح العتيبي',
    professionalService: 'إصلاح مكيفات احترافي',
    nav: { home: 'الرئيسية', services: 'الخدمات', about: 'من نحن', contact: 'اتصل بنا' },
    hero: { 
      title: 'حلول باردة لكل مشكلة ساخنة', 
      subtitle: 'خدمات إصلاح التبريد والمكيفات المتخصصة في الرياض. نعيد البرودة إلى مساحتك بأحدث التقنيات والخبرة المتميزة.',
      stats: { clients: 'عميل سعيد', emergency: 'خدمة طوارئ', experience: 'سنة خبرة' }
    },
    cta: { contact: 'احصل على عرض فوري', explore: 'خدماتنا' },
    services: {
      title: 'حلول الإصلاح المتخصصة',
      subtitle: 'من أجهزة التكييف إلى أجهزة المطبخ، نقدم خدمات إصلاح شاملة بأحدث التقنيات والخبرة المتميزة.',
      splitAc: { title: 'إصلاح مكيف سبليت', desc: 'خدمات تركيب وصيانة وإصلاح مكيفات سبليت احترافية' },
      washingMachine: { title: 'خدمة الغسالات', desc: 'حلول إصلاح وصيانة الغسالات الشاملة' },
      refrigerator: { title: 'إصلاح الثلاجات', desc: 'خدمات إصلاح الثلاجات والمجمدات المتخصصة' },
      kitchenAppliances: { title: 'أجهزة المطبخ', desc: 'إصلاح وصيانة أجهزة المطبخ الشاملة' },
      features: {
        installation: 'التركيب', maintenance: 'الصيانة', emergency: 'إصلاح طوارئ', support: 'دعم 24/7',
        drumRepair: 'إصلاح الأسطوانة', motorService: 'خدمة المحرك', leakFixing: 'إصلاح التسريبات', performanceTune: 'ضبط الأداء',
        coolingIssues: 'مشاكل التبريد', compressorRepair: 'إصلاح الضاغط', thermostatFix: 'إصلاح الثرموستات', energyOptimization: 'تحسين الطاقة',
        ovenRepair: 'إصلاح الفرن', microwaveService: 'خدمة الميكروويف', dishwasherFix: 'إصلاح غسالة الصحون', gasLineCheck: 'فحص خط الغاز'
      },
      ourServices: 'خدماتنا',
      learnMore: 'اعرف المزيد',
      partsTitle: 'القطع الشائعة التي نقوم بصيانتها واستبدالها',
      stats: {
        repairs: 'إصلاحات مكتملة',
        emergency: 'خدمة طوارئ',
        experience: 'سنوات خبرة',
        rating: 'تقييم العملاء'
      }
    },
    process: {
      title: 'كيف نعمل',
      subtitle: 'عمليتنا المبسطة من 4 خطوات تضمن خدمات إصلاح مكيفات سريعة وموثوقة وشفافة',
      call: { title: 'اتصال/واتساب', desc: 'شارك مشكلتك وموقعك مع فريق الدعم' },
      visit: { title: 'زيارة سريعة', desc: 'مهندسنا المعتمد يفحص ويشرح المشكلة' },
      quote: { title: 'عرض شفاف', desc: 'احصل على سعر واضح ومقدم قبل بدء العمل' },
      fix: { title: 'إصلاح واختبار', desc: 'نصلح مكيفك ونتحقق من الأداء الأمثل للتبريد' }
    },
    about: { 
      title: '15+ سنة من التميز في خدمات إصلاح المكيفات', 
      subtitle: 'مؤسسة فهد مصلح العتيبي تخدم الرياض بخدمات التبريد والتكييف المهنية منذ 2008. نجمع بين الخبرة التقليدية والتكنولوجيا الحديثة لتقديم جودة خدمة لا مثيل لها.',
      whyChoose: 'لماذا تختار خدمات إصلاح المكيفات لدينا؟',
      description: 'مع أكثر من 15 عامًا من الخبرة في صناعة التدفئة والتهوية وتكييف الهواء، بنينا سمعتنا على تقديم حلول تكييف موثوقة وفعالة وبأسعار معقولة. يستخدم فريقنا من الفنيين المعتمدين أدوات تشخيص حديثة وقطع غيار أصلية لضمان تشغيل نظام التبريد بأقصى أداء.',
      features: {
        certified: { title: 'فنيون معتمدون', desc: 'جميع فنيينا معتمدون ومدربون للتعامل مع أحدث تقنيات المكيفات' },
        emergency: { title: 'خدمة طوارئ 24/7', desc: 'خدمات إصلاح طوارئ على مدار الساعة للاحتياجات العاجلة للتبريد' },
        guarantee: { title: 'ضمان الجودة', desc: 'نقف وراء عملنا بضمانات شاملة على جميع الإصلاحات' },
        response: { title: 'استجابة سريعة', desc: 'تشخيص سريع وإصلاحات فعالة لتشغيل مكيفك بسلاسة' }
      },
      brands: 'مقدم خدمة معتمد للعلامات التجارية الرائدة',
      aboutUs: 'من نحن',
      happyCustomers: 'عملاء سعداء',
      successRate: 'معدل النجاح',
      serviceInfo: 'معلومات الخدمة',
      location: 'المملكة العربية السعودية - الرياض',
      licensed: 'مقدم خدمة مرخص ومؤمن'
    },
    contact: { 
      title: 'مستعد لإصلاح مكيفك اليوم؟', 
      subtitle: 'لا تدع الحرارة تؤثر عليك! فنيونا الخبراء في الانتظار 24/7 لتقديم المساعدة الفورية لجميع احتياجات التبريد.',
      emergency: 'عطل في المكيف؟ نحن هنا 24/7!',
      emergencyDesc: 'إصلاحات الطوارئ متاحة على مدار الساعة. لا توجد رسوم إضافية لمكالمات الخدمة في عطلة نهاية الأسبوع أو العطل.',
      callEmergency: 'اتصل بخط الطوارئ',
      serviceHours: 'ساعات الخدمة',
      serviceArea: 'منطقة الخدمة',
      methods: {
        call: { title: 'اتصل بنا الآن', subtitle: 'خط الطوارئ' },
        alternative: { title: 'الخط البديل', subtitle: 'حجز الخدمة' },
        whatsapp: { title: 'واتساب', subtitle: 'دعم سريع', value: 'تحدث معنا' },
        email: { title: 'دعم البريد الإلكتروني', subtitle: 'الاستفسارات التقنية' }
      },
      getInTouch: 'تواصل معنا',
      emergencyBanner: 'خدمة الطوارئ',
      days: {
        weekdays: 'الاثنين - الجمعة',
        saturday: 'السبت',
        sunday: 'الأحد',
        emergency: 'خدمة الطوارئ',
        available: 'متاح 24/7'
      },
      areaDescription: 'نقدم خدمات إصلاح المكيفات الشاملة في جميع أنحاء الرياض والمناطق المحيطة.',
      areas: {
        central: 'وسط الرياض',
        north: 'شمال الرياض',
        east: 'شرق الرياض',
        west: 'غرب الرياض'
      }
    },
    footer: {
      description: 'شريكك الموثوق للخدمات المهنية للتبريد وتكييف الهواء في الرياض. نعيد الراحة إلى مساحتك مع الإصلاحات والصيانة المتخصصة.',
      stats: { repairs: 'إصلاحات', service: 'خدمة', years: 'سنوات' },
      contactUs: 'اتصل بنا',
      serviceHours: 'ساعات الخدمة',
      serviceArea: 'منطقة الخدمة',
      serviceAreaDesc: 'الرياض والمناطق المحيطة',
      copyright: 'جميع الحقوق محفوظة.',
      emergency247: 'طوارئ 24/7'
    },
    qrCode: {
      title: 'امسح لزيارة الموقع',
      description: 'امسح رمز الاستجابة السريعة هذا بكاميرا هاتفك لزيارة موقعنا على الفور',
      downloadPNG: 'تحميل رمز الاستجابة السريعة (PNG)',
      printPDF: 'طباعة كملف PDF',
      footer: 'مثالي لبطاقات العمل والنشرات والمواد الترويجية'
    },
  } },
  ur: { translation: {
    brand: 'اے سی ریپیئر پرو',
    companyName: 'فہد مصلح العتیبی اسٹیبلیشمنٹ',
    professionalService: 'پیشہ ورانہ اے سی ریپیئر',
    nav: { home: 'ہوم', services: 'سروسز', about: 'ہمارے بارے میں', contact: 'رابطہ' },
    hero: { 
      title: 'ہر گرم مسئلے کا ٹھنڈا حل', 
      subtitle: 'ریاض میں ماہر ریفریجریشن اور اے سی ریپیئر سروسز۔ ہم جدید ٹیکنالوجی اور بے مثال مہارت کے ساتھ آپ کی جگہ میں ٹھنڈک واپس لاتے ہیں۔',
      stats: { clients: 'خوش کسٹمرز', emergency: 'ایمرجنسی سروس', experience: 'سال تجربہ' }
    },
    cta: { contact: 'فوری قیمت حاصل کریں', explore: 'ہماری سروسز' },
    services: {
      title: 'ماہر ریپیئر حل',
      subtitle: 'ایئر کنڈیشننگ سے لے کر کچن کے آلات تک، ہم جدید ٹیکنالوجی اور بے مثال مہارت کے ساتھ جامع ریپیئر سروسز فراہم کرتے ہیں۔',
      splitAc: { title: 'اسپلٹ اے سی ریپیئر', desc: 'پیشہ ورانہ اسپلٹ اے سی انسٹالیشن، مینٹیننس، اور ریپیئر سروسز' },
      washingMachine: { title: 'واشنگ مشین سروس', desc: 'مکمل واشنگ مشین ریپیئر اور مینٹیننس حل' },
      refrigerator: { title: 'ریفریجریٹر ریپیئر', desc: 'ماہر ریفریجریٹر اور فریزر ریپیئر سروسز' },
      kitchenAppliances: { title: 'کچن کے آلات', desc: 'جامع کچن آلات ریپیئر اور مینٹیننس' },
      features: {
        installation: 'انسٹالیشن', maintenance: 'مینٹیننس', emergency: 'ایمرجنسی ریپیئر', support: '24/7 سپورٹ',
        drumRepair: 'ڈرم ریپیئر', motorService: 'موٹر سروس', leakFixing: 'لیک ٹھیک کرنا', performanceTune: 'کارکردگی بہتر بنانا',
        coolingIssues: 'کولنگ مسائل', compressorRepair: 'کمپریسر ریپیئر', thermostatFix: 'تھرموسٹیٹ ٹھیک کرنا', energyOptimization: 'توانائی کی بہتری',
        ovenRepair: 'اوون ریپیئر', microwaveService: 'مائیکروویو سروس', dishwasherFix: 'ڈش واشر ٹھیک کرنا', gasLineCheck: 'گیس لائن چیک'
      },
      ourServices: 'ہماری سروسز',
      learnMore: 'مزید جانیں',
      partsTitle: 'عام پرزے جن کی ہم سروس اور تبدیلی کرتے ہیں',
      stats: {
        repairs: 'مکمل ریپیئرز',
        emergency: 'ایمرجنسی سروس',
        experience: 'سال تجربہ',
        rating: 'کسٹمر ریٹنگ'
      }
    },
    process: {
      title: 'ہم کیسے کام کرتے ہیں',
      subtitle: 'ہمارا منظم 4 قدمی عمل تیز، قابل اعتماد، اور شفاف اے سی ریپیئر سروسز کو یقینی بناتا ہے',
      call: { title: 'کال/واٹس ایپ', desc: 'اپنا مسئلہ اور مقام ہماری سپورٹ ٹیم کے ساتھ شیئر کریں' },
      visit: { title: 'تیز دورہ', desc: 'ہمارا تصدیق شدہ انجینئر معائنہ کرتا ہے اور مسئلہ بیان کرتا ہے' },
      quote: { title: 'شفاف قیمت', desc: 'کام شروع کرنے سے پہلے واضح، پیشگی قیمت حاصل کریں' },
      fix: { title: 'ٹھیک کریں اور ٹیسٹ کریں', desc: 'ہم آپ کا اے سی ٹھیک کرتے ہیں اور بہترین کولنگ کارکردگی کی تصدیق کرتے ہیں' }
    },
    about: { 
      title: 'اے سی ریپیئر سروسز میں 15+ سال کی بہترین کارکردگی', 
      subtitle: 'فہد مصلح العتیبی اسٹیبلیشمنٹ 2008 سے ریاض میں پیشہ ورانہ ریفریجریشن اور ایئر کنڈیشننگ سروسز فراہم کر رہا ہے۔ ہم روایتی مہارت کو جدید ٹیکنالوجی کے ساتھ ملا کر بے مثال سروس کوالٹی فراہم کرتے ہیں۔',
      whyChoose: 'ہماری اے سی ریپیئر سروسز کیوں منتخب کریں؟',
      description: 'HVAC انڈسٹری میں 15 سال سے زیادہ کے تجربے کے ساتھ، ہم نے قابل اعتماد، موثر، اور سستے ایئر کنڈیشننگ حل فراہم کرنے پر اپنی ساکھ بنائی ہے۔ ہماری تصدیق شدہ ٹیکنیشنز کی ٹیم جدید تشخیصی ٹولز اور اصل پارٹس استعمال کرتی ہے تاکہ آپ کا کولنگ سسٹم بہترین کارکردگی پر کام کرے۔',
      features: {
        certified: { title: 'تصدیق شدہ ٹیکنیشنز', desc: 'ہمارے تمام ٹیکنیشنز تصدیق شدہ ہیں اور جدید اے سی ٹیکنالوجیز کو ہینڈل کرنے کے لیے تربیت یافتہ ہیں' },
        emergency: { title: '24/7 ایمرجنسی سروس', desc: 'فوری کولنگ ضروریات کے لیے چوبیس گھنٹے ایمرجنسی ریپیئر سروسز' },
        guarantee: { title: 'کوالٹی گارنٹی', desc: 'ہم تمام ریپیئرز پر جامع وارنٹیوں کے ساتھ اپنے کام کے پیچھے کھڑے ہیں' },
        response: { title: 'تیز جواب', desc: 'تیز تشخیص اور موثر ریپیئرز تاکہ آپ کا اے سی ہموار طریقے سے چلے' }
      },
      brands: 'معروف برانڈز کے لیے مجاز سروس فراہم کنندہ',
      aboutUs: 'ہمارے بارے میں',
      happyCustomers: 'خوش کسٹمرز',
      successRate: 'کامیابی کی شرح',
      serviceInfo: 'سروس کی معلومات',
      location: 'سعودی عرب کی بادشاہی - ریاض',
      licensed: 'لائسنس یافتہ اور بیمہ شدہ سروس فراہم کنندہ'
    },
    contact: { 
      title: 'آج ہی اپنا اے سی ٹھیک کرانے کے لیے تیار ہیں؟', 
      subtitle: 'گرمی آپ کو متاثر نہ کرنے دیں! ہمارے ماہر ٹیکنیشنز 24/7 آپ کی تمام کولنگ ضروریات کے لیے فوری مدد فراہم کرنے کے لیے تیار ہیں۔',
      emergency: 'اے سی خراب؟ ہم 24/7 یہاں ہیں!',
      emergencyDesc: 'چوبیس گھنٹے ایمرجنسی ریپیئرز دستیاب ہیں۔ ویک اینڈ یا چھٹی کے دن سروس کالز کے لیے کوئی اضافی چارج نہیں۔',
      callEmergency: 'ایمرجنسی لائن کال کریں',
      serviceHours: 'سروس کے اوقات',
      serviceArea: 'سروس ایریا',
      methods: {
        call: { title: 'ابھی کال کریں', subtitle: 'ایمرجنسی ہاٹ لائن' },
        alternative: { title: 'متبادل لائن', subtitle: 'سروس بکنگ' },
        whatsapp: { title: 'واٹس ایپ', subtitle: 'فوری سپورٹ', value: 'ہم سے بات کریں' },
        email: { title: 'ای میل سپورٹ', subtitle: 'تکنیکی سوالات' }
      },
      getInTouch: 'رابطے میں رہیں',
      emergencyBanner: 'ایمرجنسی سروس',
      days: {
        weekdays: 'پیر - جمعہ',
        saturday: 'ہفتہ',
        sunday: 'اتوار',
        emergency: 'ایمرجنسی سروس',
        available: '24/7 دستیاب'
      },
      areaDescription: 'ہم ریاض اور آس پاس کے علاقوں میں جامع اے سی ریپیئر سروسز فراہم کرتے ہیں۔',
      areas: {
        central: 'مرکزی ریاض',
        north: 'شمالی ریاض',
        east: 'مشرقی ریاض',
        west: 'مغربی ریاض'
      }
    },
    footer: {
      description: 'ریاض میں پیشہ ورانہ ریفریجریشن اور ایئر کنڈیشننگ سروسز کے لیے آپ کا قابل اعتماد پارٹنر۔ ہم ماہر ریپیئرز اور مینٹیننس کے ساتھ آپ کی جگہ میں آرام واپس لاتے ہیں۔',
      stats: { repairs: 'ریپیئرز', service: 'سروس', years: 'سال' },
      contactUs: 'ہم سے رابطہ کریں',
      serviceHours: 'سروس کے اوقات',
      serviceArea: 'سروس ایریا',
      serviceAreaDesc: 'ریاض اور آس پاس کے علاقے',
      copyright: 'تمام حقوق محفوظ ہیں۔',
      emergency247: 'ایمرجنسی 24/7'
    },
    qrCode: {
      title: 'ویب سائٹ دیکھنے کے لیے سکین کریں',
      description: 'اپنے فون کیمرے سے اس QR کوڈ کو سکین کریں تاکہ فوری طور پر ہماری ویب سائٹ پر جائیں',
      downloadPNG: 'QR کوڈ ڈاؤن لوڈ کریں (PNG)',
      printPDF: 'PDF کے طور پر پرنٹ کریں',
      footer: 'بزنس کارڈز، فلائرز، اور پروموشنل میٹریل کے لیے بہترین'
    },
  } },
} as const

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'ar', 'ur'],
    interpolation: { escapeValue: false },
    detection: { order: ['querystring', 'localStorage', 'navigator'], caches: ['localStorage'] },
  })

export default i18n


