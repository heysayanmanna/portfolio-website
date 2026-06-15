import { Heart } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-white/10 py-16 px-6 footer-section relative">

      <div className="w-[90%] max-w-[1200px] mx-auto">

        {/* Main Footer */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-20 items-start mt-12">

          {/* Left Side */}
          <div className="text-center md:text-left">

            <h2 className="text-6xl md:text-7xl font-black gradient-text footer-logo">
              Sayan.
            </h2>

            <p className="text-gray-500 mt-6 leading-8">
  Kolkata, West Bengal, India
</p>

<p className="text-gray-500">
  Bhawanipur Global Campus (BGC)
</p>

<p className="text-gray-500">
  BCA • 4th Semester
</p>

<div className="flex flex-wrap gap-3 mt-8">

  <span className="glass px-4 py-2 rounded-full text-base">
    Open To Internships
  </span>

  <span className="glass px-4 py-2 rounded-full text-base">
    Freelance Ready
  </span>

  <span className="glass px-4 py-2 rounded-full text-base">
    Available For Hire
  </span>

</div>

            <p className="text-gray-300 mt-5 text-xl leading-9 max-w-[500px]">
  Full Stack Developer focused on building modern,
  scalable and user-friendly digital experiences.
</p>

<p className="mt-5 text-blue-400 text-lg font-medium">
  React • JavaScript • Python • UI/UX
</p>

            <p className="text-blue-400 text-lg mt-4">
  Full Stack Developer • Python Developer
</p>

          </div>

          {/* Right Side */}
          <div className="flex flex-col gap-4">

<h4 className="text-white text-3xl font-bold mb-6">
  Connect
</h4>

<p className="text-gray-500 text-base mb-6">
  Let's build something amazing together.
</p>

            <a
  href="https://github.com/heysayanmanna"
  target="_blank"
  rel="noopener noreferrer"
  className="footer-link text-gray-300 text-2xl hover:text-white transition-all duration-300"
>
  🐙 GitHub
</a>

            <a
              href="https://www.linkedin.com/in/iamsayanmanna/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link text-gray-300 text-xl hover:text-white transition-all duration-300"
            >
              💼 LinkedIn
            </a>
          <a
  href="https://drive.google.com/file/d/17YRki0CXNrrmnG14CkjJxYXHfAJfXS_K/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="footer-link text-gray-300 text-xl hover:text-white transition-all duration-300"
>
  📄 Resume
</a>
          </div>



          <div className="flex flex-col gap-3">

  <h4 className="text-white text-3xl font-bold mb-6">
    Tech Stack
  </h4>

  <span className="footer-link">React.js</span>

  <span className="footer-link">JavaScript</span>

  <span className="footer-link">Python</span>

  <span className="footer-link">Tailwind CSS</span>

  <span className="footer-link">Git & GitHub</span>

  <span className="footer-link">UI / UX Design</span>

</div>

          <div className="flex flex-col gap-3">
  <h4 className="text-white text-3xl font-bold mb-6">
    Quick Links
  </h4>

  <p className="text-gray-500 text-base leading-8 mb-6">
  Available for internships, freelance projects
  and exciting collaborations.
</p>

  

  <a href="#about" className="footer-link">
    About
  </a>

  <a href="#skills" className="footer-link">
    Skills
  </a>

  <a href="#projects" className="footer-link">
    Projects
  </a>

  <a href="#contact" className="footer-link">
    Contact
  </a>
</div>

        </div>

        {/* Bottom Line */}
        <div className="mt-14 pt-8 border-t border-white/10">

  <div className="flex flex-col md:flex-row justify-between items-center gap-5">

    <p className="text-gray-400 text-lg">
      © {new Date().getFullYear()} Sayan Manna. All Rights Reserved.
    </p>

    <p className="flex items-center gap-2 text-gray-400 text-lg">

      Built with React & Tailwind CSS

      <Heart
        size={18}
        className="footer-heart text-pink-500 fill-pink-500"
      />

    </p>

  </div>

</div>

      </div>

    </footer>
  );
}

export default Footer;