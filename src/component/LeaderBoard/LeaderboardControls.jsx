'use client';
import React from 'react';

export default function LeaderboardControls({ 
  searchTerm, 
  setSearchTerm, 
  sortField, 
  setSortField, 
  sortDirection, 
  setSortDirection 
}) {
  return (
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

       <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
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
  );
}