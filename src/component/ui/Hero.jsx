'use client';

import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-8 lg:py-8 relative">
      
       <div className="space-y-6 text-left lg:col-span-6 z-10">
        
         <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 text-indigo-600 dark:text-indigo-400 px-4 py-2 rounded-full text-xs font-bold border border-indigo-100 dark:border-indigo-900/60 tracking-wide shadow-sm">
          <span className="flex h-2.5 w-2.5 rounded-full bg-indigo-500 animate-pulse"></span>
          <span>Model evaluation, made legible</span>
        </div>
        
         <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-[1.15] text-slate-900 dark:text-white drop-shadow-sm">
          Evaluate AI Models, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 via-pink-500 via-purple-500 to-indigo-500 bg-[length:200%_auto] animate-shimmer">
            Track Human Work,
          </span> <br />
          All in One Console.
        </h1>
        
         <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed font-medium">
          Saytica Eval Console brings model benchmarks and annotation tasks into a single, polished workspace—compare accuracy, latency, and cost then track the human eval work behind it.
        </p>
        
         <div className="flex flex-wrap sm:flex-nowrap gap-4 pt-2">
          <Link href="/leaderboard" className="w-full sm:w-auto">  
            <button className="w-full sm:w-auto px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-xl shadow-indigo-600/30 dark:shadow-indigo-900/40 transition-all transform hover:-translate-y-1 active:translate-y-0 cursor-pointer text-sm sm:text-base group flex items-center justify-center space-x-2">
              <span>📊</span> 
              <span>View Leaderboard</span>
            </button>
          </Link>

          <Link href="/tasks" className="w-full sm:w-auto"> 
            <button className="w-full sm:w-auto px-6 py-3.5 border font-bold rounded-xl transition-all transform hover:-translate-y-1 active:translate-y-0 cursor-pointer bg-white dark:bg-slate-900 text-slate-700 dark:text-gray-200 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/80 shadow-md text-sm sm:text-base group flex items-center justify-center space-x-2">
              <span>📋</span> 
              <span>View Task Board</span>
            </button>
          </Link>
        </div>
      </div>

       <div className="relative flex flex-col justify-center items-center mt-8 lg:mt-0 lg:col-span-6 animate-[fadeIn_1s_ease-out_0.5s_forwards] w-full z-10">
        
         <div className="absolute top-10 right-10 w-72 h-72 bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-[100px] -z-10 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-purple-500/10 dark:bg-purple-500/15 rounded-full blur-[100px] -z-10 animate-pulse [animation-delay:1s]"></div>
        
         <div className="flex flex-wrap gap-2 mb-4 w-full max-w-[440px] justify-start px-1">
          <div className="bg-white/80 dark:bg-slate-900/90 border border-slate-200/60 dark:border-slate-800 px-3 py-1.5 rounded-xl flex items-center space-x-1.5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300">98.4% Reliable</span>
          </div>
          <div className="bg-white/80 dark:bg-slate-900/90 border border-slate-200/60 dark:border-slate-800 px-3 py-1.5 rounded-xl flex items-center space-x-1.5 shadow-sm">
            <span className="text-indigo-500 text-xs">🔥</span>
            <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300">12k+ Evaluated</span>
          </div>
        </div>

         <div className="animate-float w-full max-w-[440px] bg-white/90 dark:bg-slate-900/95 backdrop-blur-2xl rounded-2xl border border-slate-200 dark:border-slate-800/80 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.08)] dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.4)] overflow-hidden font-sans">
          
           <div className="flex items-center justify-between px-5 py-3.5 bg-slate-50/80 dark:bg-slate-950/60 border-b border-slate-200/80 dark:border-slate-800/80">
            <div className="flex space-x-2">
              <span className="w-3 h-3 rounded-full bg-red-500/90 inline-block shadow-sm"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/90 inline-block shadow-sm"></span>
              <span className="w-3 h-3 rounded-full bg-green-500/90 inline-block shadow-sm"></span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-[10px] font-black tracking-widest text-slate-400 dark:text-slate-500 uppercase">SAYTICA EVAL CONSOLE</span>
              <span className="text-[9px] bg-indigo-500/10 text-indigo-500 font-extrabold px-1.5 py-0.2 rounded">v1.2</span>
            </div>
            <div className="w-14"></div>
          </div>

           <div className="p-5 flex flex-col space-y-6">
            
             <div className="bg-gradient-to-r from-indigo-500/[0.03] to-purple-500/[0.03] border border-indigo-500/10 dark:border-indigo-500/5 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-inner">
              
               <div className="flex items-center space-x-4">
                <div className="relative w-16 h-16 flex items-center justify-center drop-shadow-sm shrink-0">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                    <path className="text-slate-100 dark:text-slate-800" strokeWidth="3.5" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    <path className="text-indigo-600 dark:text-indigo-500" strokeWidth="3.5" strokeDasharray="84, 100" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  </svg>
                  <div className="absolute text-xs font-black text-slate-800 dark:text-white">84.2%</div>
                </div>
                <div className="text-left">
                  <span className="text-[10px] font-bold tracking-wider text-indigo-500 dark:text-indigo-400 uppercase block">Model Performance</span>
                  <div className="text-sm font-black text-slate-800 dark:text-slate-200">Accuracy Score</div>
                </div>
              </div>

               <div className="grid grid-cols-2 gap-2 w-full sm:w-auto shrink-0">
                <div className="bg-white dark:bg-slate-950 p-2 rounded-xl border border-slate-100 dark:border-slate-800/80 shadow-sm text-center min-w-[75px]">
                  <div className="text-[11px] font-extrabold text-emerald-500">142ms</div>
                  <div className="text-[9px] font-semibold text-slate-400 dark:text-slate-500">Latency</div>
                </div>
                <div className="bg-white dark:bg-slate-950 p-2 rounded-xl border border-slate-100 dark:border-slate-800/80 shadow-sm text-center min-w-[75px]">
                  <div className="text-[11px] font-extrabold text-blue-500">$0.0015</div>
                  <div className="text-[9px] font-semibold text-slate-400 dark:text-slate-500">Per 1k tkn</div>
                </div>
              </div>

            </div>

             <div className="space-y-3">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[10px] font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase block">Human Evaluation Board</span>
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
              </div>
              
               <div className="flex items-center justify-between p-3.5 bg-white dark:bg-slate-950/40 border border-slate-100 dark:border-slate-800/80 rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-indigo-500/20 group/item">
                <div className="flex items-center space-x-3 min-w-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0 group-hover/item:animate-pulse"></span>
                  <div className="text-left min-w-0">
                    <div className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate">Hindi prompt ranking</div>
                    <div className="text-[10px] text-slate-400 dark:text-slate-500 font-medium mt-0.5">Project Atlas • u_annotator</div>
                  </div>
                </div>
                <span className="text-[9px] font-extrabold px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 uppercase shrink-0 tracking-wider">Pend</span>
              </div>

               <div className="flex items-center justify-between p-3.5 bg-white dark:bg-slate-950/40 border border-slate-100 dark:border-slate-800/80 rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-indigo-500/20 group/item">
                <div className="flex items-center space-x-3 min-w-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shrink-0 group-hover/item:animate-pulse"></span>
                  <div className="text-left min-w-0">
                    <div className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate">Urdu transcription QA</div>
                    <div className="text-[10px] text-slate-400 dark:text-slate-500 font-medium mt-0.5">Project Atlas • u_annotator</div>
                  </div>
                </div>
                <span className="text-[9px] font-extrabold px-2.5 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 uppercase shrink-0 tracking-wider">Prog</span>
              </div>

               <div className="flex items-center justify-between p-3.5 bg-white dark:bg-slate-950/40 border border-slate-100 dark:border-slate-800/80 rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-indigo-500/20 group/item">
                <div className="flex items-center space-x-3 min-w-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0 group-hover/item:animate-pulse"></span>
                  <div className="text-left min-w-0">
                    <div className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate">Bengali sentiment batch #4</div>
                    <div className="text-[10px] text-slate-400 dark:text-slate-500 font-medium mt-0.5">Project Atlas • u_annotator</div>
                  </div>
                </div>
                <span className="text-[9px] font-extrabold px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 uppercase shrink-0 tracking-wider">Done</span>
              </div>

            </div>
          </div>

        </div>
      </div>

     
    </div>
  );
}