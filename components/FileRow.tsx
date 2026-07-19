interface FileRowProps {
  fileName: string;
  project: string;
  updatedAt: string;
  editedBy: string;
  version: string;
}

export default function FileRow({ fileName, project, updatedAt, editedBy, version }: FileRowProps) {
  return (
    <div className="flex items-center gap-[60px] w-full py-3 border-b border-[#e5e7eb] last:border-none">
      <div className="flex items-center gap-[13px] w-[158px]">
        <div className="w-[22px] h-[22px] bg-[#d9d9d9]" />
        <p className="text-[11px] font-medium font-[family-name:var(--font-inter)] text-black whitespace-nowrap">
          {fileName}
        </p>
      </div>
      <p className="text-[11px] font-medium font-[family-name:var(--font-inter)] text-[#5735e5] w-[170px]">
        {project}
      </p>
      <p className="text-[11px] font-medium font-[family-name:var(--font-inter)] text-[#6a7282] whitespace-nowrap">
        {updatedAt}
      </p>
      <div className="flex items-center gap-[10px]">
        <div className="w-5 h-5 rounded-full bg-gray-300" />
        <p className="text-[11px] font-medium font-[family-name:var(--font-inter)] text-black whitespace-nowrap">
          {editedBy}
        </p>
      </div>
      <div className="bg-[#f6f4ff] h-[23px] w-[29px] flex items-center justify-center rounded-[4px]">
        <p className="text-[11px] font-medium font-[family-name:var(--font-inter)] text-[#5735e5]">{version}</p>
      </div>
    </div>
  );
}