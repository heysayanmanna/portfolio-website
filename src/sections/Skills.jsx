import { motion } from "framer-motion";
import {
  HiOutlineCodeBracketSquare,
  HiOutlineCircleStack,
  HiOutlineWrenchScrewdriver,
} from "react-icons/hi2";

import {
  TbServer2,
  TbCloudComputing,
} from "react-icons/tb";

import { FaPython } from "react-icons/fa";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <HiOutlineCodeBracketSquare size={34} />,
    skills: [
      { name: "HTML5", icon: "devicon-html5-plain colored", level: 95 },
      { name: "CSS3", icon: "devicon-css3-plain colored", level: 92 },
      { name: "JavaScript", icon: "devicon-javascript-plain colored", level: 90 },
      { name: "TypeScript", icon: "devicon-typescript-plain colored", level: 75 },
      { name: "React", icon: "devicon-react-original colored", level: 88 },
      { name: "Next.js", icon: "devicon-nextjs-plain", level: 70 },
      { name: "Redux Toolkit", icon: "devicon-redux-original colored", level: 72 },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored", level: 95 },
      { name: "Bootstrap", icon: "devicon-bootstrap-plain colored", level: 92 },
      { name: "Framer Motion", icon: "devicon-framermotion-original", level: 85 },
    ],
  },

  {
    title: "Backend Development",
    icon: <TbServer2 size={34} />,
    skills: [
      { name: "Node.js", icon: "devicon-nodejs-plain colored", level: 70 },
      { name: "Express.js", icon: "devicon-express-original", level: 68 },
      { name: "REST API", icon: "devicon-fastapi-plain colored", level: 75 },
      { name: "JWT Auth", icon: "devicon-json-plain", level: 65 },
      { name: "Socket.io", icon: "devicon-socketio-original", level: 55 },
      { name: "GraphQL", icon: "devicon-graphql-plain colored", level: 45 },
      { name: "Microservices", icon: "devicon-docker-plain colored", level: 40 },
    ],
  },

  {
    title: "Database",
    icon: <HiOutlineCircleStack size={34} />,
    skills: [
      { name: "MongoDB", icon: "devicon-mongodb-plain colored", level: 75 },
      { name: "MySQL", icon: "devicon-mysql-plain colored", level: 85 },
      { name: "SQL", icon: "devicon-azuresqldatabase-plain colored", level: 85 },
      { name: "Redis", icon: "devicon-redis-plain colored", level: 45 },
      { name: "Firebase", icon: "devicon-firebase-plain colored", level: 70 },
    ],
  },

  {
    title: "Python & Automation",
    icon: <FaPython size={34} />,
    skills: [
      { name: "Python", icon: "devicon-python-plain colored", level: 90 },
      { name: "FastAPI", icon: "devicon-fastapi-plain colored", level: 70 },
      { name: "Pandas", icon: "devicon-pandas-original colored", level: 75 },
      { name: "NumPy", icon: "devicon-numpy-original colored", level: 72 },
      { name: "Selenium", icon: "devicon-selenium-original colored", level: 80 },
    ],
  },

  {
    title: "Cloud & DevOps",
    icon: <TbCloudComputing size={34} />,
    skills: [
      { name: "Docker", icon: "devicon-docker-plain colored", level: 65 },
      { name: "Kubernetes", icon: "devicon-kubernetes-plain colored", level: 40 },
      { name: "AWS", icon: "devicon-amazonwebservices-original colored", level: 45 },
      { name: "Vercel", icon: "devicon-vercel-original", level: 90 },
    ],
  },

  {
    title: "Tools",
    icon: <HiOutlineWrenchScrewdriver size={34} />,
    skills: [
      { name: "Git", icon: "devicon-git-plain colored", level: 90 },
      { name: "GitHub", icon: "devicon-github-original", level: 95 },
      { name: "GitHub Actions", icon: "devicon-githubactions-plain colored", level: 60 },
      { name: "Linux", icon: "devicon-linux-plain", level: 60 },
      { name: "NPM", icon: "devicon-npm-original-wordmark colored", level: 90 },
      { name: "VS Code", icon: "devicon-vscode-plain colored", level: 98 },
      { name: "Postman", icon: "devicon-postman-plain colored", level: 88 },
      { name: "Figma", icon: "devicon-figma-plain colored", level: 82 },
    ],
  },
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
        
        {/* Skills Cards Coming Here */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 items-start">

  {skillCategories.map((category, index) => (

    <motion.div
      key={index}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
      }}
      viewport={{ once: true }}
      className="
      bg-white/5
      border
      border-white/5
      rounded-2xl
      p-5
      min-h-[580px]
      backdrop-blur-xl
      hover:border-cyan-400/40
      hover:bg-white/10
      transition-all
      duration-500
      hover:-translate-y-2
hover:shadow-2xl
hover:shadow-cyan-500/25
      "
    >

      {/* Category Header */}
{/* Category Header */}

<div className="flex items-center justify-between mb-4">

  <div className="flex items-center gap-4">

    <div
      className="
      w-14
      h-14
      rounded-2xl
      flex
      items-center
      justify-center
      bg-gradient-to-br
      from-cyan-500/15
      to-blue-500/15
      border
      border-cyan-400/20
      text-cyan-400
      shadow-lg
      shadow-cyan-500/10
      transition-all
      duration-500
      group-hover:scale-110
      "
    >
      {category.icon}
    </div>

    <div>

      <h3 className="text-xl font-bold text-white">
        {category.title}
      </h3>

      <p className="text-sm text-gray-400">
        {category.skills.length} Technologies
      </p>

    </div>

  </div>

  <span
    className="
    px-3
    py-1
    rounded-full
    text-xs
    font-semibold
    bg-cyan-500/10
    border
    border-cyan-500/20
    text-cyan-300
    "
  >
    Advanced
  </span>

</div>

      {/* Skills */}

      <div className="space-y-3">

        {category.skills.map((skill, i) => (

          <div key={i}>

           <div className="space-y-2">

  <div className="flex items-center justify-between">

    <div className="flex items-center gap-2">

      <i className={`${skill.icon} text-lg`}></i>

      <span className="text-sm font-medium text-gray-200">
        {skill.name}
      </span>

    </div>

    <span className="text-sm font-semibold text-cyan-400">
      {skill.level}%
    </span>

  </div>

  <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">

    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: `${skill.level}%` }}
      transition={{
        duration: 1,
        delay: i * 0.08,
      }}
      viewport={{ once: true }}
      className="h-full rounded-full bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-500"
    />

  </div>

</div>

            

          </div>

        ))}

      </div>

    </motion.div>

  ))}

</div>

        {/* Description */}
        <motion.p
          style={{
            textAlign: "center",
            maxWidth: "900px",
            margin: "4rem auto 5rem auto",
            lineHeight: "2",
            color: "#94a3b8",
            fontSize: "clamp(1rem,2vw,1.4rem)",
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