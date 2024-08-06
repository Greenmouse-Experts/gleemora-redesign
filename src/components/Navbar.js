import React, { useState } from "react";
import "../Stylesheet/home.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { BiMenuAltRight } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import { Drawer, Button, IconButton } from "@material-tailwind/react";
import { HiOutlineLockClosed } from "react-icons/hi2";
import { IoChatbubblesOutline } from "react-icons/io5";

const Navbar = () => {
  const [fix, setFix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 0) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  window.addEventListener("scroll", setFixed);
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <div className={fix ? "navbar fixed " : "navbar"}>
      <Link to="/">
        <img
          src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1701951271/Gleemora/Group_48097509_4_1_dyftig.png"
          alt="logo"
          className="w-[63px] lg:w-24"
        />
      </Link>
      <div className="nav_link">
        <div className="text-black">
          <Link smooth to="/select-user" className="flex items-center gap-2">
            <span>
              <HiOutlineLockClosed />
            </span>
            Login / Signup
          </Link>
        </div>
        <Link to="/survivor" className="button_link">
        Become a survivor / Caregiver Mentor
        </Link>
        <Link to="/" className="button_link2 flex items-center gap-2">
          <span>
            {" "}
            <IoChatbubblesOutline size={25} />
          </span>
          Talk to a survivor
        </Link>
      </div>
      <div className="nav_drawer">
        <Link
          to="/survivor"
          className="text-grad text-[13px] text-white font-semibold mulish rounded-lg"
        >
          Join as a Survivor
        </Link>
      </div>
      <div className="nav_drawer text-white">
        <Button className="bg-transparent p-0 pb-1 m-0">
          <BiMenuAltRight className="text-4xl" onClick={openDrawer} color="black" />
        </Button>
        <Drawer open={open} onClose={closeDrawer} className="p-4">
          <div className="mb-6 flex items-center justify-between border-b pb-3">
            <Link to="/">
              <img
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1701951271/Gleemora/Group_48097509_4_1_dyftig.png"
                alt="logo"
                className="w-24 lg:w-24"
              />
            </Link>
            <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
              <FaTimes />
            </IconButton>
          </div>
          <div
            className="text-black grid mulish gap-8 mt-12"
            onClick={closeDrawer}
          >
            <Link to="/survivor" className="">
              Become a survivor/Caregiver
            </Link>
            <HashLink smooth to="/#join">
              User waitlist sign up
            </HashLink>
            <Link to="faq">FAQs</Link>
            <Link to="about">About Us</Link>
            <Link to="contact">Contact</Link>
            <Link to="policy">Privacy Policy</Link>
            <Link to="Story">Founder's Story</Link>
            <Link to="terms">Terms and Conditons</Link>
            <Link to="guidelines">Guidelines</Link>
          </div>
        </Drawer>
      </div>
    </div>
  );
};

export default Navbar;
