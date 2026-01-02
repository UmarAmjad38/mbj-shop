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
                className="w-14 h-14 rounded-2xl bg-gradient-to-br from-bus-blue to-bus-green p-3.5 shadow-2xl"
              >
                <Wrench className="w-full h-full text-white" />
              </motion.div>
              <div>
                <h3 className="text-3xl font-black bg-gradient-to-r from-bus-blue via-bus-green to-bus-brown bg-clip-text text-transparent italic tracking-tight">
                  {t('brand')}
                </h3>
                <p className="text-gray-400 text-xs font-bold tracking-widest uppercase">{t('companyName')}</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              {t('footer.description')}
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-3 bg-white/5 rounded-xl border border-white/10 hover:border-bus-blue/30 transition-all duration-500 group">
                <div className="text-2xl font-bold text-bus-blue group-hover:scale-110 transition-transform">500+</div>
                <div className="text-[10px] text-gray-500 font-bold uppercase">{t('footer.stats.repairs')}</div>
              </div>
              <div className="text-center p-3 bg-white/5 rounded-xl border border-white/10 hover:border-bus-green/30 transition-all duration-500 group">
                <div className="text-2xl font-bold text-bus-green group-hover:scale-110 transition-transform">24/7</div>
                <div className="text-[10px] text-gray-500 font-bold uppercase">{t('footer.stats.service')}</div>
              </div>
              <div className="text-center p-3 bg-white/5 rounded-xl border border-white/10 hover:border-bus-brown/30 transition-all duration-500 group">
                <div className="text-2xl font-bold text-bus-brown group-hover:scale-110 transition-transform">15+</div>
                <div className="text-[10px] text-gray-500 font-bold uppercase">{t('footer.stats.years')}</div>
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
              <Phone className="text-bus-blue" size={20} />
              {t('footer.contactUs')}
            </h4>
            
            <div className="space-y-4">
              <motion.a
                href="tel:+966503128467"
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-gray-400 hover:text-bus-blue transition-all duration-300 group"
              >
                <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                  <Phone size={16} className="text-green-400" />
                </div>
                <span>+966 50 312 8467</span>
              </motion.a>
              
              <motion.a
                href="tel:+966598862137"
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-gray-400 hover:text-bus-blue transition-all duration-300 group"
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
              <Clock className="text-bus-green" size={20} />
              {t('footer.serviceHours')}
            </h4>
            
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Mon - Fri</span>
                <span className="text-bus-green font-bold tracking-tight">8AM - 10PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Saturday</span>
                <span className="text-bus-green font-bold tracking-tight">9AM - 8PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Sunday</span>
                <span className="text-bus-green font-bold tracking-tight">10AM - 6PM</span>
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
                <MapPin className="text-bus-brown" size={16} />
                <span className="font-bold text-white">{t('footer.serviceArea')}</span>
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
          y: [0, -30, 0],
          rotate: [0, 360, 0]
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-10 right-10 opacity-10"
      >
        <Snowflake className="text-bus-blue" size={60} />
      </motion.div>
      
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -360, 0]
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-20 left-10 opacity-10"
      >
        <Wrench className="text-bus-brown" size={40} />
      </motion.div>
    </footer>
  )
}


