import { Briefcase, ExternalLink } from 'lucide-react';

const experiences = [
  {
    org: 'Deloitte',
    role: 'Data Analytics Virtual Job Simulation',
    platform: 'Forage',
    date: 'June 2025',
    type: 'Virtual Simulation',
    color: 'cyan',
    achievements: [
      'Solved real-world business analytics challenges involving data cleaning, analysis, and visualization under enterprise constraints.',
      'Developed structured approaches for extracting insights from complex, multi-variable datasets.',
      'Practiced stakeholder communication and risk identification within a professional consulting framework.',
    ],
  },
  {
    org: 'Tata Group',
    role: 'Data Visualisation: Empowering Business with Effective Insights',
    platform: 'Forage',
    date: 'June 2025',
    type: 'Virtual Simulation',
    color: 'blue',
    achievements: [
      'Framed business questions and identified the right visuals to answer them — simulating how senior analysts operate at a global conglomerate.',
      'Created impactful dashboards aligned with executive decision-making needs.',
      'Translated ambiguous business requirements into precise analytical deliverables with clear governance.',
    ],
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string; badge: string; dot: string }> = {
  cyan: { bg: 'bg-cyan-500/10', border: 'border-cyan-500/30', text: 'text-cyan-400', badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30', dot: 'bg-cyan-400' },
  blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-400', badge: 'bg-blue-500/10 text-blue-400 border-blue-500/30', dot: 'bg-blue-400' },
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3 text-center">Experience</p>
        <h2 className="text-4xl font-bold text-white mb-4 text-center">Industry Exposure</h2>
        <p className="text-slate-400 text-center max-w-xl mx-auto mb-14 text-sm leading-relaxed">
          While I'm a fresher, I've actively sought real-world exposure through Forage's virtual job simulations —
          programs built and validated by top global firms.
        </p>

        <div className="max-w-3xl mx-auto space-y-6">
          {experiences.map((exp) => {
            const c = colorMap[exp.color];
            return (
              <div
                key={exp.org}
                className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-7 hover:border-slate-600 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                  <div className="flex items-start gap-4">
                    <div className={`w-11 h-11 ${c.bg} border ${c.border} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Briefcase size={18} className={c.text} />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-base">{exp.org}</h3>
                      <p className="text-slate-300 text-sm mt-0.5">{exp.role}</p>
                      <p className="text-slate-500 text-xs mt-0.5">via {exp.platform}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-2 sm:flex-shrink-0">
                    <span className={`text-xs border ${c.badge} px-3 py-1 rounded-full font-medium`}>{exp.type}</span>
                    <span className="text-slate-500 text-xs">{exp.date}</span>
                  </div>
                </div>

                <ul className="space-y-2.5">
                  {exp.achievements.map((a, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-slate-400 text-sm leading-relaxed">
                      <span className={`w-1.5 h-1.5 rounded-full ${c.dot} mt-2 flex-shrink-0`} />
                      {a}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 pt-5 border-t border-slate-700/50 flex items-center gap-2 text-xs text-slate-500">
                  <ExternalLink size={12} />
                  <span>Verified by {exp.org} — Certificate available on request</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
