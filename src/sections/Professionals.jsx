import React, { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";
import { LuCalendar } from "react-icons/lu";
import {
  BsArrowLeftCircle,
  BsArrowRightCircle,
  BsPatchCheckFill,
} from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { survivorSettings } from "../helpers/settings";

const Professionals = () => {
  const cat = [
    {
      name: "Emily J. Thompson",
      img: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1722854612/Rectangle_20040_rimhk0.png",
      description:
        "Medical practitioner, Healthcave Hospital. Fibroid Survivor",
      id: "",
      route: "",
    },
    {
      name: "Endometriosis",
      img: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1722854612/Rectangle_20040_rimhk0.png",
      id: "",
      route: "",
    },
    {
      name: "PCOS",
      img: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1722854612/Rectangle_20040_rimhk0.png",
      id: "",
      route: "",
    },
    {
      name: "Cancer",
      img: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1701941246/Gleemora/cinema_1_3_athstr.png",
      id: "",
      route: "",
    },
    {
      name: "Arthritis",
      img: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1702147760/Gleemora/cinema_1_4_ydxcl0.png",
      id: "",
      route: "",
    },
    // {
    //   name: "Asthma",
    //   img: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1702147760/Gleemora/cinema_1_5_fbdzap.png",
    //   id: "",
    //   route: "",
    // },
    // {
    //   name: "Cardiovascular Disease",
    //   img: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1702147759/Gleemora/cinema_1_6_nnsmxs.png",
    //   id: "",
    //   route: "",
    // },
    // {
    //   name: "Chronic Obstructive Pulmonary Disease",
    //   img: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1702147759/Gleemora/cinema_1_7_n1c1dd.png",
    //   id: "",
    //   route: "",
    // },
    // {
    //   name: "Diabetes",
    //   img: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1702147759/Gleemora/cinema_1_8_y1iqva.png",
    //   id: "",
    //   route: "",
    // },
    // {
    //   name: "Chronic Organ Disease",
    //   img: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1702147759/Gleemora/cinema_1_9_ffgu4g.png",
    //   id: "",
    //   route: "",
    // },
    // {
    //   name: "Mental Health Conditions",
    //   img: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1702147759/Gleemora/cinema_1_10_jslen1.png",
    //   id: "",
    //   route: "",
    // },
    // {
    //   name: "Multiple Scelerosis",
    //   img: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1702147760/Gleemora/cinema_1_11_wuj22d.png",
    //   id: "",
    //   route: "",
    // },
    // {
    //   name: "Chronic Neurologic Disease",
    //   img: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1702147759/Gleemora/cinema_1_12_whvn33.png",
    //   id: "",
    //   route: "",
    // },
  ];
  const [sliderRef, setSliderRef] = useState(null);
  return (
    <>
      <div className="bg-[#FFF8F9] text-black">
        <div className="boxing">
          <div className="py-12">
            <div className="flex justify-between items-center mb-5">
              <h3>Career Professionals</h3>
              <div className="flex h-12 gap-x-4 items-center text-gray-400">
              <BsArrowLeftCircle className="text-4xl cursor-pointer"  color="black"  onClick={sliderRef?.slickPrev} />
              <BsArrowRightCircle className="text-4xl cursor-pointer" color="black" onClick={sliderRef?.slickNext}/>
              </div>
             
            </div>

            <div>
              <Slider ref={setSliderRef} {...survivorSettings}>
                {cat.map((item, i) => (
                  <div key={i} className=" relative   !mr-4 rounded-[15px]  duration-100 cursor-pointer  w-full ">
                    <p className="absolute bg-white px-3 py-1 rounded-[6rem] top-4 left-4 ">
                      Survivor Mentor
                    </p>
                    <img
                      src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1722854612/Rectangle_20040_rimhk0.png"
                      alt="icons"
                      className="h-full rounded-[15px] w-full object-cover object-center"
                    />
                    <div className="flex items-center justify-between mb-2 mt-5">
                      {" "}
                      <div className="flex items-center gap-2">
                        <p className=" font-extrabold text-lg ">
                        Chris Jeremy
                        </p>{" "}
                        <span>
                          <BsPatchCheckFill color="#F54B64" />
                        </span>
                      </div>
                      <span>
                        {" "}
                        <LuCalendar />
                      </span>
                    </div>
                    <p>
                    Physiotherapist and founder of Flores Cancer Awareness Group. 
                    </p>
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

export default Professionals;
