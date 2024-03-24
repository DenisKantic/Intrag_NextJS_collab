'use client'
import React from 'react'
import Image from 'next/image'
export default function OurStory() {
  return (
    <div className='mt-44' id='AboutUs'>
        <div className='flex items-center mb-20'>
            <span className='w-24 mr-6 block h-px bg-slate-800'></span>
            <h2 className='text-4xl font-light'>Priča o Intrag štampariji</h2>
        </div>
        <div className='flex justify-between'>
            
            <div className='w-1/2 mr-28'>

                <div className='my-12'>
                    <h3 className='text-3xl font-light mb-4'>Naša misija</h3>
                    <p className='text-lg'>
                    Posvećeni smo pružanju visokokvalitetnih usluga štampe koristeći savremene metode i alate pri izradi proizvoda za naše kliejnte. 
                    Naša misija je da svojim kreativnim i profesionalnim pristupom ostavimo trajan i pozitivan utisak za sve naše klijente.
                    </p>
                </div>
                <div className='mb-12'>
                    <h3 className='text-3xl font-light mb-4'>Naša vizija</h3>
                    <p className='text-lg'>
                    Gledamo u budućnost sa vizijom postati lideri u industriji profesionalne štampe te biti istaknuti na tržištu kvalitetom i inovacijama. 
                    Konstantno usavršavanje usluga i pristupa, omogućiti će nam da ispunimo sve naše ciljeve u budućnosti.
                    </p>
                </div>
                <button className='bg-black hover:bg-slate-700 text-white font-light py-3 w-52 rounded'>
                    Vidi više
                </button>
            </div>
            <div className='w-1/2 relative'>
                <div className='absolute top-[30px] rounded-md overflow-hidden z-10'>
                    <Image src="/images/intrag1.jpg" alt='Intrag group image' width={450} height={300} objectFit='none'/>
                </div>
                <div className='absolute top-[260px] right-0 z-10 rounded-md overflow-hidden'>
                    <Image src="/images/intrag2.jpg" alt='Intrag group image' width={450} height={300} objectFit='none'/>
                </div>
                <div className='absolute right-0 rounded-md -top-8 overflow-hidden'>
                    <Image src="/images/intrag3.jpg" alt='Intrag group image' width={400} height={220} objectFit='none'/>
                </div>
                <div className='absolute left-0 rounded-md top-[380px] overflow-hidden z-10'>
                    <Image src="/images/intrag4.jpg" alt='Intrag group image' width={400} height={220} objectFit='none'/>
                </div>
            </div>
        </div>
    </div>
  )
}
