import React from 'react'
import TaskBoard from '@/component/TaskBoard/TaskBoard';

const TaskBoardPage = () => {
  return (
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex pt-12 gap-8">
      
       <main className="flex-1 min-w-0">
        <TaskBoard />
      </main>

    </div>  )
}

export default TaskBoardPage