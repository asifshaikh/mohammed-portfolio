'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      id='about'
      className='py-16 px-4 bg-gray-100 dark:bg-gray-800 scroll-mt-24'
    >
      <div className='container mx-auto'>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className='text-3xl font-bold mb-8 text-center border-4 border-gray-900 dark:border-white inline-block px-4 py-2 bg-yellow-400 dark:bg-yellow-500 text-gray-900'>
            {'<About Me/>'}
          </h2>

          <div className='grid md:grid-cols-2 gap-8'>
            <div className='border-4 border-gray-900 dark:border-white p-6 bg-white dark:bg-gray-900'>
              <h3 className='text-xl font-bold mb-4'>Personal Info</h3>
              <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
                I'm a passionate Full-Stack Developer fresh out of college with
                a strong foundation in software development and a keen eye for
                detail. I enjoy building responsive, user-friendly applications
                and creating meaningful digital experiences. My journey began
                during my college years, and since then, I've consistently
                challenged myself by learning, experimenting, and working on
                diverse projects. I also completed an internship where I
                contributed to building real-world applications and gained
                valuable hands-on experience.
              </p>
            </div>

            <div className='border-4 border-gray-900 dark:border-white p-6 bg-white dark:bg-gray-900'>
              <h3 className='text-xl font-bold mb-4'>Education</h3>
              <div className='space-y-4'>
                <div>
                  <h4 className='font-semibold'>Bachelor of Engineering</h4>
                  <p className='text-sm text-gray-600 dark:text-gray-400'>
                    Padre Conceicao College of Engineering | 2021-2025
                  </p>
                  <p className='text-sm'>CGPA: 8.2/10</p>
                </div>
                <div>
                  <h4 className='font-semibold'>
                    Higher Secondary Certificate
                  </h4>
                  <p className='text-sm text-gray-600 dark:text-gray-400'>
                    Goa State Board | 2021
                  </p>
                  <p className='text-sm'>Percentage: 67.7%</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
