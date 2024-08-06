import React from 'react'
import '../Stylesheet/component.css'
import { Header } from '../components/Header'

const Contact = () => {
  return (
    <div className="main_contact">
        <Header title="Contact Us"/>
        <div className="contact">
            <div className="contact_text padding "><span>Let's Connect</span>
                <p>Have a question or suggestion, or just want to share your experience with us? Don't hesitate to reach out. Send us a message at <span>help@gleemora.com</span>. Our dedicated team is always eager to hear from you and will respond as quickly as possible.</p>
            </div>
            <div className="contact_text padding col">
            <span>For press and media inquiries</span>
                <p>if you’re interested in writing a story about Gleemora, please drop us a line at <br />
                <span>juliet.mafua@gleemora.com.</span></p>
                <p>We're looking forward to engaging with you!</p>
            </div>
        </div>
    </div>
  )
}

export default Contact