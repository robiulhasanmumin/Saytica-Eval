'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const pathname = usePathname();  

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <nav className={`border-b sticky top-0 z-50 transition-colors duration-300 ${
      darkMode 
        ? 'bg-slate-950/80 border-slate-800 backdrop-blur-md text-white' 
        : 'bg-white/80 border-slate-200 backdrop-blur-md text-slate-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 cursor-pointer">
            <div className="p-2 bg-indigo-600 rounded-xl text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight">
              Saytica <span className="text-indigo-500 font-medium text-sm">Eval</span>
            </span>
          </Link>
          
          {/* Nav Links */}
          <div className="flex items-center space-x-6">
            <Link 
              href="/leaderboard" 
              className={`text-sm font-semibold transition-colors cursor-pointer ${
                pathname === '/leaderboard' ? 'text-indigo-500' : 'hover:text-indigo-500'
              }`}
            >
              Leaderboard
            </Link>
            
            <Link 
              href="/tasks" 
              className={`text-sm font-semibold transition-colors cursor-pointer ${
                pathname === '/tasks' ? 'text-indigo-500' : 'hover:text-indigo-500'
              }`}
            >
              Task Board
            </Link>
            
            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-xl border transition-all cursor-pointer ${
                darkMode ? 'bg-slate-800 border-slate-700 text-yellow-400' : 'bg-slate-100 border-slate-200 text-slate-600'
              }`}
            >
              {darkMode ? (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 14.05a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zm-.707-8.485a1 1 0 011.414 0l.707.707A1 1 0 115.05 7.636l-.707-.707a1 1 0 010-1.414zM4 11a1 1 0 100-2H3a1 1 0 100 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;