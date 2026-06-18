import { useEffect, useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
  const sections = ["home", "about", "skills", "projects", "contact"];

  const handleActiveSection = () => {
    const scrollPosition = window.scrollY + 150;

    sections.forEach((section) => {
      const element = document.getElementById(section);

      if (
        element &&
        scrollPosition >= element.offsetTop &&
        scrollPosition < element.offsetTop + element.offsetHeight
      ) {
        setActiveSection(section);
      }
    });
  };

  window.addEventListener("scroll", handleActiveSection);

  return () => {
    window.removeEventListener("scroll", handleActiveSection);
  };
}, []);

  const navItems = [
  { name: "Home", link: "#home", id: "home" },
  { name: "About", link: "#about", id: "about" },
  { name: "Skills", link: "#skills", id: "skills" },
  { name: "Projects", link: "#projects", id: "projects" },
  { name: "Contact", link: "#contact", id: "contact" },
];

  return (
    <nav className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4">

      <div
        className={`w-full max-w-[1350px] flex items-center justify-between px-10 py-3 rounded-[24px] border transition-all duration-300 ${
          scrolled
            ? "bg-white/[0.04] border-white/5 backdrop-blur-3xl shadow-[0_8px_32px_rgba(59,130,246,0.15)] shadow-[0_0_40px_rgba(59,130,246,0.12)]"
: "bg-white/[0.02] border-white/5 backdrop-blur-2xl shadow-[0_0_30px_rgba(59,130,246,0.08)]"
        }`}
        style={{
    background:
      "linear-gradient(90deg, rgba(59,130,246,0.05), rgba(139,92,246,0.05))",
  }}
      >

        {/* Logo */}
        <a
          href="#home"
          className="
          text-3xl xl:text-4xl
          font-black
          tracking-tight
          transition-all
          duration-300
          hover:scale-105
          hover:drop-shadow-[0_0_15px_rgba(96,165,250,0.8)]
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
  className={`
    inline-block
    text-[18px]
    transition-all
    duration-300
    hover:scale-105
    ${
      activeSection === item.id
        ? "text-white"
        : "text-gray-300 hover:text-white"
    }
  `}
>
  {item.name}
</a>

              <span
  className={`
    absolute
    left-0
    -bottom-2
    h-[2px]
    bg-gradient-to-r
    from-blue-500
    to-purple-500
    transition-all
    duration-300
    ${
      activeSection === item.id
        ? "w-full"
        : "w-0 group-hover:w-full"
    }
  `}
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
          hover:shadow-blue-500/30
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
          <span className="text-4xl font-light">☰</span>
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
          max-w-[1350px]
          bg-black/95
          border
          border-white/15
          rounded-[24px]
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