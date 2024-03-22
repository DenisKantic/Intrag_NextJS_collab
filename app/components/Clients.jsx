import React from 'react'
import data from "./projectsData";
import { FaStar } from "react-icons/fa6";


const Clients = () => {
  return (
    <div 
    className='min-h-[50vh] w-full pb-20'>
          <div className='flex items-center mb-20'>
            <span className='w-24 mr-6 block h-px bg-slate-800'></span>
            <h2 className='text-4xl font-light'>Klijenti o nama</h2>
        </div>

        {/* Card item, map function from projectsData.js file */}

        <div className='grid gap-10 grid-cols-auto min-h-[30vh]
                        xxs:grid-rows-3 md:grid-cols-3'>
            {data.map((item,index)=>(
                <div key={index} className='flex flex-col p-5 bg-white shadow-xl min-h-[350px]'>
                    <span className='flex text-xl text-yellow-500'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </span>

                    <p className='font-bold  pt-5 pb-2
                                  xxs:text-lg md:text-xl'>
                                  {item.title}
                                  </p>
                    <p className='text-gray-800 pb-10 font-normal
                                  xxs:text-sm md:text-lg '>
                      {item.text}</p>

                      <div className='mt-auto'>
                        <p className='text-md font-light'>{item.name}</p>
                        <p className='text-sm pt-2 text-gray-600 font-light'>{item.owner}</p>
                      </div>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Clients