
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Language } from '../types';
import { translations } from '../translations';

const ComparisonChart: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = translations[lang];

  const data = [
    { year: 'Year 0', old: 400000, new: 450000 },
    { year: 'Year 1', old: 410000, new: 480000 },
    { year: 'Year 2', old: 415000, new: 520000 },
    { year: 'Year 3', old: 425000, new: 580000 },
    { year: 'Year 4', old: 430000, new: 650000 },
    { year: 'Year 5', old: 440000, new: 750000 },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">{t.comparison.title}</h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Buying an old home in Chicago often hides costs: maintenance, outdated insulation, and structural risks. 
              A new Terra Rise home appreciates faster because it meets modern energy standards and aesthetic trends.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-emerald-500"></div>
                <span>{t.comparison.newHome}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-slate-500"></div>
                <span>{t.comparison.oldHome}</span>
              </div>
            </div>
          </div>

          <div className="h-[400px] w-full bg-slate-800/50 p-6 rounded-3xl border border-white/10">
            <h3 className="text-center text-sm uppercase tracking-widest text-slate-400 mb-4">{t.comparison.investmentGrowth}</h3>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorNew" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorOld" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#64748b" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#64748b" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                <XAxis dataKey="year" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" tickFormatter={(value) => `$${value/1000}k`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Area type="monotone" dataKey="new" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorNew)" name={t.comparison.newHome} />
                <Area type="monotone" dataKey="old" stroke="#64748b" strokeWidth={2} fillOpacity={1} fill="url(#colorOld)" name={t.comparison.oldHome} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonChart;
