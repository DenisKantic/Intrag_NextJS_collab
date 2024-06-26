import React from 'react'
import Header from './Header'
import OurStory from './OurStory'
import WhatWeDo from './WhatWeDo'
import Projects from './Projects'
import Clients from './Clients'
import TransformationBrend from './TransformationBrend'
import Articles from './Articles'

const HomePage = () => {
  return (
    <div className='xxs:p-5 md:px-10 xxl:px-40 overflow-hidden'>
      <Header />
      <OurStory />
      <WhatWeDo />
      <Articles />
      <Projects />
      <Clients />
      <TransformationBrend />
    </div>
  )
}

export default HomePage