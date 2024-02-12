import React from 'react'
import Image from 'next/image'

const Projects = () => {
  return (
    <div>
         <span 
    className='text-black flex flex-row items-center'>
        ------
        <h1 className='text-2xl'>Uspjesno zavrseni projekti</h1>
        </span>

    <div className='grid grid-cols-3 grid-rows-2 grid-flow-col auto-rows-max gap-7 min-h-[40vh] bg-purple-400 w-full'>
        
        <div className='grid row-start-2  bg-orange-400'>

        </div>

        <div className='bg-red-400'>

        </div>

        <div className='bg-blue-400'>

        </div>

        <div className='bg-blue-400'>

        </div>

        <div className='bg-blue-400'>

        </div>
        
    </div>
    </div>
  )
}

export default Projects