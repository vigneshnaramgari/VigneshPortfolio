import bloodlinkImg from "../assets/BloodLink.png";
import loanImg from "../assets/LDPS.png";
import shopneticImg from "../assets/Shopnetic.png"; // add this image to assets

export default function Projects () {
  const projects = [
    {
      title: "BloodLink - Blood Bank System",
      desc: "Solves the problem of blood shortage by connecting donors, patients, and admins in one system, making blood requests, donor matching, and inventory tracking faster and more organized.",
      tech: ["MongoDB", "Express.js", "Node.js", "JWT", "bcrypt", "HTML", "CSS"],
      github: "https://github.com/vigneshnaramgari/BloodLink---BloodBankManagementSystem",
      live: "https://blood-link-wxmm.onrender.com",
      image: bloodlinkImg,
      glow: "hover:shadow-red-500/30",
    },
    {
      title: "Loan Default Prediction ML",
      desc: "Helps financial institutions reduce loan risk by predicting whether a borrower may default using machine learning models trained on real applicant data.",
      tech: ["Python", "Random Forest", "Logistic Regression" ,"XGBoost", "Pandas", "Scikit-learn", "Streamlit"],
      github: "https://github.com/vigneshnaramgari/LoanDefaultPredictionSystem",
      live: "https://loandefaultpredictionsystem.streamlit.app/",
      image: loanImg,
      glow: "hover:shadow-blue-500/30",
    },
    {
      title: "Shopnetic E-Commerce",
      desc: "Simplifies online store management by allowing customers to shop easily while giving admins full control over product listings and store operations.",
      tech: ["PHP", "MySQL", "HTML", "CSS"],
      github: "https://github.com/vigneshnaramgari/ShopneticEcommerceWebsite",
      live: null,
      image: shopneticImg,
      glow: "hover:shadow-emerald-500/30",
    },
  ];

  return (
    <section id="projects" className="w-full px-6 md:px-[8%] py-4">
      <h2 className="text-4xl md:text-5xl font-Ovo text-center mb-16 text-white">
        Projects
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {projects.map((project, i) => (
          <div
            key={i}
            className={`group relative rounded-3xl overflow-hidden
            bg-white/5 border border-white/10 backdrop-blur-xl
            transition duration-500 ease-out
            hover:-translate-y-4 hover:scale-[1.02]
            hover:shadow-2xl ${project.glow} flex flex-col`}
          >
            {/* Decorative Glow Border */}
            <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-purple-400/30 transition pointer-events-none"></div>

            {/* Screenshot */}
            <div className="h-52 bg-black/30 flex items-center justify-center overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="max-h-full object-contain scale-95 group-hover:scale-100 transition duration-700"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition">
                {project.title}
              </h3>

              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {project.desc}
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-[11px] rounded-full bg-white/10 text-white border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-auto flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2 text-xs rounded-full
                             border border-white/20 text-white
                             hover:bg-white/10 transition"
                >
                  GitHub
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 text-xs rounded-full
                               bg-gradient-to-r from-purple-500 to-orange-500
                               text-white shadow-lg hover:opacity-90 transition"
                  >
                    Live
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
