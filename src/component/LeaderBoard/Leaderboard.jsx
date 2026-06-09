'use client';

import React, { useState, useMemo } from 'react';
import modelsData from '../../data/models.json';

export default function Leaderboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState('accuracy');
  const [sortDirection, setSortDirection] = useState('desc');

   const stats = useMemo(() => {
    let topAcc = { val: -1, id: null, model: null };
    let minLatency = { val: Infinity, id: null };
    let minCost = { val: Infinity, id: null };

    modelsData.forEach((m) => {
      if (m.accuracy != null && m.accuracy > topAcc.val) {
        topAcc = { val: m.accuracy, id: m.id, model: m };
      }
      if (m.latencyMs != null && m.latencyMs > 0 && m.latencyMs < minLatency.val) {
        minLatency = { val: m.latencyMs, id: m.id };
      }
      if (m.costPer1k != null && m.costPer1k > 0 && m.costPer1k < minCost.val) {
        minCost = { val: m.costPer1k, id: m.id };
      }
    });

    return { topAcc, minLatency, minCost };
  }, []);

  // filter + sort logic
  const processedModels = useMemo(() => {
    return [...modelsData]
      .filter((model) => {
        const query = searchTerm.toLowerCase();
        return (
          model.name?.toLowerCase().includes(query) ||
          model.provider?.toLowerCase().includes(query)
        );
      })
      .sort((a, b) => {
        let aVal = a[sortField];
        let bVal = b[sortField];

        if (aVal == null) return 1;
        if (bVal == null) return -1;

         if (sortField === 'evaluatedAt') {
          return sortDirection === 'asc' 
            ? new Date(aVal) - new Date(bVal) 
            : new Date(bVal) - new Date(aVal);
        }

        if (typeof aVal === 'string') {
          return sortDirection === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
        }
        return sortDirection === 'asc' ? aVal - bVal : bVal - aVal;
      });
  }, [searchTerm, sortField, sortDirection]);

   const getAccuracyMetrics = (val) => {
    if (val == null) return { barBg: 'bg-slate-200 dark:bg-slate-800', textColor: 'text-slate-400' };
    const pct = val * 100;
    if (pct >= 92) return { barBg: 'bg-emerald-500', textColor: 'text-emerald-600 dark:text-emerald-400' };
    if (pct >= 85) return { barBg: 'bg-amber-500', textColor: 'text-amber-600 dark:text-amber-500' };
    return { barBg: 'bg-rose-500', textColor: 'text-rose-600 dark:text-rose-500' };
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return 'N/A';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="space-y-8 pb-12">
      
       <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Model Leaderboard</h1>
          <p className="text-base text-slate-500 dark:text-slate-400 mt-2">
            Compare evaluated models by accuracy, latency, and cost.
          </p>
        </div>
        <div className="text-sm font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 px-4 py-2 rounded-full border border-slate-200/60 dark:border-slate-800/60 shadow-sm">
          {modelsData.length} models
        </div>
      </div>

      {/*TOP PERFORMER BANNER*/}
      {stats.topAcc.model && (
        <div className="bg-gradient-to-r from-indigo-600 to-violet-600 rounded-3xl p-7 text-white shadow-xl shadow-indigo-600/20 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 transform transition-all hover:scale-[1.01]">
          <div className="flex items-center gap-5">
            <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 text-3xl shadow-inner">
              🏆
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest font-black text-indigo-200">Top Performer</p>
              <h2 className="text-2xl font-black mt-1 tracking-tight">{stats.topAcc.model.name}</h2>
              <p className="text-sm text-indigo-100/90 mt-0.5">by {stats.topAcc.model.provider}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-10 md:gap-14 w-full md:w-auto justify-between md:justify-end border-t border-white/10 md:border-none pt-5 md:pt-0">
            <div className="text-center md:text-left">
              <span className="block text-xs text-indigo-200 font-semibold uppercase tracking-wider">Accuracy</span>
              <span className="text-2xl font-black tracking-tight">{(stats.topAcc.model.accuracy * 100).toFixed(1)}%</span>
            </div>
            <div className="text-center md:text-left">
              <span className="block text-xs text-indigo-200 font-semibold uppercase tracking-wider">Latency</span>
              <span className="text-2xl font-black tracking-tight">{stats.topAcc.model.latencyMs ?? 'N/A'} <span className="text-sm font-normal text-indigo-200/80">ms</span></span>
            </div>
            <div className="text-center md:text-left">
              <span className="block text-xs text-indigo-200 font-semibold uppercase tracking-wider">Cost / 1k</span>
              <span className="text-2xl font-black tracking-tight">
                {stats.topAcc.model.costPer1k != null ? `$${stats.topAcc.model.costPer1k.toFixed(4)}` : 'N/A'}
              </span>
            </div>
          </div>
        </div>
      )}

       <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
         <div className="relative w-full sm:max-w-md">
          <input
            type="text"
            placeholder="Search model or provider..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 py-3 text-base bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-900 dark:text-white"
          />
          <span className="absolute left-4 top-3.5 text-slate-400 text-base">🔍</span>
        </div>

         <div className="flex items-center gap-3 w-full sm:w-auto justify-end---">
          <span className="text-sm font-bold text-slate-400 dark:text-slate-500 whitespace-nowrap uppercase tracking-wider">Sort by</span>
          <select
            value={sortField}
            onChange={(e) => setSortField(e.target.value)}
            className="bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-2xl px-4 py-3 text-sm font-bold text-slate-700 dark:text-slate-300 focus:outline-none cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors"
          >
            <option value="accuracy">Accuracy Score</option>
            <option value="latencyMs">Response Latency</option>
            <option value="costPer1k">Cost / 1k tokens</option>
            <option value="evaluatedAt">Evaluation Date</option>
          </select>
          
          <button
            onClick={() => setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')}
            className="p-3 bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-2xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-bold cursor-pointer transition-colors"
          >
            {sortDirection === 'asc' ? '▲' : '▼'}
          </button>
        </div>
      </div>

       <div className="overflow-x-auto border border-slate-200/60 dark:border-slate-800/60 rounded-3xl bg-white dark:bg-slate-950 shadow-md">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="border-b border-slate-200/80 dark:border-slate-800/80 bg-slate-50/40 dark:bg-slate-900/10 text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest select-none">
              <th className="py-5 px-6 w-1/3 text-sm">Model Profile</th>
              <th className="py-5 px-4 w-1/4 text-sm">Accuracy Rate</th>
              <th className="py-5 px-4 text-sm">Latency Rate</th>
              <th className="py-5 px-4 text-sm">Cost / 1k</th>
              <th className="py-5 px-6 text-right text-sm">Evaluated</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-900/60 text-base font-semibold">
            {processedModels.length > 0 ? (
              processedModels.map((model) => {
                const metrics = getAccuracyMetrics(model.accuracy);
                return (
                  <tr key={model.id} className="hover:bg-slate-50/40 dark:hover:bg-slate-900/10 transition-all group">
                    
                     <td className="py-5 px-6">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="text-base font-extrabold text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          {model.name}
                        </span>
                        
                      
                        {model.id === stats.topAcc.id && (
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200/40 shadow-sm">
                            ✨ Most Accurate
                          </span>
                        )}
                        {model.id === stats.minLatency.id && (
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-extrabold bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border border-indigo-200/40 shadow-sm">
                            ⚡ Fastest
                          </span>
                        )}
                        {model.id === stats.minCost.id && (
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-extrabold bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-500 border border-amber-200/40 shadow-sm">
                            💰 Cheapest
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-slate-400 dark:text-slate-500 mt-1 font-normal">
                        by {model.provider}
                      </div>
                    </td>

                    {/* accuracy */}
                    <td className="py-5 px-4">
                      <div className="flex flex-col justify-center max-w-[160px] w-full">
                        <span className={`text-base font-black ${metrics.textColor}`}>
                          {model.accuracy != null ? `${(model.accuracy * 100).toFixed(1)}%` : 'N/A'}
                        </span>
                        {model.accuracy != null && (
                          <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full mt-2 overflow-hidden shadow-inner">
                            <div 
                              className={`h-full rounded-full ${metrics.barBg} transition-all duration-500`}
                              style={{ width: `${model.accuracy * 100}%` }}
                            />
                          </div>
                        )}
                      </div>
                    </td>

                    {/* latency */}
                    <td className="py-5 px-4 text-slate-800 dark:text-slate-200 text-base font-bold">
                      {model.latencyMs != null ? (
                        <>
                          {model.latencyMs} <span className="text-xs text-slate-400 font-normal">ms</span>
                        </>
                      ) : (
                        <span className="text-xs text-slate-400 dark:text-slate-500 font-normal">N/A</span>
                      )}
                    </td>

                    {/* cost */}
                    <td className="py-5 px-4 text-slate-900 dark:text-slate-100 text-base font-black">
                      {model.costPer1k != null ? (
                        `$${Number(model.costPer1k).toFixed(4)}`
                      ) : (
                        <span className="text-xs text-slate-400 dark:text-slate-500 font-normal">N/A</span>
                      )}
                    </td>

                    {/*date */}
                    <td className="py-5 px-6 text-right text-xs font-semibold text-slate-400 dark:text-slate-500 whitespace-nowrap">
                      {formatDate(model.evaluatedAt)}
                    </td>

                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-20 text-slate-400 dark:text-slate-500 text-lg font-bold">
                  No matching models found in system logs.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}