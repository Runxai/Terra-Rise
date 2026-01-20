
import React from 'react';
import { motion } from 'framer-motion';

const LogoShowcase: React.FC<{ dark: boolean }> = ({ dark }) => {
  const logos = [
    {
      name: 'The Monogram',
      render: (isDark: boolean) => (
        <div className={`p-10 rounded-3xl flex flex-col items-center gap-4 ${isDark ? 'bg-slate-800' : 'bg-white'} shadow-xl border ${isDark ? 'border-slate-700' : 'border-slate-100'}`}>
          <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center text-white font-black text-3xl shadow-lg shadow-blue-500/30">TR</div>
          <span className="font-display font-bold text-xl tracking-tight">TERRA RISE</span>
        </div>
      )
    },
    {
      name: 'The Horizon',
      render: (isDark: boolean) => (
        <div className={`p-10 rounded-3xl flex flex-col items-center gap-4 ${isDark ? 'bg-slate-800' : 'bg-white'} shadow-xl border ${isDark ? 'border-slate-700' : 'border-slate-100'}`}>
           <svg width="60" height="40" viewBox="0 0 60 40" className="text-amber-500">
             <path d="M10 30 L30 10 L50 30" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
             <path d="M5 35 H55" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
           </svg>
          <span className="font-display font-bold text-xl tracking-tight uppercase">TerraRise</span>
        </div>
      )
    },
    {
      name: 'Modern Peak',
      render: (isDark: boolean) => (
        <div className={`p-10 rounded-3xl flex flex-col items-center gap-4 ${isDark ? 'bg-slate-800' : 'bg-white'} shadow-xl border ${isDark ? 'border-slate-700' : 'border-slate-100'}`}>
          <div className="flex items-end gap-1">
            <div className="w-3 h-6 bg-blue-500 rounded-sm"></div>
            <div className="w-3 h-10 bg-blue-600 rounded-sm"></div>
            <div className="w-3 h-8 bg-amber-500 rounded-sm"></div>
          </div>
          <span className="font-display font-black text-2xl tracking-tighter">TR <span className="font-light">BUILD</span></span>
        </div>
      )
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-display font-bold text-center mb-16">Choose Your Style</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {logos.map((logo, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="space-y-4"
            >
              {logo.render(false)}
              {logo.render(true)}
              <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400">{logo.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoShowcase;
