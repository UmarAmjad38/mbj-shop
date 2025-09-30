import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'

export default function ProcessSection() {
  const steps = [
    { title: 'Call/WhatsApp', desc: 'Share your issue and location.' },
    { title: 'Rapid Visit', desc: 'Engineer inspects and explains parts.' },
    { title: 'Transparent Quote', desc: 'Clear price before work.' },
    { title: 'Fix & Test', desc: 'We repair and verify cooling.' },
  ]
  return (
    <section className="py-20 bg-surface">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading>How we work</SectionHeading>
        <div className="mt-10 grid md:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <motion.div key={s.title} initial={{opacity:0, x: i % 2 === 0 ? -24 : 24}} whileInView={{opacity:1, x:0}} viewport={{once:true}} className="rounded-xl border p-6 bg-surface">
              <div className="text-4xl font-extrabold text-blue-600">{i+1}</div>
              <div className="mt-2 font-semibold">{s.title}</div>
              <p className="text-sm opacity-70">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


