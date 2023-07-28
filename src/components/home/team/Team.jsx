import React from 'react';
import './team.css';
import { team } from '../../data/Data';
import Heading from '../../common/Heading';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhoneAlt,
  faCheckCircle,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';

const Team = () => {
  return (
    <>
      <section className="team background">
        <div className="container">
          <Heading title="Our Featured Agents" subtitle="Meet Our Crew" />

          <div className="content mtop grid3">
            {team.map((val, index) => (
              <div className="box" key={index}>
                <button className="btn3">{val.list} Listings</button>
                <div className="details">
                  <div className="img">
                    <img src={val.cover} alt={`company-agent-${index}`} />
                    <FontAwesomeIcon className="icon" icon={faCheckCircle} />
                  </div>
                  <FontAwesomeIcon className="icon" icon={faLocationDot} />
                  <label>{val.address}</label>
                  <h4>{val.name}</h4>

                  <ul>
                    {val.icon.map((icon, index) => (
                      <li key={index}>{icon}</li>
                    ))}
                  </ul>
                  <div className="button flex">
                    <button>
                      <FontAwesomeIcon className="icon" icon={faEnvelope} />
                      Message
                    </button>
                    <button className="btn4">
                      <FontAwesomeIcon className="icon" icon={faPhoneAlt} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
