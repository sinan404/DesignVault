 
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home,
  Folder,
  MessageSquare,
  CheckSquare,
  Activity,
  Trash2,
  ChevronRight,
  Plus,
  Settings,
} from 'lucide-react';

const mainNav = [
  { label: 'Dashboard', href: '/dashboard', icon: Home, badge: null },
  { label: 'Files', href: '/files', icon: Folder, badge: null },
  { label: 'Messages', href: '/messages', icon: MessageSquare, badge: 2 },
  { label: 'Tasks', href: '/tasks', icon: CheckSquare, badge: 4 },
  { label: 'Activity', href: '/activity', icon: Activity, badge: null },
  { label: 'Recycle Bin', href: '/recycle-bin', icon: Trash2, badge: null },
];

const teams = [
  { label: 'Marketing', letter: 'M', href: '/teams/marketing' },
  { label: 'App UI/UX', letter: 'A', href: '/teams/app-ui-ux' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-[280px] h-screen bg-white border-r border-[#cdcdcd] flex flex-col py-6 px-6">
      {/* Logo */}
      <div className="flex items-center justify-center mb-10">
        <h1 className="font-[family-name:var(--font-poppins)] font-bold text-[24px] text-[#890069] capitalize">
          design vault
        </h1>
      </div>

      {/* Main nav */}
      <nav className="flex flex-col gap-2">
        {mainNav.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-[10px] py-[8px] rounded-[10px] text-[13px] font-[family-name:var(--font-poppins)] font-medium capitalize transition-colors
                ${isActive ? 'bg-[#f5f3ff] text-[#5735e5]' : 'text-[#6a7282] hover:bg-gray-50'}`}
            >
              <Icon size={18} strokeWidth={2} />
              <span className="flex-1">{item.label}</span>
              {item.badge && (
                <span className="bg-[#f3f4f6] text-[#6a7282] text-[10px] font-bold font-[family-name:var(--font-inter)] px-[6px] py-[2px] rounded-full">
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}

        <div className="h-px bg-[#e5e7eb] my-2" />
      </nav>

      {/* Teams */}
      <div className="mt-6">
        <p className="text-[13px] text-[#6a7282] font-[family-name:var(--font-poppins)] capitalize px-[10px] mb-2">
          teams
        </p>
        <div className="flex flex-col gap-1">
          {teams.map((team) => (
            <Link
              key={team.href}
              href={team.href}
              className="flex items-center gap-[11px] h-[37px] px-[10px] rounded-[3px] hover:bg-gray-50"
            >
              <span className="w-5 h-5 rounded-full bg-[#c81313] text-white text-[10px] font-[family-name:var(--font-poppins)] flex items-center justify-center capitalize">
                {team.letter}
              </span>
              <span className="flex-1 text-[13px] font-[family-name:var(--font-poppins)] font-medium text-[#6a7282] capitalize">
                {team.label}
              </span>
              <ChevronRight size={20} className="text-[#6a7282]" />
            </Link>
          ))}

          <button className="flex items-center gap-[11px] h-[37px] px-[10px] rounded-[3px] text-[#6a7282] hover:bg-gray-50">
            <Plus size={18} />
            <span className="text-[13px] font-[family-name:var(--font-poppins)] font-medium capitalize">
              new team
            </span>
          </button>
        </div>
      </div>

      {/* Settings pinned to bottom */}
      <div className="mt-auto pt-6">
        <Link
          href="/settings"
          className="flex items-center gap-[11px] h-[37px] px-[10px] rounded-[10px] hover:bg-gray-50"
        >
          <Settings size={18} className="text-[#6a7282]" />
          <span className="flex-1 text-[13px] font-[family-name:var(--font-poppins)] font-medium text-[#6a7282] capitalize">
            settings
          </span>
          <ChevronRight size={18} className="text-[#6a7282]" />
        </Link>
      </div>
    </aside>
  );
}