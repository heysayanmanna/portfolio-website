import profile from "../assets/Profile.png";
import { motion } from "framer-motion";
import resume from "../assets/resume.pdf";
import { TypeAnimation } from "react-type-animation";
import CountUp from 'react-countup';
import { HiOutlineBriefcase } from "react-icons/hi2";



import {
  FaReact,
  FaPython,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";

import {
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiTypescript,
  SiFirebase,
  SiVercel, 
  SiDocker,
  SiPostman,
  SiRedux,
} from "react-icons/si";

function Hero() {
  return (
    <section
  id="home"
  className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-32 sm:pt-40 pb-16 sm:pb-24"
>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
  <div className="particle particle-1"></div>
  <div className="particle particle-2"></div>
  <div className="particle particle-3"></div>
</div>


 {/* NEW */}
  <div className="mesh-bg"></div>

  <div className="light-orb orb-1 top-0 left-0"></div>

  <div className="light-orb orb-2 bottom-0 right-0"></div>

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* Left Content */}
          <motion.div
            className="lg:pt-8 flex flex-col gap-6 lg:gap-8 ml-0 lg:-ml-10"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.span
  animate={{
    boxShadow: [
      "0 0 0px rgba(59,130,246,0)",
      "0 0 25px rgba(59,130,246,0.35)",
      "0 0 0px rgba(59,130,246,0)",
    ],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
  }}
  className="inline-flex items-center w-fit self-center lg:self-start px-5 py-2.5 text-sm rounded-full border border-white/10 bg-white/5 text-gray-300 backdrop-blur-md"
>
  <HiOutlineBriefcase
  className="text-blue-400 text-lg mr-2"
/>

<span>
  Open to Internships & Freelance Projects
</span>
  
</motion.span>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] xl:text-[5.5rem] font-black leading-tight whitespace-nowrap text-center lg:text-left">
  Sayan <span className="gradient-text">Manna</span>
</h1>

            {/* Subheading */}
           <div className="flex items-center justify-center lg:justify-start min-h-[40px]">
  <TypeAnimation
    sequence={[
      "Full Stack Developer • Python Developer", 2500,
      "React Developer • MERN Stack Developer", 2500,
      "Web Development • Automation Solutions", 2500,
      "Data Analyst • Research Enthusiast", 2500,
      "Problem Solver • Open Source Learner", 2500,
      "Frontend Development • UI/UX Enthusiast", 2500,
      "Building Modern Digital Experiences", 2500,
      "BCA Student • Tech Explorer", 2500,
    ]}
    wrapper="h2"
    speed={50}
    repeat={Infinity}
    className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200 font-bold"
  />

  <span className="animate-pulse text-blue-400 text-2xl ml-1">
    |
  </span>
</div>
            {/* Description */}
            <p className="text-gray-400 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl text-center lg:text-left">
              I build modern web applications, automation tools and scalable
              software solutions using React, Node.js, MongoDB and Python.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:justify-center gap-5">
              <a
  href="https://github.com/iamsayanmanna"
  target="_blank"
  rel="noopener noreferrer"
  className="
  h-15
  w-full
  sm:w-auto
  min-w-[240px]
  text-lg
  px-8
  flex
  items-center
  justify-center
  rounded-xl
  bg-gradient-to-r
  from-blue-500
  to-purple-500
  text-white
  font-semibold
  shadow-lg
  hover:-translate-y-1
  hover:scale-105
  hover:shadow-blue-500/30
  hover:shadow-2xl
  transition-all
  duration-300
  hover:scale-110
hover:shadow-blue-500/40
  "
>
  View Projects
</a>

              <a
  href={resume}
  download="Sayan_Manna_Resume.pdf"
  className="
  h-15
  w-full
  sm:w-auto
  min-w-[240px]
  text-lg
  px-8
  flex
  items-center
  justify-center
  rounded-xl
  border
  border-white/20
  bg-white/5
  text-white
  font-semibold
  hover:bg-white/10
  hover:-translate-y-1
  hover:border-purple-500/40
  hover:shadow-lg
  hover:shadow-purple-500/20
  transition-all
  duration-300
  hover:scale-105
hover:shadow-purple-500/30
hover:shadow-xl
  "
>
  Download Resume
</a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-xl mx-auto lg:mx-auto">
              <div
  className="
  bg-white/5
  border
  border-white/10
  rounded-2xl
  px-5
py-6
sm:px-8
sm:py-8
  text-center
  backdrop-blur-md
  hover:-translate-y-2
  hover:border-blue-500/40
  hover:shadow-xl
  hover:shadow-blue-500/20
  transition-all
  duration-300
  cursor-pointer
hover:scale-105
  "
>
     <h3 className="text-3xl font-extrabold">
  15+
</h3>
  <p className="text-base text-gray-400 mt-2">Projects</p>
</div>

              <div
  className="
  bg-white/5
  border
  border-white/10
  rounded-2xl
  px-5
py-6
sm:px-8
sm:py-8
  text-center
  backdrop-blur-md
  hover:-translate-y-2
  hover:border-purple-500/40
  hover:shadow-xl
  hover:shadow-purple-500/20
  transition-all
  duration-300
  cursor-pointer
hover:scale-105
  "
>
  <h3 className="text-3xl font-extrabold">
  2
</h3>
  <p className="text-base text-gray-400 mt-2">Internship</p>
</div>

              <div
  className="
  bg-white/5
  border
  border-white/10
  rounded-2xl
  px-5
py-6
sm:px-8
sm:py-8
  text-center
  backdrop-blur-md
  hover:-translate-y-2
  hover:border-cyan-500/40
  hover:shadow-xl
  hover:shadow-cyan-500/20
  transition-all
  duration-300
  cursor-pointer
hover:scale-105
  "
>
  <h3 className="text-3xl font-extrabold">
  BCA
</h3>
  <p className="text-base text-gray-400 mt-2">Student</p>
</div>
            </div>
          </motion.div>

          


         {/* Right Image */}
<motion.div
 className="flex justify-center lg:justify-end lg:pr-0 lg:translate-x-16"
  initial={{ opacity: 0, x: 40 }}
  animate={{
    opacity: 1,
    x: 0,
    y: [0, -15, 0],
  }}
  transition={{
    opacity: { duration: 0.8 },
    x: { duration: 0.8 },
    y: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }}
>
  <div className="relative w-full max-w-[520px] aspect-square flex items-center justify-center mx-auto">

    {/* Orbit Icons */}

{/* OUTER RING - 8 LOGOS */}

<div className="orbit orbit-1">
  <FaReact size={30} color="#61DAFB" />
</div>

<div className="orbit orbit-2">
  <FaPython size={30} color="#3776AB" />
</div>

<div className="orbit orbit-3">
  <SiJavascript size={30} color="#F7DF1E" />
</div>

<div className="orbit orbit-4">
  <FaNodeJs size={30} color="#68A063" />
</div>

<div className="orbit orbit-5">
  <SiMongodb size={30} color="#47A248" />
</div>

<div className="orbit orbit-6">
  <SiMysql size={30} color="#4479A1" />
</div>

<div className="orbit orbit-7">
  <FaGitAlt size={30} color="#F05032" />
</div>

<div className="orbit orbit-8">
  <FaGithub size={30} color="#FFFFFF" />
</div>


{/* INNER RING - 8 LOGOS */}

<div className="orbit orbit-9">
  <SiTailwindcss size={30} color="#06B6D4" />
</div>

<div className="orbit orbit-10">
  <FaFigma size={30} color="#F24E1E" />
</div>

<div className="orbit orbit-11">
  <SiTypescript size={30} color="#3178C6" />
</div>

<div className="orbit orbit-12">
  <SiFirebase size={30} color="#FFCA28" />
</div>

<div className="orbit orbit-13">
  <SiVercel size={30} color="#FFFFFF" />
</div>

<div className="orbit orbit-14">
  <SiDocker size={30} color="#2496ED" />
</div>

<div className="orbit orbit-15">
  <SiPostman size={30} color="#FF6C37" />
</div>

<div className="orbit orbit-16">
  <SiRedux size={30} color="#764ABC" />
</div>
  

    {/* Glow */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-[120px] rounded-full"></div>

    {/* Profile Image */}
    <img
  src={profile}
  alt="Sayan Manna"
  className="
  relative
  w-[280px]
  sm:w-[350px]
  md:w-[420px]
  lg:w-[500px]
  rounded-3xl
  border
  border-white/10
  shadow-2xl
  transition-all
  duration-500
  hover:scale-105
  hover:-translate-y-2
  hover:rotate-1
  hover:shadow-blue-500/20
  "
/>

  </div>
</motion.div>
          
            

        </div>
      </div>
    </section>
  );
}

export default Hero;