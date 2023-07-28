import React from 'react';
import Back from '../common/Back';
import Heading from '../common/Heading';
import './about.css';

const About = () => {
  return (
    <>
      <section className="about">
        <Back
          name="About Us"
          title="About Us - Who We Are?"
          cover="/images/about.jpg"
        />
        <div className="container flex mtop">
          <div className="left row">
            <Heading
              title="Our Agency Story"
              subtitle="Check out our company story and work process."
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              laboriosam nihil id aliquam delectus, voluptas tempora iusto
              nostrum, totam quos aperiam placeat architecto dolorum ipsam
              possimus asperiores facilis dolor quo?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
              dolores itaque esse, accusantium quos maxime nemo tenetur illum
              totam velit aliquid, praesentium obcaecati at ut consequuntur
              laborum. Voluptates, labore unde.
            </p>
            <button className="btn2">Read More About Us</button>
          </div>
          <div className="right row">
            <img src="/images/immio.jpg" alt="about us page" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
