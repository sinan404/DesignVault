'use client';

import { CheckCircle2, Circle } from 'lucide-react';

export interface Task {
  id: string;
  title: string;
  project: string;
  due: string;
  dueColor: string; // tailwind text color class
  priority: 'High' | 'Medium' | 'Low';
  assignee: { initials: string; color: string };
  completed: boolean;
}

const priorityStyles: Record<Task['priority'], { bg: string; text: string }> = {
  High: { bg: 'bg-[#fef2f2]', text: 'text-[#e7000b]' },
  Medium: { bg: 'bg-[#fffbeb]', text: 'text-[#e17100]' },
  Low: { bg: 'bg-[#f0fdf4]', text: 'text-[#00a63e]' },
};

interface TaskRowProps {
  task: Task;
  onToggle: (id: string) => void;
}

export default function TaskRow({ task, onToggle }: TaskRowProps) {
  const p = priorityStyles[task.priority];

  return (
    <div className="grid grid-cols-[24px_3fr_1.5fr_1fr_0.8fr_0.6fr] items-center gap-4 px-5 py-3 border-b border-[#f9fafb] last:border-none">
      <button onClick={() => onToggle(task.id)} className="shrink-0">
        {task.completed ? (
          <CheckCircle2 size={16} className="text-[#99a1af]" />
        ) : (
          <Circle size={16} className="text-[#d1d5dc]" />
        )}
      </button>

      <p
        className={`text-[12px] font-medium font-[family-name:var(--font-inter)] whitespace-nowrap overflow-hidden text-ellipsis
          ${task.completed ? 'line-through text-[#99a1af]' : 'text-[#101828]'}`}
      >
        {task.title}
      </p>

      <p className="text-[12px] font-[family-name:var(--font-inter)] text-[#6a7282] whitespace-nowrap">
        {task.project}
      </p>

      <p className={`text-[12px] font-medium font-[family-name:var(--font-inter)] whitespace-nowrap ${task.dueColor}`}>
        {task.due}
      </p>

      <div className={`inline-flex items-center justify-center h-[20.5px] px-[8px] rounded-full w-fit ${p.bg}`}>
        <p className={`text-[11px] font-medium font-[family-name:var(--font-inter)] whitespace-nowrap ${p.text}`}>
          {task.priority}
        </p>
      </div>

      <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: task.assignee.color }}>
        <span className="text-[9px] font-semibold font-[family-name:var(--font-inter)] text-white">
          {task.assignee.initials}
        </span>
      </div>
    </div>
  );
}