import SectionHeader from '../components/SectionHeader';
import GlassCard from '../components/GlassCard';
import Button from '../components/Button';
import { useInView } from '../hooks/useScrollspy';
import { personalInfo } from '../data/portfolio';

export default function About() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="About Me"
          subtitle="Get to know who I am and what drives me to build great software."
        />

        <div ref={ref} className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`${isInView ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-400 to-accent-400 rounded-2xl opacity-20 blur-lg" />
              <img
                src={personalInfo.avatarUrl}
                alt={personalInfo.name}
                className="relative rounded-2xl shadow-xl w-full max-w-md mx-auto"
                loading="lazy"
              />
            </div>
          </div>

          <div className={`${isInView ? 'animate-fade-in-right' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
            <GlassCard>
              <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                {personalInfo.bio.split('\n\n').map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="text-center p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                  <div className="text-3xl font-bold gradient-text">5+</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">Years Experience</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                  <div className="text-3xl font-bold gradient-text">50+</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">Projects Completed</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                  <div className="text-3xl font-bold gradient-text">30+</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">Happy Clients</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                  <div className="text-3xl font-bold gradient-text">10+</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">Open Source Repos</div>
                </div>
              </div>

              <div className="mt-8">
                <Button href={personalInfo.resumeUrl} variant="outline" size="md">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </Button>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
