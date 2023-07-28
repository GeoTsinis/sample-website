import React from 'react';
import Back from '../common/Back';
import './contact.css';

const Contact = () => {
  return (
    <>
      <section className="contact mb">
        <Back
          name="Contact Us"
          title="Get Help & Friendly Support"
          cover="/images/about.jpg"
        />
        <div className="container">
          <form className="shadow">
            <h4>Fillup The Form</h4> <br />
            <div>
              <input type="text" placeholder="Name" id="name" />
              <input type="text" placeholder="Email" id="email" />
            </div>
            <input type="text" placeholder="Subject" id="subject" />
            <textarea
              name="text-area"
              id="text-area"
              cols="30"
              rows="10"
            ></textarea>
            <button type="submit">Submit Request</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
