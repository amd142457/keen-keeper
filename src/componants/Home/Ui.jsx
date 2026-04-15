import React from "react";
import Image from "next/image";
import Link from "next/link";

const Ui = async () => {
  const res = await fetch("http://localhost:3000/Data.json");
  const data = await res.json();

  return (
    <div>
      <div>
        <div className="text-center pt-10 space-y-2.5">
          <h1 className="text-3xl font-bold text-black fade-up">
            Friends to keep close in your life
          </h1>
          <p className="text-[0.90em] text-gray-500 fade-up">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
          <button className="btn bg-[#252523] px-10 text-white mb-3.5">
            + Add
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 w-10/12 mx-auto gap-3 text-center p-10 ">
        <div className="bg-[#1C1C1A] p-5 rounded-xl">
          <p className="font-bold text-[#C9A84C] text-2xl">10</p>
          <h2 className="text-[#3A3A38] text-xl">Total</h2>
        </div>
        <div className="bg-[#1C1C1A] p-5 rounded-xl">
          <p className="font-bold text-[#C9A84C] text-2xl">3</p>
          <h2 className="text-[#3A3A38] text-xl">One truck</h2>
        </div>
        <div className="bg-[#1C1C1A] p-5 rounded-xl ">
          {" "}
          <p className="font-bold text-[#C9A84C] text-2xl">6</p>
          <h2 className="text-[#3A3A38] text-xl">Need attention</h2>
        </div>
        <div className="bg-[#1C1C1A] p-5 rounded-xl">
          {" "}
          <p className="font-bold text-[#C9A84C] text-2xl">12</p>
          <h2 className="text-[#3A3A50] text-xl">intruction this mounts</h2>
        </div>
      </div>
      <div className="w-10/12 mx-auto pb-4">
        <h1 className="font-bold text-3xl">Your Friends</h1>
      </div>

      <div className=" card-in card grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 w-10/12 mx-auto ">
        {data.map((item) => (
          <div key={item.id}>
            <Link href={`/home/${item.id}`}>
              <div className="card bg-[#FFFFFF] border border-[#BA8F33]  shadow-sm p-7  h-full">
                <Image
                  src={item.img}
                  alt="profile"
                  width={100}
                  height={100}
                  className=" mx-auto rounded-full "
                />
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{item.name}</h2>
                  <p className="">{item.time}</p>
                  <p className="btn rounded-full mr-2 bg-[#888780]">
                    {item.category}
                  </p>
                  <p
                    className={`btn rounded-full ${item.status === "Overdue" ? "bg-[#f2d098]" : item.status === "On-Track" ? "bg-[#6cc5a7] text-white" : "bg-[#df8585] text-white"}`}
                  >
                    {item.status}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ui;
