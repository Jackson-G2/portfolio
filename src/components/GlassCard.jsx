import { useInView } from '../hooks/useScrollspy';

export default function GlassCard({ children, className = '', delay = 0 }) {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`
        glass-light dark:glass-dark rounded-2xl p-6 
        shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1
        ${isInView ? 'animate-fade-in-up' : 'opacity-0'}
        ${className}
      `}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
