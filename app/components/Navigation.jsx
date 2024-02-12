import React from 'react'
import { PiEnvelopeSimpleLight } from "react-icons/pi";
import { FaEnvelope } from "react-icons/fa6";
import Image from 'next/image';
export default function Navigation() {
  return (
    <div className='px-40 pt-6'>
        <nav className='flex justify-between p-4 mb-28 items-center bg-gradient-to-r from-fuchsia-50 via-green-100 to-amber-50 rounded-lg bg-repeat-x'>
            <Image src="/images/logo_intrag.png" alt="Logo intrag" width={100} height={100}/>
            <div>
                <ul className='flex'>
                    <li className='mr-12 cursor-pointer text-lg'>O nama</li>
                    <li className='mr-12 cursor-pointer text-lg'>Proizvodi</li>
                    <li className='cursor-pointer text-lg'>Kontakt</li>
                </ul>
            </div>
            <div>
                <div className='bg-slate-900 p-4 rounded-full'>
                    <FaEnvelope size={24} color='white'/>
                </div>
            </div>
        </nav>
    </div>
  )
}
