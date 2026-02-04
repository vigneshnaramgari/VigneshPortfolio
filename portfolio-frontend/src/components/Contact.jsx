import { useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    try {
      const res = await fetch("https://vigneshportfolio-ffmm.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: event.target.name.value,
          email: event.target.email.value,
          message: event.target.message.value,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setResult("Message Sent✅");
        event.target.reset();
      } else {
        setResult("Failed to send ❌");
      }
    } catch (error) {
      setResult("Server error ❌");
    }
  };

  return (
    <section
      id="contact"
      className="w-full px-6 md:px-[8%] pt-16 pb-16 bg-gradient-to-b from-transparent to-white/5"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-start">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-4xl md:text-5xl font-Ovo mb-6">
            Let's Work Together
          </h2>

          <p className="text-white/70 mb-8 leading-relaxed">
            I'm currently looking for internships, opportunities, and collaborations 
            where I can apply my skills, gain real-world experience, and contribute 
            to impactful projects.
          </p>

          <div className="space-y-2 text-white/80">
            <p className="text-lg font-semibold">Vignesh Naramgari</p>
            <p>MERN Stack Developer • AI/ML Enthusiast</p>
            <a href="mailto:nsaivignesh2005@gmail.com" className="hover:text-white transition">
              nsaivignesh2005@gmail.com
            </a>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-6 mt-8 text-2xl">
            <a href="mailto:nsaivignesh2005@gmail.com" className="icon-btn"><MdEmail /></a>
            <a href="https://www.linkedin.com/in/vignesh-naramgari-205177291" target="_blank" rel="noopener noreferrer" className="icon-btn text-[#0A66C2]"><FaLinkedinIn /></a>
            <a href="https://github.com/vigneshnaramgari" target="_blank" rel="noopener noreferrer" className="icon-btn"><FaGithub /></a>
            <a href="https://leetcode.com/vignesh_2210/" target="_blank" rel="noopener noreferrer" className="icon-btn text-[#FFA116]"><SiLeetcode /></a>
          </div>
        </div>

        {/* RIGHT SIDE — FORM */}
        <form
          onSubmit={onSubmit}
          className="p-8 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-lg"
        >
          <div className="grid sm:grid-cols-2 gap-5 mb-5">
            <input type="text" name="name" placeholder="Your Name" required className="input-field" />
            <input type="email" name="email" placeholder="Your Email" required className="input-field" />
          </div>

          <textarea rows="5" name="message" placeholder="Your Message" required className="input-field mb-6"></textarea>

          <button
            type="submit"
            className="w-full py-3 rounded-full bg-gradient-to-r from-purple-500 to-orange-500 text-white font-semibold hover:opacity-90 transition"
          >
            Send Message
          </button>

          <p className="text-center mt-4 text-white/70 text-sm">{result}</p>
        </form>
      </div>

      {/* FOOTER */}
      <div className="mt-20 text-center text-white/40 text-sm border-t border-white/10 pt-6">
        © {new Date().getFullYear()} Vignesh Naramgari
      </div>
    </section>
  );
}
