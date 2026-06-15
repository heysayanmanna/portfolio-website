import { motion } from "framer-motion";
import { Code2, BrainCircuit, Database, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Hangman Game",
    description:
      "A professional Python-based Hangman game with ASCII visuals, lives system, score tracking and replay functionality.",
    link: "https://github.com/heysayanmanna",
    icon: <Code2 size={80} />,
  },

  {
    title: "Stock Portfolio Tracker",
    description:
      "A Python automation tool that tracks stock investments, analyzes portfolio performance and calculates returns efficiently.",
    link: "https://github.com/heysayanmanna",
    icon: <Database size={80} />,
  },

  {
    title: "Email Extractor Tool",
    description:
      "An automation utility built with Python and Regex that extracts, filters and validates unique email addresses.",
    link: "https://github.com/heysayanmanna",
    icon: <BrainCircuit size={80} />,
  },
];

function Projects() {
  return (
    <section
  id="projects"
  className="pt-10 pb-0 px-8"
>
    
      <div
  style={{
    width: "95%",
    maxWidth: "1400px",
    margin: "80px auto 0 auto",
  }}
>
        {/* Section Title */}
       <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="text-center mb-40"
>

  <p className="text-gray-400 text-sm tracking-[0.4em] uppercase">
  My Recent Work
</p>

<div className="h-10"></div>

<h2 className="projects-title text-7xl md:text-8xl font-black gradient-text leading-none">
  Featured Projects
</h2>

  <div className="mt-8 mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>

</motion.div>

        {/* Projects Grid */}
       <div className="grid lg:grid-cols-3 gap-12">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              className="
              group
              project-card
              bg-white/5
              border
              border-white/10
              rounded-3xl
              overflow-hidden
              backdrop-blur-xl
              hover:bg-white/10
              hover:border-blue-500/30
              hover:-translate-y-5
hover:scale-[1.03]
              hover:shadow-2xl
              hover:shadow-blue-500/20
              transition-all
              duration-500
              flex
              flex-col
              "
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
            >

              <div className="project-top-line"></div>

              {/* Preview Area */}
              <div
                className="
                h-56
                flex
                items-center
                justify-center
                bg-gradient-to-br
                from-blue-500/20
                via-blue-500/10
                to-purple-500/20
                border-b
                border-white/10
                "
              >
                <motion.div
                  className="opacity-90"
                  animate={{
                    y: [0, -12, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="project-icon group-hover:scale-110 transition duration-500">
                    {project.icon}
                  </div>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1 min-h-[220px]">

                <h3 className="text-3xl font-bold mb-5 leading-tight">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-lg leading-8 mb-8">
                  {project.description}
                </p>

                <div className="mt-auto">

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    inline-flex
                    items-center
                    gap-2
                    px-7
                    py-4
                    text-lg
                    rounded-xl
                    bg-gradient-to-r
                    from-blue-500
                    to-purple-500
                    text-white
                    font-semibold
                    hover:scale-105
                    transition-all
                    duration-300
                    "
                  >
                    View Project
                    <ArrowUpRight size={18} />
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

        {/* Bottom Text */}
        <motion.p
          className="projects-description text-center text-gray-300 text-xl mt-24 mb-12 max-w-[700px] mx-auto leading-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          These projects represent my journey in software development,
          automation and modern web technologies. I continuously build
          new solutions to improve my skills and solve real-world problems.
        </motion.p>

      </div>
    </section>
  );
}

export default Projects;