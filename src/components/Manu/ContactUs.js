import React from 'react'
import './ContactUs.css'
import ContactForm from './ContactForm'

const ContactUs = (prop) => {
    return (
        <div className="cont">
            <div className="imgUp">
                <h1 className="contact">Contct Us</h1>
                <h4 className="touch">Get in touch with us</h4>
            </div>
            <ContactForm />
        </div>
    )
}

export default ContactUs;