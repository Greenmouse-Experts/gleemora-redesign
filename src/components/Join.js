import React, { useState } from "react";
import "../Stylesheet/home.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Join = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [ideas, setIdeas] = useState("");
  const [errorState, setErrorState] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleError = () => {
    setErrorState(true);
    setLoading(false);
    setTimeout(() => {
      setErrorState(false);
    }, 2000);
  };
  const setDefault = () => {
    setName("");
    setEmail("");
    setIdeas("");
  };
  const handleManage = (e) => {
    e.preventDefault();
    setLoading(true);
    if (!name || !email) {
      handleError();
      return;
    }
    const fd = new FormData();
    fd.append("name", name);
    fd.append("email", email);
    fd.append("suggestions", ideas);
    // make call
    axios
      .post("https://api.gleemora.com/api/waitlist", fd)
      .then(function (response) {
        if (response.data.success) {
          toast.success(response.data.message);
          setLoading(false)
          setDefault();
        } else toast.error(response.data.message);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <ToastContainer />
      <div id="join" className="join_wait">
        <div className="wait padding">
          <div className="py-12">
            <h2>Join the waitlist</h2>
            <p>We will hit you up when the time comes</p>
            <form onSubmit={handleManage} className="join_form">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
              <textarea
                name=""
                cols="30"
                rows="10"
                value={ideas}
                onChange={(e) => setIdeas(e.target.value)}
                placeholder="Got suggestions or ideas for how our platform should work? We're all ears"
              ></textarea>
              <button className="join_btn">
                {loading ? "Submitting..." : "Submit"}
              </button>
              {errorState && (
                <p className="text-center text-red-600 mt-4">
                  Please Complete the required fields
                </p>
              )}
            </form>
          </div>
        </div>
        <div className="comm padding">
          <p className="syne text-[19px] lg:text-[40px] pt-12 text-center">
            Join the <span className="grad-span">Gleemora</span> Community
          </p>
          <p className="text-center lg:w-9/12 mx-auto">
            Whether you&apos;ve faced health challenges personally or have been
            a pillar of support as a caregiver, your experiences are crucial in
            helping others feel less isolated in their journey. By sharing your
            story, you provide not just understanding and empathy but also hope
            and guidance to those walking a path similar to yours. Your journey
            can inspire resilience and courage in countless others."
          </p>
        </div>
      </div>
    </>
  );
};

export default Join;
