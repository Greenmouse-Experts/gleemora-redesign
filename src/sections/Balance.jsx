import React from "react";
import "../Stylesheet/home.css";
import { HashLink } from "react-router-hash-link";

const Balance = () => {
  return (
    <>
      <div className="boxing">
        <div className="lg:flex justify-between items-center py-12">
          <div className="lg:w-5/12">
            <img
              src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1702035674/Gleemora/Frame_24_2_jjwpe8.png"
              alt="reading"
              className="w-full lg:w-11/12"
            />
          </div>
          <div className="lg:w-7/12 mt-8 lg:mt-0">
            <p className="syne text-xl lg:text-3xl font-semibold lg:w-[56%]">
              Balancing health challenges with work-life.
            </p>
            <div className="mt-10">
              <p className="sora leading-loose">
                Over half of the North American workforce is living with at
                least one chronic health condition. Yet, most career
                professionals struggle with disclosing their illness at work
                because of the associated stigma. With Gleemora, you'll find
                seasoned career professionals and influential achievers who've
                bravely faced and overcome chronic health battles while
                balancing their careers.  Our survivors provide real talk and
                genuine support. They understand the emotional toll, the sense
                of isolation, and the path to recovery because they've lived it.
              </p>
              <div className="mt-10">
              <HashLink
                smooth
                to="/#join"
                className="bg-grad text-white text-[13px] md:text-[16px] font-semibold rounded-[25px] lg:rounded-[40px] px-4 lg:px-12 lg:py-5 py-3"
              >
                Secure your spot on the waitlist
              </HashLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Balance;
