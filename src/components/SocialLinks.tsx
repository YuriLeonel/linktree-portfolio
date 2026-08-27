import { FaGithub, FaLinkedin, FaBrain, FaEnvelope } from 'react-icons/fa';

type SocialLink = {
  icon: React.FC<{ className?: string }>;
  url: string;
  ariaLabel: string;
};

const socialLinks: SocialLink[] = [
  {
    icon: FaGithub,
    url: 'https://github.com/yurileonel',
    ariaLabel: 'GitHub profile',
  },
  {
    icon: FaLinkedin,
    url: 'https://www.linkedin.com/in/yurileonel/',
    ariaLabel: 'LinkedIn profile',
  },
  {
    icon: FaEnvelope,
    url: 'mailto:yurileonel.001@gmail.com',
    ariaLabel: 'Send email',
  },
  {
    icon: FaBrain,
    url: 'https://neural-architect.vercel.app/',
    ariaLabel: 'Neural Architect project',
  },
];

export default function SocialLinks() {
  return (
    <div className="flex justify-center space-x-6">
      {socialLinks.map(({ icon: Icon, url, ariaLabel }, index) => (
        <a
          key={index}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-neon-green transition-all duration-300 p-2 rounded-full
                     hover:shadow-[0_0_10px_var(--neon-green)]"
          aria-label={ariaLabel}
        >
          <Icon className="w-7 h-7" />
        </a>
      ))}
    </div>
  );
}
