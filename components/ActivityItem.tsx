 interface ActivityItemProps {
  user: string;
  action: string;
  file: string;
  time: string;
}

export default function ActivityItem({ user, action, file, time }: ActivityItemProps) {
  return (
    <div className="flex gap-[14px] items-start w-full">
      <div className="w-[30px] h-[30px] rounded-full bg-gray-300 shrink-0" />
      <div className="flex flex-col gap-[3px]">
        <p className="text-[10px] font-[family-name:var(--font-poppins)] text-black">
          <span className="font-medium">{user} </span>
          <span className="font-normal">{action}</span>
          <span className="font-medium"> {file}</span>
        </p>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-[3px] bg-[#d9d9d9]" />
          <p className="text-[10px] font-medium font-[family-name:var(--font-poppins)] text-[#6b6b6b]">{time}</p>
        </div>
      </div>
    </div>
  );
}
