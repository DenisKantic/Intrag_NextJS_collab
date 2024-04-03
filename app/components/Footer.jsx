import React from 'react'

const Footer = () => {
  return (
    <div className='w-full min-h-[6vh] bg-slate-900 text-center text-white flex items-center justify-center'>
        <div className='cursor-default w-[90%] break-words'>
          <p>Intrag d.o.o. &copy; 2024 <br /></p> 
        <p className='w-full break-words'>
        Dizajnirali:
        <span className='ml-2'><a href="https://www.linkedin.com/in/hamza-paldum/" 
        target='_blank' className='font-bold mr-2 underline'>
            Hamza
            </a>
             & 
             <a href="https://www.linkedin.com/in/nejra-rizvan-32565a266/" 
             target='_blank' className='font-bold ml-2 mr-2 underline'>
                Nejra
                </a>
                </span>
                <span className='sm:hidden'><br /></span>
                <span className='break-all'>
                Kreirali: 
                    <a href="https://www.linkedin.com/in/denis-kantic/"
                     target='_blank' className='font-bold ml-2 mr-2 underline'>
                        Denis
                        </a> 
                        & 
                        <a href="https://www.linkedin.com/in/ismar-begic-273a09169/" 
                        target='_blank' className='font-bold ml-2 underline'>
                            Ismar
                            </a>
                            </span>
                            </p>
                         
        </div>
      
           
    </div>
  )
}

export default Footer