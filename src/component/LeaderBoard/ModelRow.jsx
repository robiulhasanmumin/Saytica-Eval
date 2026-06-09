'use client';
import React from 'react';

export default function ModelRow({ model, stats, getAccuracyMetrics, formatDate }) {
  const metrics = getAccuracyMetrics(model.accuracy);

  return (
    <tr className="hover:bg-slate-50/40 dark:hover:bg-slate-900/10 transition-all group">
       <td className="py-5 px-6">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="text-base font-extrabold text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {model.name}
          </span>
          
          {model.id === stats.topAcc.id && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200/40 shadow-sm">
              ✨ Most Accurate
            </span>
          )}
          {model.id === stats.minLatency.id && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-extrabold bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border border-indigo-200/40 shadow-sm">
              ⚡ Fastest
            </span>
          )}
          {model.id === stats.minCost.id && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-extrabold bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-500 border border-amber-200/40 shadow-sm">
              💰 Cheapest
            </span>
          )}
        </div>
        <div className="text-xs text-slate-400 dark:text-slate-500 mt-1 font-normal">
          by {model.provider}
        </div>
      </td>

       <td className="py-5 px-4">
        <div className="flex flex-col justify-center max-w-[160px] w-full">
          <span className={`text-base font-black ${metrics.textColor}`}>
            {model.accuracy != null ? `${(model.accuracy * 100).toFixed(1)}%` : 'N/A'}
          </span>
          {model.accuracy != null && (
            <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full mt-2 overflow-hidden shadow-inner">
              <div 
                className={`h-full rounded-full ${metrics.barBg} transition-all duration-500`}
                style={{ width: `${model.accuracy * 100}%` }}
              />
            </div>
          )}
        </div>
      </td>

       <td className="py-5 px-4 text-slate-800 dark:text-slate-200 text-base font-bold">
        {model.latencyMs != null ? (
          <>
            {model.latencyMs} <span className="text-xs text-slate-400 font-normal">ms</span>
          </>
        ) : (
          <span className="text-xs text-slate-400 dark:text-slate-500 font-normal">N/A</span>
        )}
      </td>

       <td className="py-5 px-4 text-slate-900 dark:text-slate-100 text-base font-black">
        {model.costPer1k != null ? (
          `$${Number(model.costPer1k).toFixed(4)}`
        ) : (
          <span className="text-xs text-slate-400 dark:text-slate-500 font-normal">N/A</span>
        )}
      </td>

       <td className="py-5 px-6 text-right text-xs font-semibold text-slate-400 dark:text-slate-500 whitespace-nowrap">
        {formatDate(model.evaluatedAt)}
      </td>
    </tr>
  );
}