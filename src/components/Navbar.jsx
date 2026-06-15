import { useEffect, useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4">

      <div
        className={`w-full max-w-[1400px] flex items-center justify-between px-10 py-2 rounded-[20px] border transition-all duration-300 ${
          scrolled
            ? "bg-black/80 border-white/10 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.35)]"
            : "bg-black/60 border-white/10 backdrop-blur-xl"
        }`}
      >

        {/* Logo */}
        <a
          href="#home"
          className="
          text-4xl
          font-black
          tracking-tight
          transition-all
          duration-300
          hover:scale-105
          "
        >
          <span className="gradient-text">
            Sayan.
          </span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-10 text-[18px] font-medium">

          {navItems.map((item, index) => (

            <li
              key={index}
              className="relative group"
            >

              <a
                href={item.link}
  className="
  text-gray-300
  text-lg
  hover:text-white
  transition-all
  duration-300
  hover:scale-105
  inline-block
  text-[18px]
                "
              >
                {item.name}
              </a>

              <span
                className="
                absolute
                left-0
                -bottom-2
                h-[2px]
                w-0
                bg-gradient-to-r
                from-blue-500
                to-purple-500
                transition-all
                duration-300
                group-hover:w-full
                 text-size [150px]
                "
              ></span>

            </li>

          ))}

        </ul>

        {/* Hire Me Button */}
        <a
          href="#contact"
          className="
          hidden
          lg:flex
          items-center
          justify-center
          px-8
          py-3
          rounded-xl
          bg-gradient-to-r
          from-blue-500
          to-purple-500
          text-white
          text-[18px]
          font-semibold
          shadow-lg
          hover:scale-110
          hover:shadow-xl
          hover:shadow-purple-500/30
          transition-all
          duration-300
          "
        >
          Hire Me
        </a>

        {/* Mobile Menu Button */}
        <button
          className="
          lg:hidden
          text-3xl
          text-white
          "
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="
          absolute
          top-full
          mt-3
          w-full
          max-w-[1300px]
          bg-black/95
          border
          border-white/10
          rounded-[20px]
          p-6
          backdrop-blur-2xl
          lg:hidden
          "
        >

          <ul className="flex flex-col gap-5 text-lg">

            {navItems.map((item, index) => (

              <li key={index}>

                <a
                  href={item.link}
                  onClick={() => setMenuOpen(false)}
                  className="
                  text-gray-300
                  hover:text-white
                  transition-all
                  duration-300
                  "
                >
                  {item.name}
                </a>

              </li>

            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="
              mt-2
              px-5
              py-3
              rounded-xl
              bg-gradient-to-r
              from-blue-500
              to-purple-500
              text-white
              font-semibold
              text-center
              "
            >
              Hire Me
            </a>

          </ul>

        </div>
      )}

    </nav>
  );
}

export default Navbar;