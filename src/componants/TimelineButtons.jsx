"use client";
import { PhoneForwarded, MessageCircle, Video } from "lucide-react";
import { useTimeline } from "@/context/TimelineContext";
import { toast } from "react-toastify";

export default function TimelineButtons({ item }) {
  const { addToTimeline } = useTimeline();

  const handleClick = (action) => {
    addToTimeline({
      id: item.id,
      name: item.name,
      action: action,
      time: new Date().toISOString(),
    });
    toast.success(`${action} added successfully!`);
  };

  return (
    <div className=" flex  gap-3 space-y-2">
      <button
        onClick={() => handleClick("call")}
        className="btn w-full  p-7 bg-[#3A3A38] text-[#C9A84C]"
      >
        <p className="w-12 h-12 rounded-full  flex justify-center items-center hover:bg-gray-200">
          <PhoneForwarded />
        </p>
      </button>

      <button
        onClick={() => handleClick("text")}
        className="btn w-full bg-[#3A3A38] text-[#C9A84C] p-7"
      >
        <p className="w-12 h-12 rounded-full  flex justify-center items-center hover:bg-gray-200">
          <MessageCircle />
        </p>
      </button>

      <button
        onClick={() => handleClick("video")}
        className="btn w-full bg-[#3A3A38] text-[#C9A84C] p-7 border"
      >
        <p className="w-12 h-12 rounded-full  flex justify-center items-center hover:bg-gray-200">
          <Video />
        </p>
      </button>
    </div>
  );
}
