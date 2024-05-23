import React from 'react'
import Hero from '../components/Hero'
import Biography from '../components/Biography'

const AboutUs = () => {
  return (
    <div>
      <Hero title={"Learn More about us"} imageUrl={'/about.png'}/>
      <Biography imageUrl={'/whoweare.png'}/>
    </div>
  )
}

export default AboutUs