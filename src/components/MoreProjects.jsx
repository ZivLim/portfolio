import { ExternalLink } from 'lucide-react';
import useInView from '../hooks/useInView';

const projects = [
  {
    title: 'Barista',
    url: 'https://zivlim.github.io/ziv.github.io/Barista/index.html',
    tag: 'Web Design',
  },
  {
    title: 'Computer Graphics',
    url: 'https://zivlim.github.io/ziv.github.io/ComputerGraphicsProject/new.html',
    tag: 'Interactive',
  },
  {
    title: 'Loyalty Program',
    url: 'https://zivlim.github.io/ziv.github.io/Loyalty/home.html',
    tag: 'Full-Stack',
  },
  {
    title: 'Earphone Viewer',
    url: 'https://zivlim.github.io/ziv.github.io/earphone/earphones_viewer.html',
    tag: 'Product',
  },
  {
    title: 'Gym Room',
    url: 'https://zivlim.github.io/ziv.github.io/gymroom/index.html',
    tag: 'Web Design',
  },
  {
    title: 'Pet Care',
    url: 'https://zivlim.github.io/ziv.github.io/petcare/index.html',
    tag: 'Web Design',
  },
  {
    title: 'Photography',
    url: 'https://zivlim.github.io/ziv.github.io/photography/index.html',
    tag: 'Portfolio',
  },
];

export default function MoreProjects() {
  const [ref, isVisible] = useInView();

  return (
    <section id="more-projects" className="pb-24 sm:pb-32">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Section header */}
        <div className="mb-12">
          <p className="text-xs font-mono text-accent-400 tracking-widest uppercase mb-3">
            03 — Archive
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-50 tracking-tight">
            More Projects
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass rounded-xl p-5 hover:border-accent-400/20 transition-all duration-300 flex flex-col justify-between min-h-[120px]"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-xs font-mono text-dark-500 px-2 py-0.5 rounded bg-white/[0.03]">
                  {project.tag}
                </span>
                <ExternalLink
                  size={14}
                  className="text-dark-600 group-hover:text-accent-400 transition-colors duration-200"
                />
              </div>
              <h3 className="text-base font-medium text-dark-200 group-hover:text-dark-50 transition-colors duration-200">
                {project.title}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
