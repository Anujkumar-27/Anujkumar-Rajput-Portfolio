import { BarChart2, Code2, Database, Cpu, Globe, Heart, ClipboardList } from 'lucide-react';

const skillGroups = [
  {
    icon: ClipboardList,
    title: 'Business Analysis & Reporting',
    color: 'cyan',
    skills: ['Jira', 'Requirements Gathering', 'Business Process Analysis', 'Gap Analysis', 'KPI Reporting', 'Data-Driven Decision Making', 'Documentation', 'SDLC'],
  },
  {
    icon: BarChart2,
    title: 'Analytics & Visualization',
    color: 'blue',
    skills: ['Microsoft Excel (Advanced)', 'Power BI', 'Tableau', 'Microsoft Access', 'Google Analytics'],
  },
  {
    icon: Database,
    title: 'Data Analysis & Management',
    color: 'teal',
    skills: ['Data Cleaning', 'Data Transformation', 'Data Visualization', 'EDA', 'ETL/ELT Processes', 'A/B Testing'],
  },
  {
    icon: Code2,
    title: 'Programming & Databases',
    color: 'sky',
    skills: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn', 'PySpark', 'SQL', 'PostgreSQL', 'Java'],
  },
  {
    icon: Cpu,
    title: 'Emerging Tech',
    color: 'rose',
    skills: ['Machine Learning (Basic)', 'Artificial Intelligence (Basic)', 'Prompt Engineering', 'RESTful APIs'],
  },
  {
    icon: Globe,
    title: 'Tools & Technologies',
    color: 'amber',
    skills: ['MERN Stack', 'Microsoft 365'],
  },
  {
    icon: Heart,
    title: 'Professional Skills',
    color: 'emerald',
    skills: ['Problem-Solving', 'Analytical Thinking', 'Stakeholder Communication', 'Teamwork', 'Time Management', 'Presentation Skills'],
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string; pill: string; pillText: string }> = {
  cyan: { bg: 'bg-cyan-500/10', border: 'border-cyan-500/20', text: 'text-cyan-400', pill: 'bg-cyan-500/10 border-cyan-500/20', pillText: 'text-cyan-300' },
  blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/20', text: 'text-blue-400', pill: 'bg-blue-500/10 border-blue-500/20', pillText: 'text-blue-300' },
  teal: { bg: 'bg-teal-500/10', border: 'border-teal-500/20', text: 'text-teal-400', pill: 'bg-teal-500/10 border-teal-500/20', pillText: 'text-teal-300' },
  sky: { bg: 'bg-sky-500/10', border: 'border-sky-500/20', text: 'text-sky-400', pill: 'bg-sky-500/10 border-sky-500/20', pillText: 'text-sky-300' },
  rose: { bg: 'bg-rose-500/10', border: 'border-rose-500/20', text: 'text-rose-400', pill: 'bg-rose-500/10 border-rose-500/20', pillText: 'text-rose-300' },
  amber: { bg: 'bg-amber-500/10', border: 'border-amber-500/20', text: 'text-amber-400', pill: 'bg-amber-500/10 border-amber-500/20', pillText: 'text-amber-300' },
  emerald: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', text: 'text-emerald-400', pill: 'bg-emerald-500/10 border-emerald-500/20', pillText: 'text-emerald-300' },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3 text-center">Skills</p>
        <h2 className="text-4xl font-bold text-white mb-4 text-center">Tools & Technologies</h2>
        <p className="text-slate-400 text-center max-w-xl mx-auto mb-14 text-sm leading-relaxed">
          A full-stack analytics skill set — from business analysis and reporting to querying databases,
          building dashboards, and delivering actionable insights.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map(({ icon: Icon, title, color, skills }) => {
            const c = colorMap[color];
            return (
              <div
                key={title}
                className={`bg-slate-800/50 border border-slate-700/60 rounded-2xl p-6 hover:border-slate-600 transition-all duration-300 group`}
              >
                <div className={`w-10 h-10 ${c.bg} border ${c.border} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon size={18} className={c.text} />
                </div>
                <h3 className="text-white font-semibold text-sm mb-4">{title}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((s) => (
                    <span
                      key={s}
                      className={`text-xs border ${c.pill} ${c.pillText} px-2.5 py-1 rounded-full font-medium`}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tool proficiency bar visual */}
        <div className="mt-14 bg-slate-800/40 border border-slate-700/60 rounded-2xl p-8">
          <h3 className="text-white font-semibold mb-6 text-sm">Core Tool Proficiency</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { name: 'Microsoft Excel (Advanced)', pct: 90 },
              { name: 'Power BI', pct: 80 },
              { name: 'SQL / PostgreSQL', pct: 82 },
              { name: 'Python (Pandas/NumPy)', pct: 78 },
              { name: 'Jira & Project Tracking', pct: 75 },
              { name: 'Data Visualization', pct: 85 },
            ].map(({ name, pct }) => (
              <div key={name}>
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-slate-300 text-xs font-medium">{name}</span>
                  <span className="text-cyan-400 text-xs">{pct}%</span>
                </div>
                <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
