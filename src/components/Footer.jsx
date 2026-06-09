export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-dark-500">
          © {new Date().getFullYear()} Ziv Lim. Built with React.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/ziv-lim"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-dark-500 hover:text-dark-300 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/zivlim"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-dark-500 hover:text-dark-300 transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:zivlzc13@email.com"
            className="text-xs text-dark-500 hover:text-dark-300 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
