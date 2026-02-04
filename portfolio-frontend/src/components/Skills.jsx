export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full px-6 md:px-[8%] py-8 scroll-mt-24"
    >
      <h2 className="text-4xl md:text-5xl font-Ovo text-center mb-10">
        Skills
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">

        {[
          {
            title: "Languages",
            items: ["C / C++", "Python", "JavaScript"],
          },
          {
            title: "CS Fundamentals",
            items: ["DSA", "OOP", "DBMS", "Operating Systems", "Computer Networks"],
          },
          {
            title: "AWS Cloud",
            items: ["EC2", "S3", "RDS", "IAM", "Cloudwatch"],
          },
          {
            title: "Web Technologies",
            items: ["HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "JWT Auth"],
          },
          {
            title: "Frameworks",
            items: ["React.js", "Node.js", "Express.js"],
          },

          {
            title: "Databases",
            items: ["MongoDB", "SQL Server"],
          },


        ].map((card) => (
          <div
            key={card.title}
            className="p-5 rounded-xl border border-white/10 
                       bg-white/[0.04] backdrop-blur-md
                       hover:border-purple-400/40
                       hover:shadow-[0_0_25px_rgba(168,85,247,0.15)]
                       transition-all duration-300"
          >
            <h3 className="text-base font-semibold text-white mb-3 tracking-wide">
              {card.title}
            </h3>

            <ul className="space-y-1.5 text-sm text-gray-400">
              {card.items.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-orange-400 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>
    </section>
  );
}
