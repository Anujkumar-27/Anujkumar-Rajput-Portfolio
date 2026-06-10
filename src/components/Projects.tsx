import { Github, BarChart2, TrendingUp, Truck, ChevronRight } from 'lucide-react';

const projects = [
  {
    title: 'Supply Chain Data Analyst',
    icon: Truck,
    tags: ['Python', 'Prophet', 'Pandas', 'Forecasting'],
    date: 'April 2026',
    color: 'teal',
    image: 'https://images.pexels.com/photos/808867/pexels-photo-808867.jpeg?auto=compress&cs=tinysrgb&w=800',
    summary: 'Built a demand-forecasting pipeline to improve inventory planning, optimize reorder timing, and align procurement with demand forecasts.',
    bullets: [
      'Built a weekly demand-forecasting pipeline using Prophet to improve inventory planning and reduce stockouts.',
      'Cleaned and transformed raw order data, engineered time-based features, and removed outliers for robust modeling.',
      'Performed EDA and seasonality analysis to identify demand drivers and inform replenishment strategy.',
      'Developed safety-stock and reorder-point calculations incorporating forecast uncertainty to optimize reorder timing.',
      'Presented actionable dashboards and recommendations to stakeholders, aligning procurement with demand forecasts.',
    ],
    github: 'https://github.com/Anujkumar-27/Supply-Chain-Data-Analyst.git',
  },
  {
    title: 'Streaming Service Platform Data Analysis',
    icon: BarChart2,
    tags: ['Microsoft Excel', 'Power BI'],
    date: 'July 2025',
    color: 'cyan',
    image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800',
    summary: 'End-to-end analysis of streaming platform data to surface content trends, user preferences, and actionable business recommendations for content strategy.',
    bullets: [
      'Collected and cleaned raw movie/show dataset, handling nulls, duplicates, and inconsistent formats.',
      'Performed EDA to identify genre performance trends, viewership patterns, and content gaps.',
      'Built interactive Power BI dashboards with drill-down capabilities for genre, rating, and release-year filters.',
      'Explored predictive modeling for personalized recommendation logic using classification techniques.',
      'Delivered key findings: top-performing genres, optimal release windows, and underserved audience segments.',
    ],
    github: 'https://github.com/Anujkumar-27/Streaming-Service-Platform-Analysis-',
  },
  {
    title: 'Uber Rides Data Analysis',
    icon: TrendingUp,
    tags: ['Python', 'Pandas', 'Matplotlib', 'EDA'],
    date: 'December 2025',
    color: 'blue',
    image: 'https://images.pexels.com/photos/3782235/pexels-photo-3782235.jpeg?auto=compress&cs=tinysrgb&w=800',
    summary: 'Python-powered analysis of Uber ride dataset to uncover behavioral patterns, demand cycles, and distance distributions with actionable business implications.',
    bullets: [
      'Conducted full EDA on Uber ride dataset using Python (Pandas, NumPy, Matplotlib, Seaborn).',
      'Discovered business rides dominate overall usage, with peak demand during afternoon hours and weekdays — indicating a corporate commuter base.',
      'Identified that most trips fall within 0–20 miles, particularly in the 4–5 mile range — valuable for driver allocation strategy.',
      'Found significant ride volume drop during winter months, suggesting seasonal pricing and marketing opportunities.',
      'Applied feature engineering to create time-based features (hour, day, month) enabling granular trend analysis.',
    ],
    github: 'https://github.com/Anujkumar-27/Uber-Rides-Data-Analysis-using-Python',
  },
];

const colorMap: Record<string, { border: string; tag: string; tagText: string; dot: string; btn: string }> = {
  teal: {
    border: 'border-teal-500/20',
    tag: 'bg-teal-500/10 border-teal-500/20',
    tagText: 'text-teal-300',
    dot: 'bg-teal-400',
    btn: 'text-teal-400 hover:text-teal-300',
  },
  cyan: {
    border: 'border-cyan-500/20',
    tag: 'bg-cyan-500/10 border-cyan-500/20',
    tagText: 'text-cyan-300',
    dot: 'bg-cyan-400',
    btn: 'text-cyan-400 hover:text-cyan-300',
  },
  blue: {
    border: 'border-blue-500/20',
    tag: 'bg-blue-500/10 border-blue-500/20',
    tagText: 'text-blue-300',
    dot: 'bg-blue-400',
    btn: 'text-blue-400 hover:text-blue-300',
  },
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3 text-center">Projects</p>
        <h2 className="text-4xl font-bold text-white mb-4 text-center">Analytical Work</h2>
        <p className="text-slate-400 text-center max-w-xl mx-auto mb-14 text-sm leading-relaxed">
          Each project follows a rigorous analytics lifecycle — from raw data to actionable business insights.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          {projects.map(({ title, icon: Icon, tags, date, color, image, summary, bullets, github }) => {
            const c = colorMap[color];
            return (
              <div
                key={title}
                className={`bg-slate-800/50 border border-slate-700/60 rounded-2xl overflow-hidden hover:${c.border} hover:shadow-xl hover:shadow-slate-950/40 transition-all duration-300 flex flex-col`}
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img src={image} alt={title} className="w-full h-full object-cover opacity-60 hover:opacity-70 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-800/90 to-transparent" />
                  <div className="absolute bottom-4 left-5">
                    <span className="text-slate-400 text-xs">{date}</span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start gap-3 mb-3">
                    <Icon size={18} className={c.btn.split(' ')[0].replace('text-', 'text-').replace('teal', 'teal')} />
                    <h3 className="text-white font-bold text-base leading-tight">{title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((t) => (
                      <span key={t} className={`text-xs border ${c.tag} ${c.tagText} px-2.5 py-0.5 rounded-full font-medium`}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{summary}</p>

                  <ul className="space-y-2 flex-1 mb-5">
                    {bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-400 text-xs leading-relaxed">
                        <span className={`w-1 h-1 rounded-full ${c.dot} mt-2 flex-shrink-0`} />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 text-xs font-semibold ${c.btn} transition-colors mt-auto`}
                  >
                    <Github size={14} />
                    View on GitHub
                    <ChevronRight size={13} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
