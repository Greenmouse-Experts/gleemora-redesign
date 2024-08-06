import React, { useState } from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import { LuCalendar } from "react-icons/lu";
import { FiGift } from "react-icons/fi";

const BookAgent = () => {
  const [callType, setCallType] = useState("audio");
  return (
    <div className="boxing">
      <div className="grid xl:grid-cols-5 grid-cols-1  py-16 gap-14">
        <div className="xl:col-span-2">
          <div className=" duration-100 cursor-pointer  w-full ">
            <div className="relative">
              <p className="absolute bg-white px-5 py-2 rounded-[6rem] top-4 left-4 ">
                Survivor Mentor
              </p>
              <img
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1722870330/Rectangle_20061_ndseod.png"
                alt="icons"
                className="h-full rounded-[15px] w-full object-cover object-center"
              />
            </div>
            <div className="flex items-center gap-2 mt-5 mb-4">
              <h4 className=" ">Emily J. Thompson</h4>{" "}
              <span>
                <BsPatchCheckFill color="#F54B64" size={20} />
              </span>
            </div>
            <p className="lg:text-xl">
              Medical practitioner, Healthcave Hospital. Fibroid Survivor
            </p>
          </div>

          <div className="flex flex-col gap-6 mt-10">
            <h4>About Emily</h4>
            <p className="lg:text-xl">
              Dr. Maria Rodriguez, a resilient and compassionate medical
              practitioner, has triumphed over personal health challenges,
              including a battle with fibroids. Despite facing adversity, Dr.
              Rodriguez emerged stronger and more committed to her patients'
              well-being.{" "}
            </p>
            <p className="lg:text-xl">
              Her journey through fibroid treatment has deepened her
              understanding of the emotional and physical toll such conditions
              can take on individuals, fueling her passion for empathetic
              patient care.
            </p>
          </div>
        </div>

        <div className="xl:col-span-3">
          <div className="rounded-[14px] border border-primary p-6">
            <div className="bg-[#FFF8F9] grid grid-cols-2 items-center rounded-[6rem] p-2">
              <p
                className={` text-center py-4 cursor-pointer rounded-[6rem] font-bold lg:text-xl transition-all  ${
                  callType === "audio"
                    ? "bg-primary text-white"
                    : "bg-[##FFF8F9] text-primary"
                }`}
                onClick={() => setCallType("audio")}
              >
                Audio Call
              </p>
              <p
                className={` text-center py-4 cursor-pointer rounded-[6rem] font-bold lg:text-xl transition-all ${
                  callType === "video"
                    ? "bg-primary text-white"
                    : "bg-[##FFF8F9] text-primary"
                }`}
                onClick={() => setCallType("video")}
              >
                Video Call
              </p>
            </div>

            <div className="mt-10">
              <h4>1:1 Audio Session</h4>
              <p className="lg:text-xl mt-7">
                Book a 1:1 session with a survivor who has walked your path.
                Find support and shared experiences that illuminate your path to
                healing.
              </p>

              <div className="flex justify-between items-center my-14">
                <p className="lg:text-xl ">
                  Select a time that works for you to connect.
                </p>
                <span className="bg-[#FFF8F9] p-2 rounded-xl">
                  {" "}
                  <LuCalendar className="text-primary" size={24} />
                </span>
              </div>

              <p className="lg:text-xl mt-12 text-primary">Free Session</p>
              <div className="mt-12">
                <button
                  className="text-white bg-primary w-full rounded-[6rem] py-5 font-bold lg:text-xl  "
                  type="button"
                >
                  Book Session
                </button>
              </div>
            </div>
          </div>

          <div className="rounded-[14px] border border-primary p-6 mt-6">
            <h4>Gift Someone a session</h4>

            <div className="flex items-center gap-8 mt-10">
              <div className="bg-[#FFF8F9] p-2 rounded-xl">
                <FiGift className="text-primary" size={28} />
              </div>
              <button
                className="text-white bg-primary w-full rounded-[6rem] py-5 font-bold lg:text-xl  "
                type="button"
              >
                Select Time
              </button>
            </div>
          </div>

          <div className=" mt-6">
            <h4>Reviews</h4>

            <div className="bg-pink mt-10 p-7  rounded-[14px]">
             <p className="lg:text-xl">"The appointment session was efficiently conducted, providing a seamless experience with clear communication and prompt scheduling."</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAgent;
