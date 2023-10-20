import React from "react";
import { BiGridAlt } from "react-icons/bi";
import {
  MdInsertChartOutlined,
  MdOutlineCases,
  MdOutlineGroup,
  MdOutlineReceipt,
  MdOutlineReceiptLong,
} from "react-icons/md";
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
          className={`w-full   py-[13px] pl-[17px] pr-[77px] flex tracking-[0.2px] gap-[12px] font-medium text-[14px] leading-[21px] items-end mb-[12px] ${
            window.location.pathname === "/dashboard"
              ? "  text-[#002240] border-r-[#8CC7FF] border-r-[2px]"
              : "text-[#718096]"
          }`}
        >
          <div className="flex items-center gap-[4px]">
            <svg
              className={`${
                window.location.pathname === "/dashboard" ? "block" : "hidden"
              }`}
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
          <div className="relative">
            <div
              className={`${
                window.location.pathname === "/dashboard" ? "block" : "hidden"
              } h-[7px] bg-[#8CC7FF] opacity-[33%] w-[70%] bottom-1 -z-10 absolute`}
            ></div>{" "}
            Dashboard
          </div>
        </Link>
        <Link
          to="/charges"
          className={`w-full   py-[13px] pl-[17px] pr-[77px] flex tracking-[0.2px] gap-[12px] font-medium text-[14px] leading-[21px] items-end mb-[12px] ${
            window.location.pathname === "/charges"
              ? "  text-[#002240] border-r-[#8CC7FF] border-r-[2px]"
              : "text-[#718096]"
          }`}
        >
          <div className="flex items-center gap-[4px]">
            <svg
            className={`${
              window.location.pathname === "/charges" ? "block" : "hidden"
            }`}
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4" cy="4" r="4" fill="#0E82F0" />
            </svg>
            <MdOutlineReceipt className="text-[24px] " />
          </div>
          <div className="relative">
            <div
              className={`${
                window.location.pathname === "/charges" ? "block" : "hidden"
              } h-[7px] bg-[#8CC7FF] opacity-[33%] w-[70%] bottom-1 -z-10 absolute`}
            ></div>
            <p className="whitespace-nowrap">Fees and Charges</p>
          </div>
        </Link>
        <Link
          to="/billspayment"
          className={`w-full py-[13px] pl-[17px] pr-[77px] flex tracking-[0.2px] gap-[12px] font-medium text-[14px] leading-[21px] items-end mb-[12px] ${
            window.location.pathname === "/billspayment"
              ? "  text-[#002240] border-r-[#8CC7FF] border-r-[2px]"
              : "text-[#718096]"
          }`}
        >
          <div className="flex items-center gap-[4px]">
            <svg
              className={`${
                window.location.pathname === "/billspayment"
                  ? "block"
                  : "hidden"
              }`}
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4" cy="4" r="4" fill="#0E82F0" />
            </svg>
            <MdOutlineGroup className="text-[24px] " />
          </div>
          <div className="relative">
            <div
              className={`${
                window.location.pathname === "/billspayment"
                  ? "block"
                  : "hidden"
              } h-[7px] bg-[#8CC7FF] opacity-[33%] w-[70%] bottom-1 -z-10 absolute`}
            ></div>
            <p className="whitespace-nowrap">Bills Payment</p>
          </div>
        </Link>
        <Link
          to="/topup"
          className={`w-full  py-[13px] pl-[17px] pr-[77px] flex tracking-[0.2px] gap-[12px] font-medium text-[14px] leading-[21px] items-end mb-[12px] ${
            window.location.pathname === "/topup"
              ? "  text-[#002240] border-r-[#8CC7FF] border-r-[2px]"
              : "text-[#718096]"
          }`}
        >
          <div className="flex items-center gap-[4px]">
            <svg
              className={`${
                window.location.pathname === "/topup"
                  ? "block"
                  : "hidden"
              }`}
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4" cy="4" r="4" fill="#0E82F0" />
            </svg>
            <MdOutlineCases className="text-[24px] " />
          </div>
          <div className="relative">
            <div
              className={`${
                window.location.pathname === "/topup" ? "block" : "hidden"
              } h-[7px] bg-[#8CC7FF] opacity-[33%] w-[70%] bottom-1 -z-10 absolute`}
            ></div>
            <p className="whitespace-nowrap">Mobile Top-up</p>
          </div>
        </Link>
        <Link
          to="/usermanagement"
          className={`w-full  py-[13px] pl-[17px] pr-[77px] flex tracking-[0.2px] gap-[12px] font-medium text-[14px] leading-[21px] items-end mb-[12px] ${
            window.location.pathname === "/usermanagement"
              ? "  text-[#002240] border-r-[#8CC7FF] border-r-[2px]"
              : "text-[#718096]"
          }`}
        >
          <div className="flex items-center gap-[4px]">
            <svg
              className={`${
                window.location.pathname === "/usermanagement"
                  ? "block"
                  : "hidden"
              }`}
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4" cy="4" r="4" fill="#0E82F0" />
            </svg>
            <MdOutlineReceiptLong className="text-[24px] " />
          </div>
          <div className="relative">
            <div
              className={`${
                window.location.pathname === "/usermanagement"
                  ? "block"
                  : "hidden"
              } h-[7px] bg-[#8CC7FF] opacity-[33%] w-[70%] bottom-1 -z-10 absolute`}
            ></div>
            <p className="whitespace-nowrap">User Management</p>
          </div>
        </Link>
        <Link
          to="/invoice"
          className={`w-full py-[13px] pl-[17px] pr-[77px] flex tracking-[0.2px] gap-[12px] font-medium text-[14px] leading-[21px] items-end mb-[12px] ${
            window.location.pathname === "/invoice"
              ? "  text-[#002240] border-r-[#8CC7FF] border-r-[2px] "
              : "text-[#718096]"
          }`}
        >
          <div className="flex items-center gap-[4px]">
            <svg
              className={`${
                window.location.pathname === "/invoice" ? "block" : "hidden"
              }`}
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4" cy="4" r="4" fill="#0E82F0" />
            </svg>
            <MdInsertChartOutlined className="text-[24px] " />
          </div>
          <div className="relative">
            <div
              className={`${
                window.location.pathname === "/invoice" ? "block" : "hidden"
              } h-[7px] bg-[#8CC7FF] opacity-[33%] w-[70%] bottom-1 -z-10 absolute`}
            ></div>{" "}
            <p className="whitespace-nowrap">Invoice</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
