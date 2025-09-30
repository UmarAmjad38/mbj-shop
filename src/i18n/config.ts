import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

const resources = {
  en: { translation: {
    brand: 'Fahad Musleh Al Otaibi Est.',
    nav: { home: 'Home', services: 'Services', about: 'About', contact: 'Contact' },
    hero: { title: 'Refrigeration & Air Conditioning Experts in Riyadh', subtitle: 'Repair of AC, refrigerators, washing machines, ovens and more.' },
    cta: { contact: 'Contact Us', explore: 'Explore Services' },
    services: {
      title: 'Our Services',
      subtitle: 'Click a card to see parts diagram',
      items: { split_ac: 'Split AC', washing_machine: 'Washing Machine', refrigerator: 'Refrigerator', oven: 'Oven' },
    },
    about: { title: 'About Us', body: 'Skilled engineers led by Eng. Javaid Iqbal Zahoor providing fast, honest and reliable repairs.' },
    contact: { title: 'Get in touch', subtitle: 'Call or WhatsApp us anytime.' },
  } },
  ar: { translation: {
    brand: 'مؤسسة فهد مصلح العتيبي',
    nav: { home: 'الرئيسية', services: 'الخدمات', about: 'من نحن', contact: 'اتصل بنا' },
    hero: { title: 'خبراء التبريد والتكييف في الرياض', subtitle: 'إصلاح المكيفات، الثلاجات، الغسالات، الأفران والمزيد.' },
    cta: { contact: 'تواصل معنا', explore: 'استكشف الخدمات' },
    services: {
      title: 'خدماتنا', subtitle: 'اضغط على البطاقة لعرض مخطط الأجزاء',
      items: { split_ac: 'مكيف سبلت', washing_machine: 'غسالة', refrigerator: 'ثلاجة', oven: 'فرن' },
    },
    about: { title: 'من نحن', body: 'فريق ماهر بقيادة م. جاويد إقبال ظهور يقدم إصلاحات سريعة وصادقة.' },
    contact: { title: 'تواصل معنا', subtitle: 'اتصل أو واتساب في أي وقت.' },
  } },
  ur: { translation: {
    brand: 'فہد مصلح العتیبی اسٹیبلیشمنٹ',
    nav: { home: 'ہوم', services: 'سروسز', about: 'ہمارے بارے میں', contact: 'رابطہ' },
    hero: { title: 'ریاض میں کولنگ اور اے سی ماہرین', subtitle: 'اے سی، فریج، واشنگ مشین، اوون وغیرہ کی مرمت۔' },
    cta: { contact: 'ہم سے رابطہ کریں', explore: 'سروسز دیکھیں' },
    services: {
      title: 'ہماری سروسز', subtitle: 'پارٹس ڈایاگرام دیکھنے کو کارڈ پر کلک کریں',
      items: { split_ac: 'اسپلٹ اے سی', washing_machine: 'واشنگ مشین', refrigerator: 'ریفریجریٹر', oven: 'اوون' },
    },
    about: { title: 'ہمارے بارے میں', body: 'انجینئر جاوید اقبال ظہور کی قیادت میں ایماندار اور تیز مرمت۔' },
    contact: { title: 'رابطہ کیجیے', subtitle: 'کسی بھی وقت کال یا واٹس ایپ کریں۔' },
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


