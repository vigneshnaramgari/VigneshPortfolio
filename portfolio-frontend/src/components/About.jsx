export default function About() {
    return (
        <section
            id="about"
            className="w-full px-6 md:px-[8%] py-12 scroll-mt-24 text-center"
        >
            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-Ovo mb-14">About Me</h2>

            {/* Intro */}
            <div className="max-w-3xl mx-auto text-gray-300 leading-relaxed mb-16 space-y-4">
                <p>
                    I'm <span className="text-white font-semibold">Vignesh Naramgari</span>, a B.Tech Computer Science
                    student specializing in AI & ML. I build scalable MERN applications, deploy AWS cloud solutions,
                    and secure RESTful APIs while applying strong fundamentals in Data Structures, Algorithms, and cloud.
                </p>
                <p>
                    I have earned AWS and Java certifications, advanced in the Guidewire
                    DEVTrails hackathon, and enjoy solving real-world problems with full-stack web
                    development and intelligent machine learning solutions.
                </p>
            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Education */}
                <div className="p-8 rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg hover:-translate-y-2 transition duration-300 text-left">
                    <h3 className="text-xl font-semibold text-white mb-2">Education</h3>

                    <p className="text-white font-medium">
                        B.Tech in Computer Science and Engineering (AI & ML) <br /> <span className="text-white font-medium">CGPA - 7.71</span>
                    </p>

                    <p className="text-gray-400 text-sm">
                        SRM University AP, Andhra Pradesh, India
                    </p>

                    <p className="text-gray-400 text-sm">
                        2023 – 2027
                    </p>
                </div>

                {/* Experience */}
                <div className="p-8 rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg hover:-translate-y-2 transition duration-300 text-left">
                    <h3 className="text-xl font-semibold text-white mb-2">Experience</h3>
                    <p className="text-white font-medium mb-2">
                        IBM SkillsBuild (Edunet Foundation) — Full-Stack Development Intern
                    </p>
                    <p className="text-gray-400 font-bold mb-4">Jun 2025 – Aug 2025 • Remote</p>
                    <p className="text-gray-400 leading-relaxed">
                        Contributed to full-stack development tasks, collaborated with team members, and implemented web application features.
                        <br />
                        Gained practical experience in coding, testing, debugging, and deploying solutions using modern web technologies.
                    </p>
                </div>
            </div>
        </section>
    );
}
