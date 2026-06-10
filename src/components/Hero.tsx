import { ArrowDown, Download, Linkedin, Github } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:60px_60px] opacity-40" />

      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w mx-auto px-6 py-12">
        <div className="grid gap-10 items-center lg:grid-cols-[minmax(0,1fr)_430px]">
          <div className="space-y-6 text-center sm:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-slate-800/80 border border-slate-700 rounded-full px-4 py-1.5 text-xs text-cyan-400 font-medium mb-1 backdrop-blur-sm">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              Open to Work — Project Analyst, Business Analyst & Data Analytics Roles
            </div>

            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight">
                Turning Raw Data<br />
                Into{' '}
                <span className="relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                    Business Impact
                  </span>
                </span>
              </h1>
            </div>

            <div className="space-y-4">
              <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
                Hi, I'm <span className="text-white font-semibold">Anuj Kumar Rajput</span> — a BCA graduate with strong
                analytical and project execution skills. Proficient in Excel, Power BI, SQL, Python, and Jira.
                Virtual experience with{' '}
                <span className="text-cyan-400 font-medium">Deloitte</span> and{' '}
                <span className="text-cyan-400 font-medium">Tata Group</span> via Forage.
              </p>

              <p className="text-sm text-slate-500 max-w-xl">
                Seeking opportunities in Project Management, Project Analyst, Reporting Analyst, and Business Analyst
                environments where strong governance, reporting, and analytical capabilities are valued.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-4">
              <a
                href="#projects"
                className="group flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-7 py-3 rounded-full transition-all duration-200 text-sm shadow-lg shadow-cyan-500/25"
              >
                View My Work
                <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
              </a>
              <a
                href="src\file\Anujkumar_BusinessAnalyst_Resume.pdf"
                className="flex items-center gap-2 border border-slate-700 hover:border-cyan-500/50 text-white hover:text-cyan-400 font-semibold px-7 py-3 rounded-full transition-all duration-200 text-sm bg-slate-900/50"
              >
                <Download size={16} />
                Download Resume
              </a>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-5">
              <a
                href="https://www.linkedin.com/in/anujkumar-rajput/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-200"
              >
                <Linkedin size={17} />
              </a>
              <a
                href="https://github.com/Anujkumar-27"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-200"
              >
                <Github size={17} />
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-6">
              {[
                { value: '5+', label: 'Tools & Platforms' },
                { value: '3', label: 'Analytics Projects' },
                { value: '6', label: 'Certifications' },
                { value: '8.81', label: 'CGPA' },
              ].map((s) => (
                <div key={s.label} className="text-center sm:text-left">
                  <div className="text-2xl font-bold text-white">{s.value}</div>
                  <div className="text-xs text-slate-500">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[430px]">
            <div className="absolute -inset-10 rounded-[2.5rem] bg-gradient-to-br from-cyan-500/20 via-slate-900/10 to-blue-500/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-700/80 bg-slate-950/70 shadow-2xl shadow-cyan-500/10">
              <img
                src="src\file\profile-photo.png"
                alt="Anuj Kumar Rajput"
                className="h-[520px] w-full object-cover object-top sm:h-[560px]"
              />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/95 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown size={14} className="animate-bounce" />
      </div>
    </section>
  );
}
