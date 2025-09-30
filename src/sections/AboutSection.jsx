import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { useTranslation } from 'react-i18next'

export default function AboutSection() {
  const { t } = useTranslation()
  return (
    <section id="about" className="py-20 bg-surface">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-8 items-center">
        <motion.div initial={{opacity:0,x:-24}} whileInView={{opacity:1,x:0}} viewport={{once:true}}>
          <SectionHeading>{t('about.title')}</SectionHeading>
          <p className="mt-4 opacity-80">{t('about.body')}</p>
        </motion.div>
        <motion.div initial={{opacity:0,x:24}} whileInView={{opacity:1,x:0}} className="rounded-xl border p-6">
          <ul className="space-y-2 text-sm">
            <li>Kingdom of Saudi Arabia - Riyadh</li>
            <li>Mobile: 0503128467, 0598862137</li>
            <li>Brands: GREE, LG, Samsung, Haier, Harm</li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}


