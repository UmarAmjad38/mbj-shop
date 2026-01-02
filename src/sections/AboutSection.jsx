import React from 'react'
import { motion } from 'framer-motion'
import { Award, Users, Clock, MapPin, Phone, Star, Shield, Zap } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function AboutSection() {
  const { t } = useTranslation()
  
  const features = [
    {
      icon: Award,
      title: t('about.features.certified.title'),
      description: t('about.features.certified.desc'),
      color: 'from-bus-brown to-amber-700'
    },
    {
      icon: Clock,
      title: t('about.features.emergency.title'),
      description: t('about.features.emergency.desc'),
      color: 'from-bus-blue to-blue-600'
    },
    {
      icon: Shield,
      title: t('about.features.guarantee.title'),
      description: t('about.features.guarantee.desc'),
      color: 'from-bus-green to-emerald-600'
    },
    {
      icon: Zap,
      title: t('about.features.response.title'),
      description: t('about.features.response.desc'),
      color: 'from-bus-brown via-bus-green to-bus-blue'
    }
  ]

  const brands = [
    { name: 'GREE', logo: '🌟' },
    { name: 'LG', logo: '⚡' },
    { name: 'Samsung', logo: '🔧' },
    { name: 'Haier', logo: '❄️' },
    { name: 'Harm', logo: '🛠️' },
    { name: 'Daikin', logo: '🌀' }
  ]

  return (
    <section id="about" className="py-20 bg-slate-900 relative">

      <div className="mx-auto max-w-7xl px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Users className="text-bus-blue" size={32} />
            <span className="text-bus-blue font-bold text-lg tracking-widest uppercase">{t('about.aboutUs')}</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            <span className="bg-gradient-to-r from-bus-blue via-bus-green to-bus-brown bg-clip-text text-transparent italic">
              {t('about.title')}
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('about.subtitle')}
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">
                {t('about.whyChoose')}
              </h3>
              
              <p className="text-gray-300 leading-relaxed">
                {t('about.description')}
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-bus-blue/5 rounded-2xl border border-bus-blue/10 hover:border-bus-blue/30 transition-all duration-500 group">
                  <div className="text-4xl font-bold text-bus-blue group-hover:scale-110 transition-transform">500+</div>
                  <div className="text-sm text-gray-400 font-medium uppercase">{t('about.happyCustomers')}</div>
                </div>
                <div className="text-center p-6 bg-bus-green/5 rounded-2xl border border-bus-green/10 hover:border-bus-green/30 transition-all duration-500 group">
                  <div className="text-4xl font-bold text-bus-green group-hover:scale-110 transition-transform">98%</div>
                  <div className="text-sm text-gray-400 font-medium uppercase">{t('about.successRate')}</div>
                </div>
              </div>
            </div>

            {/* Contact Info Card */}
            <div className="bg-gradient-to-br from-bus-blue/10 to-bus-green/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:border-bus-blue/30 transition-all duration-500">
              <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <MapPin className="text-bus-blue" size={24} />
                {t('about.serviceInfo')}
              </h4>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <MapPin className="text-cyan-400" size={16} />
                  <span className="text-gray-300">{t('about.location')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-green-400" size={16} />
                  <span className="text-gray-300">+966 50 312 8467 | +966 59 886 2137</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="text-yellow-400" size={16} />
                  <span className="text-gray-300">{t('about.licensed')}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full hover:border-cyan-500/30 transition-all duration-300">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} p-3 mb-4 shadow-lg`}
                  >
                    <feature.icon className="w-full h-full text-white" />
                  </motion.div>
                  
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h4>
                  
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Brands Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">
            {t('about.brands')}
          </h3>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {brands.map((brand, idx) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-bus-blue/50 hover:bg-bus-blue/5 transition-all duration-500 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500">
                  {brand.logo}
                </div>
                <div className="text-white font-bold text-sm group-hover:text-bus-blue transition-colors">
                  {brand.name}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}


