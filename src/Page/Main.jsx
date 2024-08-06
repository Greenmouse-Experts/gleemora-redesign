import React from "react";
import "../Stylesheet/home.css";
import icon1 from "../Image/icon1.png";
import icon2 from "../Image/icon2.png";
import icon3 from "../Image/icon3.png";
import Join from "../components/Join";
import Balance from "../sections/Balance";
import SurviorCategories from "../sections/SurviorCat";
import AboutUs from "../sections/About";
import DrawingStrength from "../sections/DrawingStrength";
import PromiseSection from "../sections/Promise";
import StorySection from "../sections/Story";
import Survior from "../sections/Survivors";
import Professionals from "../sections/Professionals";

const Main = () => {
  const findimg = [
    {
      id: 1,
      image: icon1,
      head: "Exclusive one-on-one access to celebrity-driven support",
      body: "Discover and connect with celebrated figures who’ve braved your health journey",
    },
    {
      id: 2,
      image: icon2,
      head: "Secured Heart-to-Heart sessions",
      body: "All video calls are conducted within our web app, ensuring encryption and strong backend security. Your privacy and safety of all users is our top priority.",
    },
    {
      id: 3,
      image: icon3,
      head: "Flexibility",
      body: "Schedule sessions based on your availability, ensuring every conversation happens at the right time.",
    },
  ];

  return (
    <div className="main lg:mt-0 mt-44">
      <Balance />
      <Survior/>
      <SurviorCategories />
      <Professionals/>
      {/* <AboutUs /> */}
      {/* <div className="find padding">
        <div className="find_img lg:pb-16">
          {findimg.map((item) => (
            <div key={item.id}>
              <img src={item.image} alt="icons" className="mx-auto" />
              <h3>{item.head}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div> */}
      <DrawingStrength />
      <StorySection/>
      {/* <Join /> */}
      <PromiseSection />
    </div>
  );
};

export default Main;
