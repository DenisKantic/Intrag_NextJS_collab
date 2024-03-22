import React from 'react'
import data from "./projectsData";
import { FaStar } from "react-icons/fa6";


const Clients = () => {
  return (
    <div 
    className='h-[50vh] w-full'>
          <div className='flex items-center mb-20'>
            <span className='w-24 mr-6 block h-px bg-slate-800'></span>
            <h2 className='text-4xl font-light'>Klijenti o nama</h2>
        </div>

        {/* Card item, map function from projectsData.js file */}

        <div className='grid grid-cols-3 gap-10 grid-cols-auto h-[300px]'>
            {data.map((item,index)=>(
                <div key={index} className='p-5 bg-white shadow-xl'>
                    <span className='flex text-xl text-yellow-500'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </span>

                    <p className='font-bold text-xl pt-5 pb-2'>{item.title}</p>
                    <p className='text-lg text-gray-800 pb-10 font-normal'>{item.text}</p>

                    <p className='text-md font-light'>{item.title}</p>
                    <p className='text-sm pt-2 text-gray-600 font-light'>{item.owner}</p>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Clients