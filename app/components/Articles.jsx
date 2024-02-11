import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import Image from 'next/image'
  import data from './articlesData'
  


const Articles = () => {
  return (
    <div 
    className='bg-[#F7F7F7] h-[65vh] p-10'>
    <span 
    className='text-black flex flex-row items-center'>
        ------
        <h1 className='text-2xl'>Izdvojeni artikli</h1>
        </span>

        <Carousel className="mt-10 w-full"
           opts={{
            align: "center",
          }}>
        <CarouselPrevious/>
            <CarouselContent>
            {data.map((item, index) => (
                    <CarouselItem className="sm:basis-1/2 md:basis-1/3 pl-5 h-auto mx-auto" key={index}>
                       <div className='mx-auto p-5 bg-white '>
                            <Image 
                            src={item.image} 
                            width={50} 
                            height={50} 
                            className='w-full object-cover h-[400px]'
                            />
                            <div>
                                <h2 className='text-2xl py-4'>{item.heading}</h2>
                                <p className='text-md text-gray-500'>{item.text}</p>

                                <button className='px-16 py-1 mt-10 bg-transparent text-gray-600 border-[2px] border-gray-400 text-xl rounded-sm'>
                                    Naruči
                                    </button>
                            </div>
                        </div>
                </CarouselItem>
                ))}
                
            </CarouselContent>
    <CarouselNext />
</Carousel>
        
    </div>
  )
}

export default Articles