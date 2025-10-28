import React from 'react'
import Hero from '../components/HomeComp/Hero'
import AbtGOM from '../components/HomeComp/AbtGOM';
import Title from '../components/Title';
import OurPremiumProducts from '../components/HomeComp/OurPremiumProducts';
import WCU from '../components/HomeComp/WCU';
import Reviews from '../components/HomeComp/Reviews';
import Order from '../components/HomeComp/Order';

const Homepage = () => {
  return (
    <div className="">
      <Hero />
      <AbtGOM/>
      <Title/>
      <OurPremiumProducts/>
      <WCU/>
      <Reviews/>
      <Order/>
    </div>
  );
}

export default Homepage