import React from "react";
import "../Stylesheet/home.css";
import Main from "./Main";
import { HashLink } from "react-router-hash-link";
import { GoArrowRight } from "react-icons/go";


const Home = () => {
  return (
    <div className="main_page">
      <div className="home">
        <div className="home_text flex lg:flex-row flex-col lg:justify-between  items-center relative lg:h-[35rem] h-40rem">
          <div className="lg:w-9/12 2xl:w-8/12 ">
            <h2 className=" mulish">
              Navigate your <span>health challenges</span> hand-in-hand with{" "}
              <span>Survivors</span> - from influential achievers to career
              professionals who&apos;ve walked your path.
            </h2>
          </div>

          <div className="lg:w-4/12 xl:mt-32 w-full">
            <img
              src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1722560499/landing-img_dvwuzj.png"
              alt=""
              className="w-full xl:scale-[1.2] scale-110"
            />
          </div>

          <div className="absolute lg:-bottom-12 -bottom-64 bg-white flex lg:flex-row flex-col items-center gap-5 w-10/12 rounded-[21px]  card-shadow px-8 py-6">
            <input type="text" placeholder="Search by Survivor type" className="input_class  lg:w-[37%] w-full  lg:placeholder:text-xl placeholder:text-lg placeholder:mulish placeholder:font-bold placeholder:text-[#434343]" />
            <input type="text" placeholder="Health Challenge" className="input_class  lg:w-[37%] w-full  lg:placeholder:text-xl placeholder:text-lg placeholder:mulish placeholder:font-bold placeholder:text-[#434343]" />
            <button type="button" className=" bg-secondary font-bold flex gap-2 items-center text-white  lg:w-[25%] w-full  justify-center rounded-lg lg:text-xl text-lg mulish py-3">Search <span><GoArrowRight /></span></button>
          </div>
        </div>
      </div>
      <Main />
    </div>
  );
};

export default Home;
