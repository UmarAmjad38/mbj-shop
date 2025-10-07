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
    <div className="min-h-dvh bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white selection:bg-cyan-200/50 overflow-x-hidden">
      <ParticleBackground />
      
      {/* Glassmorphism Header */}
      <header className="sticky top-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-bold text-2xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          >
            <Wrench className="inline mr-2 text-cyan-400" size={24} />
            {t('brand')}
          </motion.div>
          
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
            <motion.button 
              whileHover={{ scale: 1.05 }}
              onClick={() => setLangOpen(o => !o)} 
              className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-sm flex items-center gap-2 transition-all"
            >
              <Languages size={16} />
              {languages.find(l => l.code === i18n.language)?.label || 'Language'}
            </motion.button>
            
            {langOpen && (
              <motion.ul 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full end-0 mt-2 w-44 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl overflow-hidden"
              >
                {languages.map(l => (
                  <li key={l.code}>
                    <button
                      className="w-full px-4 py-3 text-sm flex items-center justify-between hover:bg-white/10 transition-colors"
                      onClick={() => { i18n.changeLanguage(l.code); setLangOpen(false) }}
                    >
                      <span>{l.label}</span>
                      <img src={l.flagSrc} alt="flag" className="h-4 w-6 object-cover rounded-sm" />
                    </button>
                  </li>
                ))}
              </motion.ul>
            )}
          </div>
        </div>
      </header>

      <main>
        {/* Revolutionary Hero Section */}
        <section id="hero" className="relative min-h-screen flex items-center overflow-hidden px-4 sm:px-0">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-500/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-500"></div>
          </div>
          
          <div className="mx-auto max-w-7xl px-4 py-10 sm:py-20 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-2"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Snowflake className="text-cyan-400 animate-spin" size={32} />
                  <span className="text-cyan-400 font-semibold text-lg">Professional AC Repair</span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                    {t('hero.title')}
                  </span>
                </h1>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-lg"
              >
                {t('hero.subtitle')}
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ScrollLink 
                    to="contact" 
                    smooth 
                    offset={-80} 
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-semibold cursor-pointer hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
                  >
                    <Phone size={20} />
                    {t('cta.contact')}
                  </ScrollLink>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ScrollLink 
                    to="services" 
                    smooth 
                    offset={-80} 
                    className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 cursor-pointer hover:bg-white/20 transition-all duration-300"
                  >
                    <Zap size={20} />
                    {t('cta.explore')}
                  </ScrollLink>
                </motion.div>
              </motion.div>
              
              {/* Stats */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">500+</div>
                  <div className="text-sm text-gray-400">{t('hero.stats.clients')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">24/7</div>
                  <div className="text-sm text-gray-400">{t('hero.stats.emergency')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">15+</div>
                  <div className="text-sm text-gray-400">{t('hero.stats.experience')}</div>
                </div>
              </motion.div>
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