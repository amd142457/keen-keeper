import TimelineButtons from "@/componants/TimelineButtons";
import Image from "next/image";

const page = async ({ params }) => {
  const resolvedParams = await params;
  const res = await fetch("http://localhost:3000/Data.json");
  const data = await res.json();

  const item = data.find((i) => String(i.id) === String(resolvedParams.id));

  return (
    <div>
      <div className="p-6 bg-gray-100 min-h-screen">
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* LEFT PROFILE CARD */}
          <div className="col-span-1 p-5 rounded-xl shadow border border-[#C9A84C] bg-[#3A3A38] text-[#C9A84C]">
            <div className="flex flex-col items-center text-center">
              <Image
                src={item.img}
                alt="profile"
                width={70}
                height={70}
                className=" mx-auto rounded-full"
              />
              <h2 className="mt-3 font-semibold">{item.name}</h2>
              <span className=" mt-2.5 btn rounded-full text-sm text-gray-500 bg-green-300">
                {item.category}
              </span>
              <span
                className={`btn rounded-full mt-2.5 ${item.status === "Overdue" ? "bg-[#efad44]" : item.status === "On-Track" ? "bg-[#244d3f] text-white" : "bg-[#ef4444] text-white"}`}
              >
                {" "}
                {item.status}
              </span>
            </div>

            <div className="mt-5 space-y-2">
              <button className=" btn w-full bg-gray-100 p-2 rounded shadow-">
                Snooze
              </button>
              <button className=" btn w-full bg-gray-100 p-2 rounded">
                Archive
              </button>
              <button className=" btn w-full bg-red-100 p-2 rounded text-red-500">
                Delete
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-span-3 space-y-6">
            {/* TOP CARDS */}
            <div className="grid grid-cols-3 gap-4 ">
              <div className="bg-[#3A3A38] text-[#C9A84C] p-4 rounded shadow text-center">
                <h2 className="text-2xl font-bold">62</h2>
                <p className="text-sm text-gray-500">Days Since Contact</p>
              </div>

              <div className="bg-[#3A3A38] text-[#C9A84C] p-4 rounded shadow text-center">
                <h2 className="text-2xl font-bold">30</h2>
                <p className="text-sm text-gray-500">Goal (Days)</p>
              </div>

              <div className="bg-[#3A3A38] text-[#C9A84C] p-4 rounded shadow text-center">
                <h2 className="text-xl font-bold">Feb 27, 2026</h2>
                <p className="text-sm text-gray-500">Next Due</p>
              </div>
            </div>

            {/* RELATIONSHIP GOAL */}
            <div className="bg-[#3A3A38] text-[#C9A84C] p-5 rounded shadow flex justify-between">
              <div>
                <h3 className="font-semibold">Relationship Goal</h3>
                <p className="text-gray-500">
                  Connect every <span className="font-bold">30 days</span>
                </p>
              </div>
              <button className="bg-gray-200 px-3 py-1 rounded">Edit</button>
            </div>

            {/* QUICK ACTION */}
            <div className=" p-5 rounded shadow bg-[#3A3A38] text-[#C9A84C]">
              <h3 className="mb-4 font-semibold">Quick Check-In</h3>
              <div className="grid grid-cols-3 gap-4 ">
                <TimelineButtons item={item} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
