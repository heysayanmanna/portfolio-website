import { motion } from "framer-motion";
import { Mail, Briefcase, Rocket, Users } from "lucide-react";

function Contact() {
  return (
    <section
  id="contact"
  className="contact-section pt-12 pb-32 px-6"
>
      <div className="w-[90%] max-w-[1200px] mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-400 text-sm tracking-[0.45em] uppercase mb-6">
            Let's Connect
          </p>

          <h2 className="
contact-title
text-4xl
sm:text-5xl
md:text-6xl
lg:text-7xl
xl:text-8xl
font-black
gradient-text
mb-10
">
            Contact Me
          </h2>


<div className="contact-line"></div>

<p className="
max-w-[850px]
mx-auto
text-gray-300
text-base
sm:text-lg
lg:text-2xl
leading-8
lg:leading-10
px-4
">
            I'm always open to discussing new opportunities,
            freelance projects, collaborations and exciting ideas.
            Let's build something meaningful together.
          </p>
        </motion.div>

        {/* Availability */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mt-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="contact-badge flex items-center gap-3 px-7 py-5 rounded-2xl bg-white/5 border border-white/10 text-sm sm:text-base lg:text-xl">
            <Briefcase size={18} />
            <span>Open to Internships</span>
          </div>

          <div className="contact-badge flex items-center gap-3 px-7 py-5 rounded-2xl bg-white/5 border border-white/10 text-sm sm:text-base lg:text-xl">
            <Rocket size={18} />
            <span>Freelance Projects</span>
          </div>

          <div className="contact-badge flex items-center gap-3 px-7 py-5 rounded-2xl bg-white/5 border border-white/10 text-sm sm:text-base lg:text-xl">
            <Users size={18} />
            <span>Collaborations</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-6 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <a
            href="mailto:sayanmanna.in@gmail.com"
            className="
            inline-flex
            items-center
            justify-center
            gap-3
           px-6 sm:px-8 lg:px-10
py-4 lg:py-5
text-base sm:text-lg lg:text-xl
            rounded-2xl
            bg-gradient-to-r
            from-blue-500
            to-purple-500
            font-semibold
            hover:scale-105
            transition-all
            duration-300
            "
          >
            <Mail size={20} />
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/iamsayanmanna/"
            target="_blank"
            rel="noopener noreferrer"
            className="
            inline-flex
            items-center
            justify-center
            gap-3
            px-8
            py-4
            rounded-2xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            hover:bg-white/10
            hover:scale-105
            transition-all
            duration-300
            "
          >
            💼
            Connect on LinkedIn
          </a>

        </motion.div>

      </div>
    </section>
  );
}

export default Contact;