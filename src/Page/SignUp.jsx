import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";

const SignUp = () => {
  const [details, setDetails] = useState({
    data: "",
    password: "",
  });

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-[url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1722941300/Frame_19_fc5gpn.png')] h-full w-full bg-center bg-cover flex flex-col items-center py-20">
      <Link to="/">
        <img
          src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1701951271/Gleemora/Group_48097509_4_1_dyftig.png"
          alt="logo"
          className="w-[63px] lg:w-32 mx-auto"
        />
      </Link>

      <form className="bg-white rounded-[20px] w-[34rem] px-6 py-16">
        <h4 className="text-4xl text-center">Sign Up to Gleemora</h4>

        <div className="flex flex-col gap-10 mt-14">
        <Input
            labelText="Full Name"
            name="full_name"
            value={details.data}
            onChange={handleChange}
          />
          <Input
            labelText="Email or Phone Number"
            name="data"
            value={details.data}
            onChange={handleChange}
          />
          <Input
            labelText="Health challenge"
            name="health_challenge"
            value={details.password}
            onChange={handleChange}
            type="text"
          />
            <Input
            labelText="Pre-session topics?"
            name="Pre_session_topic?"
            value={details.data}
            onChange={handleChange}
          />
          <Input
            labelText="Password"
            name="password"
            value={details.password}
            onChange={handleChange}
            type="password"
          />
          <Input
            labelText="Confirm PAssword"
            name="confirm_password"
            value={details.password}
            onChange={handleChange}
            type="password"
          />
          <button
            className="bg-gradient-to-r from-primary to-secondary py-5 text-2xl syne w-full rounded-md text-white"
            type="submit"
          >
       Sign up
          </button>
        </div>

      </form>
      <p className="text-white mulish text-xl mt-20 ">Already have an account <Link to="/login"><span className="text-secondary">Log in</span></Link></p>
    
    </div>
  );
};

export default SignUp;
