"use client"

import { motion } from "framer-motion"
import { Download, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { personalInfo } from "@/lib/data"

export default function Hero() {
  return (
    <section className="pt-24 pb-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 rounded-full border-4 border-gray-900 dark:border-white overflow-hidden bg-gradient-to-br from-yellow-400 to-orange-500">
                <Image
                  src={personalInfo.image || "/placeholder.svg"}
                  alt={personalInfo.name}
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 animate-pulse"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="border-4 border-gray-900 dark:border-white p-6 bg-yellow-100 dark:bg-gray-800">
              <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">{personalInfo.name}</h1>
              <p className="text-xl mb-4 text-gray-700 dark:text-gray-300">{personalInfo.title}</p>

              <div className="space-y-2 mb-6">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">{personalInfo.email}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">{personalInfo.phone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{personalInfo.location}</span>
                </div>
              </div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href="/Mohammed_Resume.pdf" download target="_blank" rel="noopener noreferrer" className="inline-block">
                <Button className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 border-2 border-gray-900 dark:border-white hover:bg-yellow-500 hover:text-gray-900 font-bold">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
