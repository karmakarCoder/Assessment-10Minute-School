const InstructorSkeleton = () => {
  return (
    <div className="max-w-md p-4 rounded-xl border  border-gray-200 animate-pulse bg-white">
      <div className="flex items-start gap-4">
        {/* Avatar Circle */}
        <div className="size-16 shrink-0 rounded-full bg-gray-200" />
        {/* Text Placeholders */}
        <div className="flex flex-col gap-2 w-full">
          <div className="w-1/2 h-4 bg-gray-200 rounded" />
          <div className="w-3/4 h-3 bg-gray-200 rounded" />
          <div className="w-5/6 h-3 bg-gray-200 rounded" />
          <div className="w-1/4 h-3 bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  );
};

export default InstructorSkeleton;
