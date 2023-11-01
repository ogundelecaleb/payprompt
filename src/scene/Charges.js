import React from "react";

const Charges = () => {
  return (
    <>
      {/* first  */}
      <div className="mt-2 py-[55px] mx-6">
        <p className="text-[#1A202C] text-[16px] mb-[24px] font-bold ">Transfer Money Charges</p>

        

        <div className="flex flex-col mb-5 md:flex-row justify-between gap-2   ">
          <div className="min-w-[49%]  h-[290px] bg-[#F1F1F1] rounded-lg ">
            <div className="px-[21px] py-[21px]">
              <p className="text-[18px] font-bold">Charges</p>
              <div className=" ">
                {" "}
                <form className="mt-3  ">
                  <div>
                    <label className="text-[15px]">Fixed Charges</label> <br />
                    <div className="flex">
                      <input
                        type="text"
                        placeholder="1"
                        className="w-full rounded-tl-lg rounded-bl-lg bg-white  px-3 py-1 h-[38px] focus:outline-0"
                      />
                      <button className="min-w-[50px] h-[38px] bg-[#0092FF] text-white py-1 rounded-tr-lg rounded-br-lg ">
                        NGN
                      </button>
                    </div>
                  </div>
                  <div className="mt-5">
                    <label className="text-[15px] ">Percentage Charges</label>{" "}
                    <br />
                    <div className="flex ">
                      <input
                        type="text"
                        placeholder="1"
                        className="w-full rounded-tl-lg rounded-bl-lg bg-white  px-3 py-1 h-[38px] focus:outline-0"
                      />
                      <button className="min-w-[50px] h-[38px] bg-[#0092FF] text-white py-1 rounded-tr-lg rounded-br-lg ">
                        %
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="min-w-[49%] h-[290px] bg-[#F1F1F1]  rounded-lg relative">
            <div className="px-[21px] py-[21px]">
              <p className="text-[18px] font-bold">Range</p>
              <div className=" ">
                {" "}
                <form className="mt-3  ">
                  <div>
                    <label className="text-[15px]">Fixed Charges</label> <br />
                    <div className="flex">
                      <input
                        type="text"
                        placeholder="1"
                        className="w-full rounded-tl-lg rounded-bl-lg bg-white  px-3 py-1 h-[38px] focus:outline-0"
                      />
                      <button className="min-w-[50px] h-[38px] bg-[#0092FF] text-white py-1 rounded-tr-lg rounded-br-lg ">
                        NGN
                      </button>
                    </div>
                  </div>
                  <div className="mt-5">
                    <label className="text-[15px] ">Percentage Charges</label>{" "}
                    <br />
                    <div className="flex ">
                      <input
                        type="text"
                        placeholder="1"
                        className="w-full rounded-tl-lg rounded-bl-lg bg-white  px-3 py-1 h-[38px] focus:outline-0"
                      />
                      <button className="min-w-[50px] h-[38px] bg-[#0092FF] text-white py-1 rounded-tr-lg rounded-br-lg ">
                        %
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <button className=" bg-[#0092FF] text-white py-4 w-full rounded-lg font-bold">
          Update
        </button>
      </div>
      {/* Second */}
      <div className="pt-[48px] px-[24px] md:pt-[56px] md:px-[36px]  lg:pt-[73px]  lg:px-[48px] relative">
        <p className="text-[#1A202C] text-[16px] mb-[24px] font-bold">Bills Pay Charges</p>

       

        <div className="flex flex-col mb-5 md:flex-row justify-between gap-2   ">
          <div className="min-w-[49%]  h-[290px] bg-[#F1F1F1] rounded-lg ">
            <div className="px-[21px] py-[21px]">
              <p className="text-[18px] font-bold">Charges</p>
              <div className=" ">
                {" "}
                <form className="mt-3  ">
                  <div>
                    <label className="text-[15px]">Fixed Charges</label> <br />
                    <div className="flex">
                      <input
                        type="text"
                        placeholder="1"
                        className="w-full rounded-tl-lg rounded-bl-lg bg-white  px-3 py-1 h-[38px] focus:outline-0"
                      />
                      <button className="min-w-[50px] h-[38px] bg-[#0092FF] text-white py-1 rounded-tr-lg rounded-br-lg ">
                        NGN
                      </button>
                    </div>
                  </div>
                  <div className="mt-5">
                    <label className="text-[15px] ">Percentage Charges</label>{" "}
                    <br />
                    <div className="flex ">
                      <input
                        type="text"
                        placeholder="1"
                        className="w-full rounded-tl-lg rounded-bl-lg bg-white  px-3 py-1 h-[38px] focus:outline-0"
                      />
                      <button className="min-w-[50px] h-[38px] bg-[#0092FF] text-white py-1 rounded-tr-lg rounded-br-lg ">
                        %
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="min-w-[49%] h-[290px] bg-[#F1F1F1]  rounded-lg relative">
            <div className="px-[21px] py-[21px]">
              <p className="text-[18px] font-bold">Range</p>
              <div className=" ">
                {" "}
                <form className="mt-3  ">
                  <div>
                    <label className="text-[15px]">Minimum Amount</label> <br />
                    <div className="flex">
                      <input
                        type="text"
                        placeholder="1"
                        className="w-full rounded-tl-lg rounded-bl-lg bg-white  px-3 py-1 h-[38px] focus:outline-0"
                      />
                      <button className="min-w-[50px] h-[38px] bg-[#0092FF] text-white py-1 rounded-tr-lg rounded-br-lg ">
                        NGN
                      </button>
                    </div>
                  </div>
                  <div className="mt-5">
                    <label className="text-[15px] ">Maximum Amount</label>{" "}
                    <br />
                    <div className="flex ">
                      <input
                        type="text"
                        placeholder="1"
                        className="w-full rounded-tl-lg rounded-bl-lg bg-white  px-3 py-1 h-[38px] focus:outline-0"
                      />
                      <button className="min-w-[50px] h-[38px] bg-[#0092FF] text-white py-1 rounded-tr-lg rounded-br-lg ">
                        %
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <button className=" bg-[#0092FF] text-white py-4 w-full rounded-lg font-bold">
          Update
        </button>
      </div>
      {/* Third */}
      <div className="pt-[48px] px-[24px] md:pt-[56px] md:px-[36px]  lg:pt-[73px]  lg:px-[48px] relative">
        <p className="text-[#1A202C] text-[16px] mb-[24px] font-bold">Virtual Card Charges</p>

      

        <div className="flex flex-col mb-5 md:flex-row justify-between gap-2   ">
          <div className="min-w-[49%]  h-[290px] bg-[#F1F1F1] rounded-lg ">
            <div className="px-[21px] py-[21px]">
              <p className="text-[18px] font-bold">Charges</p>
              <div className=" ">
                {" "}
                <form className="mt-3  ">
                  <div>
                    <label className="text-[15px]">Fixed Charges</label> <br />
                    <div className="flex">
                      <input
                        type="text"
                        placeholder="1"
                        className="w-full rounded-tl-lg rounded-bl-lg bg-white  px-3 py-1 h-[38px] focus:outline-0"
                      />
                      <button className="min-w-[50px] h-[38px] bg-[#0092FF] text-white py-1 rounded-tr-lg rounded-br-lg ">
                        NGN
                      </button>
                    </div>
                  </div>
                  <div className="mt-5">
                    <label className="text-[15px] ">Percentage Charges</label>{" "}
                    <br />
                    <div className="flex ">
                      <input
                        type="text"
                        placeholder="1"
                        className="w-full rounded-tl-lg rounded-bl-lg bg-white  px-3 py-1 h-[38px] focus:outline-0"
                      />
                      <button className="min-w-[50px] h-[38px] bg-[#0092FF] text-white py-1 rounded-tr-lg rounded-br-lg ">
                        %
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="min-w-[49%] h-[290px] bg-[#F1F1F1]  rounded-lg relative">
            <div className="px-[21px] py-[21px]">
              <p className="text-[18px] font-bold">Range</p>
              <div className=" ">
                {" "}
                <form className="mt-3  ">
                  <div>
                    <label className="text-[15px]">Minimum Amount</label> <br />
                    <div className="flex">
                      <input
                        type="text"
                        placeholder="1"
                        className="w-full rounded-tl-lg rounded-bl-lg bg-white  px-3 py-1 h-[38px] focus:outline-0"
                      />
                      <button className="min-w-[50px] h-[38px] bg-[#0092FF] text-white py-1 rounded-tr-lg rounded-br-lg ">
                        NGN
                      </button>
                    </div>
                  </div>
                  <div className="mt-5">
                    <label className="text-[15px] ">Maximum Amount</label>{" "}
                    <br />
                    <div className="flex ">
                      <input
                        type="text"
                        placeholder="1"
                        className="w-full rounded-tl-lg rounded-bl-lg bg-white  px-3 py-1 h-[38px] focus:outline-0"
                      />
                      <button className="min-w-[50px] h-[38px] bg-[#0092FF] text-white py-1 rounded-tr-lg rounded-br-lg ">
                        %
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <button className=" bg-[#0092FF] text-white py-4 w-full rounded-lg font-bold">
          Update
        </button>
      </div>
    </>
  );
};

export default Charges;


