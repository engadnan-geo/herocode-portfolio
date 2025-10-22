import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full  flex flex-col  justify-center text-white bg-gray-900 px-6 py-10 md:py-16">
      {/* NAME & INTRO */}
      <div className="flex flex-col text-center md:text-left md:text-normal justify-center itmes-center md:justify-start  space-y-2">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
          Adnan Mohamed
        </h1>
        <h5 className="text-lg text-gray-400">Fullstack Engineer</h5>
        <p className="text-gray-300 max-w-md text-base md:text-lg leading-relaxed">
          I build accessible, pixel-perfect <br /> digital experiences for the web.
        </p>
      </div>

     {/* NAV LINKS */}
<nav className="hidden md:flex md:flex-col gap-6 mt-10 
  justify-center items-center md:items-start md:justify-start text-center md:text-left">
  <Link
    href="#about"
    className="text-gray-300 hover:text-white transition-colors duration-200"
  >
    About
  </Link>
  <Link
    href="#experience"
    className="text-gray-300 hover:text-white transition-colors duration-200"
  >
    Experience
  </Link>
  <Link
    href="#contact"
    className="text-gray-300 hover:text-white transition-colors duration-200"
  >
    Contact
  </Link>
</nav>

{/* SOCIAL LINKS */}
<div className="flex space-x-6 mt-10 justify-center items-center md:justify-start md:items-start">
  <a
    href="#"
    className="text-gray-400 hover:text-white transition-colors duration-200"
    target="_blank"
    rel="noopener noreferrer"
  >
    GitHub
  </a>
  <a
    href="#"
    className="text-gray-400 hover:text-white transition-colors duration-200"
    target="_blank"
    rel="noopener noreferrer"
  >
    LinkedIn
  </a>
  <a
    href="#"
    className="text-gray-400 hover:text-white transition-colors duration-200"
    target="_blank"
    rel="noopener noreferrer"
  >
    Twitter
  </a>
</div>

    </header>
  );
};

export default Header;
