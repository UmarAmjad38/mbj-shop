import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { motion } from 'framer-motion'
import { Languages, Moon, Sun } from 'lucide-react'
import ServicesSection from '../sections/ServicesSection'
import BrandsSection from '../sections/BrandsSection'
import ProcessSection from '../sections/ProcessSection'
import AboutSection from '../sections/AboutSection'
import FAQSection from '../sections/FAQSection'
import ContactSection from '../sections/ContactSection'
import SiteFooter from '../sections/SiteFooter'
import { useTranslation } from 'react-i18next'
import '../i18n/config'

const sections = [
  { id: 'hero', labelKey: 'nav.home' },
  { id: 'services', labelKey: 'nav.services' },
  { id: 'about', labelKey: 'nav.about' },
  { id: 'contact', labelKey: 'nav.contact' },
]

function App() {
  const { t, i18n } = useTranslation()
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    document.body.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  useEffect(() => {
    document.documentElement.dir = i18n.dir()
  }, [i18n.language])

  const languages = useMemo(() => [
    { code: 'en', label: 'English', flagSrc: '/flags/us.png' },
    { code: 'ur', label: 'اردو', flagSrc: '/flags/pk.png' },
    { code: 'ar', label: 'العربية', flagSrc: '/flags/sr.jfif' },
  ], [])
  const [langOpen, setLangOpen] = useState(false)
  const langRef = useRef(null)

  useEffect(() => {
    function onDocClick(e){
      if (langRef.current && !langRef.current.contains(e.target)) setLangOpen(false)
    }
    function onEsc(e){ if (e.key === 'Escape') setLangOpen(false) }
    document.addEventListener('mousedown', onDocClick)
    document.addEventListener('keydown', onEsc)
    return () => { document.removeEventListener('mousedown', onDocClick); document.removeEventListener('keydown', onEsc) }
  }, [])

  const shellBg = dark ? 'bg-gray-950 text-gray-100' : 'bg-[#f7f9fc] text-gray-900'
  const headerBg = dark ? 'bg-gray-950/70 border-gray-800' : 'bg-white/70 border-gray-200/60'
  const cardBg = dark ? 'bg-gray-950 border-gray-800' : 'bg-white border-gray-200'
  const softHover = dark ? 'hover:bg-gray-800' : 'hover:bg-gray-50'

  return (
    <div className={`min-h-dvh ${shellBg} selection:bg-blue-200/50`}>
      <header className={`sticky top-0 z-50 ${headerBg} backdrop-blur border-b`}>
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="font-bold text-xl">{t('brand')}</div>
          <nav className="hidden md:flex gap-6 items-center">
            {sections.map(s => (
              <ScrollLink key={s.id} to={s.id} smooth spy offset={-80} className="cursor-pointer hover:text-blue-600">
                {t(s.labelKey)}
              </ScrollLink>
            ))}
          </nav>
          <div className="flex items-center gap-2 relative" ref={langRef}>
            <button
              aria-label="Theme"
              className={`p-2 rounded ${softHover}`}
              onClick={() => {
                const next = !dark
                document.documentElement.classList.toggle('dark', next)
                document.body.classList.toggle('dark', next)
                localStorage.setItem('theme', next ? 'dark' : 'light')
                setDark(next)
              }}
            >
              {dark ? <Sun size={18}/> : <Moon size={18}/>}
            </button>
            <button onClick={() => setLangOpen(o => !o)} className={`px-3 py-1 rounded border text-sm flex items-center gap-2 ${dark ? 'border-gray-700' : 'border-gray-300/70'}`} aria-haspopup="menu" aria-expanded={langOpen}>
              <Languages size={16} />
              {languages.find(l => l.code === i18n.language)?.label || 'Language'}
              {(() => { const l = languages.find(x => x.code === i18n.language); return l ? <img src={l.flagSrc} alt="flag" className="h-4 w-6 object-cover rounded-sm ms-2" /> : null })()}
            </button>
            {langOpen && (
              <ul className={`absolute top-full end-0 mt-2 w-44 rounded-md border shadow-md overflow-hidden ${dark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`} role="menu">
                {languages.map(l => (
                  <li key={l.code}>
                    <button
                      className={`w-full px-3 py-2 text-sm flex items-center justify-between ${dark ? 'hover:bg-gray-800' : 'hover:bg-gray-50'}`}
                      onClick={() => { i18n.changeLanguage(l.code); setLangOpen(false) }}
                      role="menuitem"
                    >
                      <span>{l.label}</span>
                      <img src={l.flagSrc} alt="flag" className="h-4 w-6 object-cover rounded-sm" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </header>

      <main>
        <section id="hero" className="relative">
          <div className="mx-auto max-w-6xl px-4 py-20 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <motion.h1 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6}} className="text-3xl md:text-5xl font-extrabold leading-tight">
                {t('hero.title')}
              </motion.h1>
              <motion.p initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{delay:.1}} className="mt-4 text-lg opacity-80">
                {t('hero.subtitle')}
              </motion.p>
              <div className="mt-8 flex gap-3">
                <ScrollLink to="contact" smooth offset={-80} className="px-5 py-2 rounded bg-blue-600 text-white cursor-pointer hover:bg-blue-700">{t('cta.contact')}</ScrollLink>
                <ScrollLink to="services" smooth offset={-80} className="px-5 py-2 rounded border cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800">{t('cta.explore')}</ScrollLink>
              </div>
            </div>
            <motion.div initial={{opacity:0,scale:.9}} whileInView={{opacity:1,scale:1}} transition={{duration:.6}} className="aspect-video rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center">
              <span className="text-6xl">❄️</span>
            </motion.div>
          </div>
        </section>

        <ServicesSection />
        <BrandsSection />
        <ProcessSection />
        <AboutSection />
        <FAQSection />
        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  )
}

export default App