import React from 'react'
import { motion } from 'framer-motion'
import { Phone, MapPin, DollarSign, CheckCircle } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function ProcessSteps() {
  const { t } = useTranslation()
  
  const steps = [
    {
      icon: Phone,
      title: t('process.call.title'),
      description: t('process.call.desc'),
      color: 'from-bus-green to-emerald-600',
      bgColor: 'bg-bus-green/10',
      borderColor: 'border-bus-green/20'
    },
    {
      icon: MapPin,
      title: t('process.visit.title'),
      description: t('process.visit.desc'),
      color: 'from-bus-blue to-blue-600',
      bgColor: 'bg-bus-blue/10',
      borderColor: 'border-bus-blue/20'
    },
    {
      icon: DollarSign,
      title: t('process.quote.title'),
      description: t('process.quote.desc'),
      color: 'from-bus-brown to-amber-800',
      bgColor: 'bg-bus-brown/10',
      borderColor: 'border-bus-brown/20'
    },
    {
      icon: CheckCircle,
      title: t('process.fix.title'),
      description: t('process.fix.desc'),
      color: 'from-bus-blue via-bus-green to-bus-brown',
      bgColor: 'bg-bus-blue/10',
      borderColor: 'border-bus-blue/20'
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
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
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            <span className="bg-gradient-to-r from-bus-blue via-bus-green to-bus-brown bg-clip-text text-transparent italic tracking-tight">
              {t('process.title')}
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('process.subtitle')}
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <ProcessStep key={step.title} step={step} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProcessStep({ step, index }) {
  const Icon = step.icon
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative"
    >
      {/* Step Number */}
      <div className={`absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white font-black text-lg shadow-xl z-20 group-hover:scale-125 transition-transform duration-500`}>
        {index + 1}
      </div>
      
      <div className={`relative p-8 rounded-2xl ${step.bgColor} backdrop-blur-sm border ${step.borderColor} hover:border-opacity-50 transition-all duration-300 h-full`}>
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
        
        {/* Icon */}
        <motion.div
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
          className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} p-4 mb-6 shadow-lg`}
        >
          <Icon className="w-full h-full text-white" />
        </motion.div>
        
        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-bus-blue transition-colors">
            {step.title}
          </h3>
          
          <p className="text-gray-300 leading-relaxed">
            {step.description}
          </p>
        </div>
        
        {/* Arrow to Next Step */}
        {index < 3 && (
          <motion.div
            animate={{ x: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-bus-blue z-20"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}
