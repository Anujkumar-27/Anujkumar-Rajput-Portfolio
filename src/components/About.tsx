import { TrendingUp, Target, Lightbulb, Users } from 'lucide-react';

const traits = [
  {
    icon: TrendingUp,
    title: 'Data-Driven Mindset',
    desc: 'Every business decision should be backed by data. I transform raw numbers into clear narratives that guide strategy and governance.',
  },
  {
    icon: Target,
    title: 'Project & Business Focus',
    desc: 'Experienced in requirements gathering, gap analysis, KPI reporting, and stakeholder communication — connecting insights directly to outcomes.',
  },
  {
    icon: Lightbulb,
    title: 'Continuous Learner',
    desc: 'Actively expanding into machine learning, AI, and prompt engineering to stay ahead of the analytics curve and bring modern techniques to every project.',
  },
  {
    icon: Users,
    title: 'Collaborative by Nature',
    desc: 'Through simulations with Deloitte and Tata Group, I honed the ability to work cross-functionally, manage risks, and communicate findings to stakeholders.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left */}
          <div className="lg:w-1/2">
            <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">About Me</p>
            <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
              From Curious Student to<br />Analytics Professional
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                I'm a BCA graduate from S.K.H.M.C College, Nandurbar, with a strong academic record (CGPA 8.81)
                and a genuine passion for making data meaningful. My journey began with curiosity about how
                organizations use data to drive decisions — and I found my calling in analytics.
              </p>
              <p>
                I've built hands-on proficiency across the full analytics stack: from structuring messy datasets in
                Excel to building interactive dashboards in Power BI and Tableau, writing complex queries in SQL, and
                running exploratory analyses in Python. I'm also skilled in Jira for project tracking and SDLC processes.
              </p>
              <p>
                My virtual simulations with <span className="text-white font-medium">Deloitte</span> and{' '}
                <span className="text-white font-medium">Tata Group</span> on Forage gave me real exposure to how
                enterprise-level analytics teams approach business problems — and confirmed that this is exactly
                the career I want to build.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {['Excel', 'Power BI', 'SQL', 'Python', 'Jira', 'Tableau'].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium bg-slate-800 border border-slate-700 text-cyan-400 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right — trait cards */}
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {traits.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-5 hover:border-cyan-500/30 hover:bg-slate-800 transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                  <Icon size={20} className="text-cyan-400" />
                </div>
                <h3 className="text-white font-semibold text-sm mb-2">{title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
