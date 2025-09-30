import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'

export default function FAQSection() {
  const qas = [
    { q: 'Do you provide same-day service?', a: 'Yes, within Riyadh city depending on schedule.' },
    { q: 'Warranty on repairs?', a: '30–90 days depending on parts used.' },
    { q: 'Which areas?', a: 'Riyadh and nearby districts.' },
  ]
  return (
    <section className="py-20 bg-surface">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading>FAQ</SectionHeading>
        <div className="mt-6 space-y-4">
          {qas.map((x) => (
            <motion.details key={x.q} initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="rounded border p-4 bg-surface">
              <summary className="font-semibold cursor-pointer">{x.q}</summary>
              <p className="mt-2 opacity-80">{x.a}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  )
}


