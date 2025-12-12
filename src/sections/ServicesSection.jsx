import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Snowflake, Wrench, Zap, Thermometer, Settings, Star } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function ServicesSection() {
  const { t } = useTranslation()
  const services = [
    { 
      key: 'splitAc', 
      icon: Snowflake, 
      title: t('services.splitAc.title'),
      description: t('services.splitAc.desc'),
      features: [t('services.features.installation'), t('services.features.maintenance'), t('services.features.emergency'), t('services.features.support')],
      color: 'from-cyan-500 to-blue-600',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/20'
    },
    { 
      key: 'washingMachine', 
      icon: Settings, 
      title: t('services.washingMachine.title'),
      description: t('services.washingMachine.desc'),
      features: [t('services.features.drumRepair'), t('services.features.motorService'), t('services.features.leakFixing'), t('services.features.performanceTune')],
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20'
    },
    { 
      key: 'refrigerator', 
      icon: Thermometer, 
      title: t('services.refrigerator.title'),
      description: t('services.refrigerator.desc'),
      features: [t('services.features.coolingIssues'), t('services.features.compressorRepair'), t('services.features.thermostatFix'), t('services.features.energyOptimization')],
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20'
    },
    { 
      key: 'kitchenAppliances', 
      icon: Zap, 
      title: t('services.kitchenAppliances.title'),
      description: t('services.kitchenAppliances.desc'),
      features: [t('services.features.ovenRepair'), t('services.features.microwaveService'), t('services.features.dishwasherFix'), t('services.features.gasLineCheck')],
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/20'
    },
  ]
  
  const [active, setActive] = useState(null)
  
  return (
    <section id="services" className="py-20 bg-slate-800 relative">
      
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
            <Wrench className="text-cyan-400" size={32} />
            <span className="text-cyan-400 font-semibold text-lg">{t('services.ourServices')}</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {t('services.title')}
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('services.subtitle')}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <ServiceCard 
              key={service.key} 
              service={service} 
              index={idx} 
              onOpen={() => setActive(service.key)} 
            />
          ))}
        </div>
        
        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div className="space-y-2">
            <div className="text-3xl font-bold text-cyan-400">500+</div>
            <div className="text-gray-400">{t('services.stats.repairs')}</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-blue-400">24/7</div>
            <div className="text-gray-400">{t('services.stats.emergency')}</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-purple-400">15+</div>
            <div className="text-gray-400">{t('services.stats.experience')}</div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-center gap-1 text-3xl font-bold text-yellow-400">
              4.9 <Star size={24} fill="currentColor" />
            </div>
            <div className="text-gray-400">{t('services.stats.rating')}</div>
          </div>
        </motion.div>
      </div>
      
      {active && <PartsOverlay serviceId={active} onClose={() => setActive(null)} />}
    </section>
  )
}

function ServiceCard({ service, index, onOpen }) {
  const { t } = useTranslation()
  const Icon = service.icon
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group cursor-pointer"
      onClick={onOpen}
    >
      <div className={`relative p-8 rounded-2xl ${service.bgColor} backdrop-blur-sm border ${service.borderColor} hover:border-opacity-50 transition-all duration-300 h-full`}>
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
        
        {/* Icon */}
        <motion.div
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
          className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} p-4 mb-6 shadow-lg`}
        >
          <Icon className="w-full h-full text-white" />
        </motion.div>
        
        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
            {service.title}
          </h3>
          
          <p className="text-gray-300 mb-6 leading-relaxed">
            {service.description}
          </p>
          
          {/* Features */}
          <div className="space-y-2">
            {service.features.map((feature, idx) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: (index * 0.1) + (idx * 0.05) }}
                className="flex items-center gap-3 text-sm text-gray-400"
              >
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`} />
                {feature}
              </motion.div>
            ))}
          </div>
          
          {/* Call to Action */}
          <motion.div
            whileHover={{ x: 5 }}
            className="mt-6 flex items-center gap-2 text-cyan-400 font-semibold text-sm group-hover:text-cyan-300 transition-colors"
          >
            {t('services.learnMore')}
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.div>
        </div>
        
        {/* Floating Particles */}
        <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
            className={`w-8 h-8 rounded-full bg-gradient-to-br ${service.color} blur-sm`}
          />
        </div>
      </div>
    </motion.div>
  )
}

