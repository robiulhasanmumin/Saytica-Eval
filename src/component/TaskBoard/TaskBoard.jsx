'use client';

import React, { useState, useMemo, useEffect } from 'react';
import tasksData from '../../data/tasks.json';
import TaskBoardHeader from './TaskBoardHeader';
import AnnotatorView from './AnnotatorView';
import ClientView from './ClientView';

export default function TaskBoard() {
  const [viewMode, setViewMode] = useState('annotator'); 
  const [statusFilter, setStatusFilter] = useState('all'); 
  const [searchQuery, setSearchQuery] = useState('');
  const [isMounted, setIsMounted] = useState(false);

   const sanitizedTasks = useMemo(() => {
    return tasksData.map(task => {
      let cleanStatus = task.status ? task.status.trim().toLowerCase() : 'pending';
      if (cleanStatus === '') cleanStatus = 'pending';

      return {
        ...task,
        title: task.title || 'Untitled Annotation Task',
        projectName: task.projectName || 'General Project',
        assignedTo: task.assignedTo || null,
        status: cleanStatus
      };
    });
  }, []);

  const [localTasks, setLocalTasks] = useState(sanitizedTasks);

   useEffect(() => {
    setIsMounted(true);
    const savedTasks = localStorage.getItem('saytica_dashboard_tasks');
    if (savedTasks) {
      try {
        setLocalTasks(JSON.parse(savedTasks));
      } catch (e) {
        console.error("Failed to parse tasks from localStorage", e);
      }
    }
  }, []);

   const handleStatusChange = (taskId, newStatus) => {
    const updatedTasks = localTasks.map((task) =>
      task.id === taskId ? { ...task, status: newStatus } : task
    );
    setLocalTasks(updatedTasks);
    localStorage.setItem('saytica_dashboard_tasks', JSON.stringify(updatedTasks));
  };

   const stats = useMemo(() => {
    const total = localTasks.length;
    const pending = localTasks.filter((t) => t.status === 'pending').length;
    const inProgress = localTasks.filter((t) => t.status === 'in_progress').length;
    const done = localTasks.filter((t) => t.status === 'done').length;
    const completionRate = total > 0 ? Math.round((done / total) * 100) : 0;

    return { total, pending, inProgress, done, completionRate };
  }, [localTasks]);

   const filteredTasks = useMemo(() => {
    return localTasks.filter((task) => {
      const matchesSearch =
        task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.projectName.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesStatus = statusFilter === 'all' || task.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [localTasks, searchQuery, statusFilter]);

  if (!isMounted) {
    return <div className="min-h-screen bg-transparent animate-pulse" />;
  }

  return (
    <div className="space-y-8 pb-12 text-slate-900 dark:text-white">
       <TaskBoardHeader viewMode={viewMode} setViewMode={setViewMode} />

       {viewMode === 'annotator' ? (
        <AnnotatorView 
          filteredTasks={filteredTasks}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          handleStatusChange={handleStatusChange}
        />
      ) : (
        <ClientView stats={stats} localTasks={localTasks} />
      )}
    </div>
  );
}