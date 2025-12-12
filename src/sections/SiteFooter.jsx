import React from 'react'
import { motion } from 'framer-motion'
import { Wrench, Phone, MapPin, Clock, Mail, MessageCircle, Snowflake } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function SiteFooter() {
  const { t } = useTranslation()
  
  return (
    <footer className="bg-slate-950 border-t border-slate-800 relative">

      <div className="mx-auto max-w-7xl px-4 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 p-3 shadow-lg"
              >
                <Wrench className="w-full h-full text-white" />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {t('brand')}
                </h3>
                <p className="text-gray-400 text-sm">{t('companyName')}</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              {t('footer.description')}
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10">
                <div className="text-xl font-bold text-cyan-400">500+</div>
                <div className="text-xs text-gray-400">{t('footer.stats.repairs')}</div>
              </div>
              <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10">
                <div className="text-xl font-bold text-blue-400">24/7</div>
                <div className="text-xs text-gray-400">{t('footer.stats.service')}</div>
              </div>
              <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10">
                <div className="text-xl font-bold text-purple-400">15+</div>
                <div className="text-xs text-gray-400">{t('footer.stats.years')}</div>
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Phone className="text-cyan-400" size={20} />
              {t('footer.contactUs')}
            </h4>
            
            <div className="space-y-4">
              <motion.a
                href="tel:+966503128467"
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                  <Phone size={16} className="text-green-400" />
                </div>
                <span>+966 50 312 8467</span>
              </motion.a>
              
              <motion.a
                href="tel:+966598862137"
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                  <Phone size={16} className="text-blue-400" />
                </div>
                <span>+966 59 886 2137</span>
              </motion.a>
              
              <motion.a
                href="mailto:javaidiqbal1977@gmail.com"
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                  <Mail size={16} className="text-purple-400" />
                </div>
                <span>javaidiqbal1977@gmail.com</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Service Hours & Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Clock className="text-cyan-400" size={20} />
              {t('footer.serviceHours')}
            </h4>
            
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Mon - Fri</span>
                <span className="text-cyan-400 font-semibold">8AM - 10PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Saturday</span>
                <span className="text-cyan-400 font-semibold">9AM - 8PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Sunday</span>
                <span className="text-cyan-400 font-semibold">10AM - 6PM</span>
              </div>
              <div className="border-t border-white/10 pt-3 mt-4">
                <div className="flex items-center gap-2 text-red-400 font-semibold">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  {t('footer.emergency247')}
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <div className="flex items-center gap-2 text-gray-300 mb-2">
                <MapPin className="text-cyan-400" size={16} />
                <span className="font-semibold">{t('footer.serviceArea')}</span>
              </div>
              <p className="text-sm text-gray-400">
                {t('footer.serviceAreaDesc')}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} {t('companyName')} {t('footer.copyright')}
          </div>
          
          {/* <div className="flex items-center gap-6 text-sm text-gray-400">
            <motion.span
              whileHover={{ color: '#22d3ee' }}
              className="cursor-pointer hover:text-cyan-400 transition-colors"
            >
              Privacy Policy
            </motion.span>
            <motion.span
              whileHover={{ color: '#22d3ee' }}
              className="cursor-pointer hover:text-cyan-400 transition-colors"
            >
              Terms of Service
            </motion.span>
            <motion.span
              whileHover={{ color: '#22d3ee' }}
              className="cursor-pointer hover:text-cyan-400 transition-colors"
            >
              Service Areas
            </motion.span>
          </div> */}
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-10 right-10 opacity-10"
      >
        <Snowflake className="text-cyan-400" size={40} />
      </motion.div>
      
      <motion.div
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-20 left-10 opacity-10"
      >
        <Wrench className="text-blue-400" size={32} />
      </motion.div>
    </footer>
  )
}


