import React from "react";

const PromiseSection = () => {
  return (
    <>
      <div className="bg-[#FFF8F9]">
        <div className="boxing">
          <div className="lg:flex justify-between items-center py-12">
            <div className="">
              <h3>Need more details? Contact us</h3>
              <p className="text-2xl mt-5">
                We are here to assist. Contact us by phone, email or via our
                social media channels.
              </p>
            </div>

            <div className=" flex justify-end">
              <button
                type="button"
                className=" bg-primary  flex gap-2 items-center text-white w-72 justify-center rounded-lg text-xl mulish py-4"
              >
                Contact Us{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PromiseSection;
