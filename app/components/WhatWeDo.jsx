'use client'
import React, {useState} from 'react'
import { GoChevronRight } from "react-icons/go";
export default function WhatWeDo() {

    const [actionList, setActionList] = useState([
        {
            id: 1,
            title: 'Grafički dizajn i digitalna štampa',
            content: 'U našem svijetu vizuelnog stvaralaštva, nudimo vrhunsku uslugu grafičkog dizajna i digitalne štampe koja nadmašuje očekivanja. Naš kreativni tim, inspirisan inovacijama i stručnošću, posvećen je stvaranju vizualnih identiteta koji se ističu. Od prvih skica do finalnog proizvoda, pridajemo posebnu pažnju detaljima kako bismo vašu priču prenijeli na način koji ostavlja neizbrisiv utisak.'
        },
        {
            id: 2,
            title: 'Štampa ceradnih materijala',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue id tortor at semper. Nulla facilisis mollis diam. Duis ac pulvinar dolor. Quisque ultricies tempus tellus eu luctus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed vel rutrum erat, vitae placerat nisl. Praesent ante nisi, auctor id mi in, sagittis facilisis ipsum. Vestibulum sit amet ligula a erat pharetra efficitur. '
        },
        {
            id: 3,
            title: 'Sito štampa',
            content: 'Nunc ullamcorper ut felis in lobortis. Etiam at sagittis leo. Nam id blandit odio. Ut sollicitudin ullamcorper feugiat. Nulla efficitur augue sit amet erat lobortis, et vestibulum erat tempor. Maecenas vel ex vestibulum augue molestie accumsan. Vestibulum elementum lacinia ligula. Pellentesque porttitor nulla eget orci elementum, quis posuere metus suscipit. Donec a massa consequat felis scelerisque pretium. '
        },
        {
            id: 4,
            title: 'Graviranje',
            content: 'Nulla augue ipsum, interdum sed feugiat nec, viverra id nunc. In laoreet ante ligula, in ullamcorper libero efficitur ac. Cras bibendum porttitor erat, et dignissim elit malesuada sed. Donec velit massa, cursus ut bibendum non, mattis a quam. Ut varius egestas lacus at rhoncus. Ut dapibus a odio nec malesuada. Morbi suscipit velit vel elit pellentesque, vitae ornare erat cursus. '
        }
    ])

    const [textContent, setTextContet] = useState(actionList[0].content)

    const [activeColor, setActiveColor] = useState([1, 'bg-[#00FFFF]', 'text-black'])

    const pickItem = (id) => {
       setTextContet(actionList[id-1].content);
        if (id === 1) {
            setActiveColor([1,'bg-[#00FFFF]', 'text-black'])
        } else if (id === 2) {
            setActiveColor([2, 'bg-[#FF00FF]', 'text-white'])
        } else if (id === 3) {
            setActiveColor([3, 'bg-[#FFFF00]', 'text-black'])
        } else if (id === 4) {
            setActiveColor([4, 'bg-[#131313]', 'text-white'])
        }
    }

  return (
    <div className='mt-96'>
        <div className='flex items-center mb-20'>
            <span className='w-24 mr-6 block h-px bg-slate-800'></span>
            <h2 className='text-4xl font-light'>Čime se bavimo</h2>
        </div>
        <div className='flex'>
            <div className='w-1/2 mr-36'>
            {
                actionList.map(content => (
                    <div key={content.id} className={`cursor-pointer flex p-4 mb-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-md items-center justify-between ${content.id === activeColor[0] ? activeColor[1] : ''}`} onClick={() => pickItem(content.id)}>
                        <p className={`${content.id === activeColor[0] ? activeColor[2] : ''}`}>
                            {content.title}
                        </p>
                        <GoChevronRight color={content.id === activeColor[0] ? activeColor[3] : ''}/>
                    </div>
                ))
            }
            </div>
            <div className='w-1/2'>
                <p className="relative pl-4">
                    <span className="absolute top-0 left-0 w-1 h-px bg-gray-500"></span>
                    {textContent}
                </p>
                <button className='bg-black hover:bg-slate-700 text-white font-light py-3 w-52 rounded'>
                    Vidi više
                </button>
            </div>
        </div>
    </div>
    

  )
}
