import React from "react";
import { Link } from "react-router-dom";

const StorySection = () => {
  return (
    <>
      <div className="py-12 bg-[url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1722855546/hand_pqbkz4.png')] bg-cover bg-center ">
        <div className="boxing flex flex-col items-center justify-center xl:w-[60%] w-full mx-auto text-center gap-10">
          <img
            src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1722855680/quote_rhkxfv.png"
            alt=""
            className="h-16 w-16"
          />
          <p className="text-2xl text-white leading-10">
            This is due to their excellent service, competitive pricing and
            customer support. It’s throughly refresing to get such a personal
            touch.
          </p>

          <div className="flex flex-col items-center gap-4">
            <img
              src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1722855915/avatar_1_ln9djs.png"
              alt=""
              className="h-[5rem] w-[5rem]"
            />
            <p className=" font-extrabold text-white text-xl text-center">
              Florence Taylor
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StorySection;
