import { motion } from "framer-motion";

const certificates = [
  {
    title: "Microsoft Learn AI Skills Challenge",
    issuer: "Microsoft",
    year: "2026",
  },
  {
    title: "Python Programming",
    issuer: "HackerRank",
    year: "2025",
  },
  {
    title: "Web Development Fundamentals",
    issuer: "freeCodeCamp",
    year: "2025",
  },
  {
    title: "Cloud Computing Basics",
    issuer: "Google Cloud",
    year: "2026",
  },
];

function Certificates() {
  return (
    <section
      id="certificates"
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
            My Achievements
          </p>

          <div className="h-8"></div>

          <h2 className="text-7xl md:text-8xl font-black gradient-text">
            Certifications
          </h2>

          <div className="mt-8 mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>

        </motion.div>


        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

  {certificates.map((cert, index) => (

    <motion.div
      key={index}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
      }}
      viewport={{ once: true }}
      className="
      bg-white/5
      border
      border-white/10
      rounded-3xl
      p-8
      backdrop-blur-xl
      hover:bg-white/10
      hover:border-blue-500/30
      hover:-translate-y-3
      hover:shadow-xl
      hover:shadow-blue-500/15
      transition-all
      duration-500
      "
    >

      <div className="text-5xl mb-5">
        🏆
      </div>

      <h3 className="text-2xl font-bold mb-4">
        {cert.title}
      </h3>

      <p className="text-blue-400 mb-2">
        {cert.issuer}
      </p>

      <p className="text-gray-400">
        {cert.year}
      </p>

    </motion.div>

  ))}

</div>

      </div>
    </section>
  );
}

export default Certificates;