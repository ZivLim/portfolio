import { ExternalLink } from 'lucide-react';
import useInView from '../hooks/useInView';

const featuredProjects = [
  {
    id: 'carecrafted',
    title: 'CareCrafted',
    description:
      'Healthcare service platform focusing on accessibility and user-friendly design.',
    tech: ['HTML', 'CSS', 'PHP', 'MySQL'],
    url: 'https://carecrafted.infinityfreeapp.com/',
    gradient: 'from-indigo-500/20 to-cyan-500/10',
  },
  {
    id: 'habit-tracker',
    title: 'Habit Tracker System',
    description:
      'Full-stack habit tracking system with dashboard and database integration.',
    tech: ['PHP', 'MySQL', 'HTML', 'CSS'],
    url: 'https://habittrackerwadproject.infinityfree.me/dashboard.php',
    gradient: 'from-violet-500/20 to-fuchsia-500/10',
  },
  {
    id: 'hourglass',
    title: 'HourGlass',
    description:
      'Freelance web design landing page showcasing business-focused web solutions.',
    tech: ['HTML', 'CSS'],
    url: 'https://zivlim.github.io/ziv.github.io/HourGlass/index.html',
    gradient: 'from-amber-500/15 to-orange-500/10',
  },
];

export default function FeaturedProjects() {
  const [ref, isVisible] = useInView();

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Section header */}
        <div className="mb-16">
          <p className="text-xs font-mono text-accent-400 tracking-widest uppercase mb-3">
            02 — Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-50 tracking-tight">
            Featured Projects
          </h2>
        </div>

        {/* Project Cards */}
        <div className="space-y-6">
          {featuredProjects.map((project, i) => (
            <a
              key={project.id}
              id={`project-${project.id}`}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block glass rounded-2xl overflow-hidden hover:border-accent-400/20 transition-all duration-300"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row">
                {/* Preview area */}
                <div
                  className={`md:w-2/5 h-48 md:h-auto bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_70%)]" />
                  <span className="font-mono text-2xl sm:text-3xl font-bold text-white/20 group-hover:text-white/30 transition-colors duration-300 tracking-tighter">
                    {project.title}
                  </span>
                </div>

                {/* Content */}
                <div className="md:w-3/5 p-6 sm:p-8 flex flex-col justify-center">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-xl font-semibold text-dark-50 group-hover:text-accent-500 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <ExternalLink
                      size={18}
                      className="text-dark-500 group-hover:text-accent-400 transition-colors duration-200 shrink-0 mt-1"
                    />
                  </div>
                  <p className="text-dark-400 text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/[0.03] text-dark-300 border border-white/[0.04]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
