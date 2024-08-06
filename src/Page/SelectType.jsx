import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SelectType = () => {
  const [type, setType] = useState("");

  const navigate = useNavigate();
  const handleSubmit = () => {
    if (type === "user") {
      navigate("/login");
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="bg-[url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1722941300/Frame_19_fc5gpn.png')] h-screen w-full  bg-center bg-cover flex justify-center pt-20">
      <div className="mx-auto w-full">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1701951271/Gleemora/Group_48097509_4_1_dyftig.png"
            alt="logo"
            className="w-[63px] lg:w-32 mx-auto"
          />
        </Link>

        <div className="mt-28 w-full">
          <h4 className="text-white text-center !text-4xl">
            Let's begin your journey on Gleemora
          </h4>

          <div className="grid grid-cols-2 gap-5 mt-20 w-8/12 justify-center mx-auto">
            <div
              className={` w-full text-white text-center h-44  place-content-center rounded-xl font-extrabold  mulish text-2xl cursor-pointer ${
                type === "user" ? "bg-primary" : "bg-secondary"
              }`}
              onClick={() => setType("user")}
            >
              I am a User
            </div>

            <div
              className={`bg-secondary w-full text-center h-44 place-content-center font-extrabold   rounded-xl text-white  mulish text-2xl cursor-pointer ${
                type === "survivor" ? "bg-primary" : "bg-secondary"
              }  `}
              onClick={() => setType("survivor")}
            >
              I am a Survivor
            </div>
          </div>
          <div className="flex justify-center w-full my-16">
            <button
              disabled={type === ""}
              onClick={handleSubmit}
              type="button"
              className="text-2xl font-bold text-[#575757]  rounded-[100px] px-16 w-80 py-4 mulish disabled:bg-[#201E23] bg-white"
            >
              Continue
            </button>
          </div>
          <p className="text-white text-center">
            For more details on how we use your information, please read our
            Privacy and Cookie Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default SelectType;
