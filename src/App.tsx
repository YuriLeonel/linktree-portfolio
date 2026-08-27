import SocialLinks from './components/SocialLinks';
import links from './links.config';
import LinkButton from './components/LinkButton';
import Glitch from './components/Glitch';

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: `${((i * 37 + 13) * 7) % 100}%`,
  top: `${((i * 53 + 29) * 11) % 100}%`,
  delay: `${(i * 0.7) % 3}s`,
}));

export default function App() {
  const name = 'Yuri Leonel';
  const brand = 'YURI';
  const title = 'Software Engineer';

  return (
    <div className="min-h-screen bg-cyber-dark text-gray-300 cyber-grid relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute w-1 h-1 bg-neon-green rounded-full opacity-30 animate-float"
            style={{
              left: p.left,
              top: p.top,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6 py-16 flex flex-col min-h-screen">
        <header className="mb-10 text-center">
          <div className="relative inline-block mb-6">
            <img
              src="/profile.webp"
              alt="Profile picture"
              className="w-32 h-32 rounded-full mx-auto object-cover border-2 border-neon-cyan
                         shadow-[0_0_20px_var(--neon-cyan)]"
            />
            <div className="absolute inset-0 rounded-full border border-neon-purple opacity-40" />
          </div>

          <h1 className="text-5xl font-mono font-bold mb-3 gradient-text">
            <Glitch text={brand} />
          </h1>

          <p className="text-lg text-gray-400 font-mono mb-1">{name}</p>
          <p className="text-gray-500">
            <span className="neon-text-green">&gt;</span> {title}
          </p>
        </header>

        <main className="space-y-4 mb-10 flex-1">
          {links.map((link, index) => (
            <LinkButton key={index} {...link} variant={index % 2 === 0 ? 'primary' : 'secondary'} />
          ))}
        </main>

        <footer className="pt-8 border-t border-white/10">
          <SocialLinks />
          <p className="text-center mt-6 text-gray-500 font-mono text-xs">
            © {new Date().getFullYear()} {name}. Crafted with caffeine and code.
          </p>
        </footer>
      </div>
    </div>
  );
}
