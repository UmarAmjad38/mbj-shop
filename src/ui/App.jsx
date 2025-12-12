import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { motion } from 'framer-motion'
import { Languages, Moon, Sun, Wrench, Snowflake, Zap, Phone } from 'lucide-react'
import ServicesSection from '../sections/ServicesSection'
import AboutSection from '../sections/AboutSection'
import ContactSection from '../sections/ContactSection'
import SiteFooter from '../sections/SiteFooter'
import ACUnit3D from '../components/ACUnit3D'
import ParticleBackground from '../components/ParticleBackground'
import ProcessSteps from '../components/ProcessSteps'
import { useTranslation } from 'react-i18next'
import '../i18n/config'

const sections = [
  { id: 'hero', labelKey: 'nav.home' },
  { id: 'services', labelKey: 'nav.services' },
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
    <div className="min-h-dvh bg-slate-900 text-white selection:bg-blue-200/30 overflow-x-hidden">
      <ParticleBackground />
      
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="font-bold text-xl text-white flex items-center gap-2">
            <Wrench className="text-blue-500" size={22} />
            {t('brand')}
          </div>
          
          <nav className="hidden md:flex gap-8 items-center">
            {sections.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <ScrollLink 
                  to={s.id} 
                  smooth 
                  spy 
                  offset={-80} 
                  className="cursor-pointer hover:text-cyan-400 transition-colors duration-300 font-medium"
                >
                  {t(s.labelKey)}
                </ScrollLink>
              </motion.div>
            ))}
          </nav>
          
          <div className="flex items-center gap-3 relative" ref={langRef}>
            <button 
              onClick={() => setLangOpen(o => !o)} 
              className="px-4 py-2 rounded-md bg-slate-800 hover:bg-slate-700 border border-slate-700 text-sm flex items-center gap-2 transition-colors"
            >
              <Languages size={16} />
              {languages.find(l => l.code === i18n.language)?.label || 'Language'}
            </button>
            
            {langOpen && (
              <ul className="absolute top-full end-0 mt-2 w-44 rounded-lg bg-slate-800 border border-slate-700 shadow-xl overflow-hidden">
                {languages.map(l => (
                  <li key={l.code}>
                    <button
                      className="w-full px-4 py-3 text-sm flex items-center justify-between hover:bg-slate-700 transition-colors"
                      onClick={() => { i18n.changeLanguage(l.code); setLangOpen(false) }}
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
        {/* Hero Section */}
        <section id="hero" className="relative min-h-screen flex items-center overflow-hidden px-4 sm:px-0 bg-gradient-to-b from-slate-900 to-slate-800">
          
          <div className="mx-auto max-w-7xl px-4 py-10 sm:py-20 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
            <div className="space-y-8">
              <div className="space-y-3">
                <div className="flex items-center gap-2 mb-3">
                  <Snowflake className="text-blue-500" size={24} />
                  <span className="text-blue-400 font-medium text-base">{t('professionalService')}</span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                  {t('hero.title')}
                </h1>
              </div>
              
              <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-lg">
                {t('hero.subtitle')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <ScrollLink 
                  to="contact" 
                  smooth 
                  offset={-80} 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 rounded-lg text-white font-medium cursor-pointer hover:bg-blue-700 transition-colors"
                >
                  <Phone size={18} />
                  {t('cta.contact')}
                </ScrollLink>
                
                <ScrollLink 
                  to="services" 
                  smooth 
                  offset={-80} 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 rounded-lg border border-slate-700 cursor-pointer hover:bg-slate-700 transition-colors"
                >
                  <Zap size={18} />
                  {t('cta.explore')}
                </ScrollLink>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-700">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">500+</div>
                  <div className="text-xs text-gray-400">{t('hero.stats.clients')}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">24/7</div>
                  <div className="text-xs text-gray-400">{t('hero.stats.emergency')}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">15+</div>
                  <div className="text-xs text-gray-400">{t('hero.stats.experience')}</div>
                </div>
              </div>
            </div>
            
            {/* 3D AC Unit */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden order-first lg:order-last"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-2xl border border-cyan-500/20"></div>
              <ACUnit3D />
              
              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-10 right-10 bg-cyan-500/20 backdrop-blur-sm rounded-full p-4 border border-cyan-500/30"
              >
                <Snowflake className="text-cyan-400" size={24} />
              </motion.div>
              
              <motion.div
                animate={{ 
                  y: [0, 15, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute bottom-20 left-10 bg-orange-500/20 backdrop-blur-sm rounded-full p-4 border border-orange-500/30"
              >
                <Zap className="text-orange-400" size={24} />
              </motion.div>
            </motion.div>
          </div>
          
          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-white/50 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </section>

        <ServicesSection />
        <ProcessSteps />
        <AboutSection />
        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  )
}

export default App