import useInView from '../hooks/useInView';

const interests = [
  'Web Development',
  'Mobile App Development',
  'UI/UX Design',
  'Software Engineering',
];

const skillGroups = [
  {
    label: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    label: 'Backend',
    skills: ['PHP', 'MySQL'],
  },
  {
    label: 'Tools',
    skills: ['GitHub', 'VS Code', 'phpMyAdmin'],
  },
  {
    label: 'Others',
    skills: ['UI/UX Design', 'Problem Solving', 'Team Collaboration'],
  },
];

export default function About() {
  const [ref, isVisible] = useInView();

  return (
    <section id="about" className="py-24 sm:py-32">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Section header */}
        <div className="mb-16">
          <p className="text-xs font-mono text-accent-400 tracking-widest uppercase mb-3">
            01 — About
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-50 tracking-tight">
            Who I am
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left: Bio & Interests */}
          <div className="lg:col-span-2 space-y-8">
            <p className="text-dark-300 leading-relaxed">
              Currently pursuing a Diploma in Computer Science with hands-on
              experience in web development, UI/UX design, databases, and
              software projects.
            </p>

            <div>
              <h3 className="text-sm font-medium text-dark-200 mb-3">
                Interested in
              </h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg glass text-dark-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Skills Grid */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {skillGroups.map((group, i) => (
              <div
                key={group.label}
                className="glass rounded-2xl p-5 hover:border-accent-400/20 transition-all duration-300"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <h3 className="text-xs font-mono text-accent-400 tracking-wider uppercase mb-3">
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm text-dark-200 bg-white/[0.03] px-2.5 py-1 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
