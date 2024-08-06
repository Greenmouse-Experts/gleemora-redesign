import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const FaqMentor = () => {
  const [openItemId, setOpenItemId] = useState(null);
  const faqData = [
    {
      id: 1,
      head: "How does Gleemora ensure professional boundaries are maintained in sessions?",
      body: "At Gleemora, we emphasize the importance of maintaining professional boundaries during sessions. Our community guidelines clearly outline the expectations for users and survivors, ensuring interactions remain respectful and focused on health-related support and guidance. This approach helps maintain a safe, supportive, and professional environment for all participants.",
    },
    {
      id: 2,
      head: "What support does Gleemora provide to ensure I can manage conversations effectively?",
      body: "We provide comprehensive guidelines and training to help you navigate various conversation scenarios. This includes strategies for keeping discussions focused on health-related topics and ending sessions gracefully when necessary.",
    },
    {
      id: 3,
      head: "Will there be reminders about the session's focus?",
      body: "Yes, we use automated messages and pop-ups during sessions to remind you and the user about the importance of sticking to health-related discussions, aligning with the core purpose of Gleemora.",
    },
    {
      id: 4,
      head: "What control do I have over the session environment?",
      body: "You can end a session. This ensures direct control and a comfortable and respectful session environment. For any serious concerns, we have an Emergency Escalation Protocol. You can immediately terminate the session and report the issue to our team. We prioritize your safety and well-being above all.",
    },
    {
      id: 5,
      head: "Can I provide feedback after sessions?",
      body: "Absolutely. We have a Post-Session Feedback and Reporting Mechanism for you to share your experience. Your feedback is crucial for continuously improving and ensuring a positive experience for survivors and users.",
    },
    {
      id: 6,
      head: "Will there be support available for me as a survivor mentor?",
      body: "Yes, we offer regular check-ins and support sessions for our survivor mentors. These sessions are designed to discuss your experiences on the platform and provide you with any additional guidance you may need.",
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
    <>
      <div className="faq">
        <div className="lg:w-10/12 mx-auto">
        {faqData.map((item) => (
          <div
            key={item.id}
            className="faq_content cursor-pointer"
            onClick={() => handleItemClick(item.id)}
          >
            <div className="faqq cursor-pointer">
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
    </>
  );
};

export default FaqMentor;
