import React from 'react'
import { Phone, MessageCircle } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { useTranslation } from 'react-i18next'

export default function ContactSection() {
  const { t } = useTranslation()
  return (
    <section id="contact" className="py-20 bg-surface">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading>{t('contact.title')}</SectionHeading>
        <p className="mt-2 opacity-80">{t('contact.subtitle')}</p>
        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          <a href="tel:+966503128467" className="rounded border p-4 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center gap-2"><Phone size={16}/> +966 50 312 8467</a>
          <a href="tel:+966598862137" className="rounded border p-4 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center gap-2"><Phone size={16}/> +966 59 886 2137</a>
          <a href="https://wa.me/966503128467" className="rounded border p-4 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center gap-2"><MessageCircle size={16}/> WhatsApp</a>
        </div>
      </div>
    </section>
  )
}


