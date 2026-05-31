import { useInView } from '../hooks/useScrollspy';

export default function SectionHeader({ title, subtitle, align = 'center' }) {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const alignClass = align === 'center' ? 'text-center' : 'text-left';

  return (
    <div ref={ref} className={`mb-12 ${alignClass} ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
        {title}
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-primary-400 to-accent-400 mx-auto rounded-full mb-4" style={align === 'left' ? { marginLeft: 0 } : {}} />
      {subtitle && (
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
