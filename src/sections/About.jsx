import React from "react";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div className="boxing">
          <div className="py-12 lg:py-20">
            <div className="lg:flex flex-row-reverse items-center">
              <div className="lg:w-5/12">
                <img
                  src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1702035673/Gleemora/Frame_26_1_hhwiem.png"
                  alt="reading"
                  className="w-full lg:w-11/12"
                />
              </div>
              <div className="lg:w-7/12 mt-8 lg:mt-0">
                <p className="syne text-xl lg:text-3xl">
                  There is a personal vulnerability that comes with living with
                  a chronic medical condition. Navigating the illness
                  conversation at work can be even more complex.
                </p>
                <button
                  className="bg-grad text-white font-semibold rounded-[25px] lg:rounded-[40px] mt-10 px-6 lg:px-12 lg:py-5 py-3"
                  onClick={() => navigate("/survivor")}
                >
                  Join as a survivor mentor - Make an impact
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FFF8F9]">
        <div className="boxing">
          <div className="py-12 lg:py-20">
            <div className="lg:flex gap-8 items-center">
              <div className="lg:w-5/12 h-[300px]">
                <ReactPlayer
                  className={"bg-grad"}
                  width={"100%"}
                  controls
                  height={"100%"}
                  light={'https://res.cloudinary.com/greenmouse-tech/image/upload/v1702396132/Gleemora/bgvideo_iysbkv.png'}
                  // wrapper={<div className="bg-grad"></div>}
                  url={
                    "https://res.cloudinary.com/greenmouse-tech/video/upload/v1702292829/Gleemora/Gleemora_Trailer_1_eu59aj.mp4"
                  }
                />
              </div>
              <div className="lg:w-7/12 mt-8 lg:mt-0">
                <p className="syne font-semibold text-xl lg:text-3xl">
                  Find strength in shared experiences
                </p>
                <p className="mulish text-lg mt-10 leading-normal lg:leading-[38px]">
                  Navigating chronic health challenges or supporting a loved one
                  through their health struggles can be a profoundly emotional
                  and demanding journey. Gleemora's platform is dedicated to
                  those who find themselves on this path. The physical and
                  emotional hardships often bring a deep longing for connection,
                  understanding, and a ray of hope. At Gleemora, we understand
                  this need and strive to be the bridge that connects, supports,
                  and uplifts you in these trying times.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
