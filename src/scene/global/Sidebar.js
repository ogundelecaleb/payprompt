import React from "react";
import { BiGridAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Sidebar = ({ isSidebarOpen, onClose }) => {
  const router = useLocation();

  return (
    <div
      className={` lg:block lg:relative ${
        isSidebarOpen ? "block z-20 fixed inset-0 transition-opacity" : "hidden"
      }`}
    >
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#29292980]  transition-opacity lg:relative"
      ></div>
      <div class="absolute top-0 right-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
        <button
          onClick={onClose}
          type="button"
          class="rounded-md text-gray-700 hover:text-[white] focus:outline-none focus:ring-2 focus:ring-[white]"
        >
          <span class="sr-only">Close panel</span>

          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div class="max-w-[220px] min-h-screen bg-[#F6F6F6] border-r pt-10 pb-7 sticky top-0  ">
        <img
          className="mx-auto mb-[39px] pb-[32px] border-b border-[#E2E8F0] "
          src="./image/logo.png"
          alt="logo"
        />

        <Link
          to="/dashboard"
          className={`w-full border-r-[2px] border-r-[#8CC7FF] py-[13px] pl-[17px] pr-[77px] flex tracking-[0.2px] gap-[12px] font-medium text-[14px] leading-[21px] items-end mb-[12px] ${
            window.location.pathname === "/dashboard"
              ? "bg-[#124072] text-[white] rounded-xl"
              : "text-[#718096]"
          }`}
        >
          <div className="flex items-center gap-[4px]">
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4" cy="4" r="4" fill="#0E82F0" />
            </svg>
            <BiGridAlt className="text-[24px] " />
          </div>
          <div className="relative"><div className="h-[7px] bg-[#8CC7FF] opacity-[33%] w-[70%] bottom-1 -z-10 absolute"></div>Dashboard</div>
          
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
