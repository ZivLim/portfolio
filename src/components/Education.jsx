import { GraduationCap } from 'lucide-react';
import useInView from '../hooks/useInView';

const highlights = [
  'Full-Stack Social Media Application',
  'IoT Automatic Pet Feeder Project',
  'Computing Club Member',
];

export default function Education() {
  const [ref, isVisible] = useInView();

  return (
    <section id="education" className="pb-24 sm:pb-32">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Section header */}
        <div className="mb-16">
          <p className="text-xs font-mono text-accent-400 tracking-widest uppercase mb-3">
            05 — Education
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-50 tracking-tight">
            Academic Background
          </h2>
        </div>

        {/* Education card */}
        <div className="glass rounded-2xl p-6 sm:p-8 max-w-3xl">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-accent-400/10 flex items-center justify-center shrink-0 mt-0.5">
              <GraduationCap size={18} className="text-accent-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-dark-50 mb-1">
                Diploma in Computer Science
              </h3>
              <p className="text-sm text-dark-400 mb-4">
                Crescendo International College
              </p>
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
