'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // মোবাইল মেনু ওপেন/ক্লোজ স্টেট
  const pathname = usePathname();  

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else if (savedTheme === 'light') {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDark);
      if (prefersDark) document.documentElement.classList.add('dark');
    }
  }, []);

  const handleThemeToggle = () => {
    const nextMode = !darkMode;
    setDarkMode(nextMode);
    
    if (nextMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light'); // বাগ ফিক্সড (setItem রিমুভড)
    }
  };

  // মোবাইল মেনু ক্লিকের পর অটোমেটিক ক্লোজ করার ফাংশন
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`border-b sticky top-0 z-50 transition-colors duration-300 ${
      darkMode 
        ? 'bg-slate-950/80 border-slate-800 backdrop-blur-md text-white' 
        : 'bg-white/80 border-slate-200 backdrop-blur-md text-slate-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* ১. লোগো এরিয়া */}
          <Link href="/" onClick={closeMenu} className="flex items-center space-x-2 cursor-pointer shrink-0">
            <div className="p-2 bg-indigo-600 rounded-xl text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight">
              Saytica <span className="text-indigo-500 font-medium text-sm">Eval</span>
            </span>
          </Link>
          
          {/* ২. ডেস্কটপ নেভিগেশন লিংক (বড় স্ক্রিনের জন্য - hidden md:flex) */}
          <div className="hidden md:flex items-center space-x-6">
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
            
            {/* থিম টগল বাটন (डেস্কটপ) */}
            <button
              onClick={handleThemeToggle}
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

          {/* ৩. মোবাইল রাইট কন্ট্রোলস (থিম বাটন + হ্যামবার্গার বার - md:hidden) */}
          <div className="flex items-center space-x-3 md:hidden">
            {/* থিম টগল বাটন (মোবাইল) */}
            <button
              onClick={handleThemeToggle}
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

            {/* হ্যামবার্গার বার বাটন */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-xl border transition-all cursor-pointer ${
                darkMode ? 'bg-slate-800 border-slate-700 hover:bg-slate-700' : 'bg-slate-100 border-slate-200 hover:bg-slate-200'
              }`}
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                // ক্রস (X) আইকন - যখন মেনু খোলা
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // ৩-লাইন হ্যামবার্গার আইকন - যখন মেনু বন্ধ
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* 📱 ৪. মোবাইল রেসপন্সিভ ড্রপডাউন মেনু প্যানেল */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-48 opacity-100 border-t border-slate-200/50 dark:border-slate-800/50' : 'max-h-0 opacity-0 pointer-events-none'
      } ${darkMode ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="px-4 pt-3 pb-4 space-y-2">
          <Link
            href="/leaderboard"
            onClick={closeMenu}
            className={`block px-4 py-2.5 rounded-xl text-base font-semibold transition-colors ${
              pathname === '/leaderboard' 
                ? 'bg-indigo-500/10 text-indigo-500' 
                : darkMode ? 'hover:bg-slate-900 text-slate-300' : 'hover:bg-slate-50 text-slate-700'
            }`}
          >
            Leaderboard
          </Link>
          <Link
            href="/tasks"
            onClick={closeMenu}
            className={`block px-4 py-2.5 rounded-xl text-base font-semibold transition-colors ${
              pathname === '/tasks' 
                ? 'bg-indigo-500/10 text-indigo-500' 
                : darkMode ? 'hover:bg-slate-900 text-slate-300' : 'hover:bg-slate-50 text-slate-700'
            }`}
          >
            Task Board
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;