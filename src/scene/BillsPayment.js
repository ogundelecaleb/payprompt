import React from "react";
import { NumericFormat } from "react-number-format";
import { FiAlertCircle } from "react-icons/fi";

const BillsPayment = () => {
  return (
    <div className="py-[55px]  mx-6">
      {/* search and filter button */}
      <div className="lg:flex lg:justify-between items-center mb-8 ">
        <div className="relative py-4   w-full flex gap-3 ">
          <button className="px-3 py-1 text-white rounded-[40px] cursor-pointer bg-slate-500">All Logs</button>
          <button>Pending Logs</button>
          <button>SuccessFul Logs</button>

          
        </div>
        <div className="flex items-center">
          <button
            // onClick={handleDisplaySearch}
            className={`px-4 py-4 border border-[#E2E8F0] bg-[#124072] text-[white]
             text-[14px] leading-[21px] tracking-[0.2px] h-[48px] font-semibold rounded-xl flex items-center mr-4 `}
          >
            <svg
              className="mr-2"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.60851 13.8274H3.35791"
                stroke="#1A202C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.9507 5.75029H16.2013"
                stroke="#1A202C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.27207 5.70521C7.27207 4.6255 6.39027 3.75 5.30278 3.75C4.2153 3.75 3.3335 4.6255 3.3335 5.70521C3.3335 6.78492 4.2153 7.66042 5.30278 7.66042C6.39027 7.66042 7.27207 6.78492 7.27207 5.70521Z"
                stroke="#1A202C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.6666 13.7948C16.6666 12.7151 15.7855 11.8396 14.698 11.8396C13.6098 11.8396 12.728 12.7151 12.728 13.7948C12.728 14.8745 13.6098 15.75 14.698 15.75C15.7855 15.75 16.6666 14.8745 16.6666 13.7948Z"
                stroke="#1A202C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Filters
          </button>
          <button
            // onClick={handleModalOpen}
            className="px-4 py-4 border border-[#E2E8F0]  text-[#1A202C] text-[14px] leading-[21px] tracking-[0.2px] h-[48px] font-semibold rounded-xl flex items-center "
          >
            <svg
              className="mr-2"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.66658 8.33333L4.99992 8.33333C4.55789 8.33333 4.13397 8.50893 3.82141 8.82149C3.50885 9.13405 3.33325 9.55797 3.33325 10L3.33325 15.8333C3.33325 16.2754 3.50885 16.6993 3.82141 17.0118C4.13397 17.3244 4.55789 17.5 4.99992 17.5L14.9999 17.5C15.4419 17.5 15.8659 17.3244 16.1784 17.0118C16.491 16.6993 16.6666 16.2754 16.6666 15.8333L16.6666 10C16.6666 9.55797 16.491 9.13405 16.1784 8.82149C15.8659 8.50893 15.4419 8.33333 14.9999 8.33333L13.3333 8.33333"
                stroke="#1A202C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10 14.1667L10 2.50002M10 2.50002L7.5 5.00002M10 2.50002L12.5 5.00002"
                stroke="#1A202C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Export
          </button>
        </div>
      </div>
      {/* end search and filter button */}

      {/* table */}

      <div class="flex flex-col overflow-x-auto p-3 border rounded-lg">
        <div class="sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-x-auto">
              <table className="min-w-full mb-6 table-fixed">
                <thead className="">
                  <tr className="mb-2">
                    <th className="whitespace-nowrap pr-5 py-[14px]  border-[#EDF2F7] text-[14px] leading-[21px] tracking-[0.3px] text-[#1A202C] font-medium text-left  ">
                      TRX
                    </th>
                    <th className="whitespace-nowrap pr-5 py-[14px] border-[#EDF2F7] text-[14px] leading-[21px] tracking-[0.3px] text-[#1A202C] font-medium text-left  ">
                      FULL NAME
                    </th>
                    <th className="whitespace-nowrap pr-5 py-[14px] border-[#EDF2F7] text-[14px] leading-[21px] tracking-[0.3px] text-[#1A202C] font-medium text-left  ">
                      USER TYPE
                    </th>
                    <th className="whitespace-nowrap pr-5 py-[14px]  border-[#EDF2F7] text-[14px] leading-[21px] tracking-[0.3px] text-[#1A202C] font-medium text-left  ">
                      BILL TYPE
                    </th>
                    <th className="whitespace-nowrap pr-5 py-[14px] border-[#EDF2F7] text-[14px] leading-[21px] tracking-[0.3px] text-[#1A202C] font-medium text-left  ">
                      BILL NUMBER
                    </th>
                    <th className="whitespace-nowrap pr-5 py-[14px] border-[#EDF2F7] text-[14px] leading-[21px] tracking-[0.3px] text-[#1A202C] font-medium text-left  ">
                      BILL AMOUNT
                    </th>
                    <th className="whitespace-nowrap pr-5 py-[14px]  border-[#EDF2F7] text-[14px] leading-[21px] tracking-[0.3px] text-[#1A202C] font-medium text-left  ">
                      STATUS
                    </th>
                    <th className="whitespace-nowrap pr-5 py-[14px]  border-[#EDF2F7] text-[14px] leading-[21px] tracking-[0.3px] text-[#1A202C] font-medium text-left  ">
                      TIME
                    </th>
                    <th className="whitespace-nowrap pr-5 py-[14px]  border-[#EDF2F7] text-[14px] leading-[21px] tracking-[0.3px] text-[#1A202C] font-medium text-left  ">
                      ACTION
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="mb-2 px-9">
                    <td className=" py-[10px] whitespace-nowrap pr-5 border-t border-[#EDF2F7] text-[14px] leading-[24px]  text-[#1A202C] font-medium text-left  ">
                      AM783121
                    </td>
                    <td className=" py-[10px] whitespace-nowrap pr-5 border-t border-[#EDF2F7] text-[14px] leading-[24px]  text-[#1A202C] font-medium text-left  ">
                      Aje Damilola{" "}
                    </td>
                    <td className=" py-[10px] whitespace-nowrap pr-5 border-t border-[#EDF2F7] text-[14px] leading-[24px]  text-[#1A202C] font-medium text-left  ">
                      User{" "}
                    </td>
                    <td className=" py-[10px] whitespace-nowrap pr-5 border-t border-[#EDF2F7] text-[14px] leading-[24px]  text-[#1A202C] font-medium text-left  ">
                      Electricity
                    </td>
                    <td className=" py-[10px] whitespace-nowrap pr-5 border-t border-[#EDF2F7] text-[14px] leading-[24px]  text-[#1A202C] font-medium text-left  ">
                      785639462048{" "}
                    </td>
                    <td className=" py-[10px] whitespace-nowrap pr-5 border-t border-[#EDF2F7] text-[14px] leading-[24px]  text-[#1A202C] font-medium text-left  ">
                      <NumericFormat
                        value={"50,000"}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"₦"}
                        decimalScale={2}
                        fixedDecimalScale={true}
                        renderText={(value) => <p>{value}</p>}
                      />
                    </td>

                    <td className=" py-[10px] whitespace-nowrap pr-5 border-t border-[#EDF2F7] text-[14px] leading-[24px]  text-[#1A202C] font-medium text-left  ">
                      <button class="bg-[#F6FDF9] flex rounded-lg text-[#22C55E] px-5 py-[9.5px] text-[14px] leading-[21px] tracking-[0.2px] font-medium ">
                        Success
                      </button>
                    </td>
                    <td className=" py-[10px] whitespace-nowrap pr-5 border-t border-[#EDF2F7] text-[14px] leading-[24px]  text-[#1A202C] font-medium text-left  ">
                      28-09-23 01:10:14 AM
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

export default BillsPayment;
