import { motion } from "framer-motion";

const journey = [
  {
    year: "2024",
    title: "Started BCA Journey",
    description:
      "Began Bachelor of Computer Applications and started exploring programming fundamentals.",
  },

  {
    year: "2025",
    title: "Started Python Development",
    description:
      "Learned Python programming, automation concepts and problem solving techniques.",
  },

  {
    year: "2025",
    title: "Built Real World Projects",
    description:
      "Created multiple projects including automation tools, games and portfolio applications.",
  },

  {
    year: "2026",
    title: "Portfolio Website Development",
    description:
      "Designed and developed a premium personal portfolio using React, Tailwind CSS and Framer Motion.",
  },

  {
    year: "2026",
    title: "Actively Looking For Internship",
    description:
      "Expanding skills, building projects and seeking internship opportunities in software development.",
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="pt-10 pb-20 px-6"
    >
      <div className="w-[92%] max-w-[1400px] mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >

          <p className="text-gray-400 text-sm tracking-[0.4em] uppercase">
            My Journey
          </p>

          <div className="h-8"></div>

          <h2 className="text-7xl md:text-8xl font-black gradient-text">
            Experience
          </h2>

          <div className="mt-8 mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>

        </motion.div>

        <div className="relative max-w-[1000px] mx-auto">

  <div className="absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 -translate-x-1/2"></div>

  {journey.map((item, index) => (

    <motion.div
      key={index}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className={`mb-20 flex ${
        index % 2 === 0
          ? "justify-start"
          : "justify-end"
      }`}
    >

      <div className="w-[45%] bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8">

        <span className="text-blue-400 font-bold text-xl">
          {item.year}
        </span>

        <h3 className="text-3xl font-bold mt-3 mb-4">
          {item.title}
        </h3>

        <p className="text-gray-300 leading-8">
          {item.description}
        </p>

      </div>

    </motion.div>

  ))}

</div>

      </div>
    </section>
  );
}

export default Experience;