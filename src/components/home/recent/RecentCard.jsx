import React from 'react';
import { list } from '../../data/Data';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const RecentCard = () => {
  return (
    <>
      <div className="content grid3 mtop">
        {list.map((val, index) => {
          const { cover, category, location, name, price, type } = val;
          return (
            <div className="box shadow" key={index}>
              <div className="img">
                <img src={cover} alt={`recent-cover-${index}`} />
              </div>
              <div className="text">
                <div className="category flex">
                  <span
                    style={{
                      background:
                        category === 'For Sale' ? '#25d5791a' : '#ff98001a',
                      color: category === 'For Sale' ? '#26b579' : 'ff9800',
                    }}
                  >
                    {category}
                  </span>
                  <FontAwesomeIcon
                    className="fa-icon"
                    icon={faHeart}
                    size="sm"
                  />
                </div>
                <h4>{name}</h4>
                <p>
                  <FontAwesomeIcon
                    className="fa-icon"
                    icon={faLocationDot}
                    size="sm"
                  />{' '}
                  {location}
                </p>
              </div>
              <div className="button flex">
                <div>
                  <button className="btn2">{price}</button>
                </div>
                <span>{type}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RecentCard;
