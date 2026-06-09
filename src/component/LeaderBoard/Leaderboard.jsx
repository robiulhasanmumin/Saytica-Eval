'use client';

import React, { useState, useMemo } from 'react';
import modelsData from '../../data/models.json';
import LeaderboardHeader from './LeaderboardHeader';
import TopPerformerBanner from './TopPerformerBanner';
import LeaderboardControls from './LeaderboardControls';
import ModelRow from './ModelRow';

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
       <LeaderboardHeader totalModels={modelsData.length} />

       <TopPerformerBanner stats={stats} />

       <LeaderboardControls 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm}
        sortField={sortField} 
        setSortField={setSortField}
        sortDirection={sortDirection} 
        setSortDirection={setSortDirection}
      />

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
              processedModels.map((model) => (
                 <ModelRow 
                  key={model.id}
                  model={model}
                  stats={stats}
                  getAccuracyMetrics={getAccuracyMetrics}
                  formatDate={formatDate}
                />
              ))
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