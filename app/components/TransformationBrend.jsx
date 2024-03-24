import React from 'react'
import Image from 'next/image'

const TransformationBrend = () => {
  return (
    <div className='h-[60vh] mt-10 mb-10'>
    <div className='flex w-full h-full'>
        <div className='bg-black text-white  p-10 flex flex-col justify-center xxs:w-full mdd:w-[50%]'>
            <p className='font-bold
                          xxs:text-xl sm:text-3xl mdd:text-3xl lg:text-4xl xxl:text-5xl'>Zainteresovani ste za transformaciju svog brenda?</p>
            <p className='pt-5 pb-10 xxs:text-sm md:text-xl'>Kontaktirajte nas putem emaila i dopustite nam da zajedno stvorimo Vašu vizuelnu priču koja će oduševiti.</p>

            <button className='w-[200px] py-4 bg-white text-gray-800 rounded-md'>Upit za narudžbu</button>
        </div>
        <div className='relative h-full xxs:hidden xxs:w-full mdd:block mdd:w-[50%]'>
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