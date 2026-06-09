'use client';
import React from 'react';

export default function LeaderboardHeader({ totalModels }) {
  return (
    <div className="flex justify-between items-start">
      <div>
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Model Leaderboard</h1>
        <p className="text-base text-slate-500 dark:text-slate-400 mt-2">
          Compare evaluated models by accuracy, latency, and cost.
        </p>
      </div>
      <div className="text-sm font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 px-4 py-2 rounded-full border border-slate-200/60 dark:border-slate-800/60 shadow-sm">
        {totalModels} models
      </div>
    </div>
  );
}