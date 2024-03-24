import React from 'react'
import Image from 'next/image'

const Projects = () => {
  return (
    <div className='mt-20 min-h-[50vh] mb-20'>
           <div className='flex items-center xxs:mb-10 md:mb-20'>
            <span className='xxs:w-12 mdd:w-24 mr-2 block h-px bg-slate-800'></span>
            <h2 className='font-light xxs:text-sm md:text-4xl'>Uspješno završeni projekti</h2>
        </div>

    <div className='grid grid-cols-3 grid-rows-2 grid-flow-col auto-rows-max gap-5 min-h-[50vh] w-full
                    xxs:grid-cols-1 xxs:grid-rows-5 md:grid-cols-3 md:grid-rows-2'>
        
        <div className='grid relative xxs:row-span-0 md:row-span-2 bg-black'>
          <Image 
          src="/images/katalog.jpg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill={true}
          alt='Intrag katalog primjer'
          className='h-full object-cover opacity-70'
          />
          <div className='absolute bottom-0 p-5'>
          <h2 className='text-white font-bold'>Izrada kataloga</h2>
          <p className='text-gray-300'>Neodent d.o.o.</p>
         </div>
        </div>

        <div className='bg-black relative'>
        <Image 
          src="/images/school.jpg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill={true}
          className='h-full object-center opacity-70'
          alt='Intrag izrada natpisa'
          />
          <div className='absolute bottom-0 p-5'>
          <h2 className='text-white font-bold'>Izrada natpisa</h2>
          <p className='text-gray-300'>Richmond Park Tuzla</p>
         </div>
        </div>

        <div className='bg-black relative'>
        <Image 
          src="/images/notar.jpg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill={true}
          alt='Primjer vizit kartice'
          className='h-full object-cover opacity-70'
          />
          <div className='absolute bottom-0 p-5'>
          <h2 className='text-white font-bold'>Izrada vizit kartica</h2>
          <p className='text-gray-300'>Notar Azra Koval</p>
         </div>
        </div>

        <div className='bg-black relative'>
        <Image 
          src="/images/zastavice.jpg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill={true}
          alt='Primjer izrade zastavica'
          className='h-full object-cover opacity-70'
          />
          <div className='absolute bottom-0 p-5'>
          <h2 className='text-white font-bold'>Izrada zastavica</h2>
          <p className='text-gray-300'>German Humanitarian Assistance</p>
         </div>
        </div>

        <div className='bg-black relative'>
        <Image 
          src="/images/brosure.jpg"
          fill={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt='Primjer izrade brošura'
          className='h-full object-cover opacity-70'
          />
          <div className='absolute bottom-0 p-5'>
          <h2 className='text-white font-bold'>Izrada brošura</h2>
          <p className='text-gray-300'>Access</p>
         </div>
        </div>
        
    </div>
    </div>
  )
}

export default Projects