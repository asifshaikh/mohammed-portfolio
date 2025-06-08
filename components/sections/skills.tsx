"use client"

import { motion } from "framer-motion"
import { Monitor, Server, Cpu } from "lucide-react"
import { skillsWithIcons, categorizedSkills } from "@/lib/data"

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-4 bg-gray-100 dark:bg-gray-800 overflow-hidden scroll-mt-24">
      <div className="container mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center border-4 border-gray-900 dark:border-white inline-block px-4 py-2 bg-yellow-400 dark:bg-yellow-500 text-gray-900">
            {"<Skills/>"}
          </h2>

          {/* Continuous scrolling skills */}
          <div className="relative overflow-hidden mb-16">
            <motion.div
              className="flex space-x-8 py-8"
              animate={{ x: [0, -2000] }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 40,
                ease: "linear",
              }}
            >
              {[...skillsWithIcons, ...skillsWithIcons].map((skill, index) => {
                const IconComponent = skill.icon
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="flex-shrink-0 border-4 border-gray-900 dark:border-white bg-white dark:bg-gray-900 px-6 py-3 font-bold text-lg whitespace-nowrap flex items-center space-x-3"
                  >
                    <div className="bg-yellow-400 dark:bg-yellow-500 p-2 rounded-md text-gray-900">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <span>{skill.name}</span>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>

          {/* Categorized Skills */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Frontend Skills */}
            <div className="border-4 border-gray-900 dark:border-white bg-white dark:bg-gray-900 p-6">
              <div className="flex items-center space-x-3 mb-6">
                <Monitor className="h-6 w-6 text-yellow-500" />
                <h3 className="text-xl font-bold">Frontend</h3>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {categorizedSkills.frontend.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, x: 5 }}
                    className="border-2 border-gray-900 dark:border-white bg-yellow-100 dark:bg-gray-800 px-4 py-2 text-center font-semibold hover:bg-yellow-400 dark:hover:bg-yellow-500 hover:text-gray-900 transition-colors"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Backend Skills */}
            <div className="border-4 border-gray-900 dark:border-white bg-white dark:bg-gray-900 p-6">
              <div className="flex items-center space-x-3 mb-6">
                <Server className="h-6 w-6 text-yellow-500" />
                <h3 className="text-xl font-bold">Backend</h3>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {categorizedSkills.backend.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, x: 5 }}
                    className="border-2 border-gray-900 dark:border-white bg-yellow-100 dark:bg-gray-800 px-4 py-2 text-center font-semibold hover:bg-yellow-400 dark:hover:bg-yellow-500 hover:text-gray-900 transition-colors"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tools & Others */}
            <div className="border-4 border-gray-900 dark:border-white bg-white dark:bg-gray-900 p-6">
              <div className="flex items-center space-x-3 mb-6">
                <Cpu className="h-6 w-6 text-yellow-500" />
                <h3 className="text-xl font-bold">Tools & Others</h3>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {categorizedSkills.tools.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, x: 5 }}
                    className="border-2 border-gray-900 dark:border-white bg-yellow-100 dark:bg-gray-800 px-4 py-2 text-center font-semibold hover:bg-yellow-400 dark:hover:bg-yellow-500 hover:text-gray-900 transition-colors"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
