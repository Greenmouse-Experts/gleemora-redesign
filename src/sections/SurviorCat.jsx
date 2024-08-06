import React, { useState } from "react";
import ReactSimplyCarousel from 'react-simply-carousel';
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

const SurviorCategories = () => {
  const cat = [
    {
      name: "Fibroid",
      img: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1701941246/Gleemora/cinema_1_lqvkro.png",
      id: "",
      route: "",
    },
    {
      name: "Endometriosis",
      img: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1701941246/Gleemora/cinema_1_1_gjhzdh.png",
      id: "",
      route: "",
    },
    {
      name: "PCOS",
      img: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1701941246/Gleemora/cinema_1_2_ipypdn.png",
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
    {
      name: "Asthma",
      img: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1702147760/Gleemora/cinema_1_5_fbdzap.png",
      id: "",
      route: "",
    },
    {
      name: "Cardiovascular Disease",
      img: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1702147759/Gleemora/cinema_1_6_nnsmxs.png",
      id: "",
      route: "",
    },
    {
      name: "Chronic Obstructive Pulmonary Disease",
      img: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1702147759/Gleemora/cinema_1_7_n1c1dd.png",
      id: "",
      route: "",
    },
    {
      name: "Diabetes",
      img: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1702147759/Gleemora/cinema_1_8_y1iqva.png",
      id: "",
      route: "",
    },
    {
      name: "Chronic Organ Disease",
      img: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1702147759/Gleemora/cinema_1_9_ffgu4g.png",
      id: "",
      route: "",
    },
    {
      name: "Mental Health Conditions",
      img: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1702147759/Gleemora/cinema_1_10_jslen1.png",
      id: "",
      route: "",
    },
    {
      name: "Multiple Scelerosis",
      img: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1702147760/Gleemora/cinema_1_11_wuj22d.png",
      id: "",
      route: "",
    },
    {
      name: "Chronic Neurologic Disease",
      img: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1702147759/Gleemora/cinema_1_12_whvn33.png",
      id: "",
      route: "",
    },
  ];
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  return (
    <>
      <div className="bg-[#0D0D0D] text-white">
        <div className="boxing">
          <div className="py-12">
            <div className="show-flex justify-between items-center">
              <h3>Survivor Categories</h3>
              <div className="show-height h-12 gap-x-4 items-center text-gray-400">
                {/* <BsArrowLeftCircle
                  className="text-3xl cursor-pointer"
                />
                <BsArrowRightCircle
                  className="text-3xl cursor-pointer"
                /> */}
              </div>
              {/* <div className="flex lg:hidden gap-x-4 items-center text-gray-400">
                <BsArrowLeftCircle
                  className="text-3xl cursor-pointer"
                />
                <BsArrowRightCircle
                  className="text-3xl cursor-pointer"
                />
              </div> */}
            </div>
            <div className="w-full hidden overflow-x-auto">
              <div className="flex gap-8 mt-12 lg:mt-20">
                {cat.map((item, i) => (
                  <div
                    className="bg-[#201E23] relative p-6 h-[135px] rounded-[15px] hover:scale-105 duration-100"
                    key={i}
                  >
                    <p className="font-medium  w-[200px]">{item.name}</p>
                    <img
                      src={item.img}
                      alt="icons"
                      className="absolute w-[70px] bottom-0 right-0"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="relative pt-8">
              <ReactSimplyCarousel
                activeSlideIndex={activeSlideIndex}
                onRequestChange={setActiveSlideIndex}
                itemsToShow={4}
                itemsToScroll={1}
                autoplay={true}
                autoplayDelay={1800}
                autoplayDirection={'forward'}
                containerProps={{
                  className: 'w-full track-slide'
                }}
                visibleSlideProps={{
                  className: '!max-w-[3000px]'
                }}
                forwardBtnProps={{
                  className: 'absolute right-0 -top-8',
                  children: <BsArrowRightCircle
                  className="text-4xl cursor-pointer text-gray-400"
                />,
                }}
                backwardBtnProps={{
                  className: 'absolute right-12 -top-8',
                  children: <BsArrowLeftCircle
                  className="text-4xl cursor-pointer text-gray-400"
                />,
                }}
                responsiveProps={[
                  {
                    itemsToShow: 1,
                    itemsToScroll: 1,
                    maxWidth: 468,
                  },
                ]}
                speed={400}
                easing="linear"
              >
                {cat.map((item, i) => (
                  <div
                    className="bg-[#201E23] relative p-6 h-[135px] w-[250px] lg:w-[300px] !mr-4 rounded-[15px] hover:scale-105 duration-100"
                    key={i}
                  >
                    <p className="font-medium">{item.name}</p>
                    <img
                      src={item.img}
                      alt="icons"
                      className="absolute w-[70px] bottom-0 right-0"
                    />
                  </div>
                ))}
              </ReactSimplyCarousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SurviorCategories;
