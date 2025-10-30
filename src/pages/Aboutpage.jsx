import React from 'react'
import Hero from '../components/AboutComp/Hero'
import VisMis from '../components/AboutComp/VisMis'
import OurStory from '../components/AboutComp/OurStory'
import OurJourney from '../components/AboutComp/OurJourney'
import OurTeam from '../components/AboutComp/OurTeam'
import OurCoreValues from '../components/AboutComp/OurCoreValues'

const Aboutpage = () => {
  return (
    <div className='pt-16'>
      <Hero/>
      <VisMis/>
      <OurStory/>
      <OurJourney/>
      <OurTeam/>
      <OurCoreValues/>
    </div>
  )
}

export default Aboutpage