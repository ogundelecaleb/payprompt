import React from "react";
import { NumericFormat } from "react-number-format";
import { FiAlertCircle } from "react-icons/fi";
import { GoPerson } from "react-icons/go";

const UserManagement = () => {
  return (
    <div className="mt-2  mx-6">
      {/* search and filter button */}
      <div className="lg:flex lg:justify-between items-center mb-8 ">
        <div className="relative py-4   w-full flex gap-3 ">
          {/* <button className="px-3 py-1 text-white rounded-[40px] cursor-pointer bg-slate-500">All Logs</button>
          <button>Pending Logs</button>
          <button>SuccessFul Logs</button> */}

          
        </div>
        <div className="flex items-center">
        
          <div className="relative py-4  sm:w-[295px] w-full ">
          <span className="absolute inset-y-0 left-0 flex items-center pl-4 pr-3 ">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="9.80541"
                cy="9.80547"
                r="7.49047"
                stroke="#1A202C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.0151 15.4042L17.9518 18.3333"
                stroke="#1A202C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>

          <input
            type="text"
            className="w-full py-2 pl-10 pr-4 text-[#A0AEC0] leading-[21px] tracking-[0.2px] text-[14px] border border-[#E2E8F0] rounded-xl  focus:border-gray-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
            placeholder="Search for users"
          />
        </div>
        </div>
      </div>
      {/* end search and filter button */}

      {/* table */}

      <div class="flex flex-col overflow-x-auto">
        <div class="sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-x-auto">
              <table className="min-w-full mb-6 table-fixed">
                <thead className="bg-[#F7F7F7]">
                  <tr className="mb-2">
                    <th className="whitespace-nowrap pr-5 py-[18px] border-t border-[#EDF2F7] text-[14px] leading-[21px] tracking-[0.3px] text-[#1A202C] font-medium text-left  ">
                      
                    </th>
                    <th className="whitespace-nowrap pr-5 py-[18px] border-t border-[#EDF2F7] text-[14px] leading-[21px] tracking-[0.3px] text-[#1A202C] font-medium text-left  ">
                    USERNAME
                    </th>
                    <th className="whitespace-nowrap pr-5 py-[18px] border-t border-[#EDF2F7] text-[14px] leading-[21px] tracking-[0.3px] text-[#1A202C] font-medium text-left  ">
                      EMAIL
                    </th>
                    <th className="whitespace-nowrap pr-5 py-[18px] border-t border-[#EDF2F7] text-[14px] leading-[21px] tracking-[0.3px] text-[#1A202C] font-medium text-left  ">
PHONE                    </th>
                    <th className="whitespace-nowrap pr-5 py-[18px] border-t border-[#EDF2F7] text-[14px] leading-[21px] tracking-[0.3px] text-[#1A202C] font-medium text-left  ">
                      EMAIL VERIFICATION
                    </th>
                    <th className="whitespace-nowrap pr-5 py-[18px] border-t border-[#EDF2F7] text-[14px] leading-[21px] tracking-[0.3px] text-[#1A202C] font-medium text-left  ">
                     STATUS
                    </th>
                    
                    <th className="whitespace-nowrap pr-5 py-[18px] border-t border-[#EDF2F7] text-[14px] leading-[21px] tracking-[0.3px] text-[#1A202C] font-medium text-left  ">
                      ACTION
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="mb-2 px-9">
                    <td className=" py-[10px] whitespace-nowrap pr-5 border-t border-[#EDF2F7] text-[14px] leading-[24px]  text-[#1A202C] font-medium text-left  ">
                      <div className="h-[48px] w-[48px] rounded-full justify-center items-center flex bg-slate-400"><GoPerson/></div>
                      
                    </td>
                    <td className=" py-[10px] whitespace-nowrap pr-5 border-t border-[#EDF2F7] text-[14px] leading-[24px]  text-[#1A202C] font-medium text-left  ">
                      Jamesjef{" "}
                    </td>
                    <td className=" py-[10px] whitespace-nowrap pr-5 border-t border-[#EDF2F7] text-[14px] leading-[24px]  text-[#1A202C] font-medium text-left  ">
                      jamesjef@gmail.com
                    </td>
                    <td className=" py-[10px] whitespace-nowrap pr-5 border-t border-[#EDF2F7] text-[14px] leading-[24px]  text-[#1A202C] font-medium text-left  ">
                      ELECTRICITY
                    </td>
                    <td className=" py-[10px] whitespace-nowrap pr-5 border-t border-[#EDF2F7] text-[14px] leading-[24px]  text-[#1A202C] font-medium text-left  ">
                    <button class="bg-[#F6FDF9] flex rounded-lg text-[#22C55E] px-5 py-[9.5px] text-[14px] leading-[21px] tracking-[0.2px] font-medium ">
                        Verified
                      </button>
                    </td>
                    

                    <td className=" py-[10px] whitespace-nowrap pr-5 border-t border-[#EDF2F7] text-[14px] leading-[24px]  text-[#1A202C] font-medium text-left  ">
                      <button class="bg-[#F6FDF9] flex rounded-lg text-[#22C55E] px-5 py-[9.5px] text-[14px] leading-[21px] tracking-[0.2px] font-medium ">
                        Success
                      </button>
                    </td>
                    
                    <td className=" py-[10px] whitespace-nowrap pr-5 border-t border-[#EDF2F7] text-[14px] leading-[24px]  text-[#1A202C] font-medium text-left  ">
                      <button className="h-[33px] w-[33px] bg-[#0E82F0] flex justify-center items-center text-white rounded-lg cursor-pointer">
                        <FiAlertCircle />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
