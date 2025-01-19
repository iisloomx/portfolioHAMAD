import React from 'react';
import { motion } from 'framer-motion';
import { WrenchIcon, BoltIcon, BeakerIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline';

const Experience = () => {
  const experiences = [
    {
      title: 'Electrical and Instrumentation Technician Intern',
      company: 'OQEP',
      department: 'Operations and Maintenance Department',
      period: 'May 2024 - August 2024',
      responsibilities: [
        {
          icon: WrenchIcon,
          text: 'Performed preventive and corrective maintenance on electrical and instrumentation systems'
        },
        {
          icon: BoltIcon,
          text: 'Conducted electrical system testing and diagnostics'
        },
        {
          icon: BeakerIcon,
          text: 'Calibrated equipment and implemented new installations'
        },
        {
          icon: ComputerDesktopIcon,
          text: 'Worked with hyperfrequency systems and impedance adaptation'
        }
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Professional Experience</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Hands-on experience in electrical engineering and industrial computing
          </p>
        </motion.div>

        <div className="mt-16">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="px-6 py-8">
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-2xl font-bold text-gray-900">{experience.title}</h3>
                  <p className="mt-2 text-lg text-indigo-600">{experience.company}</p>
                  <p className="mt-1 text-base text-gray-500">{experience.department}</p>
                  <p className="mt-1 text-sm font-medium text-gray-400">{experience.period}</p>
                </div>

                <div className="mt-6 space-y-6">
                  {experience.responsibilities.map((responsibility, respIndex) => (
                    <motion.div
                      key={respIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: respIndex * 0.1 }}
                      className="flex items-start"
                    >
                      <div className="flex-shrink-0">
                        <responsibility.icon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
                      </div>
                      <p className="ml-3 text-base text-gray-600">{responsibility.text}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
