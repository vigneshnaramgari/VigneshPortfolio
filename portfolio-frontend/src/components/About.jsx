export default function About() {
    return (
        <section
            id="about"
            className="w-full px-6 md:px-[8%] py-5 scroll-mt-24 text-center"
        >
            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-Ovo mb-14">About Me</h2>

            {/* Intro */}
            <div className="max-w-3xl mx-auto text-gray-300 leading-relaxed mb-16 space-y-4">
                <p>
                    I'm <span className="text-white font-semibold">Vignesh Naramgari</span>, a Computer Science undergraduate
                    specializing in Artificial Intelligence & Machine Learning with strong foundations in
                    Data Structures and Algorithms.
                </p>
                <p>
                    I build scalable full-stack web applications using the MERN stack and develop
                    intelligent machine learning solutions to solve real-world problems.
                </p>
            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Education */}
            <div className="p-8 rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg hover:-translate-y-2 transition duration-300 text-left">
                <h3 className="text-xl font-semibold text-white mb-2">Education</h3>

                <p className="text-white font-medium">
                    B.Tech in Computer Science (AI & ML) <br></br> <span className="text-white font-medium">CGPA - 7.62</span>
                </p>

                <p className="text-gray-400 text-sm">
                    SRM University AP, India
                </p>

                <p className="text-gray-400 text-sm">
                    2023 – 2027  
                </p>
            </div>


                {/* Work Experience */}
                <div className="p-8 rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg hover:-translate-y-2 transition duration-300">
                    <h3 className="text-xl font-semibold text-white mb-2">Work Experience<br></br>
                    <p>Edunet Foundation - Web Development Intern</p>
</h3><p className="text-gray-400 font-bold">Jun 2025 – Aug 2025 • Remote</p>
                    <p className="text-gray-400">
                                            
                        Worked on real-world problems.<br />
                        Focused on practical implementation and deployment.
                    </p>
                </div>

            </div>
        </section>
    );
}
