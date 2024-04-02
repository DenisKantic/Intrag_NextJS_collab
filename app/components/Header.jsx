import Image from 'next/image'


export default function Header() {;
    
  return (
    <header className='bg-header-background bg-contain bg-no-repeat bg-center min-h-[50vh]'>
        <div className='flex justify-center items-center min-h-[50vh] mt-10
                        xxs:flex-col mdd:flex-row'>

            <div className='w-1/2 
                            xxs:w-full mdd:w-1/2'>
                <h1 className='font-light mb-8
                                xxs:text-3xl xxs:text-center xxs:font-normal
                                md:text-7xl md:text-left md:font-light'>
                    Vizuelni identitet <br className='xxs:hidden md:block'/> iz snova
                </h1>
                <p className='mb-8 text-slate-700 
                            xxs:text-justify xxs:tracking-normal xxs:break-normal xxs:text-sm xxs:w-full
                            md:text-lg lg:text-left'>
                Sa strašću prema grafici i vrhunskom digitalnom štampom, pružamo personalizovane usluge dizajna i štampe koje ističu vaš brend.
                </p>
                <button className='bg-black hover:bg-slate-700 text-white font-light py-3 w-52 rounded'>
                    Upit za narudžbu
                </button>
            </div>
            <div className='xxs:w-full xxs:mt-10 mdd:w-1/2 mdd:mt-0'>
                
            <Image src="/images/team_intrag3.png" 
                                height={300}
                                width={300}
                                unoptimized={true}
                                alt="intrag team"
                                className='w-[90%]'/>
                {/* 
                <div className='relative'>
                    <div className='rounded-full bg-slate-200 p-[260px] absolute top-[-300px] right-0'>
                        <Image src="/images/team_intrag.jpg" 
                                fill={true}
                                alt="intrag team"
                                className='w-full h-full rounded-full object-cover'/>
                        <div className='w-32 h-32 rounded-full bg-white 
                        inline-flex items-center justify-center flex flex-col
                        shadow-[0_8px_30px_rgb(0,0,0,0.12)] text-gray-700  absolute top-52 -left-40'>
                            <p className='text-4xl font-semibold text-blue-500'>{numOfProjects}+</p>
                            <p className='text-sm'>projekata</p>
                        </div>
                        <div className='w-32 h-32 rounded-full flex flex-col bg-white 
                        inline-flex items-center justify-center  
                        shadow-[0_8px_30px_rgb(0,0,0,0.12)] text-gray-700  absolute top-[380px] -left-24'>
                            <p className='text-4xl font-semibold text-blue-500'>{numOfYearsOfExp}</p>
                            <p className='text-sm'>godina</p>
                            <p className='text-sm'>iskustva</p>
                        </div>
                        <div className='w-32 h-32 rounded-full  flex flex-col bg-white
                        inline-flex items-center justify-center  
                        shadow-[0_8px_30px_rgb(0,0,0,0.12)] text-gray-700  absolute top-[490px] left-12'>
                            <p className='text-4xl font-semibold text-blue-500'>{daysOfWork}</p>
                            <p className='text-sm'>dana izrade</p>
                        </div>
                    </div>

                    */}

                    {/* 
                    <div className='rounded-full p-[180px] absolute top-[-50px] right-0'>
                    <Image src="/images/solja.jpg" 
                                fill={true}
                                alt="intrag team"
                                className='w-full h-full rounded-full object-fit'/>
                    </div>
                </div>
            */}
            </div>
        </div>
    </header>
  )
}
