import { Award, Calendar, ExternalLink } from 'lucide-react';

const certs = [
  {
    title: 'AI Foundations Associate Certificate',
    issuer: 'Oracle',
    date: 'Oct 2025',
    color: 'rose',
    desc: 'Foundational understanding of AI concepts, cloud-based AI services, and enterprise AI adoption.',
  },
  {
    title: 'Introduction to Prompt Engineering for Generative AI',
    issuer: 'LinkedIn',
    date: 'Jul 2025',
    color: 'violet',
    desc: 'Practical skills for crafting effective prompts to leverage generative AI tools in professional workflows.',
  },
  {
    title: 'Career Essentials in Data Analysis',
    issuer: 'Microsoft & LinkedIn',
    date: 'June 2025',
    color: 'blue',
    desc: 'Core data analysis skills including data visualization, descriptive statistics, and business insight generation.',
  },
  {
    title: 'Excel with Copilot: AI-Driven Data Analysis',
    issuer: 'Microsoft & LinkedIn',
    date: 'June 2025',
    color: 'emerald',
    desc: 'Advanced Excel techniques enhanced by AI-powered Copilot features for automated analysis and insight.',
  },
  {
    title: 'Build Your Generative AI Productivity Skills',
    issuer: 'Microsoft & LinkedIn',
    date: 'Aug 2025',
    color: 'cyan',
    desc: 'Practical generative AI skills for professional productivity and modern workplace applications.',
  },
  {
    title: 'TCS iON Career Edge – Young Professional',
    issuer: 'TCS',
    date: 'Jan 2025',
    color: 'amber',
    desc: 'Industry-readiness program covering professional communication, analytics, and business skills.',
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string; badge: string }> = {
  rose: { bg: 'bg-rose-500/10', border: 'border-rose-500/20', text: 'text-rose-400', badge: 'bg-rose-500/10 text-rose-400 border-rose-500/20' },
  violet: { bg: 'bg-violet-500/10', border: 'border-violet-500/20', text: 'text-violet-400', badge: 'bg-violet-500/10 text-violet-400 border-violet-500/20' },
  blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/20', text: 'text-blue-400', badge: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
  emerald: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', text: 'text-emerald-400', badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' },
  cyan: { bg: 'bg-cyan-500/10', border: 'border-cyan-500/20', text: 'text-cyan-400', badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20' },
  amber: { bg: 'bg-amber-500/10', border: 'border-amber-500/20', text: 'text-amber-400', badge: 'bg-amber-500/10 text-amber-400 border-amber-500/20' },
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3 text-center">Certifications</p>
        <h2 className="text-4xl font-bold text-white mb-4 text-center">Credentials & Learning</h2>
        <p className="text-slate-400 text-center max-w-xl mx-auto mb-14 text-sm leading-relaxed">
          Validated skills from globally recognized organizations — demonstrating commitment to continuous learning and staying current with industry trends.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certs.map(({ title, issuer, date, color, desc }) => {
            const c = colorMap[color];
            return (
              <div
                key={title}
                className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-6 hover:border-slate-600 transition-all duration-300 flex flex-col"
              >
                <div className={`w-10 h-10 ${c.bg} border ${c.border} rounded-xl flex items-center justify-center mb-4`}>
                  <Award size={18} className={c.text} />
                </div>
                <h3 className="text-white font-semibold text-sm leading-snug mb-2">{title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-4 flex-1">{desc}</p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                  <span className={`text-xs border ${c.badge} px-2.5 py-1 rounded-full font-medium`}>{issuer}</span>
                  <div className="flex items-center gap-1 text-slate-500 text-xs">
                    <Calendar size={11} />
                    {date}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary bar */}
        <div className="mt-10 bg-slate-800/40 border border-slate-700/60 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="text-3xl font-bold text-white">6</div>
            <div>
              <div className="text-cyan-400 font-semibold text-sm">Certifications Earned</div>
              <div className="text-slate-400 text-xs">From Microsoft, Oracle, LinkedIn & TCS</div>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-slate-400 text-xs">
            <ExternalLink size={11} />
            All verifiable via Credly / LinkedIn
          </div>
        </div>
      </div>
    </section>
  );
}
