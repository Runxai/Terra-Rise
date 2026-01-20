
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { translations } from '../translations';
import { Language } from '../types';

const Calculator: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = translations[lang].calculator;
  const [size, setSize] = useState(2000);
  const [tier, setTier] = useState(200);

  const tiers = [
    { price: 150, label: 'Standard', desc: 'Modern & Clean' },
    { price: 200, label: 'Premium', desc: 'Soulful & Detailed' },
    { price: 250, label: 'Luxury', desc: 'Pure Masterpiece' },
  ];

  return (
    <section id="calculator" className="py-12 md:py-24 px-4 md:px-6 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-slate-800 rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 shadow-2xl border border-slate-100 dark:border-slate-700">
          <h2 className="text-2xl md:text-4xl font-display font-black text-center mb-8 md:mb-12">{t.title}</h2>
          
          <div className="mb-8 md:mb-12">
            <div className="flex justify-between items-end mb-3 md:mb-4">
              <label className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-400">{t.area}</label>
              <span className="text-2xl md:text-3xl font-black text-blue-600">
                {size.toLocaleString()} <span className="text-xs md:text-sm font-normal text-slate-400">sq ft</span>
              </span>
            </div>
            <input 
              type="range" 
              min="800" 
              max="10000" 
              step="100"
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              className="w-full h-2 md:h-3 bg-slate-100 dark:bg-slate-700 rounded-full appearance-none cursor-pointer accent-blue-600"
            />
          </div>

          <div className="mb-8 md:mb-12">
             <label className="block text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 md:mb-6">{t.quality}</label>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
               {tiers.map((item) => (
                 <button 
                  key={item.label}
                  onClick={() => setTier(item.price)}
                  className={`p-4 md:p-6 rounded-2xl md:rounded-3xl border-2 text-left transition-all ${tier === item.price ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/10' : 'border-slate-100 dark:border-slate-700 hover:border-slate-200'}`}
                 >
                   <div className="flex justify-between items-start md:block">
                     <div>
                       <div className={`text-base md:text-lg font-bold ${tier === item.price ? 'text-blue-600' : 'text-slate-500'}`}>{item.label}</div>
                       <div className="text-[10px] md:text-xs text-slate-400 mt-0.5 md:mt-1">{item.desc}</div>
                     </div>
                     <div className="text-lg md:text-xl font-black md:mt-4">${item.price}/ft</div>
                   </div>
                 </button>
               ))}
             </div>
          </div>

          <div className="pt-8 md:pt-10 border-t border-slate-100 dark:border-slate-700 text-center">
            <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-400 mb-1 md:mb-2">{t.total}</div>
            <motion.div 
              key={size * tier}
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              className="text-4xl md:text-8xl font-display font-black text-slate-900 dark:text-white"
            >
              ${(size * tier).toLocaleString()}
            </motion.div>
            <p className="mt-4 md:mt-6 text-[10px] text-slate-400 font-bold uppercase tracking-tighter">* Final quote may vary based on specific Chicago lot permits.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
