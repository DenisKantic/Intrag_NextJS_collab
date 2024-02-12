import React from 'react'
import Header from './Header'
import OurStory from './OurStory'
import WhatWeDo from './WhatWeDo'
import Articles from './Articles'

const HomePage = () => {
  return (
    <div className='px-40'>
      <Header />
      <OurStory />
      <WhatWeDo />
      <Articles />
    </div>
  )
}

export default HomePage