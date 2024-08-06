import React from "react";
import { HashLink } from "react-router-hash-link";
import FaqMentor from "../sections/FaqMentor";
import MentorForm from "../sections/MentorForm";

const Celeb = () => {
  return (
    <div className="celeb_main">
      <div className="h-20"></div>
      <div className="bg-grad padding lg:h-52 flex items-center justify-center">
        <div className="lg:w-10/12 mx-auto text-white">
          <p className="text-center text-xl font-semibold syne lg:text-3xl">
            Join as a Survivor or Caregiver Mentor
          </p>
          <p className="mt-6 text-center sora">
            If you're a public figure or career professional who has navigated
            chronic health challenges or someone who has provided support and
            care to a loved one during their health journey, your insights and
            experiences are invaluable.
          </p>
        </div>
      </div>
      <div className="padding">
        <div className="py-8">
          <div className="lg:flex gap-x-12 items-center">
            <div className="lg:w-3/12">
              <img
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1702410317/Gleemora/People_talking-bro_1_bpf0h5.png"
                alt="hugging"
                className="w-full"
              />
            </div>
            <div className="lg:w-8/12 mt-6 lg:mt-0">
              <p className="mulish lg:text-xl lg:leading-[40px]">
                At Gleemora, we believe every story has the power to heal,
                inspire, and empower. Celebrities, and influential figures
                beyond the glamour, have faced challenges like everyone else,
                and sharing their journey can provide unmatched emotional
                support to countless women navigating similar paths.
              </p>
              <div className="mt-12">
                <HashLink
                  className="bg-grad text-white  font-semibold rounded-[25px] lg:rounded-[40px] mt-10 px-6 lg:px-12 lg:py-5 py-3"
                  to={"/survivor#form"}
                  smooth
                >
                  Join as a survivor <span className="hidden sm:inline">or caregiver mentor</span>
                </HashLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#0D0D0D] py-12">
        <div className="padding">
          <p className="text-center text-white lg:w-10/12 mx-auto">
            Be part of a pioneering platform network bridging the gap between
            medical support and emotional well-being, offering a platform for
            sharing genuine insights and real talk.
          </p>
        </div>
      </div>
      <div className="bg-[#FFF8F9] py-6">
        <div className="padding">
          <div className="lg:flex flex-row-reverse items-center justify-between">
            <div className="lg:w-4/12">
              <img
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1702892196/Gleemora/Group_48097650_1_1_u0jce9.png"
                alt="video session"
              />
            </div>
            <div className="lg:w-5/12">
              <p className="text-xl font-semibold">Flexibility</p>
              <p className="mt-4 mulish">
                Set your pace. Choose your availability. We deeply value the
                time and contributions of our survivors. You have complete
                control over your schedule. Whether it&apos;s 30 minutes a week
                or an hour a month, our platform allows you to set your
                availability for sessions at your convenience.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="padding">
        <div className="py-6 lg:py-16" id="form">
          <MentorForm />
        </div>
      </div>
      <div className="py-12 bg-[#FFF8F9]">
        <div className="padding">
          <p className="text-center text-lg lg:text-2xl font-semibold">
            FAQs Survivor Mentor
          </p>
        </div>
        <FaqMentor />
      </div>
    </div>
  );
};

export default Celeb;
