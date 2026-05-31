import { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import SkillBar from '../components/SkillBar';
import { skills } from '../data/portfolio';

const categories = ['All', ...new Set(skills.map((s) => s.category))];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = activeCategory === 'All'
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-20 px-4 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          title="Skills & Technologies"
          subtitle="Technologies I work with and my proficiency level in each."
        />

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`
                px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${activeCategory === cat
                  ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 shadow-sm'
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
          {filteredSkills.map((skill, index) => (
            <SkillBar key={skill.name} skill={skill} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
