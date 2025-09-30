import React from 'react'
import { motion } from 'framer-motion'

export default function SectionHeading({ children }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-2xl md:text-3xl font-bold"
    >
      {children}
    </motion.h2>
  )
}


