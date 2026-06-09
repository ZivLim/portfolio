import { Mail, ArrowUpRight } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './Icons';
import useInView from '../hooks/useInView';

const links = [
  {
    label: 'Email',
    value: 'zivlzc13@email.com',
    href: 'mailto:zivlzc13@email.com',
    icon: Mail,
    isSvg: false,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/ziv-lim',
    href: 'https://www.linkedin.com/in/ziv-lim',
    icon: LinkedInIcon,
    isSvg: true,
  },
  {
    label: 'GitHub',
    value: 'github.com/zivlim',
    href: 'https://github.com/zivlim',
    icon: GitHubIcon,
    isSvg: true,
  },
];

export default function Contact() {
  const [ref, isVisible] = useInView();

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Section header */}
        <div className="mb-16">
          <p className="text-xs font-mono text-accent-400 tracking-widest uppercase mb-3">
            06 — Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-50 tracking-tight">
            Get in Touch
          </h2>
        </div>

        <div className="max-w-2xl">
          {/* Tagline */}
          <p className="text-xl sm:text-2xl font-light text-dark-200 leading-relaxed mb-10">
            Let's build something meaningful together.
          </p>

          {/* Contact links */}
          <div className="space-y-3">
            {links.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label !== 'Email' ? '_blank' : undefined}
                  rel={
                    link.label !== 'Email' ? 'noopener noreferrer' : undefined
                  }
                  className="group glass rounded-xl p-4 flex items-center gap-4 hover:border-accent-400/20 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent-400/10 flex items-center justify-center shrink-0">
                    {link.isSvg ? (
                      <IconComponent size={18} className="text-accent-400" />
                    ) : (
                      <IconComponent size={18} className="text-accent-400" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-dark-500 mb-0.5">{link.label}</p>
                    <p className="text-sm text-dark-200 group-hover:text-dark-50 transition-colors truncate">
                      {link.value}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-dark-600 group-hover:text-accent-400 transition-colors shrink-0"
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
