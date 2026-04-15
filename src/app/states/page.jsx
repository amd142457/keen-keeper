"use client";

import InteractionChart from "@/componants/InteractionChart";
import { useTimeline } from "@/context/TimelineContext";

export default function StatusPage() {
  const { timeline } = useTimeline();

  // 🔥 convert timeline → chart data
  const chartData = Object.values(
    timeline.reduce((acc, item) => {
      if (!acc[item.action]) {
        acc[item.action] = { name: item.action, value: 0 };
      }
      acc[item.action].value += 1;
      return acc;
    }, {}),
  );

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Friendship Analytics</h1>

      {/* PIE CHART */}
      <div className="flex justify-center ">
        <InteractionChart data={chartData} />
      </div>
    </div>
  );
}
