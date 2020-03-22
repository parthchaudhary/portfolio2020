import React from 'react';
import ContactForm from './ContactForm';
import SocialLinks from './SocialLinks';

export default function Contact() {
    return (
        <section className="contact dd-sec">
            <div className="container">
                <h1 className="dd-sec__title mb-4">Contact</h1>
                <p className="contact__desc mb-5">New project, project inquiry or even coffee.</p>
                <ContactForm />
                <SocialLinks />
            </div>
        </section>
    )
}
