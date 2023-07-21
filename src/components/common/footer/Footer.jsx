import React from 'react';
import './footer.css';
import { footer } from '../../data/Data';

const Footer = () => {
  return (
    <>
      <section className="footerContact">
        <div className="container">
          <div className="send flex">
            <div className="text">
              <h1>Do You Have Questions?</h1>
              <p>We'll help you to grow your career and growth.</p>
            </div>
            <button className="btn5">Contact Us Today</button>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="box r-side">
            <div className="logo">
              <img src="./images/logo.png" alt="logo-light" />
            </div>
            <div className="content  mtop">
              <h2>Do You Need Help With Anything?</h2>
              <p>
                Receive updates, hot deals, tutorials, discounts send straight
                in your inbox every month.
              </p>
            </div>
          </div>

          {footer.map((val, i) => (
            <div key={i} className="box l-side">
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items, index) => (
                  <li key={index}> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className="legal">
        <span>&copy; 2023 Company, Designed By GeoTsinis</span>
      </div>
    </>
  );
};

export default Footer;
