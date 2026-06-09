'use client';
import React from 'react';

export default function ClientView({ stats, localTasks }) {
  return (
    <div className="space-y-8">
       <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white dark:bg-slate-950 border border-slate-200/70 dark:border-slate-800/80 rounded-2xl p-6 flex items-center gap-4 shadow-sm">
          <div className="p-3.5 bg-slate-100 dark:bg-slate-900 text-2xl rounded-xl">📋</div>
          <div>
            <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Total Tasks</span>
            <span className="text-2xl font-black">{stats.total}</span>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-950 border border-slate-200/70 dark:border-slate-800/80 rounded-2xl p-6 flex items-center gap-4 shadow-sm">
          <div className="p-3.5 bg-amber-500/10 text-2xl rounded-xl">⏳</div>
          <div>
            <span className="block text-xs font-bold text-amber-500 uppercase tracking-wider">Pending</span>
            <span className="text-2xl font-black text-amber-500">{stats.pending}</span>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-950 border border-slate-200/70 dark:border-slate-800/80 rounded-2xl p-6 flex items-center gap-4 shadow-sm">
          <div className="p-3.5 bg-indigo-500/10 text-2xl rounded-xl">⚙️</div>
          <div>
            <span className="block text-xs font-bold text-indigo-500 uppercase tracking-wider">In Progress</span>
            <span className="text-2xl font-black text-indigo-500">{stats.inProgress}</span>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-950 border border-slate-200/70 dark:border-slate-800/80 rounded-2xl p-6 flex items-center gap-4 shadow-sm">
          <div className="p-3.5 bg-emerald-500/10 text-2xl rounded-xl">✅</div>
          <div>
            <span className="block text-xs font-bold text-emerald-500 uppercase tracking-wider">Done</span>
            <span className="text-2xl font-black text-emerald-500">{stats.done}</span>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white dark:bg-slate-950 border border-slate-200/70 dark:border-slate-800/80 rounded-3xl p-7 shadow-md space-y-5">
        <div className="flex justify-between items-baseline">
          <div>
            <span className="text-xs uppercase font-extrabold tracking-widest text-slate-400">Overall Completion</span>
            <h2 className="text-3xl font-black text-indigo-600 dark:text-indigo-400 mt-1">{stats.completionRate}%</h2>
          </div>
          <span className="text-sm font-bold text-slate-400">
            <strong className="text-slate-800 dark:text-slate-200 font-extrabold">{stats.done}</strong> of {stats.total} done
          </span>
        </div>

        <div className="w-full bg-slate-100 dark:bg-slate-900 h-3 rounded-full overflow-hidden flex shadow-inner">
          <div className="bg-amber-500 h-full transition-all duration-500" style={{ width: `${stats.total > 0 ? (stats.pending / stats.total) * 100 : 0}%` }} />
          <div className="bg-indigo-500 h-full transition-all duration-500" style={{ width: `${stats.total > 0 ? (stats.inProgress / stats.total) * 100 : 0}%` }} />
          <div className="bg-emerald-500 h-full transition-all duration-500" style={{ width: `${stats.total > 0 ? (stats.done / stats.total) * 100 : 0}%` }} />
        </div>

        <div className="flex flex-wrap items-center gap-6 pt-1 text-xs font-bold">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <span className="text-slate-500">Pending ({stats.pending})</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
            <span className="text-slate-500">In Progress ({stats.inProgress})</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className="text-slate-500">Done ({stats.done})</span>
          </div>
        </div>
      </div>

{/* Recent Tasks */}
       <div className="space-y-4">
        <h3 className="text-lg font-extrabold tracking-tight px-1">Recent Tasks</h3>
        <div className="bg-white dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800/60 rounded-3xl divide-y divide-slate-100 dark:divide-slate-900/50 shadow-sm">
          {localTasks.slice(0, 5).map((task) => (
            <div key={task.id} className="p-5 flex items-center justify-between hover:bg-slate-50/40 dark:hover:bg-slate-900/10 transition-colors group">
              <div className="space-y-1">
                <h4 className="text-base font-extrabold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {task.title}
                </h4>
                <div className="text-xs text-slate-400 font-normal flex items-center gap-2">
                  <span>📁 {task.projectName}</span>
                  <span>•</span>
                  {task.assignedTo ? (
                    <span>👤 {task.assignedTo}</span>
                  ) : (
                    <span className="text-rose-500 bg-rose-500/10 px-1.5 py-0.5 rounded font-black text-[10px]">UNASSIGNED</span>
                  )}
                </div>
              </div>
              
              <span className={`px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider ${
                task.status === 'done' 
                  ? 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400' 
                  : task.status === 'in_progress'
                  ? 'bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400'
                  : 'bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-500'
              }`}>
                {task.status === 'in_progress' ? 'In Progress' : task.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}