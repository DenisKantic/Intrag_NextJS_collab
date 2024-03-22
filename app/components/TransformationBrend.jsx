import React from 'react'
import Image from 'next/image'

const TransformationBrend = () => {
  return (
    <div className='min-h-[60vh] mt-10 mb-10'>
    <div className='flex w-full h-[60vh]'>
        <div className='w-[50%] bg-black text-white p-10 flex flex-col justify-center'>
            <p className='text-[50px] font-bold'>Zainteresovani ste za transformaciju svog brenda?</p>
            <p className='pt-5 pb-10'>Kontaktirajte nas putem emaila i dopustite nam da zajedno stvorimo Vašu vizuelnu priču koja će oduševiti.</p>

            <button className='w-[200px] py-4 bg-white text-gray-800 rounded-md'>Upit za narudžbu</button>
        </div>
        <div className='w-[50%] relative h-[60vh] xxs:hidden md:block'>
            <Image 
            unoptimized
            className='w-full h-full object-cover'
            src="/images/anes.jpg"
            alt='Anes Intrag'
            fill={true}
            />
        </div>
    </div>
    </div>
  )
}

export default TransformationBrend