export default function Certifications() {
  return (
    <section id="certifications" className="w-full px-6 md:px-[8%] py-12 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-Ovo text-center mb-12 text-white">
          Certifications & Hackathons
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:-translate-y-2 transition duration-300">
            <h3 className="text-2xl font-semibold text-white mb-4">Certifications</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <span className="font-semibold text-white">AWS Certified Cloud Practitioner</span>
                <div className="text-sm text-gray-400">Apr 2026</div>
              </li>
              <li>
                <span className="font-semibold text-white">Oracle Certified Professional: Java SE 17 Developer</span>
                <div className="text-sm text-gray-400">Feb 2026</div>
              </li>
              <li>
                <span className="font-semibold text-white">Web Development Fundamentals — IBM SkillsBuild</span>
                <div className="text-sm text-gray-400">Jul 2025</div>
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:-translate-y-2 transition duration-300">
            <h3 className="text-2xl font-semibold text-white mb-4">Hackathons</h3>
            <div className="text-gray-300 space-y-4">
              <div>
                <p className="font-semibold text-white">Guidewire DEVTrails University Hackathon</p>
                <p className="text-sm text-gray-400">Advanced to Phase 3</p>
                <p className="text-sm text-gray-400">Ongoing 2025</p>
              </div>
              <div>
                <p className="font-semibold text-white">Sustainable Development Goals (SDG) Hackathon</p>
                <p className="text-sm text-gray-400">Participated in SDG-focused hackathon challenges</p>
                <p className="text-sm text-gray-400">2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
