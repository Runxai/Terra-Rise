
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Language } from './types';
import { translations } from './translations';
import Calculator from './components/Calculator';
import IntersectionBlock from './components/IntersectionBlock';
import DetailsPage from './components/DetailsPage';
import BlueprintVisual from './components/BlueprintVisual';
import { 
  Sun, Moon, ChevronRight, MapPin, 
  Sparkles, Hammer, Key, 
  DollarSign, Ruler, X, Check, ArrowUpRight, FileText,
  Home, Menu, ArrowUp, Cpu, CheckCircle2
} from 'lucide-react';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [isDark, setIsDark] = useState(false);
  const [view, setView] = useState<'home' | 'details'>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigateToDetails = () => {
    setView('details');
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setView('home');
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const stepsIcons = [
    <DollarSign size={18} />,
    <MapPin size={18} />,
    <Ruler size={18} />,
    <Hammer size={18} />,
    <Key size={18} />
  ];

  const LanguageSwitcher = ({ mobile = false }: { mobile?: boolean }) => (
    <div className={`flex gap-0.5 bg-slate-100 dark:bg-slate-800 p-0.5 rounded-full border border-slate-200 dark:border-slate-700 ${mobile ? 'scale-90 md:scale-100' : ''}`}>
      {['en', 'uk', 'ru'].map((l) => (
        <button 
          key={l}
          onClick={() => setLang(l as Language)}
          className={`w-7 h-7 md:w-8 md:h-8 rounded-full text-[9px] md:text-[10px] font-bold uppercase transition-all flex items-center justify-center ${lang === l ? 'bg-white dark:bg-slate-700 shadow-sm text-blue-600' : 'text-slate-400'}`}
        >
          {l}
        </button>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-brand-light dark:bg-brand-dark transition-colors duration-500 overflow-x-hidden font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-[100] glass border-b border-slate-200/50 dark:border-slate-800/50 px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer group" onClick={handleBackToHome}>
          <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg overflow-hidden relative">
            <motion.div
              whileHover={{ y: -4, scale: 1.15, rotate: [0, -5, 5, 0] }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="relative z-10"
            >
              <Home size={24} strokeWidth={2.5} />
            </motion.div>
            <div className="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-20 transition-opacity"></div>
          </div>
          <span className="font-display font-bold text-base md:text-xl tracking-tighter dark:text-white uppercase">TERRA RISE</span>
        </div>

        <div className="flex items-center gap-1.5 md:gap-4">
          <LanguageSwitcher mobile={true} />
          
          <button 
            onClick={() => setIsDark(!isDark)}
            className="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center text-slate-900 dark:text-white"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[110] bg-white dark:bg-slate-950 p-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-12">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                  <Home size={20} />
                </div>
                <span className="font-display font-bold text-lg dark:text-white uppercase tracking-tighter">TERRA RISE</span>
              </div>
              <button onClick={() => setIsMenuOpen(false)} className="p-2"><X size={28} className="dark:text-white" /></button>
            </div>
            
            <div className="flex flex-col gap-8 flex-grow">
              <div className="flex flex-col gap-6">
                {['About', 'Price', 'Styles', 'Chat'].map((item) => (
                  <button 
                    key={item} 
                    className="text-4xl font-display font-black text-left dark:text-white tracking-tight"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </button>
                ))}
              </div>
              
              <div className="mt-auto space-y-4 pb-10">
                <button 
                  onClick={handleNavigateToDetails}
                  className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-lg shadow-xl shadow-blue-600/20 flex items-center justify-center gap-3"
                >
                  View Blueprint Details
                  <ArrowUpRight size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {view === 'home' ? (
          <motion.main key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {/* 1. Hero Section */}
            <section className="pt-24 md:pt-44 pb-12 md:pb-28 px-4 md:px-6 relative overflow-hidden bg-white dark:bg-brand-dark">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 dark:bg-blue-900/5 -z-10 hidden lg:block"></div>
              <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 rounded-full text-xs font-black uppercase tracking-widest mb-8 shadow-sm">
                    <Sparkles size={14} className="animate-pulse" />
                    {t.badCredit}
                  </div>
                  <h1 className="text-4xl md:text-7xl font-display font-black leading-[1.1] mb-8 dark:text-white tracking-tight">
                    {t.hero.title.split('.').map((s, i) => i === 0 ? <span key={i}>{s}.<br/></span> : <span key={i} className="text-blue-600">{s}</span>)}
                  </h1>
                  <p className="text-base md:text-xl text-slate-500 dark:text-slate-400 mb-10 max-w-lg leading-relaxed font-medium">
                    {t.hero.subtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button onClick={handleNavigateToDetails} className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-black text-lg shadow-2xl shadow-blue-600/30 hover:bg-blue-700 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3">
                      {t.hero.cta}
                      <ChevronRight size={20} strokeWidth={3} />
                    </button>
                    <button className="px-10 py-5 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-2xl font-black text-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-all">
                      Learn More
                    </button>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="relative group"
                >
                  <div className="absolute -inset-4 bg-blue-600/10 rounded-[2.5rem] blur-2xl group-hover:bg-blue-600/20 transition-all duration-700"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200" 
                    className="relative rounded-[2rem] md:rounded-[3rem] shadow-2xl border-8 border-white dark:border-slate-800 z-10 object-cover aspect-[4/3] lg:aspect-auto" 
                    alt="Home" 
                  />
                </motion.div>
              </div>
            </section>

            {/* 2. How It Works */}
            <section id="about" className="py-16 md:py-32 px-4 md:px-6 bg-slate-50 dark:bg-slate-900/10 flex flex-col items-center">
              <div className="max-w-7xl mx-auto w-full">
                <div className="text-center mb-12 md:mb-20">
                  <h2 className="text-4xl md:text-6xl font-display font-black mb-6 dark:text-white tracking-tight">{t.steps.title}</h2>
                  <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
                </div>
                
                <div className="relative flex flex-col gap-4 md:grid md:grid-cols-5 md:gap-6 md:items-start">
                  <div className="absolute left-[23px] top-6 bottom-6 w-0.5 bg-slate-200 dark:bg-slate-800 md:hidden overflow-hidden">
                    <motion.div 
                      initial={{ height: 0 }}
                      whileInView={{ height: '100%' }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      className="w-full bg-blue-500"
                    />
                  </div>

                  {[1, 2, 3, 4, 5].map((num, i) => (
                    <motion.div 
                      key={num}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.15, duration: 0.5 }}
                      viewport={{ once: true, margin: "-50px" }}
                      className="flex md:flex-col gap-5 md:gap-8 items-center md:items-center relative z-10"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 md:w-20 md:h-20 bg-white dark:bg-slate-800 rounded-2xl md:rounded-[2rem] flex items-center justify-center shadow-lg border border-slate-100 dark:border-slate-700 relative group transition-transform hover:scale-110">
                          <span className="absolute -top-1.5 -right-1.5 md:-top-3 md:-right-3 w-6 h-6 md:w-10 md:h-10 bg-slate-900 text-white rounded-full flex items-center justify-center text-[10px] md:text-base font-black border-2 border-white dark:border-slate-800">
                            {num}
                          </span>
                          <div className="text-blue-600 dark:text-blue-400 md:scale-125">
                            {stepsIcons[i]}
                          </div>
                        </div>
                      </div>
                      <div className="flex-grow md:text-center">
                        <h3 className="text-sm md:text-lg font-display font-black dark:text-white uppercase tracking-tight mb-1 md:mb-3 leading-tight">
                          {t.steps[`step${num}`].title}
                        </h3>
                        <p className="text-[11px] md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed md:px-4">
                          {t.steps[`step${num}`].desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            <Calculator lang={lang} />
            <IntersectionBlock lang={lang} onNavigate={handleNavigateToDetails} />
            
            {/* 5. Comparison Section - Precise Proportion Adjustment */}
            <section className="py-20 md:py-32 px-4 md:px-6 bg-[#fcfdfe] dark:bg-brand-dark overflow-hidden">
              <div className="max-w-6xl mx-auto flex flex-col gap-10 md:grid md:grid-cols-2 md:gap-12">
                
                {/* Left Card: Buying Resale */}
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-[3rem] p-10 md:p-14 shadow-[0_15px_45px_rgba(0,0,0,0.03)] border border-slate-100 dark:border-slate-800 flex flex-col"
                >
                  <div className="flex items-center gap-5 mb-14">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#fef2f2] text-[#ef4444] shrink-0 border border-[#fee2e2]">
                      <X size={24} strokeWidth={4} />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-display font-black text-[#1e293b] tracking-tight">Buying Resale</h3>
                  </div>
                  
                  <div className="space-y-10 mb-14">
                    <div className="flex justify-between items-center pb-6 border-b border-slate-50">
                      <span className="text-base md:text-lg text-slate-400 font-bold">Total Cost</span>
                      <span className="text-3xl md:text-5xl font-black text-[#1e293b] tracking-tighter">$550k</span>
                    </div>
                    <div className="flex justify-between items-center pb-6 border-b border-slate-50">
                      <span className="text-base md:text-lg text-slate-400 font-bold">Repair Costs</span>
                      <span className="text-3xl md:text-4xl font-black text-[#ef4444] tracking-tighter">+$25k</span>
                    </div>
                  </div>

                  <div className="mt-auto bg-[#f8fafc] p-10 rounded-[2.5rem] flex justify-between items-center opacity-30">
                    <span className="text-slate-400 font-black uppercase text-[10px] tracking-[0.4em]">EQUITY</span>
                    <span className="text-4xl font-black text-slate-300 tracking-tighter">$0</span>
                  </div>
                </motion.div>

                {/* Right Card: Building TerraRise */}
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-[#0f172a] rounded-[3rem] p-10 md:p-14 shadow-2xl flex flex-col relative overflow-hidden group"
                >
                  <div className="flex items-center gap-5 mb-14">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#1e293b] text-[#3b82f6] shrink-0 border border-[#334155]">
                      <Check size={24} strokeWidth={4} />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-display font-black text-white tracking-tight">Building TerraRise</h3>
                  </div>
                  
                  <div className="space-y-10 mb-14">
                    <div className="flex justify-between items-center pb-6 border-b border-slate-700/30">
                      <span className="text-base md:text-lg text-slate-400 font-bold">Total Cost</span>
                      <span className="text-3xl md:text-5xl font-black text-white tracking-tighter">$540k</span>
                    </div>
                  </div>

                  <div className="mt-auto bg-[#2563eb] p-10 md:p-12 rounded-[2.5rem] flex justify-between items-center shadow-[0_20px_50px_-10px_rgba(37,99,235,0.4)] transition-all group-hover:scale-[1.02] cursor-pointer">
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] md:text-sm font-black uppercase tracking-[0.15em] text-white leading-tight">INSTANT<br/>EQUITY</span>
                      <span className="text-[9px] md:text-[10px] font-bold text-blue-100/60 leading-none mt-1">(After Appraisals)</span>
                    </div>
                    <div className="flex items-center gap-3 text-white">
                      <ArrowUpRight size={36} strokeWidth={4} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      <span className="text-4xl md:text-7xl font-black tracking-tighter">+$150k</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* 6. Digital Twin Section */}
            <section className="py-20 md:py-32 px-4 md:px-6 bg-brand-dark relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:24px_24px]"></div>
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24 items-center relative z-10">
                <div className="w-full md:w-1/2">
                  <div className="inline-flex items-center gap-2 text-blue-400 font-mono text-[10px] uppercase tracking-[0.2em] mb-8 bg-blue-400/10 px-5 py-2 rounded-xl border border-blue-400/20">
                    <Cpu size={16} />
                    {t.digitalTwin.tag}
                  </div>
                  <h2 className="text-4xl md:text-7xl font-display font-black text-white mb-8 leading-[1.1] tracking-tight">
                    {t.digitalTwin.title} <br/><span className="text-blue-500">{t.digitalTwin.titleAccent}.</span>
                  </h2>
                  <p className="text-base md:text-xl text-slate-400 mb-10 leading-relaxed font-medium">
                    {t.digitalTwin.desc}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-10">
                     <div className="flex items-center gap-3 text-sm md:text-lg text-slate-300 font-mono bg-white/5 p-4 rounded-xl border border-white/10">
                        <FileText size={20} className="text-blue-500" />
                        [FLOOR_PLANS]
                     </div>
                     <div className="flex items-center gap-3 text-sm md:text-lg text-slate-300 font-mono bg-white/5 p-4 rounded-xl border border-white/10">
                        <Ruler size={20} className="text-blue-500" />
                        [3D_MODELING]
                     </div>
                  </div>

                  <button 
                    onClick={handleNavigateToDetails}
                    className="w-full md:w-auto px-12 py-5 bg-white text-slate-900 rounded-2xl font-black text-lg hover:bg-blue-500 hover:text-white transition-all flex items-center justify-center gap-4 shadow-2xl"
                  >
                    View Project Details
                    <ArrowUpRight size={24} />
                  </button>
                </div>
                
                <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-[550px]">
                   <BlueprintVisual />
                </div>
              </div>
            </section>
          </motion.main>
        ) : (
          <motion.div key="details" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <DetailsPage />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 50 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-14 h-14 bg-blue-600 text-white rounded-full shadow-2xl z-[90] flex items-center justify-center border-[4px] border-white dark:border-slate-800 ring-8 ring-blue-600/10 active:scale-90 transition-transform"
          >
            <ArrowUp size={28} strokeWidth={4} />
          </motion.button>
        )}
      </AnimatePresence>

      <footer className="py-20 md:py-28 px-4 md:px-6 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 text-center">
        <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-600 rounded-[1.2rem] flex items-center justify-center text-white mx-auto mb-10 shadow-2xl shadow-blue-600/30">
          <Home size={30} />
        </div>
        <h3 className="text-3xl md:text-5xl font-display font-black mb-6 dark:text-white tracking-tight uppercase">Terra Rise.</h3>
        <p className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-[0.4em]">© 2025 Architectural Unit. Chicago Standards.</p>
      </footer>
    </div>
  );
};

export default App;
