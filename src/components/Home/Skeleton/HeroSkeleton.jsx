export default function HeroSkeleton() {
  return (
    <div className="animate-pulse space-y-4 w-full">
      {/* Title */}
      <div className="h-8 w-3/4 bg-gray-700 rounded" />

      {/* Description Lines */}
      <div className="space-y-2">
        <div className="h-4 w-full bg-gray-700 rounded" />
        <div className="h-4 w-[90%] bg-gray-700 rounded" />
        <div className="h-4 w-[80%] bg-gray-700 rounded" />
      </div>
    </div>
  );
}
