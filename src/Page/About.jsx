import React from "react";
import { Header } from "../components/Header";

const About = () => {
  const text = [
    {
      id: 1,
      head: "Our Vision",
      body: "To create a world where the intersection of health and professional life is seamlessly supported. We aim to foster an environment that embodies emotional empathy and practical empowerment, acknowledging the unique challenges faced by those balancing work with chronic illness. We are committed to establishing a holistic ecosystem that offers not just solace but also the essential tools and guidance needed for effectively navigating the complexities of life and career impacted by chronic illness.",
    },
    {
      id: 2,
      head: "Our Mission",
      body: "Gleemora is laying the groundwork for an integrated ecosystem that supports every aspect of navigating health challenges and work-life.",
    },
  ];

  return (
    <div className="about_main">
      <Header title="About Gleemora" />
      <div className="padding">
        <div className="lg:flex justify-between gap-16 items-end">
          <div className="lg:w-3/12">
            <img
              src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1702228859/Gleemora/Creative_team-bro_1_tw5iha.png"
              alt="about_img"
              className="w-full"
            />
          </div>
          <div className="lg:w-8/12">
            <div className="bg-[#0D0D0D] text-white p-6 lg:py-10 rounded-lg">
              <p className="font-semibold text-2xl">{text[1].head}</p>
              <p className="mt-6">{text[1].body}</p>
            </div>
          </div>
        </div>
        <div className="bg-[#0D0D0D] mt-5 lg:mt-12 text-white p-6 lg:py-10 rounded-lg">
          <p className="font-semibold text-2xl">{text[0].head}</p>
          <p className="mt-6">{text[0].body}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
