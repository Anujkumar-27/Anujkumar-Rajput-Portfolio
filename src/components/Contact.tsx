import { Mail, Linkedin, Github, MapPin, Send, MessageSquare, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'rajputanujkumar27in@gmail.com', href: 'mailto:rajputanujkumar27in@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 96994 91315', href: 'tel:+919699491315' },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/anujkumar-rajput', href: 'https://www.linkedin.com/in/anujkumar-rajput/' },
    { icon: Github, label: 'GitHub', value: 'github.com/Anujkumar-27', href: 'https://github.com/Anujkumar-27' },
    { icon: MapPin, label: 'Location', value: 'Nandurbar, Maharashtra, India', href: null },
  ];

  return (
    <section id="contact" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3 text-center">Contact</p>
        <h2 className="text-4xl font-bold text-white mb-4 text-center">Let's Connect</h2>
        <p className="text-slate-400 text-center max-w-xl mx-auto mb-14 text-sm leading-relaxed">
          I'm actively seeking opportunities in Project Management, Project Analyst, Reporting Analyst,
          and Business Analyst roles. If you're a recruiter or hiring manager, I'd love to hear from you.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Left panel */}
          <div className="lg:col-span-2 space-y-5">
            <div className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-5">
                <MessageSquare size={16} className="text-cyan-400" />
                <h3 className="text-white font-semibold text-sm">Get In Touch</h3>
              </div>
              <div className="space-y-4">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-cyan-500/10 border border-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon size={14} className="text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-300 text-xs hover:text-cyan-400 transition-colors break-all"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-slate-300 text-xs">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-6">
              <div className="text-3xl font-bold text-white mb-1">Open</div>
              <div className="text-cyan-400 font-semibold text-sm mb-3">to New Opportunities</div>
              <p className="text-slate-400 text-xs leading-relaxed">
                Actively seeking roles in Project Management, Project Analyst, Reporting Analyst,
                Business Analyst, and Data Analytics. Available immediately.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-emerald-400 text-xs font-medium">Available for interviews</span>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3">
            <div className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-7">
              {sent ? (
                <div className="flex flex-col items-center justify-center h-64 text-center">
                  <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mb-4">
                    <Send size={22} className="text-emerald-400" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">Message Sent!</h3>
                  <p className="text-slate-400 text-sm">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-400 text-xs mb-1.5 font-medium">Name</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-slate-900/60 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-cyan-500/60 transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-400 text-xs mb-1.5 font-medium">Email</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-slate-900/60 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-cyan-500/60 transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-slate-400 text-xs mb-1.5 font-medium">Subject</label>
                    <input
                      type="text"
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full bg-slate-900/60 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-cyan-500/60 transition-colors"
                      placeholder="e.g., Business Analyst Role Opportunity"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-xs mb-1.5 font-medium">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-slate-900/60 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-cyan-500/60 transition-colors resize-none"
                      placeholder="Tell me about the opportunity..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold py-3 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2 text-sm"
                  >
                    <Send size={15} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
