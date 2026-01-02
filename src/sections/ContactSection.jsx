import React from 'react'
import { motion } from 'framer-motion'
import { Phone, MessageCircle, MapPin, Clock, Mail, Headphones } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function ContactSection() {
  const { t } = useTranslation()
  
  const contactMethods = [
    {
      icon: Phone,
      title: t('contact.methods.call.title'),
      subtitle: t('contact.methods.call.subtitle'),
      value: '+966 50 312 8467',
      href: 'tel:+966503128467',
      color: 'from-bus-green to-emerald-600',
      bgColor: 'bg-bus-green/10',
      borderColor: 'border-bus-green/20'
    },
    {
      icon: Phone,
      title: t('contact.methods.alternative.title'),
      subtitle: t('contact.methods.alternative.subtitle'),
      value: '+966 59 886 2137',
      href: 'tel:+966598862137',
      color: 'from-bus-blue to-blue-600',
      bgColor: 'bg-bus-blue/10',
      borderColor: 'border-bus-blue/20'
    },
    {
      icon: MessageCircle,
      title: t('contact.methods.whatsapp.title'),
      subtitle: t('contact.methods.whatsapp.subtitle'),
      value: t('contact.methods.whatsapp.value'),
      href: 'https://wa.me/966503128467',
      color: 'from-bus-green to-emerald-700',
      bgColor: 'bg-bus-green/10',
      borderColor: 'border-bus-green/20'
    },
    {
      icon: Mail,
      title: t('contact.methods.email.title'),
      subtitle: t('contact.methods.email.subtitle'),
      value: 'javaidiqbal1977@gmail.com',
      href: 'mailto:javaidiqbal1977@gmail.com',
      color: 'from-bus-brown to-amber-800',
      bgColor: 'bg-bus-brown/10',
      borderColor: 'border-bus-brown/20'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-slate-800 relative">

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
            <Headphones className="text-bus-blue" size={32} />
            <span className="text-bus-blue font-bold text-lg tracking-widest uppercase">{t('contact.getInTouch')}</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            <span className="bg-gradient-to-r from-bus-blue via-bus-green to-bus-brown bg-clip-text text-transparent italic">
              {t('contact.title')}
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, idx) => (
            <ContactCard key={method.title} method={method} index={idx} />
          ))}
        </div>

        {/* Emergency Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="bg-gradient-to-r from-red-500/10 to-orange-500/10 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8 text-center"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-red-400 font-bold text-lg">{t('contact.emergencyBanner')}</span>
            <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
          </motion.div>
          
          <h3 className="text-2xl font-bold text-white mb-2">
            {t('contact.emergency')}
          </h3>
          
          <p className="text-gray-300 mb-6">
            {t('contact.emergencyDesc')}
          </p>
          
          <motion.a
            href="tel:+966503128467"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 rounded-full text-white font-bold hover:from-red-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-red-500/25"
          >
            <Phone size={20} />
            {t('contact.callEmergency')}
          </motion.a>
        </motion.div>

        {/* Service Hours & Location */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:border-bus-blue/30 transition-all duration-500"
          >
            <div className="flex items-center gap-3 mb-6">
              <Clock className="text-bus-blue" size={24} />
              <h3 className="text-xl font-bold text-white">{t('contact.serviceHours')}</h3>
            </div>
            
            <div className="space-y-3 text-gray-300">
              <div className="flex justify-between">
                <span>{t('contact.days.weekdays')}</span>
                <span className="text-bus-blue font-bold tracking-wider">8:00 AM - 10:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>{t('contact.days.saturday')}</span>
                <span className="text-bus-blue font-bold tracking-wider">9:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>{t('contact.days.sunday')}</span>
                <span className="text-bus-blue font-bold tracking-wider">10:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between border-t border-white/10 pt-3 mt-4">
                <span className="text-red-400 font-semibold">{t('contact.days.emergency')}</span>
                <span className="text-red-400 font-semibold">{t('contact.days.available')}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:border-bus-green/30 transition-all duration-500"
          >
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="text-bus-green" size={24} />
              <h3 className="text-xl font-bold text-white">{t('contact.serviceArea')}</h3>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <p className="leading-relaxed">
                {t('contact.areaDescription')}
              </p>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-bus-green rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                  <span>{t('contact.areas.central')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-bus-green rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                  <span>{t('contact.areas.north')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-bus-green rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                  <span>{t('contact.areas.east')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-bus-green rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                  <span>{t('contact.areas.west')}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ContactCard({ method, index }) {
  const Icon = method.icon
  
  return (
    <motion.a
      href={method.href}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group block"
    >
      <div className={`relative p-6 rounded-2xl ${method.bgColor} backdrop-blur-sm border ${method.borderColor} hover:border-opacity-50 transition-all duration-300 h-full`}>
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
        
        {/* Icon */}
        <motion.div
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.color} p-3 mb-4 shadow-lg`}
        >
          <Icon className="w-full h-full text-white" />
        </motion.div>
        
        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-lg font-bold text-white mb-1 group-hover:text-bus-blue transition-colors">
            {method.title}
          </h3>
          
          <p className="text-sm text-gray-400 mb-3">
            {method.subtitle}
          </p>
          
          <p className="text-white font-semibold">
            {method.value}
          </p>
        </div>
        
        {/* Hover Effect */}
        <motion.div
          className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
          whileHover={{ x: 5 }}
        >
          <span className="text-bus-blue text-sm font-bold">
            Connect →
          </span>
        </motion.div>
      </div>
    </motion.a>
  )
}


