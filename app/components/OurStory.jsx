'use client'
import React from 'react'
import Image from 'next/image'
export default function OurStory() {
  return (
    <div className='mt-44' id='AboutUs'>
        <div className='flex items-center xxs:mb-10'>
            <span className='xxs:w-14 mdd:w-24 xxs:mr-2 md:mr-6 block h-px bg-slate-800'></span>
            <h2 className='xxs:text-xl md:text-3xl mdd:text-4xl font-light'>Priča o Intrag štampariji</h2>
        </div>
        <div className='flex justify-between items-center'>
            
            <div className='xxs:w-full xxs:mr-0 lg:mr-28 lg:w-1/2'>

                <div className='my-12'>
                    <h3 className='text-3xl font-light mb-4'>Naša misija</h3>
                    <p className='text-lg text-justify'>
                    Posvećeni smo pružanju visokokvalitetnih usluga štampe koristeći savremene metode i alate pri izradi proizvoda za naše kliejnte. 
                    Naša misija je da svojim kreativnim i profesionalnim pristupom ostavimo trajan i pozitivan utisak za sve naše klijente.
                    </p>
                </div>
                <div className='mb-12'>
                    <h3 className='text-3xl font-light mb-4'>Naša vizija</h3>
                    <p className='text-lg text-justify'>
                    Gledamo u budućnost sa vizijom postati lideri u industriji profesionalne štampe te biti istaknuti na tržištu kvalitetom i inovacijama. 
                    Konstantno usavršavanje usluga i pristupa, omogućiti će nam da ispunimo sve naše ciljeve u budućnosti.
                    </p>
                </div>
            </div>
            <div className='ml-5 grid grid-rows-2 w-1/3 grid-flow-rows grid-rows-auto gap-10 xxs:hidden lg:block'>
                <div className='rounded-md overflow-hidden'>
                    <Image src="/images/intrag1.jpg" alt='Intrag group image' width={400} height={300}/>
                </div>
                <div className='rounded-md xxs:hidden lg:block mt-5'>
                    <Image src="/images/intrag4.jpg" alt='Intrag group image' width={400} height={300}/>
                </div>
            </div>
        </div>
    </div>
  )
}
