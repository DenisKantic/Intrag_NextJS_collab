"use client"
import React from 'react'
import data from './articlesData';
import Image from 'next/image';




const Articles = () => {
  return (
    <div className='mt-20 min-h-[50vh] mb-20 cursor-default' id='Products'>
        <div className='flex items-center xxs:mb-10 md:mb-20'>
            <span className='xxs:w-12 mdd:w-24 mr-2 block h-px bg-slate-800'></span>
            <h2 className='font-light xxs:text-sm md:text-4xl'>Izdvojeni artikli</h2>
        </div>

        <div className="w-full mx-auto min-h-[40vh] grid gap-14
                        xxs:grid-cols-1 xxs:grid-cols-auto 
                        mdd:grid-cols-3">
                    {data.map((item)=>(
                        <div key={item.id}
                            className='p-5 bg-white shadow-2xl'>
                            <Image
                            src={item.image}
                            width={50}
                            height={50}
                            alt="image"
                            className="w-full h-[35vh] object-cover"
                            />
                            <p className='text-xl font-semibold pt-2 pb-2'>{item.heading}</p>
                            <p className='text-md font-light'>{item.text}</p>
                        </div>
                    ))}

         </div>
                    <p className='mt-10 mb-5 font-light text-xl text-center w-full'>Imate nešto drugo na umu? <br />Slobodno nas kontaktirajte, tu smo da Vam ispunimo želju.</p>
    </div>
  )
}

export default Articles