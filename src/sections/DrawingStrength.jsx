import React, { useState } from "react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { RiCalendarLine } from "react-icons/ri";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { HashLink } from "react-router-hash-link";
import ReactSimplyCarousel from "react-simply-carousel";
import Slider from "react-slick";
import { survivorSettings } from "../helpers/settings";

const DrawingStrength = () => {
  const shrinks = [
    {
      name: "Milan J.",
      desc: "Lupus Survivor",
      career: "Television Host",
      img: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1701941246/Gleemora/undraw_profile_pic_re_iwgo_1_voyqcw.png",
    },
    {
      name: "Derek F.",
      desc: "Multiple Sclerosis Survivor",
      career: "Lawyer",
      img: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1701941246/Gleemora/undraw_male_avatar_g98d_1_b9jzkx.png",
    },
    {
      name: "Julian B.",
      desc: "Cancer Survivor",
      career: "Software Engineer",
      img: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1701941247/Gleemora/undraw_pic_profile_re_7g2h_1_meakxq.png",
    },
    {
      name: "Nene C.",
      desc: "Brain aneurysm Survivor",
      career: "Chief Marketing Officer",
      img: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1701941247/Gleemora/undraw_female_avatar_efig_1_ccdews.png",
    },
    {
      name: "Susan P.",
      desc: "Endometriosis Survivor",
      career: "Professional football player",
      img: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1701941247/Gleemora/undraw_profile_pic_re_iwgo_2_fk33xc.png",
    },
  ];
  const [sliderRef, setSliderRef] = useState(null);
  return (
    <>
      <div className="">
        <div className="boxing">
          <div className="py-16 lg:py-20">
            <div className="flex justify-between items-center mb-5">
              <h3>Discover more</h3>
              <div className="flex h-12 gap-x-4 items-center text-black">
                <BsArrowLeftCircle
                  className="text-4xl cursor-pointer"
                  onClick={sliderRef?.slickPrev}
                />
                <BsArrowRightCircle
                  className="text-4xl cursor-pointer"
                  onClick={sliderRef?.slickNext}
                />
              </div>
            </div>

            <div>
              <Slider ref={setSliderRef} {...survivorSettings}>
                {shrinks.map((item, i) => (
                  <div
                    className="hover:shadow-lg hover:scale-105 duration-100 pb-4 rounded-[15px] cursor-move"
                    key={i}
                  >
                    <div className="relative bg-[#FFF8F9] h-[250px] grid place-content-center rounded-[15px]">
                      <span className="absolute top-2 left-1 px-3 py-1 text-[13px] mulish bg-white font medium rounded-[20px]">
                        Survivor Mentor
                      </span>
                      <img
                        src={item.img}
                        alt="profile"
                        className="w-8/12 mx-auto"
                      />
                    </div>
                    <div className="mt-4 px-3 lg:px-2">
                      <div className="flex items-center mb-3 justify-between">
                        <p className="mulish flex items-center gap-x-1">
                          <span className="font-bold text-xl">{item.name}</span>{" "}
                          <RiVerifiedBadgeFill className="text-[#F54B64]" />
                        </p>
                        <RiCalendarLine />
                      </div>
                      <p className="mulish text-[15px]">{item.desc}</p>
                      <p className="mulish text-[15px]">{item.career}</p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DrawingStrength;
