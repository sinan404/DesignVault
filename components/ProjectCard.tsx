 import { Star } from 'lucide-react';

interface ProjectCardProps {
  name: string;
  updatedAt: string;
}

export default function ProjectCard({ name, updatedAt }: ProjectCardProps) {
  return (
    <div className="bg-white border-[0.3px] border-[rgba(65,65,65,0.3)] rounded-[9px] w-[143px] overflow-hidden">
      <div className="h-[116px] bg-[#d9d9d9]" />
      <div className="px-[18px] py-[10px] flex flex-col gap-2">
        <div>
          <p className="text-[11px] font-medium font-[family-name:var(--font-poppins)] text-black capitalize leading-tight">
            {name}
          </p>
          <p className="text-[8px] font-[family-name:var(--font-poppins)] text-[#979797] capitalize">
            updated {updatedAt}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-4 h-4 rounded-full bg-gray-300 border border-white -mr-1 z-10" />
            <div className="w-4 h-4 rounded-full bg-[#2b7fff] flex items-center justify-center">
              <span className="text-white text-[8px] font-bold font-[family-name:var(--font-inter)]">AC</span>
            </div>
          </div>
          <Star size={15} className="text-[#414141]" />
        </div>
      </div>
    </div>
  );
}
