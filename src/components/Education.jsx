import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const education = [
    {
      period: '2022 - 2025',
      degree: 'BUT GEII (Bachelor Universitaire de Technologie)',
      institution: 'IUT Paul Sabatier',
      location: 'Toulouse, France',
      description: 'Specializing in Electrical Engineering and Industrial Computing'
    },
    {
      period: '2020 - 2022',
      degree: 'Pre-University Studies',
      institution: 'Université de Tours',
      location: 'Tours, France',
      description: 'French language and scientific subjects preparation'
    },
    {
      period: '2020',
      degree: 'High School Diploma',
      institution: 'Samad School',
      location: 'Oman',
      description: 'Mathematics Pure specialization with honors'
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Education</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            My academic journey and qualifications
          </p>
        </motion.div>

        <div className="mt-16 relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200" />

          {/* Timeline entries */}
          <div className="space-y-12">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white" />

                <div className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} items-center w-full`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <span className="text-sm font-semibold text-indigo-600 tracking-wide">
                        {item.period}
                      </span>
                      <h3 className="mt-2 text-xl font-bold text-gray-900">
                        {item.degree}
                      </h3>
                      <p className="mt-1 text-base font-medium text-gray-600">
                        {item.institution}
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        {item.location}
                      </p>
                      <p className="mt-2 text-base text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
