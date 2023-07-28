import React from 'react';
import './recent.css';
import Heading from '../../common/Heading';
import RecentCard from './RecentCard';

const Recent = () => {
  return (
    <>
      <section className="recent padding">
        <div className="container">
          <Heading
            title="Recent Properties Listed"
            subtitle="Explore Our Recent Add-Ons"
          />
          <RecentCard />
        </div>
      </section>
    </>
  );
};

export default Recent;
