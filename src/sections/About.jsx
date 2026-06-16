import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="py-32 pt-2 pb-12 px-6"
      style={{ marginBottom: "2rem" }}
    >

      {/* Animated Background Particles */}
<div className="absolute inset-0 overflow-hidden pointer-events-none">
  {/* Floating Background Orbs */}
<div className="about-orb about-orb-1"></div>
<div className="about-orb about-orb-2"></div>
  <div className="particle particle-1"></div>
  <div className="particle particle-2"></div>
  <div className="particle particle-3"></div>
  <div className="particle particle-4"></div>
  <div className="particle particle-5"></div>
</div>

      <div
        style={{
          width: "90%",
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
          className="text-center"
        >
          <p className="text-gray-400 mb-4 text-sm tracking-widest uppercase">
            Get To Know More
          </p>

          <motion.h2
  className="text-6xl md:text-7xl font-black tracking-tight gradient-text"
  animate={{
    textShadow: [
      "0 0 0px rgba(59,130,246,0)",
      "0 0 25px rgba(59,130,246,0.35)",
      "0 0 0px rgba(59,130,246,0)",
    ],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
  }}
>
  About Me
</motion.h2>

          <div className="mt-6 mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
        </motion.div>

        {/* Extra Gap */}
        <div style={{ height: "5rem" }}></div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.15fr 1.15fr",
            gap: "3rem",
            justifyContent: "space-between",
          }}
        >
          {/* Who Am I */}
          <motion.div
            style={{
              padding: "3.5rem 3rem",
                minHeight: "750px",
            }}
            className="relative bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl hover:bg-white/10 hover:border-blue-400/50 hover:shadow-[0_0_50px_rgba(59,130,246,0.35)] hover:-translate-y-2 transition-all duration-500"
            initial={{ opacity: 0, x: -60, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl opacity-0 hover:opacity-100 transition duration-500 -z-10"></div>

            <div className="flex items-center gap-3 mb-8">
              <motion.div
  className="w-1 h-8 rounded-full bg-gradient-to-b from-blue-500 to-purple-500"
  animate={{
    scaleY: [1, 1.3, 1],
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
  }}
></motion.div>

              <h3 className="text-4xl font-bold">
                Who Am I?
              </h3>
            </div>

            <p
              style={{
                color: "#e2e8f0",
                lineHeight: "2",
                marginBottom: "1.5rem",
              }}
              className="text-2xl"
            >
              I'm Sayan Manna, a passionate developer focused on building
              modern, scalable and user-friendly digital experiences.
              I enjoy creating real-world projects involving Python,
              automation, frontend development and modern web technologies.
            </p>

            <p
              style={{
                color: "#e2e8f0",
                lineHeight: "2",
                marginBottom: "1.5rem",
              }}
              className="text-2xl"
            >
              My goal is to continuously improve my technical skills,
              build impactful software products and create digital
              solutions that solve real-world problems.
            </p>

            <p
              style={{
                color: "#e2e8f0",
                lineHeight: "2",
              }}
              className="text-2xl"
            >
              I enjoy learning new technologies, building practical software
              solutions and improving my problem-solving skills through
              real-world projects and continuous learning.
            </p>

            {/* Info Tags */}
            <div
              style={{
                marginTop: "2rem",
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
              }}
            >
              <a
  href="https://www.google.co.in/maps/place/124%2F7,+Kumor+Para,+Purba+Barisha,+Kolkata,+West+Bengal+700008/@22.4783287,88.3197897,19z/data=!3m1!4b1!4m6!3m5!1s0x3a027a79be578cdb:0x7df43ce9307e40db!8m2!3d22.4783287!4d88.3204334!16s%2Fg%2F11x6rk8xl7?entry=ttu&g_ep=EgoyMDI2MDYxMC4wIKXMDSoASAFQAw%3D%3D"
  target="_blank"
  rel="noopener noreferrer"
  className="about-tag location-tag flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-base text-gray-300"
>
  📍 West Bengal, India
</a>

              <a
  href="https://bhawanipurglobal.edu.in/"
  target="_blank"
  rel="noopener noreferrer"
  className="about-tag college-tag flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-base text-gray-300"
>
  🎓 BCA Student
</a>

              <a
  href="https://www.linkedin.com/in/iamsayanmanna/"
  target="_blank"
  rel="noopener noreferrer"
  className="about-tag linkedin-tag flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-base text-gray-300"
>
  💼 Open to Work
</a>
            </div>
          </motion.div>

          {/* My Goal */}
          <motion.div
            style={{
              padding: "3.5rem 3rem",
                minHeight: "750px",
            }}
            className="relative bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl hover:bg-white/10 hover:border-purple-400/50 hover:shadow-[0_0_50px_rgba(168,85,247,0.35)] hover:-translate-y-2 transition-all duration-500"
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-3xl blur-xl opacity-0 hover:opacity-100 transition duration-500 -z-10"></div>

            <div className="flex items-center gap-3 mb-8">
              <motion.div
  className="w-1 h-8 rounded-full bg-gradient-to-b from-blue-500 to-purple-500"
  animate={{
    scaleY: [1, 1.3, 1],
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
  }}
></motion.div>

              <h3 className="text-4xl font-bold">
                My Goal
              </h3>
            </div>

            <p
              style={{
                color: "#e2e8f0",
                lineHeight: "2",
                marginBottom: "1.5rem",
              }}
              className="text-2xl"
            >
              My goal is to become a highly skilled Full Stack Developer
              capable of building professional software products,
              automation systems and scalable applications.
            </p>

            <p
              style={{
                color: "#e2e8f0",
                lineHeight: "2",
                marginBottom: "1.5rem",
              }}
              className="text-2xl"
            >
              I aim to work on innovative technologies, contribute to
              meaningful projects and build modern software solutions
              that make a real impact on people and businesses.
            </p>

            <p
              style={{
                color: "#e2e8f0",
                lineHeight: "2",
              }}
              className="text-2xl"
            >
              In the future, I aim to work with innovative teams,
              contribute to impactful products and establish myself
              as a professional software engineer capable of delivering
              high-quality solutions.
            </p>

            {/* Fun Facts */}
            <div
              style={{
                marginTop: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              <span className="
flex items-center gap-2 px-5 py-3 rounded-xl
bg-white/5 border border-white/10 text-base text-gray-300
hover:scale-110
hover:-translate-y-1
hover:border-blue-500/40
hover:shadow-lg
hover:shadow-blue-500/20
transition-all duration-300
">
                <span className="text-lg">⚡</span>
                I love building projects that solve real problems
              </span>

              <span className="
flex items-center gap-2 px-5 py-3 rounded-xl
bg-white/5 border border-white/10 text-base text-gray-300
hover:scale-110
hover:-translate-y-1
hover:border-purple-500/40
hover:shadow-lg
hover:shadow-purple-500/20
transition-all duration-300
">
                <span className="text-lg">🌙</span>
                I code best late at night
              </span>

              <span className="
flex items-center gap-2 px-5 py-3 rounded-xl
bg-white/5 border border-white/10 text-base text-gray-300
hover:scale-110
hover:-translate-y-1
hover:border-cyan-500/40
hover:shadow-lg
hover:shadow-cyan-500/20
transition-all duration-300
">
                <span className="text-lg">🚀</span>
                Always learning something new every day
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;