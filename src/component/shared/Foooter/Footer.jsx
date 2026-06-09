'use client';
import React from 'react';
import Link from 'next/link';
 
export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-white/50 dark:bg-slate-950/50 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
           <div className="flex flex-col items-center md:items-start space-y-2">
            <div className="flex items-center space-x-2">
              <div className="p-1.5 bg-indigo-600 rounded-lg text-white">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-base font-extrabold tracking-tight text-slate-900 dark:text-white">
                Saytica <span className="text-indigo-500 font-semibold text-xs">Eval</span>
              </span>
            </div>
            <p className="text-xs font-medium text-slate-400 dark:text-slate-500">
              Next-generation console for continuous AI benchmarking.
            </p>
          </div>

           <div className="flex items-center space-x-6 text-sm font-semibold text-slate-500 dark:text-slate-400">
            <Link href="/" className="hover:text-indigo-500 transition-colors cursor-pointer">
              Home
            </Link>
            <Link href="/leaderboard" className="hover:text-indigo-500 transition-colors cursor-pointer">
              Leaderboard
            </Link>
            <Link href="/tasks" className="hover:text-indigo-500 transition-colors cursor-pointer">
              Task Board
            </Link>
           </div>

           <div className="text-xs font-medium text-slate-400 dark:text-slate-500">
            &copy; {new Date().getFullYear()} Saytica. All rights reserved.
          </div>

        </div>
      </div>
    </footer>
  );
}