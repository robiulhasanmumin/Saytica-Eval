'use client';
import React from 'react';

export default function TaskCard({ task, onStatusChange }) {
  return (
    <div className="bg-white dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800/80 rounded-2xl p-5 shadow-sm space-y-4 hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all group">
      <h4 className="text-base font-extrabold text-slate-800 dark:text-slate-200 leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
        {task.title}
      </h4>
      
      <div className="space-y-1.5 text-xs font-semibold text-slate-400">
        <div className="flex items-center gap-1.5">
          <span>📁</span>
          <span className="truncate">{task.projectName}</span>
        </div>
        
        <div className="flex items-center gap-1.5">
          <span>👤</span>
          {task.assignedTo ? (
            <span className="text-slate-500 dark:text-slate-400">{task.assignedTo}</span>
          ) : (
            <span className="text-rose-500 dark:text-rose-400 font-extrabold italic bg-rose-500/10 px-2 py-0.5 rounded-lg text-[11px] tracking-wide animate-pulse">
              ⚠️ Unassigned
            </span>
          )}
        </div>
      </div>

      <div className="pt-1">
        <select
          value={task.status}
          onChange={(e) => onStatusChange(task.id, e.target.value)}
          className={`w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2 text-xs font-extrabold cursor-pointer focus:outline-none transition-colors ${
            task.status === 'done'
              ? 'text-emerald-600 dark:text-emerald-400'
              : task.status === 'in_progress'
              ? 'text-indigo-600 dark:text-indigo-400'
              : 'text-amber-600 dark:text-amber-500'
          }`}
        >
          <option value="pending" className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white font-bold">⏳ Pending</option>
          <option value="in_progress" className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white font-bold">⚙️ In Progress</option>
          <option value="done" className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white font-bold">✅ Done</option>
        </select>
      </div>
    </div>
  );
}