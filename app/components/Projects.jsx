import React from 'react'
import Image from 'next/image'

const Projects = () => {
  return (
    <div className='mt-20 h-screen'>
           <div className='flex items-center mb-20'>
            <span className='w-24 mr-6 block h-px bg-slate-800'></span>
            <h2 className='text-4xl font-light'>Uspješno završeni projekti</h2>
        </div>

    <div className='grid grid-cols-3 grid-rows-2 grid-flow-col auto-rows-max gap-5 h-[50vh] w-full'>
        
        <div className='grid row-span-2 relative'>
          <Image 
          src="/images/katalog.jpg"
          width={500}
          height={500}
          className='h-full object-cover'
          />
          <div className='absolute bottom-0 p-5'>
          <h2 className='text-white'>Izrada kataloga</h2>
          <p className='text-gray-400'>Neodent d.o.o.</p>
         </div>
        </div>

        <div className='bg-red-400 relative'>
        <Image 
          src="/images/katalog.jpg"
          width={500}
          height={500}
          className='h-full object-cover'
          />
          <div className='absolute bottom-0 p-5'>
          <h2 className='text-white'>Izrada kataloga</h2>
          <p className='text-gray-400'>Neodent d.o.o.</p>
         </div>
        </div>

        <div className='bg-blue-400 relative'>
        <Image 
          src="/images/katalog.jpg"
          width={500}
          height={500}
          className='h-full object-cover'
          />
          <div className='absolute bottom-0 p-5'>
          <h2 className='text-white'>Izrada kataloga</h2>
          <p className='text-gray-400'>Neodent d.o.o.</p>
         </div>
        </div>

        <div className='bg-blue-400 relative'>
        <Image 
          src="/images/katalog.jpg"
          width={500}
          height={500}
          className='h-full object-cover'
          />
          <div className='absolute bottom-0 p-5'>
          <h2 className='text-white'>Izrada kataloga</h2>
          <p className='text-gray-400'>Neodent d.o.o.</p>
         </div>
        </div>

        <div className='bg-blue-400 relative'>
        <Image 
          src="/images/katalog.jpg"
          width={500}
          height={500}
          className='h-full object-cover'
          />
          <div className='absolute bottom-0 p-5'>
          <h2 className='text-white'>Izrada kataloga</h2>
          <p className='text-gray-400'>Neodent d.o.o.</p>
         </div>
        </div>
        
    </div>
    </div>
  )
}

export default Projects