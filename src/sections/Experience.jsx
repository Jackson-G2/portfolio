import SectionHeader from '../components/SectionHeader';
import GlassCard from '../components/GlassCard';
import { useInView } from '../hooks/useScrollspy';
import { experiences } from '../data/portfolio';

function TimelineItem({ experience, index, isLast }) {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="relative pl-12 md:pl-0 mb-12 last:mb-0">
      {/* Timeline dot */}
      <div className="timeline-dot" />

      {/* Content */}
      <div
        className={`
          md:w-[calc(50%-2rem)] 
          ${isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}
          ${isInView
            ? isEven
              ? 'animate-fade-in-left'
              : 'animate-fade-in-right'
            : 'opacity-0'
          }
        `}
        style={{ animationDelay: `${index * 200}ms` }}
      >
        <GlassCard>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white">
              {experience.period}
            </span>
          </div>
          <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-1">
            {experience.title}
          </h3>
          <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">
            {experience.company}
          </p>
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">
            {experience.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          title="Experience"
          subtitle="My professional journey and the impact I've made along the way."
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="timeline-line" />

          {/* Timeline items */}
          {experiences.map((exp, index) => (
            <TimelineItem
              key={exp.id}
              experience={exp}
              index={index}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
