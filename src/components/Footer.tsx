import { BarChart2, Linkedin, Github, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/60 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-white font-bold">
            <BarChart2 size={20} className="text-cyan-400" />
            <span>Anuj<span className="text-cyan-400">.</span></span>
          </div>

          <p className="text-slate-500 text-xs text-center">
            Data Analyst · Business Analyst · Project Analyst &mdash; Open to Junior Roles
          </p>

          <div className="flex items-center gap-3">
            {[
              { href: 'https://www.linkedin.com/in/anujkumar-rajput/', icon: Linkedin },
              { href: 'https://github.com/Anujkumar-27', icon: Github },
              { href: 'mailto:rajputanujkumar27in@gmail.com', icon: Mail },
            ].map(({ href, icon: Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-slate-800 flex items-center justify-center text-slate-500 hover:text-cyan-400 hover:border-slate-700 transition-all"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-slate-800/50 text-center">
          <p className="text-slate-600 text-xs flex items-center justify-center gap-1.5">
            Built with <Heart size={11} className="text-rose-500" /> by Anuj Kumar Rajput &mdash; &copy; 2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
