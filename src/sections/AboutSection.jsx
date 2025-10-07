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
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: Clock,
      title: t('about.features.emergency.title'),
      description: t('about.features.emergency.desc'),
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Shield,
      title: t('about.features.guarantee.title'),
      description: t('about.features.guarantee.desc'),
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Zap,
      title: t('about.features.response.title'),
      description: t('about.features.response.desc'),
      color: 'from-purple-500 to-pink-600'
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
    <section id="about" className="py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-40 h-40 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

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
            <Users className="text-cyan-400" size={32} />
            <span className="text-cyan-400 font-semibold text-lg">About Us</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
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
                <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
                  <div className="text-sm text-gray-400">Happy Customers</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-3xl font-bold text-blue-400 mb-2">98%</div>
                  <div className="text-sm text-gray-400">Success Rate</div>
                </div>
              </div>
            </div>

            {/* Contact Info Card */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6">
              <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <MapPin className="text-cyan-400" size={20} />
                Service Information
              </h4>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <MapPin className="text-cyan-400" size={16} />
                  <span className="text-gray-300">Kingdom of Saudi Arabia - Riyadh</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-green-400" size={16} />
                  <span className="text-gray-300">+966 50 312 8467 | +966 59 886 2137</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="text-yellow-400" size={16} />
                  <span className="text-gray-300">Licensed & Insured Service Provider</span>
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
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300 group"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                  {brand.logo}
                </div>
                <div className="text-white font-semibold text-sm group-hover:text-cyan-400 transition-colors">
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


