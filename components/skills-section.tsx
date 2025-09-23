import React from 'react';
import { motion } from 'framer-motion';
import { FloatingAnimation } from './ui/floating-animation';

const SkillsSection = () => {
  const skills = [
    { name: 'HTML/CSS', level: 90, color: 'from-orange-500 to-red-500' },
    { name: 'JavaScript', level: 85, color: 'from-yellow-400 to-amber-500' },
    { name: 'React', level: 80, color: 'from-cyan-400 to-sky-500' },
    { name: 'Next.js', level: 75, color: 'from-neutral-400 to-neutral-600' },
    { name: 'Tailwind CSS', level: 85, color: 'from-cyan-500 to-sky-600' },
    { name: 'Node.js', level: 75, color: 'from-green-500 to-emerald-500' },
    { name: 'TypeScript', level: 70, color: 'from-blue-600 to-indigo-600' },
    { name: 'API Development', level: 70, color: 'from-purple-500 to-violet-500' },
    { name: 'MongoDB', level: 70, color: 'from-lime-500 to-lime-700' },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.2]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <FloatingAnimation 
              key={skill.name} 
              yOffset={10} 
              duration={2 + index * 0.2} 
              delay={index * 0.1}
            >
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-5 rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-lg">{skill.name}</span>
                  <span className="text-muted-foreground font-medium">{skill.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    className={`h-3 rounded-full bg-gradient-to-r ${skill.color}`}
                  ></motion.div>
                </div>
              </motion.div>
            </FloatingAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
