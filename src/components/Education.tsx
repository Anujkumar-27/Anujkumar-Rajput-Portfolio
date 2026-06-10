import { GraduationCap, Calendar, Award } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3 text-center">Education</p>
        <h2 className="text-4xl font-bold text-white mb-14 text-center">Academic Background</h2>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/60 to-transparent hidden sm:block" />

            <div className="sm:pl-20 relative">
              {/* Dot */}
              <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-cyan-500 border-4 border-slate-950 hidden sm:flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>

              <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <GraduationCap size={18} className="text-cyan-400" />
                      <span className="text-cyan-400 text-sm font-medium">Bachelor of Computer Application</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">S.K.H.M.C College</h3>
                    <p className="text-slate-400 text-sm mt-0.5">Nandurbar, Maharashtra</p>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-2">
                    <div className="flex items-center gap-1.5 text-slate-400 text-sm">
                      <Calendar size={14} />
                      2022 – 2025
                    </div>
                    <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-3 py-1">
                      <Award size={13} className="text-emerald-400" />
                      <span className="text-emerald-400 text-xs font-semibold">CGPA: 8.81 / 10 (73%)</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-700/50">
                  {[
                    { label: 'Specialization', value: 'Data & Business Analytics' },
                    { label: 'Relevant Courses', value: 'DBMS, Statistics, Python, Web Dev' },
                    { label: 'Projects Completed', value: '3 Analytics Projects' },
                  ].map((item) => (
                    <div key={item.label}>
                      <p className="text-slate-500 text-xs mb-1">{item.label}</p>
                      <p className="text-white text-sm font-medium">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
