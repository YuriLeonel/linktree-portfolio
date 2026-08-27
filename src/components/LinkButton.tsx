import { FiExternalLink } from 'react-icons/fi';
import type { Link } from '../links.config';

type LinkButtonProps = Link & {
  children?: React.ReactNode;
};

export default function LinkButton({
  text,
  url,
  icon: Icon,
  variant = 'primary',
  children
}: LinkButtonProps) {
  const variantClasses = {
    primary: 'text-white bg-neon-purple hover:bg-neon-purple/80 hover:shadow-[0_0_20px_var(--neon-purple)]',
    secondary: 'text-neon-green border border-neon-green hover:bg-neon-green/10 hover:shadow-[0_0_20px_var(--neon-green)]'
  };

  return (
    <a
      href={url}
      className={`group flex items-center justify-between p-5 w-full
                 ${variantClasses[variant]}
                 rounded-lg transition-all duration-300
                 hover:translate-y-[-2px]`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex items-center gap-5">
        <Icon className="w-7 h-7 transition-transform group-hover:scale-110" />
        <div className="text-left">
          <p className="font-mono font-semibold text-lg">{text}</p>
          {children && <p className="text-sm opacity-80 mt-1">{children}</p>}
        </div>
      </div>
      <FiExternalLink className="w-5 h-5 opacity-75" />
    </a>
  );
}
