import React from 'react'

const Footer = () => {
  return (
    <div className='w-full relative min-h-[6vh] bg-slate-900 text-center text-white flex items-center justify-center'>
        <p className='cursor-default'>Intrag d.o.o. &copy; 2024 <br /> 
        Dizajnirali:
        <span className='ml-2'><a href="https://www.linkedin.com/in/hamza-paldum/" 
        target='_blank' className='font-bold mr-2'>
            Hamza
            </a>
             & 
             <a href="https://www.linkedin.com/in/nejra-rizvan-32565a266/" 
             target='_blank' className='font-bold ml-2 mr-2'>
                Nejra
                </a>
                </span>  
                Kreirali: 
                <span>
                    <a href="https://www.linkedin.com/in/denis-kantic/"
                     target='_blank' className='font-bold ml-2 mr-2'>
                        Denis
                        </a> 
                        & 
                        <a href="https://www.linkedin.com/in/ismar-begic-273a09169/" 
                        target='_blank' className='font-bold ml-2'>
                            Ismar
                            </a>
                            </span>
        </p>
    </div>
  )
}

export default Footer