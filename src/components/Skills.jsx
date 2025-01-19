import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Electronics',
      skills: [
        'Project Design',
        'PCB Routing',
        'Component Dimensioning',
        'Soldering',
        'Testing',
        'Robotics Programming'
      ]
    },
    {
      title: 'Electrical Installation',
      skills: [
        'Diagram Creation',
        'Wiring',
        'Functional Verification',
        'System Testing',
        'Equipment Calibration'
      ]
    },
    {
      title: 'Software & Tools',
      skills: [
        'Proteus',
        'Arduino (C++/C)',
        'AWR Design Environment',
        'Microsoft Office Suite',
        'PCB Design Software'
      ]
    },
    {
      title: 'Instrumentation & High Frequencies',
      skills: [
        'Antenna Systems',
        'Impedance Adaptation',
        'System Calibration',
        'RF Testing',
        'Signal Analysis'
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Technical Skills</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            A comprehensive overview of my technical expertise and capabilities
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="px-6 py-8">
                <h3 className="text-2xl font-bold text-indigo-600 mb-6">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className="flex items-center"
                    >
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <motion.div
                          className="bg-indigo-600 h-2.5 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: '85%' }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: skillIndex * 0.1 }}
                        />
                      </div>
                      <span className="ml-4 text-sm font-medium text-gray-600 min-w-[120px]">
                        {skill}
                      </span>
                    </div>
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

export default Skills;
