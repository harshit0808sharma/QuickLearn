// app/loading.js
export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white">
      <div className="flex space-x-1 mb-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            className="w-2.5 h-2.5 rounded-full bg-white opacity-30 animate-ping-dot"
            style={{ animationDelay: `${i * 0.1}s` }}
          ></span>
        ))}
      </div>
      <p className="text-sm tracking-wide">Loading...</p>
    </div>
  );
}
