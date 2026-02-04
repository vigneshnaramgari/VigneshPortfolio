import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdEmail } from "react-icons/md";

export default function Header() {
  return (
    <section
      id="top"
      className="w-full min-h-screen px-6 md:px-[8%] pt-24 pb-20 flex items-center justify-center text-center"
    >
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center gap-6">

        {/* Profile Image */}
        <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <img
            src="/Vignesh_Profile.png"
            alt="Vignesh"
            className="w-full h-full object-cover scale-125 object-top"
          />
        </div>

        <h3 className="flex items-center gap-2 text-lg md:text-xl font-Ovo">
          Hi! I'm Vignesh
          <img src="./assets/hand-icon.png" alt="" className="w-5" />
        </h3>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-Ovo leading-tight">
          MERN Stack Developer & <br /> AI/ML Enthusiast
        </h1>

        <p className="max-w-2xl font-Ovo text-gray-300 text-sm sm:text-base">
          Computer Science undergraduate specializing in AI & Machine Learning
          with strong foundations in DSA. I build scalable full-stack apps and
          intelligent ML solutions.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#contact"
            className="px-8 py-2 rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white"
          >
            Contact Me
          </a>

          <a
            href="https://drive.google.com/file/d/135NRBMtG0bckqhaE92dp29eHKcvI_rd1/view"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-2 rounded-full border border-white/30 text-white"
          >
            View Resume
          </a>
        </div>

        {/* Social Icons — Email → LinkedIn → GitHub → LeetCode */}
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
