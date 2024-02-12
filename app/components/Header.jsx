'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'


export default function Header() {
    const [numOfProjects, setNumOfProjects] = useState(0);
    const [numOfYearsOfExp, setNumOfYearsOfExp] = useState(0);
    const [daysOfWork, setDaysOfWork] = useState(0);
    

    useEffect(() => {
        let interval = null;
    
        interval = setInterval(() => {
            // Update numOfProjects
            if (numOfProjects < 200) {
                setNumOfProjects(prevNumOfProjects => prevNumOfProjects + 1);
            }
        }, 5); // Interval set to 10 milliseconds
    
        return () => clearInterval(interval);
    }, [numOfProjects]);
    
    useEffect(() => {
        let interval = null;
    
        interval = setInterval(() => {
            // Update numOfYearsOfExp
            if (numOfYearsOfExp < 20) {
                setNumOfYearsOfExp(prevNumOfYearsOfExp => prevNumOfYearsOfExp + 1);
            }
        }, 50); // Interval set to 20 milliseconds
    
        return () => clearInterval(interval);
    }, [numOfYearsOfExp]);
    
    useEffect(() => {
        let interval = null;
    
        interval = setInterval(() => {
            // Update daysOfWork
            if (daysOfWork < 7) {
                setDaysOfWork(prevDaysOfWork => prevDaysOfWork + 1);
            }
        }, 50); // Interval set to 30 milliseconds
    
        return () => clearInterval(interval);
    }, [daysOfWork]);
  return (
    <header className='bg-header-background bg-contain bg-no-repeat bg-center py-36'>
        <div className='flex justify-between items-center'>
            <div className='w-1/2 mr-20'>
                <h1 className='text-7xl font-light mb-8'>
                    Vizuelni identitet <br/> iz snova
                </h1>
                <p className='mb-8 text-lg text-slate-700'>
                Sa strašću prema grafici i vrhunskom digitalnom štampom, pružamo personalizovane usluge dizajna i štampe koje ističu vaš brend.
                </p>
                <button className='bg-black hover:bg-slate-700 text-white font-light py-3 w-52 rounded'>
                    Upit za narudžbu
                </button>
            </div>
            <div className='relative w-1/2'>
                
                <div className='relative'>
                    <div className='rounded-full bg-slate-200 p-[240px] absolute top-[-300px] right-[120px]'>
                        <div className='w-32 h-32 rounded-full bg-white 
                        inline-flex items-center justify-center flex flex-col
                        shadow-[0_8px_30px_rgb(0,0,0,0.12)] text-gray-700  absolute top-52 -left-40'>
                            <p className='text-4xl font-normal text-blue-500'>{numOfProjects}+</p>
                            <p className='text-sm'>projekata</p>
                        </div>
                        <div className='w-32 h-32 rounded-full flex flex-col bg-white 
                        inline-flex items-center justify-center  
                        shadow-[0_8px_30px_rgb(0,0,0,0.12)] text-gray-700  absolute top-[380px] -left-24'>
                            <p className='text-4xl font-normal text-blue-500'>{numOfYearsOfExp}</p>
                            <p className='text-sm'>godina</p>
                            <p className='text-sm'>iskustva</p>
                        </div>
                        <div className='w-32 h-32 rounded-full  flex flex-col bg-white
                        inline-flex items-center justify-center  
                        shadow-[0_8px_30px_rgb(0,0,0,0.12)] text-gray-700  absolute top-[490px] left-12'>
                            <p className='text-4xl font-normal text-blue-500'>{daysOfWork}</p>
                            <p className='text-sm'>dana izrade</p>
                        </div>
                    </div>
                    <div className='rounded-full bg-slate-300 p-[180px] absolute top-[-50px] right-0'>
                        
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}
