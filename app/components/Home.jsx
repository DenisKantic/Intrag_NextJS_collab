import React from 'react'
import Header from './Header'
import OurStory from './OurStory'
import WhatWeDo from './WhatWeDo'
import Articles from './Articles'
import Projects from './Projects'
import Clients from './Clients'

const HomePage = () => {
  return (
    <div className='px-40'>
      <Header />
      <OurStory />
      <WhatWeDo />
      <Articles />
      <Projects />
      <Clients />
    </div>
  )
}

export default HomePage