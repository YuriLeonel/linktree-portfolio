import { IconType } from 'react-icons';
import { FaGithub, FaLinkedin, FaBrain, FaEnvelope } from 'react-icons/fa';

export type Link = {
  text: string;
  url: string;
  icon: IconType;
  variant?: 'primary' | 'secondary';
};

const links: Link[] = [
  {
    text: "GitHub",
    url: 'https://github.com/yurileonel',
    icon: FaGithub,
    variant: "primary"
  },
  {
    text: "LinkedIn",
    url: 'https://www.linkedin.com/in/yurileonel/',
    icon: FaLinkedin,
    variant: "secondary"
  },
  {
    text: "Email",
    url: 'mailto:yurileonel.001@gmail.com',
    icon: FaEnvelope,
    variant: "secondary"
  },
  {
    text: "Neural Architect",
    url: 'https://neural-architect.vercel.app/',
    icon: FaBrain,
  },
];

export default links;