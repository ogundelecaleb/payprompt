import React from "react";
import { NumericFormat } from "react-number-format";
import { FiAlertCircle } from "react-icons/fi";
import { IoIosAdd } from "react-icons/io";

const Invoice = () => {
  return (
    <div className="mt-2  mx-6">
      {/* search and filter button */}
      <div className="lg:flex lg:justify-between items-center mb-8 ">
        <div className="">
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
        <div className="flex items-center">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="28"
              viewBox="0 0 24 28"
              fill="none"
            >
              <path
                d="M14.9997 14V25.82C15.0597 26.27 14.9097 26.75 14.5647 27.065C14.4259 27.2041 14.2611 27.3144 14.0796 27.3896C13.8982 27.4649 13.7037 27.5037 13.5072 27.5037C13.3108 27.5037 13.1162 27.4649 12.9348 27.3896C12.7533 27.3144 12.5885 27.2041 12.4497 27.065L9.43471 24.05C9.27111 23.8901 9.14672 23.6945 9.07126 23.4785C8.99579 23.2625 8.97131 23.032 8.99971 22.805V14H8.95471L0.314708 2.93C0.0711206 2.6173 -0.038791 2.22089 0.0089902 1.82739C0.0567714 1.4339 0.258361 1.07532 0.569708 0.83C0.854708 0.62 1.16971 0.5 1.49971 0.5H22.4997C22.8297 0.5 23.1447 0.62 23.4297 0.83C23.7411 1.07532 23.9426 1.4339 23.9904 1.82739C24.0382 2.22089 23.9283 2.6173 23.6847 2.93L15.0447 14H14.9997Z"
                fill="#0E82F0"
              />
            </svg>
          </div>
          <button
            // onClick={handleDisplaySearch}
            className={`px-4 py-4 border border-[#28B446] text-[#28B446] text-[14px] leading-[21px] tracking-[0.2px] h-[48px] font-semibold rounded-xl flex items-center gap-2 mr-4 `}
          >
           <img src="/image/excel.png" alt="Excel Icon" className="h-[24px] w-[24px] "/>
            Excel Export
          </button>
          <button
            // onClick={handleModalOpen}
            className="px-4 py-4 border border-[#D80027]  text-[#D80027] text-[14px] leading-[21px] tracking-[0.2px] h-[48px] font-semibold rounded-xl flex items-center "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.8 14H5V15H5.8C6.1 15 6.3 14.8 6.3 14.5C6.3 14.2 6.1 14 5.8 14ZM11 2H3V18H16V7L11 2ZM7.2 14.6C7.2 15.4 6.6 16 5.8 16H5V17H4V13H5.8C6.6 13 7.2 13.6 7.2 14.4V14.6ZM11.3 15.1C11.3 16.1 10.5 17 9.4 17H8V13H9.4C10.4 13 11.3 13.8 11.3 14.9V15.1ZM15 14H13V15H14.5V16H13V17H12V13H15V14ZM15 12H4V3H11V7H15V12ZM9.4 14H9V16H9.4C10 16 10.4 15.6 10.4 15C10.4 14.4 9.9 14 9.4 14Z"
                fill="#D80027"
              />
            </svg>
            Export
          </button>
          <button
            // onClick={handleModalOpen}
            className="px-4 py-4 border  bg-[#0E82F0]  text-[white] text-[14px] leading-[21px] tracking-[0.2px] h-[48px] font-semibold rounded-xl flex items-center "
          >
           
           <IoIosAdd className="text-white text-[24px]" color="#fff"/>
            New Invoice
          </button>
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
                      TRX
                    </th>
                    <th className="whitespace-nowrap pr-5 py-[18px] border-t border-[#EDF2F7] text-[14px] leading-[21px] tracking-[0.3px] text-[#1A202C] font-medium text-left  ">
                      FULL NAME
                    </th>
                    <th className="whitespace-nowrap pr-5 py-[18px] border-t border-[#EDF2F7] text-[14px] leading-[21px] tracking-[0.3px] text-[#1A202C] font-medium text-left  ">
                      USER TYPE
                    </th>
                    <th className="whitespace-nowrap pr-5 py-[18px] border-t border-[#EDF2F7] text-[14px] leading-[21px] tracking-[0.3px] text-[#1A202C] font-medium text-left  ">
                      BILL TYPE
                    </th>
                    <th className="whitespace-nowrap pr-5 py-[18px] border-t border-[#EDF2F7] text-[14px] leading-[21px] tracking-[0.3px] text-[#1A202C] font-medium text-left  ">
                      BILL NUMBER
                    </th>
                    <th className="whitespace-nowrap pr-5 py-[18px] border-t border-[#EDF2F7] text-[14px] leading-[21px] tracking-[0.3px] text-[#1A202C] font-medium text-left  ">
                      BILL AMOUNT
                    </th>
                    <th className="whitespace-nowrap pr-5 py-[18px] border-t border-[#EDF2F7] text-[14px] leading-[21px] tracking-[0.3px] text-[#1A202C] font-medium text-left  ">
                      STATUS
                    </th>
                    <th className="whitespace-nowrap pr-5 py-[18px] border-t border-[#EDF2F7] text-[14px] leading-[21px] tracking-[0.3px] text-[#1A202C] font-medium text-left  ">
                      TIME
                    </th>
                    <th className="whitespace-nowrap pr-5 py-[18px] border-t border-[#EDF2F7] text-[14px] leading-[21px] tracking-[0.3px] text-[#1A202C] font-medium text-left  ">
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
                      ELECTRICITY
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

export default Invoice;
