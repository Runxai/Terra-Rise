
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Language } from '../types';
import { translations } from '../translations';

const stylesData = [
  {
    id: 'modern',
    img: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1200',
    color: '#064e3b',
    features: ['Floor-to-ceiling glass', 'Steel skeletons', 'Minimalist landscaping']
  },
  {
    id: 'classic',
    img: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1200',
    color: '#451a03',
    features: ['Natural stone facades', 'Handcrafted oak', 'Grand entrances']
  },
  {
    id: 'scandi',
    img: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=1200',
    color: '#1e293b',
    features: ['Light woods', 'Functional hygge', 'Renewable energy']
  }
];

const DesignStyles: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = translations[lang];
  const [active, setActive] = useState(stylesData[0]);

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-slate-900">{t.styles.title}</h2>
              <p className="text-lg text-slate-500 mb-12 max-w-md">{t.styles.subtitle}</p>
              
              <div className="space-y-4">
                {stylesData.map((style) => (
                  <button
                    key={style.id}
                    onClick={() => setActive(style)}
                    className={`w-full group flex items-center justify-between p-6 rounded-2xl border-2 transition-all duration-500 ${active.id === style.id ? 'border-emerald-600 bg-emerald-50/50 scale-[1.02]' : 'border-slate-100 hover:border-slate-200'}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-3 h-3 rounded-full transition-colors ${active.id === style.id ? 'bg-emerald-600' : 'bg-slate-300'}`}></div>
                      <span className={`text-xl font-bold ${active.id === style.id ? 'text-emerald-900' : 'text-slate-500'}`}>
                        {t.styles[style.id]}
                      </span>
                    </div>
                    <div className={`opacity-0 group-hover:opacity-100 transition-opacity ${active.id === style.id ? 'opacity-100' : ''}`}>
                      <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 1.1, rotateY: -10 }}
                transition={{ duration: 0.8, ease: "circOut" }}
                className="relative z-10 aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white"
              >
                <img src={active.img} alt={active.id} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-12 flex flex-col justify-end text-white">
                  <div className="space-y-2">
                    {active.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm font-medium opacity-90">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-emerald-100 rounded-full -z-10 blur-3xl opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignStyles;
