'use client';

import React from 'react';

export default function Hero() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12">
      
      {/* ─── বাম পাশ: কন্টেন্ট ও বাটন ─── */}
      <div className="space-y-6 text-left">
        
        {/* ছোট ব্যাজ */}
        <div className="inline-flex items-center space-x-2 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 px-3 py-1.5 rounded-full text-xs font-semibold border border-indigo-100 dark:border-indigo-900/60 tracking-wide">
          <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></span>
          <span>Model evaluation, made legible</span>
        </div>
        
        {/* মেইন হেডলাইন — লাইটে স্লেট-৯০০, ডার্কে টেক্সট-হোয়াইট */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-slate-900 dark:text-white">
          The console for <br /> evaluating <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            AI models
          </span> <br />
          and annotation work.
        </h1>
        
        {/* সাবটেক্সট — লাইটে স্লেট-৬০০, ডার্কে স্লেট-৪০০ */}
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed font-medium">
          Saytica Eval Console brings model benchmarks and annotation tasks into a single, polished workspace — compare accuracy, latency, and cost then track the human eval work behind it.
        </p>
        
        {/* অ্যাকশন বাটনস */}
        <div className="flex flex-wrap gap-4 pt-4">
          <button className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-lg shadow-indigo-600/20 dark:shadow-indigo-900/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer">
            📊 View Leaderboard
          </button>
          <button className="px-6 py-3.5 border font-semibold rounded-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer bg-white dark:bg-slate-800 text-slate-700 dark:text-gray-200 border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700/80">
            📋 View Task Board
          </button>
        </div>
      </div>

      {/* ─── ডান পাশ: ডায়নামিক গ্রাফিক্স/SVG ─── */}
      <div className="relative flex justify-center items-center lg:mt-0 mt-8">
        <div className="absolute w-72 h-72 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-3xl opacity-25 dark:opacity-20 -z-10 animate-pulse"></div>
        
        <svg className="w-full max-w-[480px] h-auto drop-shadow-2xl transition-all" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* মেইন ড্যাশবোর্ড কার্ড */}
          <rect x="20" y="40" width="460" height="320" rx="20" className="fill-white dark:fill-slate-800 stroke-slate-200 dark:stroke-slate-700" strokeWidth="4"/>
          
          {/* ম্যাক-স্টাইল উইন্ডো হেডার */}
          <rect x="20" y="40" width="460" height="50" rx="20" className="fill-slate-50 dark:fill-slate-900"/>
          <circle cx="50" cy="65" r="6" fill="#ef4444"/>
          <circle cx="70" cy="65" r="6" fill="#eab308"/>
          <circle cx="90" cy="65" r="6" fill="#22c55e"/>
          
          {/* চার্ট সিমুলেশন */}
          <rect x="50" y="120" width="120" height="200" rx="12" fill="#4f46e5" fillOpacity="0.08"/>
          <rect x="70" y="210" width="18" height="80" rx="4" fill="#4f46e5"/>
          <rect x="100" y="160" width="18" height="130" rx="4" fill="#818cf8"/>
          <rect x="130" y="240" width="18" height="50" rx="4" fill="#6366f1" fillOpacity="0.6"/>
          
          {/* রো ১ */}
          <rect x="190" y="120" width="260" height="50" rx="10" className="fill-slate-100 dark:fill-slate-900"/>
          <circle cx="215" cy="145" r="10" fill="#a855f7"/>
          <rect x="240" y="140" width="80" height="10" rx="5" className="fill-slate-300 dark:fill-slate-700"/>
          <rect x="390" y="138" width="45" height="14" rx="7" fill="#22c55e" fillOpacity="0.15"/>
          <circle cx="400" cy="145" r="3" fill="#22c55e"/>

          {/* রো ২ */}
          <rect x="190" y="185" width="260" height="50" rx="10" className="fill-slate-100 dark:fill-slate-900"/>
          <circle cx="215" cy="210" r="10" fill="#6366f1"/>
          <rect x="240" y="205" width="60" height="10" rx="5" className="fill-slate-300 dark:fill-slate-700"/>
          <rect x="390" y="203" width="45" height="14" rx="7" fill="#22c55e" fillOpacity="0.15"/>
          <circle cx="400" cy="210" r="3" fill="#22c55e"/>

          {/* রো ৩ */}
          <rect x="190" y="250" width="260" height="50" rx="10" className="fill-slate-100 dark:fill-slate-900"/>
          <circle cx="215" cy="275" r="10" fill="#3b82f6"/>
          <rect x="240" y="270" width="95" height="10" rx="5" className="fill-slate-300 dark:fill-slate-700"/>
          <rect x="390" y="268" width="45" height="14" rx="7" fill="#ef4444" fillOpacity="0.15"/>
          <circle cx="400" cy="275" r="3" fill="#ef4444"/>
        </svg>
      </div>

    </div>
  );
}