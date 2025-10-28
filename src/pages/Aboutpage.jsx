import React from 'react'
import Hero from '../components/AboutComp/Hero'
import VisMis from '../components/AboutComp/VisMis'
import OurStory from '../components/AboutComp/OurStory'

const Aboutpage = () => {
  return (
    <div className='pt-16'>
      <Hero/>
      <VisMis/>
      <OurStory/>
    </div>
  )
}

export default Aboutpage