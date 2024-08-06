import React, { useState } from "react";
import { Header } from "../components/Header";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Faq = () => {
  const [openItemId, setOpenItemId] = useState(null);
  const faqData = [
    {
      id: 1,
      head: "What is Gleemora?",
      body: "Gleemora connects career professionals dealing with health challenges with seasoned career professionals and influential survivors who have undergone similar health experiences. Whether it's a public figure who has navigated illness under the spotlight, a professional who's managed health challenges while building their career, or a caregiver who's offered unwavering support, their experiences are real and relatable. Gleemora provides an avenue for emotional support, encouragement, and empowerment, fostering a global network of resilience and understanding. Here, users can find strength, guidance, and a sense of community as they navigate their health journey.",
    },
    {
      id: 2,
      head: "How Does Gleemora Work?",
      body: "Join our platform for private, secure video or audio consultations with survivors or caregiver mentors. After signing up on our waitlist, you’ll be the first to know when we go live. You can then schedule one-on-one sessions with survivor or caregiver mentors based on their availability, ensuring a personal and confidential experience. The sessions are held via secure, encrypted video or audio call, ensuring your privacy and confidentiality.",
    },
    {
      id: 3,
      head: "What communication options will Gleemora offer?",
      body: "Gleemora will offer 1:1 video and audio calls with survivors and caregivers. This allows for a personal and in-depth conversation, providing you with the support and insights you need.",
    },
    {
      id: 4,
      head: "Will there be other ways to communicate with survivors in the future?",
      body: "Yes! We are planning to introduce a text messaging feature in the future. This will offer additional flexibility and convenience for our users. Stay tuned for updates on this exciting development!",
    },
    {
      id: 5,
      head: "How Can I Join as a Survivor or Caregiver Mentor?",
      body: "Becoming a mentor on Gleemora offers a unique opportunity to share your journey and insights. If you are a public figure or career professional who has navigated health challenges or if you have provided caregiver support, your experiences are invaluable to our community. Simply click on the 'Join as a Survivor or Caregiver Mentor' button on the top of our homepage, fill out the sign-up form with your details, and you'll be on your way to making a meaningful impact. We welcome your unique stories and insights, as they are crucial in offering support and guidance to those navigating similar paths.",
    },
    {
      id: 7,
      head: "What Kind of Questions Can I Ask During the Sessions?",
      body: (
        <>
          You are encouraged to ask about any aspect of the health journey. This
          can include discussions on managing health challenges alongside a
          career or public life, strategies for mental and emotional well-being
          during health struggles, or insights into the survivor's personal
          experiences.{" "}
          <p className="my-6 pl-2 font-semibold">Medical Disclaimer</p> The
          information and discussions on Gleemora are for informational purposes
          only and are not intended as medical advice. Always consult a
          qualified healthcare professional for medical concerns before starting
          any new treatment.{" "}
        </>
      ),
    },
    {
      id: 8,
      head: "How long are the sessions with survivor mentors?",
      body: "Sessions vary in length to accommodate different needs and schedules. They range from 15 to 60 minutes, depending on the availability of our survivor mentors. This flexibility ensures you can find a session that fits your schedule.",
    },
    {
      id: 9,
      head: "Can Gleemora be accessed worldwide?",
      body: "Absolutely! Gleemora is a global platform available to users not just in the United States and Canada but worldwide. Currently, all sessions are conducted in English.",
    },
    {
      id: 10,
      head: "How are time zones managed for the consultations?",
      body: "At Gleemora, we tailor consultation times to your local time zone, ensuring sessions are convenient and accessible for our users, regardless of location.",
    },
    {
      id: 11,
      head: "Can I cancel or reschedule my session?",
      body: "Yes, you can reschedule your session up to 48 hours in advance. For cancellations or reschedules made within 48 hours of the scheduled time, we apply a fee to honor the commitment of the survivor mentor, except in cases where the mentor has generously offered the session free of charge. In these instances, no cancellation fee is incurred. We appreciate both your understanding and the flexibility of our mentors in accommodating these changes.",
    },
    {
      id: 12,
      head: "Why do public figures and seasoned professional survivors and caregivers participate in Gleemora?",
      body: "Survivors and caregivers engage with Gleemora as a meaningful way to share their journeys and insights. Having navigated their health challenges or supported someone who has, they understand the importance of empathy and guidance in such situations. Gleemora provides a user-friendly platform for these individuals to connect and give back, offering comfort and guidance to those currently facing similar struggles.",
    },
    {
      id: 13,
      head: "How secure are my conversations on Gleemora?",
      body: "Your privacy is paramount. All interactions on Gleemora, including WingsMate conversations, are safeguarded by end-to-end encryption. This ensures that only you and your chat partner can access your conversations, maintaining the confidentiality and security of your discussions.",
    },
    {
      id: 14,
      head: "What if I feel uncomfortable during a session on Gleemora?",
      body: "Your safety and comfort are our top priorities. If any interaction during a session violates our community guidelines or makes you uncomfortable, you can report it immediately. Our dedicated support team will promptly review and address the situation to ensure a secure and respectful environment for all users.",
    },
    {
      id: 15,
      head: "Can I ask questions outside of health on Gleemora?",
      body: "While Gleemora is primarily a platform for discussing health challenges and managing them alongside career or public life, we understand that conversations may naturally evolve. However, our survivor mentors have the autonomy to guide the sessions back to the platform’s core purpose or to conclude sessions that veer off-topic or become transactional. Our focus remains on fostering connections based on shared health experiences and the journey of healing and empowerment.",
    },
  ];

  const handleItemClick = (id) => {
    if (openItemId === id) {
      setOpenItemId(null);
    } else {
      setOpenItemId(id);
    }
  };
  return (
    <div className="main_faq">
      <Header title="Gleemora Health FAQ" />
      <div className="faq">
        {faqData.map((item) => (
          <div key={item.id} className="faq_content cursor-pointer" onClick={() => handleItemClick(item.id)}> 
            <div  className="faqq cursor-pointer">
              <p>{item.head}</p>
              <span
                onClick={() => handleItemClick(item.id)}
                className="faq_icon"
              >
                {openItemId === item.id ? (
                  <AiOutlineMinus />
                ) : (
                  <AiOutlinePlus />
                )}
              </span>
            </div>

            {openItemId === item.id && (
              <div className="faq_body">{item.body}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
