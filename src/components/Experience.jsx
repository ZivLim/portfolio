import { Briefcase } from 'lucide-react';
import useInView from '../hooks/useInView';

const highlights = [
  'Designed responsive websites',
  'Focused on clean UI/UX',
  'Built business-oriented landing pages',
  'Developed practical client-focused solutions',
];

export default function Experience() {
  const [ref, isVisible] = useInView();

  return (
    <section id="experience" className="py-24 sm:py-32">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Section header */}
        <div className="mb-16">
          <p className="text-xs font-mono text-accent-400 tracking-widest uppercase mb-3">
            04 — Experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-50 tracking-tight">
            Where I've worked
          </h2>
        </div>

        {/* Timeline card */}
        <div className="glass rounded-2xl p-6 sm:p-8 max-w-3xl">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-accent-400/10 flex items-center justify-center shrink-0 mt-0.5">
              <Briefcase size={18} className="text-accent-400" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-4">
                <h3 className="text-lg font-semibold text-dark-50">
                  Freelance Web Designer
                </h3>
                <span className="text-xs font-mono text-dark-400">
                  2025 — Present
                </span>
              </div>
              <ul className="space-y-2.5">
                {highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-dark-300"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent-400/60 mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
