"use client";

import { useTimeline } from "@/context/TimelineContext";

export default function TimelinePage() {
  const { timeline } = useTimeline();

  return (
    <div className="min-h-screen">
      <div className="ml-10 pl-4 pt-4">
        <h1 className="font-bold text-2xl">Timeline</h1>
      </div>

      {/* ✅ EMPTY STATE */}
      {timeline.length === 0 ? (
        <div className="flex items-center justify-center h-[60vh]">
          <h2 className="text-2xl text-gray-500">No Timeline Data 😔</h2>
        </div>
      ) : (
        <div className="p-10">
          {timeline.map((item, index) => (
            <div key={index} className="m-4 p-4 bg-gray-300 rounded-xl">
              <div className="flex gap-2">
                <p className="font-bold text-xl">{item.action}</p>
                <p>{item.name}</p>
              </div>
              <p>Time: {item.time}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
