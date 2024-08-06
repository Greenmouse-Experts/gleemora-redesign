import axios from "axios";
import React, {useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MentorForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [profession, setProfession] = useState("");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");
  const [refferal, setRefferal] = useState("");
  const [story, setStory] = useState("");
  const [community, setCommunity] = useState("");
  const [advocacy, setAdvocacy] = useState("");
  const [socials, setSocials] = useState("");
  const [errorState, setErrorState] = useState(false);
  const [loading, setLoading] = useState(false)
  const handleError = () => {
    setErrorState(true);
    setTimeout(() => {
      setErrorState(false);
    }, 2000);
  };
  const setDefault = () => {
    setAdvocacy('')
    setAge('')
    setCommunity('')
    setEmail('')
    setLocation('')
    setName('')
    setProfession('')
    setRefferal('')
    setSocials('')
    setPhone('')
  }
  const handleManage = async (e) => {
    setLoading(true)
    e.preventDefault();
    if (name === "" || email === "" || phone === "") {
      handleError();
      return;
    }
    const fd = new FormData()
    fd.append('name', name)
    fd.append('email', email)
    fd.append('phone_number', phone)
    fd.append('profession', profession)
    fd.append('age', age)
    fd.append('location', location)
    fd.append('referral_code', refferal)
    fd.append('story_of_resilience', story)
    fd.append('involve_in_asc', advocacy)
    fd.append('social_media_profiles', socials)
    fd.append('gleemora_community', community)
    // make call
    axios.post('https://api.gleemora.com/api/survivor', fd)
    .then(function (response) {
      if(response.data.success){
        toast.success(response.data.message)
        setLoading(false)
        setDefault()
      }else toast.error(response.data.message)
    })
    .catch(function (error) {
      console.log(error);
      setLoading(false)
    });
  };
  return (
    <>
      <div className="">
        <div>
          <p className="text-xl lg:text-3xl text-center font-semibold">
            Join as a survivor
          </p>
          <div className="mt-8">
            <p className="text-center">
              Your experience can offer solace and strength to those feeling
              isolated in their journey.
            </p>
            <p className="mt-4 text-center">
              Welcome to the Gleemora Community!
            </p>
            <p className="mt-4 text-center">
              We're honored to have you join our network of support and
              resilience. Please fill out the form below to help us get to know
              you better.
            </p>
          </div>
        </div>
        <form onSubmit={handleManage} className="grid gap-6">
          <div className="grid lg:grid-cols-3 gap-6">
            <div>
              <label className="label_class">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input_class"
              />
            </div>
            <div>
              <label className="label_class">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input_class"
              />
            </div>
            <div>
              <label className="label_class">Phone Number</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="input_class"
              />
            </div>
            <div>
              <label className="label_class">Profession</label>
              <input
                type="text"
                value={profession}
                onChange={(e) => setProfession(e.target.value)}
                className="input_class"
              />
            </div>
            <div>
              <label className="label_class">Age</label>
              <input
                type="tel"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="input_class"
              />
            </div>
            <div>
              <label className="label_class">Location (City, Country)</label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="input_class"
              />
            </div>
          </div>
          <div>
            <label className="label_class">Refferal Code (Optional)</label>
            <input
              type="text"
              value={refferal}
              onChange={(e) => setRefferal(e.target.value)}
              className="input_class"
            />
          </div>
          <div>
            <label className="label_class">Your Story of Resilience</label>
            <textarea
              className="input_class h-52"
              value={story}
              onChange={(e) => setStory(e.target.value)}
              placeholder="Describe the health challenges you've faced or supported someone through"
            />
          </div>
          <div>
            <label className="label_class">
              What led you to the Gleemora community? We'd love to hear!
            </label>
            <textarea
              className="input_class h-52"
              value={community}
              onChange={(e) => setCommunity(e.target.value)}
              placeholder="Your Text Here!"
            />
          </div>
          <div>
            <label className="label_class">
              Are you involved in advocacy work, support groups, or community
              initiatives? It's completely fine if Gleemora is your starting
              point. Welcome aboard!
            </label>
            <textarea
              className="input_class h-52"
              value={advocacy}
              onChange={(e) => setAdvocacy(e.target.value)}
              placeholder="Your Text Here!"
            />
          </div>
          <div>
            <label className="label_class">
              If you wish, share your social media profiles or blogs where you
              talk about your journey or interests. (Optional)
            </label>
            <textarea
              className="input_class h-24"
              value={socials}
              onChange={(e) => setSocials(e.target.value)}
              placeholder="Your Text Here!"
            />
          </div>
          <div className="mt-12 flex justify-center">
            <button className="bg-black py-4 text-white text-lg font-semibold px-12 lg:px-16 rounded-[50px]">
            {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
          {errorState && <p className="text-center text-red-600 mt-4">Please Complete the required fields</p>}
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default MentorForm;
