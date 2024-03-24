import React from 'react'
import { PiEnvelopeSimpleLight } from "react-icons/pi";
import { FaEnvelope } from "react-icons/fa6";
import Image from 'next/image';
import Link from 'next/link';
export default function Navigation() {
  return (
   
    <div className='xxs:px-5 xxs:w-full xxs:mx-auto mdd:px-20 lg:px-40'>
         {/*px-40 pt-6' */}
        <nav className='flex p-4 mb-28 items-center bg-gradient-to-r from-fuchsia-50 via-green-100 to-amber-50 rounded-lg bg-repeat-x
                        xxs:justify-center md:justify-between xxs:w-full'>
            <Image src="/images/logo_intrag.png" alt="Logo intrag" width={100} height={100} className='xxs:hidden md:flex'/>
            <div>
                <ul className='flex xxs:w-full'>
                    <Link href="#AboutUs" className='mr-12 cursor-pointer xxs:text-sm md:text-lg font-medium hover:text-slate-500'>O nama</Link>
                    <Link href="#Products" className='mr-12 cursor-pointer xxs:text-sm md:text-lg font-medium hover:text-slate-500'>Proizvodi</Link>
                    <Link href="#Contact" className='cursor-pointer xxs:text-sm md:text-lg font-medium hover:text-slate-500'>Kontakt</Link>
                </ul>
            </div>
            <div>
                <a href="mailto:intragdoo@gmail.com" target="_blank" className='bg-slate-900 p-4 rounded-full xxs:hidden mdd:block hover:bg-slate-500'>
                    <FaEnvelope size={24} color='white'/>
                </a>
            </div>
        </nav>
    </div>
  )
}
