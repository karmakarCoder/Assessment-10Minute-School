export default function CoueseSidebarSkeleton() {
  return (
    <div className="space-y-4 p-2 border border-gray-200  bg-white w-full">
      {/* Media Thumbnails */}
      <div className="w-full aspect-video bg-gray-300" />
      <div className="flex gap-2 mt-2">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="w-16 h-10 bg-gray-300" />
        ))}
      </div>

      {/* Price Section */}
      <div className="h-6 w-32 bg-gray-300 rounded" />
      <div className="h-6 w-20 bg-gray-200 rounded" />
      <div className="h-10 w-full bg-gray-400 rounded-md mt-2" />

      {/* Feature Checklist */}
      <div className="space-y-3 mt-6 px-5 pb-4">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="h-5 w-5 bg-gray-300 rounded-full" />
            <div className="h-4 w-3/4 bg-gray-200 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}
