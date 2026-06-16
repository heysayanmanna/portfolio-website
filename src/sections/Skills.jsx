import { motion } from "framer-motion";

const skills = [
  { name: "HTML5", icon: "devicon-html5-plain colored" },
  { name: "CSS3", icon: "devicon-css3-plain colored" },
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
  { name: "TypeScript", icon: "devicon-typescript-plain colored" },

  { name: "React", icon: "devicon-react-original colored" },
  { name: "Next.js", icon: "devicon-nextjs-plain" },
  { name: "Redux Toolkit", icon: "devicon-redux-original colored" },

  { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
  { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
  { name: "Framer Motion", icon: "devicon-framermotion-original" },

  { name: "Node.js", icon: "devicon-nodejs-plain colored" },
  { name: "Express.js", icon: "devicon-express-original" },
  { name: "REST API", icon: "devicon-fastapi-plain colored" },
  { name: "JWT Auth", icon: "devicon-json-plain" },
  { name: "Socket.io", icon: "devicon-socketio-original" },
  { name: "GraphQL", icon: "devicon-graphql-plain colored" },
  { name: "Microservices", icon: "devicon-docker-plain colored" },

  { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
  { name: "MySQL", icon: "devicon-mysql-plain colored" },
  { name: "SQL", icon: "devicon-azuresqldatabase-plain colored" },
  { name: "Redis", icon: "devicon-redis-plain colored" },
  { name: "Firebase", icon: "devicon-firebase-plain colored" },

  { name: "Python", icon: "devicon-python-plain colored" },
  { name: "FastAPI", icon: "devicon-fastapi-plain colored" },
  { name: "Pandas", icon: "devicon-pandas-original colored" },
  { name: "NumPy", icon: "devicon-numpy-original colored" },
  { name: "Selenium", icon: "devicon-selenium-original colored" },

  { name: "Docker", icon: "devicon-docker-plain colored" },
  { name: "Kubernetes", icon: "devicon-kubernetes-plain colored" },
  { name: "AWS", icon: "devicon-amazonwebservices-original colored" },
  { name: "Vercel", icon: "devicon-vercel-original" },

  { name: "Git", icon: "devicon-git-plain colored" },
  { name: "GitHub", icon: "devicon-github-original" },
  { name: "GitHub Actions", icon: "devicon-githubactions-plain colored" },

  { name: "Linux", icon: "devicon-linux-plain" },
  { name: "NPM", icon: "devicon-npm-original-wordmark colored" },

  { name: "VS Code", icon: "devicon-vscode-plain colored" },
  { name: "Postman", icon: "devicon-postman-plain colored" },
  { name: "Figma", icon: "devicon-figma-plain colored" },
];

function Skills() {
  return (
    <section id="skills" className="pt-10 pb-10 px-8">
      <div
        style={{
          width: "92%",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="text-center mb-36"
        >
          <p className="text-gray-400 mb-4 text-lg tracking-[0.25em] uppercase">
            Technologies I Use
          </p>

          <motion.h2
  className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight gradient-text"
  animate={{
    textShadow: [
      "0 0 0px rgba(59,130,246,0)",
      "0 0 25px rgba(59,130,246,0.3)",
      "0 0 0px rgba(59,130,246,0)",
    ],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
  }}
>
  My Skills
</motion.h2>

          <div className="mt-6 mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
        </motion.div>

        {/* Skills */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "2rem",
          }}
        >
          {skills.map((skill, index) => (
            <motion.div
             whileHover={{
    y: -8,
    scale: 1.05,
  }}
              key={index}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                padding: "18px 34px",
                borderRadius: "50px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                cursor: "pointer",
              }}
              className="skill-pill backdrop-blur-md hover:bg-white/10 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/15 hover:-translate-y-1 transition-all duration-500"
              initial={{
                opacity: 0,
                y: 40,
                scale: 0.95,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.05,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <motion.i
  className={`${skill.icon} text-4xl`}
  whileHover={{
    rotate: 360,
    scale: 1.2,
  }}
  transition={{
    duration: 0.6,
  }}
></motion.i>

              <span
                style={{
                  fontSize: "20px",
                  fontWeight: 900,
                  color: "#e2e8f0",
                  letterSpacing: "0.03em",
                }}
              >
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Description */}
        <motion.p
          style={{
            textAlign: "center",
            maxWidth: "9000px",
            margin: "4rem auto 5rem auto",
            lineHeight: "2",
            color: "#94a3b8",
            fontSize: "30px",
          }}
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
        >
          I continuously improve my skills by building real-world projects,
          exploring modern technologies and staying updated with industry
          trends. My focus is on creating scalable, efficient and
          user-friendly digital solutions.
        </motion.p>

        {/* Bottom Tagline */}
        <motion.div
  className="mt-12 mb-6 text-center"
  initial={{
    opacity: 0,
    y: 20,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    duration: 0.8,
  }}
  viewport={{ once: true }}
>
  <motion.p
  className="text-gray-500 text-lg uppercase tracking-[0.50em]"
  animate={{
    opacity: [0.4, 1, 0.9],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
  }}
>
    Always Learning • Always Building • Always Improving
  </motion.p>
</motion.div>
      </div>
    </section>
  );
}

export default Skills;