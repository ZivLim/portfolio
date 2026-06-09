import { ArrowDown, FileText } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './Icons';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-400/8 rounded-full blur-[120px] animate-subtle-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent-500/6 rounded-full blur-[100px] animate-subtle-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Grid background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Status badge */}
        <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-dark-300 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Open to internship opportunities
        </div>

        {/* Name */}
        <h1 className="animate-fade-up animate-delay-100 text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-dark-50 mb-4">
          Ziv Lim
        </h1>

        {/* Roles */}
        <div className="animate-fade-up animate-delay-200 flex flex-wrap justify-center gap-x-3 gap-y-1 text-lg sm:text-xl text-dark-300 font-light mb-6">
          <span>Computer Science Student</span>
          <span className="text-accent-400">·</span>
          <span>Web Designer</span>
          <span className="text-accent-400">·</span>
          <span>Aspiring Software Developer</span>
        </div>

        {/* Tagline */}
        <p className="animate-fade-up animate-delay-300 max-w-xl mx-auto text-dark-400 text-base sm:text-lg leading-relaxed mb-10">
          Building modern websites, software solutions, and digital experiences
          that solve real problems.
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-up animate-delay-400 flex flex-wrap justify-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-400 text-white text-sm font-medium hover:bg-accent-500 transition-all duration-200 hover:shadow-lg hover:shadow-accent-400/20"
          >
            View Projects
            <ArrowDown size={16} />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass text-sm font-medium text-dark-200 hover:text-dark-50 glass-hover transition-all duration-200"
          >
            <FileText size={16} />
            Resume
          </a>
          <a
            href="https://www.linkedin.com/in/ziv-lim"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-3 rounded-xl glass text-dark-300 hover:text-dark-50 glass-hover transition-all duration-200"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={18} />
          </a>
          <a
            href="https://github.com/zivlim"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-3 rounded-xl glass text-dark-300 hover:text-dark-50 glass-hover transition-all duration-200"
            aria-label="GitHub"
          >
            <GitHubIcon size={18} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-up animate-delay-500">
        <div className="w-5 h-8 rounded-full border border-dark-600 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-dark-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