function PartsOverlay({ serviceId, onClose }) {
  const { t } = useTranslation()
  
  const serviceData = {
    splitAc: {
      title: t('services.splitAc.title'),
      description: t('services.splitAc.desc'),
      icon: Snowflake,
      color: 'from-cyan-500 to-blue-600',
      bgColor: 'bg-cyan-500/10',
      parts: [
        { name: 'Compressor', desc: 'Heart of the cooling system', icon: '🔧' },
        { name: 'Condenser Coil', desc: 'Heat exchange component', icon: '🌀' },
        { name: 'Evaporator Coil', desc: 'Indoor cooling unit', icon: '❄️' },
        { name: 'Fan Motor', desc: 'Air circulation system', icon: '💨' },
        { name: 'Air Filter', desc: 'Air purification component', icon: '🌬️' },
        { name: 'Thermostat', desc: 'Temperature control unit', icon: '🌡️' }
      ]
    },
    washingMachine: {
      title: t('services.washingMachine.title'),
      description: t('services.washingMachine.desc'),
      icon: Settings,
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-500/10',
      parts: [
        { name: 'Drum Assembly', desc: 'Main washing chamber', icon: '🥁' },
        { name: 'Motor', desc: 'Rotation power unit', icon: '⚡' },
        { name: 'Drive Belt', desc: 'Power transmission', icon: '🔗' },
        { name: 'Water Pump', desc: 'Water circulation system', icon: '💧' },
        { name: 'Control Board', desc: 'Electronic control unit', icon: '🖥️' },
        { name: 'Door Seal', desc: 'Water-tight gasket', icon: '🔒' }
      ]
    },
    refrigerator: {
      title: t('services.refrigerator.title'),
      description: t('services.refrigerator.desc'),
      icon: Thermometer,
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-500/10',
      parts: [
        { name: 'Compressor', desc: 'Cooling system heart', icon: '🔧' },
        { name: 'Thermostat', desc: 'Temperature regulation', icon: '🌡️' },
        { name: 'Evaporator Fan', desc: 'Cold air circulation', icon: '💨' },
        { name: 'Door Gasket', desc: 'Insulation seal', icon: '🔒' },
        { name: 'Defrost System', desc: 'Ice prevention unit', icon: '🔥' },
        { name: 'Shelving System', desc: 'Storage organization', icon: '📚' }
      ]
    },
    kitchenAppliances: {
      title: t('services.kitchenAppliances.title'),
      description: t('services.kitchenAppliances.desc'),
      icon: Zap,
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-500/10',
      parts: [
        { name: 'Heating Element', desc: 'Primary heat source', icon: '🔥' },
        { name: 'Temperature Sensor', desc: 'Heat monitoring system', icon: '🌡️' },
        { name: 'Control Panel', desc: 'User interface unit', icon: '🖥️' },
        { name: 'Door Mechanism', desc: 'Safety and access system', icon: '🚪' },
        { name: 'Ventilation Fan', desc: 'Heat exhaust system', icon: '💨' },
        { name: 'Timer Circuit', desc: 'Cooking duration control', icon: '⏱️' }
      ]
    }
  }

  const service = serviceData[serviceId]
  if (!service) return null

  const modalRef = useRef(null)
  const Icon = service.icon

  useEffect(() => {
    function onDocClick(e){ if (modalRef.current && !modalRef.current.contains(e.target)) onClose() }
    function onEsc(e){ if (e.key === 'Escape') onClose() }
    document.addEventListener('mousedown', onDocClick)
    document.addEventListener('keydown', onEsc)
    return () => { document.removeEventListener('mousedown', onDocClick); document.removeEventListener('keydown', onEsc) }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm p-2 sm:p-4">
      <motion.div 
        ref={modalRef} 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="w-full max-w-3xl max-h-[90vh] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
      >
        {/* Header */}
        <div className={`relative p-4 sm:p-6 ${service.bgColor} border-b border-white/10`}>
          <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-10`} />
          <div className="relative z-10 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${service.color} p-2 sm:p-3 shadow-lg flex-shrink-0`}
              >
                <Icon className="w-full h-full text-white" />
              </motion.div>
              <div className="min-w-0 flex-1">
                <h3 className="text-lg sm:text-2xl font-bold text-white truncate">{service.title}</h3>
                <p className="text-gray-300 text-xs sm:text-sm line-clamp-2">{service.description}</p>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className="px-3 py-2 sm:px-4 bg-white/10 hover:bg-white/20 rounded-lg border border-white/20 text-white transition-all text-sm flex-shrink-0"
            >
              <span className="hidden sm:inline">✕ Close</span>
              <span className="sm:hidden">✕</span>
            </motion.button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 max-h-[60vh] overflow-y-auto">
          <h4 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
            <span className="text-cyan-400">🔧</span>
            <span className="text-sm sm:text-base">{t('services.partsTitle')}</span>
          </h4>
          
          <motion.div 
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.1 } }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
          >
            {service.parts.map((part, idx) => (
              <motion.div
                key={part.name}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: { opacity: 1, x: 0 }
                }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 hover:border-cyan-500/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="text-xl sm:text-2xl group-hover:scale-110 transition-transform flex-shrink-0">
                    {part.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h5 className="font-semibold text-white group-hover:text-cyan-400 transition-colors text-sm sm:text-base">
                      {part.name}
                    </h5>
                    <p className="text-xs sm:text-sm text-gray-400 line-clamp-2">
                      {part.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </motion.div>
    </div>
  )
}


