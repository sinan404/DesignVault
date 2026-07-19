import { Folder, CheckCircle2, Users, AlertCircle } from 'lucide-react';
import StatCard from '@/components/StatCard';
import ProjectCard from '@/components/ProjectCard';
import ActivityItem from '@/components/ActivityItem';
import FileRow from '@/components/FileRow';

const stats = [
    { icon: Folder, iconColor: 'text-[#6c63ff]', iconBg: 'bg-[rgba(108,99,255,0.09)]', value: '248', label: 'Total Projects', trend: '+12%', trendUp: true },
    { icon: CheckCircle2, iconColor: 'text-[#22c55e]', iconBg: 'bg-[rgba(34,197,94,0.09)]', value: '1,024', label: 'Active Tasks', trend: '+8%', trendUp: true },
    { icon: Users, iconColor: 'text-[#f59e0b]', iconBg: 'bg-[rgba(245,158,11,0.09)]', value: '64', label: 'Team Members', trend: '+3', trendUp: true },
    { icon: AlertCircle, iconColor: 'text-[#ef4444]', iconBg: 'bg-[rgba(239,68,68,0.09)]', value: '17', label: 'Issues Reported', trend: '-4', trendUp: false },
];

const projects = Array(5).fill({ name: 'Mobile App Redesign', updatedAt: '2 hours ago' });
const activity = Array(5).fill({ user: 'Alex smith', action: 'uploaded', file: 'Home screen.figma', time: '2 hours ago' });
const files = Array(4).fill({ fileName: 'Home screen.fig', project: 'Mobile App Redesign', updatedAt: '2 hours ago', editedBy: 'Alex Smith', version: 'v5' });

export default function DashboardPage() {
    return (
        <div className="flex gap-6">
            {/* Main content */}
            <div className="flex-1 flex flex-col gap-6">
                <div>
                    <p className="text-[14px] font-[family-name:var(--font-poppins)] text-[#5735e5]">Dashboard/</p>
                    <h1 className="text-[36px] font-semibold font-[family-name:var(--font-poppins)] text-[#07121e]">
                        Welcome back, <span className="bg-gradient-to-r from-[#07121e] to-[#0b66c8] bg-clip-text text-transparent">Alex.</span>
                    </h1>
                    <p className="text-[14px] font-[family-name:var(--font-poppins)] text-[#414141]">
                        You have <span className="font-semibold text-[#07121e]">3 pending reviews</span> and{' '}
                        <span className="font-semibold text-[#07121e]">7 new versions</span> since yesterday.
                    </p>
                </div>

                {/* Stat cards */}
                <div className="flex flex-wrap gap-4">
                    {stats.map((s) => <StatCard key={s.label} {...s} />)}
                </div>

                {/* Recent Projects */}
                <div className="bg-white border border-[rgba(65,65,65,0.19)] rounded-[9px] p-5">
                    <div className="flex items-center justify-between mb-4">
                        <p className="text-[14px] font-semibold font-[family-name:var(--font-sans)] capitalize">recent projects</p>
                        <p className="text-[10px] text-[#5735e5]">View all projects →</p>
                    </div>
                    <div className="flex gap-5 flex-wrap">
                        {projects.map((p, i) => <ProjectCard key={i} {...p} />)}
                    </div>
                </div>

                {/* Recent Files */}
                <div className="bg-white border border-[rgba(106,114,130,0.18)] rounded-[9px] p-5">
                    <div className="flex items-center justify-between mb-4">
                        <p className="text-[14px] font-semibold capitalize">recent Files</p>
                        <p className="text-[10px] text-[#5735e5]">View all files →</p>
                    </div>
                    <div className="flex flex-col">
                        {files.map((f, i) => <FileRow key={i} {...f} />)}
                    </div>
                    <button className="mt-4 border-[0.5px] border-[rgba(106,114,130,0.27)] rounded-[3px] px-6 py-2 text-[13px] font-medium text-[#5735e5]">
                        Show more
                    </button>
                </div>
            </div>

            {/* Right sidebar */}
            <div className="flex flex-col gap-6">
                <div className="bg-white border-[0.5px] border-[#cdcdcd] rounded-[10px] p-5 w-[300px]">
                    <div className="flex items-center justify-between mb-5">
                        <p className="text-[13px] font-semibold capitalize">recent activity</p>
                        <p className="text-[10px] text-[#5735e5]">view all</p>
                    </div>
                    <div className="flex flex-col gap-5">
                        {activity.map((a, i) => <ActivityItem key={i} {...a} />)}
                    </div>
                </div>

                <div className="bg-white border border-[rgba(65,65,65,0.23)] rounded-[9px] p-5 w-[300px]">
                    <div className="flex items-center justify-between mb-2">
                        <p className="text-[13px] font-medium">Storage Overview</p>
                        <p className="text-[10px]">View details</p>
                    </div>
                    <p className="text-[11px] font-medium text-[#414141] mb-2">8.2 GB of 20 GB used</p>
                    <div className="flex items-center gap-2 mb-5">
                        <div className="flex-1 h-[6px] bg-[rgba(7,18,30,0.1)] rounded-full overflow-hidden">
                            <div className="h-full bg-[#006edc] rounded-full" style={{ width: '22.5%' }} />
                        </div>
                        <p className="text-[11px] font-medium text-[#414141]">22.5%</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        {[
                            { label: 'Design Files', size: '15.2 GB', color: 'bg-[#6c63ff]' },
                            { label: 'Images', size: '15.2 GB', color: 'bg-[#22c55e]' },
                            { label: 'Documents', size: '15.2 GB', color: 'bg-[#f59e0b]' },
                        ].map((item) => (
                            <div key={item.label} className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className={`w-2 h-2 rounded-full ${item.color}`} />
                                    <p className="text-[11px] font-medium text-[#414141]">{item.label}</p>
                                </div>
                                <p className="text-[11px] font-medium text-[#414141]">{item.size}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
