'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import TaskRow, { Task } from '@/components/TaskRow';

const initialTasks: Task[] = [
    { id: '1', title: 'Update color tokens in design system', project: 'Design System v2', due: 'Today', dueColor: 'text-[#5735e5]', priority: 'High', assignee: { initials: 'AS', color: '#6c63ff' }, completed: false },
    { id: '2', title: 'Review pull request for auth module', project: 'API Integration', due: 'Today', dueColor: 'text-[#5735e5]', priority: 'High', assignee: { initials: 'MK', color: '#22c55e' }, completed: false },
    { id: '3', title: 'Prepare onboarding deck', project: 'Marketing Website', due: 'Tomorrow', dueColor: 'text-[#e17100]', priority: 'Medium', assignee: { initials: 'LR', color: '#f59e0b' }, completed: true },
    { id: '4', title: 'Fix navigation breakpoint bug', project: 'Mobile App Redesign', due: 'Jul 20', dueColor: 'text-[#6a7282]', priority: 'High', assignee: { initials: 'TJ', color: '#ef4444' }, completed: false },
    { id: '5', title: 'Write unit tests for payment flow', project: 'API Integration', due: 'Jul 22', dueColor: 'text-[#6a7282]', priority: 'Medium', assignee: { initials: 'AS', color: '#6c63ff' }, completed: false },
    { id: '6', title: 'Conduct user interviews (round 2)', project: 'Mobile App Redesign', due: 'Jul 23', dueColor: 'text-[#6a7282]', priority: 'Low', assignee: { initials: 'MK', color: '#22c55e' }, completed: false },
    { id: '7', title: 'Audit accessibility across components', project: 'Design System v2', due: 'Jul 25', dueColor: 'text-[#6a7282]', priority: 'Medium', assignee: { initials: 'LR', color: '#f59e0b' }, completed: true },
    { id: '8', title: 'Set up CI/CD pipeline', project: 'API Integration', due: 'Jul 26', dueColor: 'text-[#6a7282]', priority: 'High', assignee: { initials: 'TJ', color: '#ef4444' }, completed: false },
];

const filters = ['All', 'Today', 'Upcoming', 'Completed'] as const;
type Filter = typeof filters[number];

export default function TasksPage() {
    const [tasks, setTasks] = useState(initialTasks);
    const [activeFilter, setActiveFilter] = useState<Filter>('All');

    const toggleTask = (id: string) => {
        setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
    };

    const filteredTasks = tasks.filter((t) => {
        if (activeFilter === 'All') return true;
        if (activeFilter === 'Completed') return t.completed;
        if (activeFilter === 'Today') return t.due === 'Today';
        if (activeFilter === 'Upcoming') return !t.completed && t.due !== 'Today';
        return true;
    });

    return (
        <div className="flex flex-col gap-4">
            {/* Page heading */}
            <div>
                <h1 className="text-[16px] font-bold font-[family-name:var(--font-inter)] text-[#101828]">Tasks</h1>
                <p className="text-[12px] font-[family-name:var(--font-inter)] text-[#99a1af]">
                    Track your work across all projects
                </p>
            </div>

            {/* Filters + Add Task */}
            <div className="flex items-center justify-between">
                <div className="flex gap-2">
                    {filters.map((f) => (
                        <button
                            key={f}
                            onClick={() => setActiveFilter(f)}
                            className={`px-3 py-[7px] rounded-[10px] text-[12px] font-medium font-[family-name:var(--font-inter)] transition-colors
                ${activeFilter === f
                                    ? 'bg-[#5735e5] text-white'
                                    : 'bg-white border-[0.8px] border-[#e5e7eb] text-[#4a5565]'}`}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                <button className="flex items-center gap-[6px] bg-[#5735e5] text-white px-3 py-[6px] rounded-[10px]">
                    <Plus size={14} />
                    <span className="text-[12px] font-medium font-[family-name:var(--font-inter)]">Add Task</span>
                </button>
            </div>

            {/* Task table */}
            <div className="bg-white border-[0.8px] border-[#f3f4f6] rounded-[14px] shadow-sm overflow-hidden">
                {/* Header row */}
                <div className="grid grid-cols-[24px_3fr_1.5fr_1fr_0.8fr_0.6fr] gap-4 px-5 py-3 border-b-[0.8px] border-[#f3f4f6]">
                    <div />
                    <p className="text-[11px] font-semibold font-[family-name:var(--font-inter)] text-[#99a1af] uppercase tracking-wide">Task</p>
                    <p className="text-[11px] font-semibold font-[family-name:var(--font-inter)] text-[#99a1af] uppercase tracking-wide">Project</p>
                    <p className="text-[11px] font-semibold font-[family-name:var(--font-inter)] text-[#99a1af] uppercase tracking-wide">Due</p>
                    <p className="text-[11px] font-semibold font-[family-name:var(--font-inter)] text-[#99a1af] uppercase tracking-wide">Priority</p>
                    <p className="text-[11px] font-semibold font-[family-name:var(--font-inter)] text-[#99a1af] uppercase tracking-wide">Assignee</p>
                </div>

                {filteredTasks.map((task) => (
                    <TaskRow key={task.id} task={task} onToggle={toggleTask} />
                ))}

                {filteredTasks.length === 0 && (
                    <p className="text-center text-[12px] text-[#99a1af] py-10 font-[family-name:var(--font-inter)]">
                        No tasks here.
                    </p>
                )}
            </div>
        </div>
    );
}