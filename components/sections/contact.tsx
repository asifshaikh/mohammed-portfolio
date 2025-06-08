"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { socialLinks } from "@/lib/data"
import emailjs from "emailjs-com"
import { useState } from "react"

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setResult(null)
    try {
      // Replace these with your actual EmailJS service/template/user IDs
      const serviceID = "service_8y3bvk2"
      const templateID = "template_1d4g4ld"
      const userID = "AhUaWUUXKIYGd6CV-"
      await emailjs.send(serviceID, templateID, form, userID)
      setResult("Message sent successfully!")
      setForm({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      setResult("Failed to send message. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-16 px-4 scroll-mt-24">
      <div className="container mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center border-4 border-gray-900 dark:border-white inline-block px-4 py-2 bg-yellow-400 dark:bg-yellow-500 text-gray-900">
            {"<Contact/>"}
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Social Links */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Let's Connect!</h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <motion.a
                      key={index}
                      href={social.link}
                      whileHover={{ scale: 1.05, x: 10 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-4 border-4 border-gray-900 dark:border-white p-4 bg-white dark:bg-gray-800 hover:bg-yellow-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <IconComponent className="h-6 w-6" />
                      <span className="font-semibold">{social.label}</span>
                    </motion.a>
                  )
                })}
              </div>
            </div>

            {/* Contact Form */}
            <div className="border-4 border-gray-900 dark:border-white p-6 bg-white dark:bg-gray-800">
              <h3 className="text-2xl font-bold mb-6">Send Message</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    className="border-2 border-gray-900 dark:border-white focus:border-yellow-500 font-mono"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    className="border-2 border-gray-900 dark:border-white focus:border-yellow-500 font-mono"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Input
                    name="subject"
                    placeholder="Subject"
                    className="border-2 border-gray-900 dark:border-white focus:border-yellow-500 font-mono"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    className="border-2 border-gray-900 dark:border-white focus:border-yellow-500 font-mono resize-none"
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                {result && (
                  <div className={`text-center font-semibold ${result.includes('success') ? 'text-green-600' : 'text-red-600'}`}>{result}</div>
                )}
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button type="submit" className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 border-2 border-gray-900 dark:border-white hover:bg-yellow-500 hover:text-gray-900 font-bold" disabled={loading}>
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </motion.div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
