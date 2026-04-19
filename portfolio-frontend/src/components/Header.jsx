import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdEmail } from "react-icons/md";

export default function Header() {
  return (
    <section
      id="top"
      className="w-full min-h-screen px-6 md:px-[8%] pt-24 pb-20 flex items-center justify-center text-center"
    >
      <div className="w-full max-w-5xl mx-auto px-4 flex flex-col items-center gap-6">

        {/* Profile Image */}
        <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <img
            src="/Vignesh_Profile.png"
            alt="Vignesh"
            className="scale-125 w-full h-full object-cover object-top"
          />
        </div>

        <h3 className="flex items-center gap-2 text-lg md:text-xl font-Ovo text-gray-300">
          Hi! I'm Vignesh
        </h3>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-Ovo leading-tight">
          <span className="bg-gradient-to-r from-[#b820e6] to-[#da7d20] bg-clip-text text-transparent font-bold">
            MERN Stack Developer
          </span>
          <br />

          <span className="text-gray-300 text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-light tracking-wide">
            AI/ML Enthusiast
          </span>
          <br />

          <span className="text-gray-400 text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-light tracking-wide">
            AWS Cloud Practitioner
          </span>
        </h1>

        <p className="mt-3 max-w-2xl text-sm sm:text-base md:text-lg text-gray-300 font-Ovo">
          Full-stack developer skilled in designing and deploying scalable MERN stack
          applications, secure RESTful APIs, and AWS cloud solutions. Strong
          foundation in Data Structures, Algorithms, certifications, and hackathons.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-2 rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white text-center hover:scale-105 transition-all duration-300"
          >
            Contact Me
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6">

          {/* Email */}
          <a
            href="mailto:nsaivignesh2005@gmail.com"
            className="group w-14 h-14 flex items-center justify-center rounded-2xl 
            bg-white/5 backdrop-blur-md border border-white/10 
            shadow-[0_0_20px_rgba(255,255,255,0.05)] 
            hover:shadow-[0_0_25px_#ffffff40] 
            hover:scale-110 transition-all duration-300"
          >
            <MdEmail size={26} className="text-white group-hover:text-gray-200" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/vignesh-naramgari-205177291"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-14 h-14 flex items-center justify-center rounded-2xl 
            bg-white/5 backdrop-blur-md border border-white/10 
            shadow-[0_0_20px_rgba(0,119,181,0.1)] 
            hover:shadow-[0_0_30px_#0A66C280] 
            hover:scale-110 transition-all duration-300"
          >
            <FaLinkedinIn size={24} className="text-[#0A66C2]" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/vigneshnaramgari"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-14 h-14 flex items-center justify-center rounded-2xl 
            bg-white/5 backdrop-blur-md border border-white/10 
            shadow-[0_0_20px_rgba(255,255,255,0.05)] 
            hover:shadow-[0_0_25px_#ffffff40] 
            hover:scale-110 transition-all duration-300"
          >
            <FaGithub size={26} className="text-white group-hover:text-gray-200" />
          </a>

          {/* LeetCode */}
          <a
            href="https://leetcode.com/vignesh_2210/"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-14 h-14 flex items-center justify-center rounded-2xl 
            bg-white/5 backdrop-blur-md border border-white/10 
            shadow-[0_0_20px_rgba(255,165,0,0.08)] 
            hover:shadow-[0_0_30px_#ffa11680] 
            hover:scale-110 transition-all duration-300"
          >
            <SiLeetcode size={24} className="text-[#FFA116]" />
          </a>

        </div>
      </div>
    </section>
  );
}