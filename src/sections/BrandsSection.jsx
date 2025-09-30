import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'

export default function BrandsSection() {
  const items = ['GREE', 'LG', 'Samsung', 'Haier', 'HARM']
  return (
    <section className="py-16 bg-surface">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading>Supported Brands</SectionHeading>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-center">
          {items.map((b) => (
            <motion.div key={b} initial={{opacity:0, y:12}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="rounded border p-4">
              {b}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


