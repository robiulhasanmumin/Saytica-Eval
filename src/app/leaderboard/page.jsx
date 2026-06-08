import React from 'react';
import Link from 'next/link';
import Leaderboard from '@/component/LeaderBoard/Leaderboard';

export default function LeaderboardPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex pt-12 gap-8">
      
       <main className="flex-1 min-w-0">
        <Leaderboard />
      </main>

    </div>
  );
}