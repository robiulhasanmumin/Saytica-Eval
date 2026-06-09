'use client';
import React from 'react';

export default function TaskBoardHeader({ viewMode, setViewMode }) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-100 dark:border-slate-900 pb-5">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight">Task Board</h1>
        <p className="text-base text-slate-500 dark:text-slate-400 mt-2">
          {viewMode === 'annotator' 
            ? 'Update the status of your assigned annotation tasks.' 
            : 'A read-only overview of annotation progress.'}
        </p>
      </div>

      <div className="flex bg-slate-100 dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 shadow-sm">
        <button
          onClick={() => setViewMode('annotator')}
          className={`px-5 py-2.5 text-sm font-extrabold rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
            viewMode === 'annotator'
              ? 'bg-indigo-600 text-white shadow-md'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          👤 <span className='ml-2'>Annotator</span>
        </button>
        <button
          onClick={() => setViewMode('client')}
          className={`px-5 py-2.5 text-sm font-extrabold rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
            viewMode === 'client'
              ? 'bg-indigo-600 text-white shadow-md'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          👁️ <span className='ml-2'>Client</span>
        </button>
      </div>
    </div>
  );
}