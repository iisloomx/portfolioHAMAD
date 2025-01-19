import React from 'react';
import { motion } from 'framer-motion';
import { PhoneIcon, EnvelopeIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

const About = () => {
  const personalInfo = [
    {
      icon: PhoneIcon,
      label: 'Phone',
      value: '06 09 34 51 62',
      href: 'tel:+33609345162'
    },
    {
      icon: EnvelopeIcon,
      label: 'Email',
      value: 'hamed.al-busaidi@etu.iut-tlse3.fr',
      href: 'mailto:hamed.al-busaidi@etu.iut-tlse3.fr'
    },
    {
      icon: GlobeAltIcon,
      label: 'Languages',
      value: 'Arabic (Native), English, French',
      href: null
    }
  ];

  const interests = ['Technology', 'Artificial Intelligence', 'Cycling', 'Travel', 'Reading'];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Me</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Passionate about electrical engineering and industrial computing, with a focus on innovative solutions and continuous learning.
          </p>
        </motion.div>

        <div className="mt-20">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {personalInfo.map((item) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{item.label}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {item.href ? (
                    <a href={item.href} className="hover:text-indigo-500">
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Interests</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {interests.map((interest) => (
              <span
                key={interest}
                className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
              >
                {interest}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
