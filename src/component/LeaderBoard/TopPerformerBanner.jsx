'use client';
import React from 'react';

export default function TopPerformerBanner({ stats }) {
  if (!stats.topAcc.model) return null;

  return (
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
  );
}