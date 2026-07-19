import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  iconColor: string;
  iconBg: string;
  value: string;
  label: string;
  trend: string;
  trendUp: boolean;
}

export default function StatCard({ icon: Icon, iconColor, iconBg, value, label, trend, trendUp }: StatCardProps) {
  return (
    <div className="bg-white border-[0.8px] border-[#f3f4f6] rounded-[10px] shadow-sm p-[17px] w-[190px]">
      <div className="flex items-center justify-between mb-3">
        <div className={`w-[55px] h-[55px] rounded-[9px] flex items-center justify-center ${iconBg}`}>
          <Icon size={22} className={iconColor} />
        </div>
        <div className={`flex items-center gap-[2px] text-[9px] font-medium font-[family-name:var(--font-inter)] ${trendUp ? 'text-[#00a63e]' : 'text-[#fb2c36]'}`}>
          {trendUp ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
          {trend}
        </div>
      </div>
      <p className="text-[24px] font-bold font-[family-name:var(--font-inter)] text-[#101828] mb-1">{value}</p>
      <p className="text-[12px] font-[family-name:var(--font-inter)] text-[#99a1af]">{label}</p>
    </div>
  );
}