import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { useTranslation } from 'react-i18next'

export default function ServicesSection() {
  const { t } = useTranslation()
  const services = [
    { key: 'split_ac', emoji: '🧊', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop' },
    { key: 'washing_machine', emoji: '🧺', img: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?q=80&w=1200&auto=format&fit=crop' },
    { key: 'refrigerator', emoji: '🧯', img: 'https://images.unsplash.com/photo-1582582621958-cdb6c9f5c8f5?q=80&w=1200&auto=format&fit=crop' },
    { key: 'oven', emoji: '🔥', img: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=1200&auto=format&fit=crop' },
  ]
  const [active, setActive] = useState(null)
  return (
    <section id="services" className="py-20 bg-surface">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading>{t('services.title')}</SectionHeading>
        <p className="opacity-70 mt-2">{t('services.subtitle')}</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, idx) => (
            <ServiceCard key={s.key} id={s.key} title={t(`services.items.${s.key}`)} emoji={s.emoji} img={s.img} index={idx} onOpen={() => setActive(s.key)} />
          ))}
        </div>
      </div>
      {active && <PartsOverlay serviceId={active} onClose={() => setActive(null)} />}
    </section>
  )
}

function ServiceCard({ id, title, emoji, img, index, onOpen }) {
  const left = index % 2 === 0
  return (
    <motion.button initial={{ opacity: 0, x: left ? -24 : 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }} whileHover={{ y: -4 }} onClick={onOpen} className="group rounded-xl overflow-hidden border border-muted bg-surface text-start shadow-sm hover:shadow-md">
      <div className="aspect-video w-full overflow-hidden">
        <img src={img} alt={title} className="h-full w-full object-cover" />
      </div>
      <div className="p-5">
        <div className="text-3xl">{emoji}</div>
        <div className="mt-2 font-semibold">{title}</div>
        <div className="text-sm opacity-70">Click to view parts diagram</div>
      </div>
    </motion.button>
  )
}

function PartsOverlay({ serviceId, onClose }) {
  const titleMap = { split_ac: 'Split AC', washing_machine: 'Washing Machine', refrigerator: 'Refrigerator', oven: 'Oven' }
  const imageMap = {
    split_ac: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop',
    washing_machine: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?q=80&w=1200&auto=format&fit=crop',
    refrigerator: 'https://images.unsplash.com/photo-1582582621958-cdb6c9f5c8f5?q=80&w=1200&auto=format&fit=crop',
    oven: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=1200&auto=format&fit=crop',
  }
  const partsMap = {
    split_ac: ['Compressor', 'Condenser', 'Evaporator', 'Fan', 'Filter'],
    washing_machine: ['Drum', 'Motor', 'Belt', 'Pump', 'Control Board'],
    refrigerator: ['Compressor', 'Thermostat', 'Shelves', 'Gasket', 'Fan'],
    oven: ['Heating Coil', 'Thermostat', 'Door', 'Tray', 'Control Board'],
  }
  const parts = partsMap[serviceId] || []
  const modalRef = useRef(null)
  useEffect(() => {
    function onDocClick(e){ if (modalRef.current && !modalRef.current.contains(e.target)) onClose() }
    function onEsc(e){ if (e.key === 'Escape') onClose() }
    document.addEventListener('mousedown', onDocClick)
    document.addEventListener('keydown', onEsc)
    return () => { document.removeEventListener('mousedown', onDocClick); document.removeEventListener('keydown', onEsc) }
  }, [onClose])
  return (
    <div className="fixed inset-0 z-[60] grid place-items-center bg-black/50 p-4">
      <motion.div ref={modalRef} initial={{opacity:0, scale:.95}} animate={{opacity:1, scale:1}} className="w-full max-w-4xl rounded-2xl bg-surface p-0 overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <div className="text-lg font-bold">{titleMap[serviceId]}</div>
          <button className="px-3 py-1 rounded border" onClick={onClose}>Close</button>
        </div>
        <div className="grid md:grid-cols-2 gap-0 h-[70vh]">
          <img src={imageMap[serviceId]} alt={titleMap[serviceId]} className="h-full w-full object-cover" />
          <motion.ul initial="hidden" animate="show" variants={{ hidden:{}, show:{ transition:{staggerChildren:.07} } }} className="p-6 space-y-3 overflow-auto">
            {parts.map((p) => (
              <motion.li key={p} variants={{ hidden:{opacity:0, x:10}, show:{opacity:1, x:0} }} className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-blue-600" />
                <span>{p}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </div>
  )
}


