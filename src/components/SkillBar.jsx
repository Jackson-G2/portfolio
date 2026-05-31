import { useInView } from '../hooks/useScrollspy';

export default function SkillBar({ skill, delay = 0 }) {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const categoryColors = {
    Frontend: 'from-blue-400 to-cyan-400',
    Backend: 'from-green-400 to-emerald-400',
    DevOps: 'from-purple-400 to-pink-400',
  };

  const gradient = categoryColors[skill.category] || 'from-primary-400 to-accent-400';

  return (
    <div
      ref={ref}
      className={`${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex justify-between mb-2">
        <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
          {skill.name}
        </span>
        <span className="text-sm text-slate-500 dark:text-slate-400">
          {skill.level}%
        </span>
      </div>
      <div className="w-full h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${gradient} ${isInView ? 'animate-grow' : 'w-0'}`}
          style={{
            width: isInView ? `${skill.level}%` : '0%',
            animationDelay: `${delay + 200}ms`,
          }}
        />
      </div>
    </div>
  );
}
