'use client';
import React from 'react';
import TaskCard from './TaskCard';

export default function AnnotatorView({ 
  filteredTasks, 
  searchQuery, 
  setSearchQuery, 
  statusFilter, 
  setStatusFilter, 
  handleStatusChange 
}) {
  return (
    <div className="space-y-6">
      {/* search and filter */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:max-w-md">
          <input
            type="text"
            placeholder="Search tasks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 text-base bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-400"
          />
          <span className="absolute left-4 top-3.5 text-slate-400 text-base">🔍</span>
        </div>

        <div className="w-full sm:w-auto flex justify-end">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full sm:w-auto bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl px-5 py-3 text-sm font-bold text-slate-700 dark:text-slate-300 focus:outline-none cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <option value="all" className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white font-semibold">All Statuses</option>
            <option value="pending" className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white font-semibold">Pending</option>
            <option value="in_progress" className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white font-semibold">In Progress</option>
            <option value="done" className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white font-semibold">Done</option>
          </select>
        </div>
      </div>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        
        {/* PENDING */}
        {(statusFilter === 'all' || statusFilter === 'pending') && (
          <div className="bg-slate-50/60 dark:bg-slate-900/20 border border-slate-200/50 dark:border-slate-800/50 rounded-3xl p-5 space-y-4">
            <div className="flex justify-between items-center px-1">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <h3 className="text-base font-black tracking-tight uppercase">Pending</h3>
              </div>
              <span className="bg-slate-200/60 dark:bg-slate-800 text-xs font-black px-2.5 py-1 rounded-full text-slate-500 dark:text-slate-400">
                {filteredTasks.filter(t => t.status === 'pending').length}
              </span>
            </div>
            <div className="space-y-3.5">
              {filteredTasks.filter(t => t.status === 'pending').map(task => (
                <TaskCard key={task.id} task={task} onStatusChange={handleStatusChange} />
              ))}
            </div>
          </div>
        )}

        {/* IN PROGRESS */}
        {(statusFilter === 'all' || statusFilter === 'in_progress') && (
          <div className="bg-slate-50/60 dark:bg-slate-900/20 border border-slate-200/50 dark:border-slate-800/50 rounded-3xl p-5 space-y-4">
            <div className="flex justify-between items-center px-1">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
                <h3 className="text-base font-black tracking-tight uppercase">In Progress</h3>
              </div>
              <span className="bg-slate-200/60 dark:bg-slate-800 text-xs font-black px-2.5 py-1 rounded-full text-slate-500 dark:text-slate-400">
                {filteredTasks.filter(t => t.status === 'in_progress').length}
              </span>
            </div>
            <div className="space-y-3.5">
              {filteredTasks.filter(t => t.status === 'in_progress').map(task => (
                <TaskCard key={task.id} task={task} onStatusChange={handleStatusChange} />
              ))}
            </div>
          </div>
        )}

        {/* DONE */}
        {(statusFilter === 'all' || statusFilter === 'done') && (
          <div className="bg-slate-50/60 dark:bg-slate-900/20 border border-slate-200/50 dark:border-slate-800/50 rounded-3xl p-5 space-y-4">
            <div className="flex justify-between items-center px-1">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <h3 className="text-base font-black tracking-tight uppercase">Done</h3>
              </div>
              <span className="bg-slate-200/60 dark:bg-slate-800 text-xs font-black px-2.5 py-1 rounded-full text-slate-500 dark:text-slate-400">
                {filteredTasks.filter(t => t.status === 'done').length}
              </span>
            </div>
            <div className="space-y-3.5">
              {filteredTasks.filter(t => t.status === 'done').map(task => (
                <TaskCard key={task.id} task={task} onStatusChange={handleStatusChange} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}