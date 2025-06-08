"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="py-8 px-4 bg-gray-900 dark:bg-black text-white border-t-4 border-yellow-400">
      <div className="container mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-lg font-bold"
        >
          Made with ❤️ by Mohammed
        </motion.p>
        <p className="text-sm text-gray-400 mt-2">© 2025 Mohammed. All rights reserved.</p>
      </div>
    </footer>
  )
}
