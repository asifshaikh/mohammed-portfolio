"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { projects } from "@/lib/data"

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-4 scroll-mt-24">
      <div className="container mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center border-4 border-gray-900 dark:border-white inline-block px-4 py-2 bg-yellow-400 dark:bg-yellow-500 text-gray-900">
            {"<Projects/>"}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="border-4 border-gray-900 dark:border-white bg-white dark:bg-gray-800 overflow-hidden"
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover border-b-4 border-gray-900 dark:border-white"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex space-x-4">
                    {project.liveLink && (
                      <motion.a
                        href={project.liveLink}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center space-x-1 text-sm border-2 border-gray-900 dark:border-white px-2 py-1 hover:bg-yellow-400 dark:hover:bg-yellow-500 hover:text-gray-900 transition-colors"
                      >
                        <ExternalLink className="h-3 w-3" />
                        <span>Live</span>
                      </motion.a>
                    )}
                    {project.githubLink && (
                      <motion.a
                        href={project.githubLink}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center space-x-1 text-sm border-2 border-gray-900 dark:border-white px-2 py-1 hover:bg-yellow-400 dark:hover:bg-yellow-500 hover:text-gray-900 transition-colors"
                      >
                        <Github className="h-3 w-3" />
                        <span>Code</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
