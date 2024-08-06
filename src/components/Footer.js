import React from "react";
import { Link } from "react-router-dom";
import "../Stylesheet/component.css";

const Footer = () => {
  return (
    <footer className=" bg-[url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1722857884/footer_y81onq.png')] bg-cover bg-center ">
      <div className="footer grid items-center justify-between text-white xl:grid-cols-3 grid-cols-1">
      <div className="col-span-1">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1701951271/Gleemora/Group_48097509_4_1_dyftig.png"
            alt="logo"
            className="w-[63px] lg:w-24"
          />
        </Link>
        <p className="mt-10 mb-8 text-lg leading-8">
          Fostering a global network of survivors, enabling users to find
          strength, guidance, and a sense of community as they navigate their
          health journey
        </p>
        <ul className="flex gap-x-5 justify-start text-white">
          <li>
            <a
              href="http://www.instagram.com/officialgleemora/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1702894481/Gleemora/Instagram_icon.png_mgzalk.webp"
                alt="insta"
                className="w-10 h-10"
              />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/GleemoraHQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1702894482/Gleemora/xicon_psx2jn.png"
                alt="x-icon"
                className="w-10 h-10"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/gleemora/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1702894480/Gleemora/linkdln_mrbrgj.png"
                alt="linkdln"
                className="w-11 h-11 rounded-lg"
              />
            </a>
          </li>
        </ul>
      </div>
      <div className="main_foot col-span-2">
        <div>
          <p className="text-white text-2xl font-semibold mb-6">Useful Links</p>
          <div className="grid grid-cols-1 gap-6">
            <Link to="about">About Us</Link>
            <Link to="faq">FAQs</Link>
            <Link to="survivor">Survivors</Link>
            <Link to="">Login / Sign Up</Link>
          </div>
        </div>

        <div>
          <p className="text-white text-2xl font-semibold mb-6">Legal</p>
          <div className="grid grid-cols-1 gap-6">
            <Link to="">Terms and Conditions</Link>
            <Link to="policy">Privacy Policy</Link>
            <Link to="">Cookies Policy</Link>
            <Link to="">Personal Datay</Link>
          </div>
        </div>

        <div>
          <p className="text-white text-2xl font-semibold mb-6">Support</p>
          <div className="grid grid-cols-1 gap-6">
            <Link to="faq">Help</Link>
            <Link to="guidelines">Guidelines</Link>
            <Link to="">Accessibility</Link>
            <Link to="contact">Contact Us</Link>
          </div>
        </div>
      </div>
          
      </div>
      <div className="w-full border-t border-secondary mt-5 py-12">
        <p className="text-center text-white mt-5">
          2023 © Gleemora. All Rights Reserved.
        </p>
      </div> 
    </footer>
  );
};

export default Footer;
