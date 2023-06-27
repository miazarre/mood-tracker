import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex justify-center sm:justify-end items-center p-10">
      <a
        href="https://github.com/miazarre"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={60} className="mr-4 hover:text-pink-700" />
      </a>
      <a
        href="https://www.linkedin.com/in/mia-g-dev/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={60} className="hover:text-pink-700" />
      </a>
    </div>
  );
};

export default Footer;
