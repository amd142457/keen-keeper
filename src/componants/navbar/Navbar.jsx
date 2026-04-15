"use client";
import Link from "next/link";
import { House, Clock4, ChartSpline } from "lucide-react";

import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();

  return (
    <div>
      <div className="max-lg:collapse bg-[#1C1C1A] shadow-sm w-full rounded-md transition-all duration-500">
        <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
        <label
          htmlFor="navbar-1-toggle"
          className="fixed inset-0 hidden max-lg:peer-checked:block"
        ></label>
        <div className="collapse-title navbar">
          <div className="navbar-start">
            <label
              htmlFor="navbar-1-toggle"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <button className="btn btn-ghost text-xl text-[#C9A84C]">
              KeenKeeper
            </button>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 space-x-2.5">
              <li className="text-xl">
                <Link
                  href="/"
                  className={`px-4 py-2 rounded ${
                    path === "/" ? "bg-[#BA8F30] text-white" : "bg-gray-200"
                  }`}
                >
                  <House className="text-[#252523]" />
                  Home
                </Link>
              </li>

              <li className="text-xl">
                <Link
                  href="/timeline"
                  className={`px-4 py-2 rounded ${
                    path === "/timeline"
                      ? "bg-[#BA8F30] text-white"
                      : "bg-gray-200"
                  }`}
                >
                  <Clock4 className="text-[#252523]" />
                  Timeline
                </Link>
              </li>

              <li className="text-xl">
                <Link
                  href="/states"
                  className={`px-4 py-2 rounded ${
                    path === "/states"
                      ? "bg-[#BA8F30] text-white"
                      : "bg-gray-200"
                  }`}
                >
                  <ChartSpline className="text-[#252523]" />
                  States
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-64 lg:w-auto"
            />
          </div>
        </div>

        <div className="collapse-content lg:hidden  ">
          <ul className="menu  text-red-500">
            <li className="text-xl">
              <Link
                href="/"
                className={`px-4 py-2 rounded ${
                  path === "/" ? "bg-[#BA8F30] text-white" : "bg-gray-200"
                }`}
              >
                <House className="text-[#252523]" />
                Home
              </Link>
            </li>
            <li className="text-xl">
              <Link
                href="/timeline"
                className={`px-4 py-2 rounded ${
                  path === "/timeline"
                    ? "bg-[#BA8F30] text-white"
                    : "bg-gray-200"
                }`}
              >
                <Clock4 className="text-[#252523]" />
                Timeline
              </Link>
            </li>
            <li className="text-xl">
              <Link
                href="/states"
                className={`px-4 py-2 rounded ${
                  path === "/states" ? "bg-[#BA8F30] text-white" : "bg-gray-200"
                }`}
              >
                <ChartSpline className="text-[#252523]" />
                States
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
