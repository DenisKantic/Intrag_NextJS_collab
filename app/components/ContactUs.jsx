import React from 'react'
import Image from 'next/image'

const ContactUs = () => {
  return (
    <div className='min-h-[40vh] bg-slate-800 w-full flex flex-row justify-center items-center'>
        <div className='xxs:p-10 md:px-10 xxl:px-40 overflow-hidden w-full text-white text-xl grid auto-cols-max
         xxs:grid-cols-1 mdd:grid-cols-3'>
            <div className='xxs:mt-10'>
            <p className='mb-5 font-bold'>KONTAKT</p>
            <p  className='mb-2'>Tuzlanska bb, 75 000 Tuzla, Bosna i Hercegovina</p>
            <p  className='mb-2'>+387 65 690 885</p>
            <p  className='mb-2'>intragdoo@gmail.com</p>
            </div>

            <div className='xxs:mt-10'>
            <p  className='mb-5 font-bold'>RADNO VRIJEME</p>

            <p className='mb-2'>Pon - Pet / 08 - 16h</p>
            <p className='mb-2'>Sub - Ned / Neradni</p>
            </div>

            <div className=''>
            <Image
            className="w-[60%] h-[70%] object-contain xxs:mt-10 mdd:mt-0"
            height={20}
            width={20}
            alt='intrag logo'
            src="/images/logo_intrag.png" />
            </div>
        </div>
    </div>
  )
}

export default ContactUs