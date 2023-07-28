import React from 'react';
import './hero.css';
import Heading from '../../common/Heading';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <Heading
            title="Search Your New Home"
            subtitle="Find new & featured properties located in your local city."
          />

          <form className="flex">
            <div className="box">
              <span>City Street</span>
              <input type="text" placeholder="Location" />
            </div>
            <div className="box">
              <span>Property Type</span>
              <input type="text" placeholder="Property Type" />
            </div>
            <div className="box">
              <span>Price Range</span>
              <input type="text" placeholder="Price Range" />
            </div>
            <div className="box">
              <span>Advance Filter</span>
            </div>
            <button className="btn1">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Hero;
