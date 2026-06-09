'use client';
import React from 'react';

export default function HowItWorks() {
  const steps = [
    {
      id: '01',
      title: 'Connect AI Models',
      desc: 'Plug in your LLMs via API or custom endpoints to benchmark latency, accuracy, and token costs automatically.',
      icon: (
        <svg className="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      id: '02',
      title: 'Distribute Human Tasks',
      desc: 'Assign verification pipelines, prompt rankings, and RLHF tasks to human annotators via our smart task board.',
      icon: (
        <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      id: '03',
      title: 'Get Decisive Insights',
      desc: 'Compare side-by-side performance data, human quality labels, and cross-examine live leaderboard metrics.',
      icon: (
        <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* ব্যাকগ্রাউন্ড ব্লার গ্লো */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 dark:bg-indigo-500/[0.03] rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* সেকশন হেডার */}
        <div className="space-y-3 max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-500 bg-indigo-500/10 px-3 py-1 rounded-full">
            Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
            How Saytica Eval Works
          </h2>
          <p className="text-slate-500 dark:text-slate-400 font-medium text-sm sm:text-base">
            An end-to-end evaluation console seamlessly blending algorithmic parameters with human precision.
          </p>
        </div>

        {/* স্টেপস গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative group p-6 bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200/60 dark:border-slate-800/60 rounded-2xl text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/[0.03] hover:border-indigo-500/20"
            >
              {/* মডার্ন ফ্লোটিং নাম্বার কাউন্টার */}
              <div className="absolute top-4 right-6 text-4xl font-black text-slate-200/50 dark:text-slate-800/40 select-none font-mono transition-colors group-hover:text-indigo-500/20">
                {step.id}
              </div>

              {/* আইকন বক্স */}
              <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200/50 dark:border-slate-800/50 inline-block mb-5 shadow-inner">
                {step.icon}
              </div>

              {/* কন্টেন্ট */}
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
                {step.title}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}