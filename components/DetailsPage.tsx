
import React from 'react';
import { motion } from 'framer-motion';
import { Ruler, Layout, Palette, Zap, CheckCircle2, ArrowRight, Building2, Eye, Compass, Layers } from 'lucide-react';
import BlueprintVisual from './BlueprintVisual';

const DetailsPage: React.FC = () => {
  return (
    <div className="pt-24 pb-24 bg-white dark:bg-brand-dark">
      {/* Hero Header */}
      <section className="px-6 py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs font-black uppercase tracking-widest mb-8"
          >
            <Building2 size={16} />
            The Digital Build Framework
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-black dark:text-white leading-tight mb-8"
          >
            Ваш дім у деталях. <br /> <span className="text-blue-600">Цифровий двійник.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            Від першого ескізу до фінального рендеру — ми створюємо бездоганний проект вашого життя. Жодних помилок, лише чиста архітектурна математика.
          </motion.p>
        </div>
      </section>

      {/* 1. Architectural Blueprint Section */}
      <section className="px-6 py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-14 h-14 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-2xl flex items-center justify-center mb-8">
              <Compass size={28} />
            </div>
            <h2 className="text-4xl font-display font-black text-slate-900 dark:text-white mb-6">Архітектурне проектування</h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
              Ми розробляємо детальні технічні креслення, які враховують кожен міліметр. Наші плани включають:
            </p>
            <div className="space-y-4 mb-10">
              {[
                'Оптимальне планування простору',
                'Розрахунок інженерних мереж',
                'Геологічне моделювання фундаменту',
                'Аеродинамічні властивості криші'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 font-bold text-slate-700 dark:text-slate-200">
                  <CheckCircle2 size={20} className="text-blue-600" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[400px] md:h-[500px]"
          >
            <BlueprintVisual />
          </motion.div>
        </div>
      </section>

      {/* Concept Block */}
      <section className="px-6 py-32 overflow-hidden bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="w-20 h-20 bg-blue-600 text-white rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-blue-600/30">
            <Layers size={40} />
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-black mb-8">Майбутнє — це <span className="text-blue-600">Digital Twin.</span></h2>
          <p className="text-xl text-slate-400 mb-16 leading-relaxed">
            Цифровий двійник — це не просто картинка. Це база даних вашого дому. 
            Кожна труба, кожен кабель та кожен гвинт задокументовані у цифровому просторі для майбутнього обслуговування.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              { icon: <Zap />, title: 'Energy Model', desc: 'Прогнозуємо ваші витрати на опалення з точністю до 95%.' },
              { icon: <CheckCircle2 />, title: 'Zero Conflicts', desc: 'Система автоматично знаходить перетини труб і балок до початку робіт.' },
              { icon: <Eye />, title: 'Live Progress', desc: 'Ви бачите хід будівництва у реальному часі через 3D-інтерфейс.' }
            ].map((feature, i) => (
              <div key={i} className="p-8 bg-slate-800 rounded-[2.5rem] border border-slate-700">
                <div className="text-blue-400 mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-display font-black mb-3 text-white">{feature.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto bg-[#0f172a] rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-600/10 pointer-events-none"></div>
          <h3 className="text-4xl font-display font-black mb-6">Готові побачити проект свого дому?</h3>
          <p className="text-slate-400 mb-10 max-w-lg mx-auto">Зв'яжіться з нашим архітектурним бюро сьогодні і почніть створення вашого цифрового двійника.</p>
          <button className="px-10 py-5 bg-white text-slate-900 rounded-2xl font-black text-lg hover:bg-blue-500 hover:text-white transition-all transform hover:scale-105 flex items-center gap-3 mx-auto">
            Почати проектування
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default DetailsPage;
