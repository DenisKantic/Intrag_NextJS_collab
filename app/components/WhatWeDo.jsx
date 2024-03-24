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
            content: 'Uz štampu na ceradnim materijalima, stvorite trajne i izdržljive reklamne materijale, bannerje, zastave ili dekorativne elemente za različite događaje. Naša tehnologija štampe omogućuje visokokvalitetan ispis s bogatstvom boja i detalja, osiguravajući da vaša poruka ili dizajn zaista zasja. Otkrijte našu široku paletu ceradnih materijala i prilagodite ih svojim potrebama - sve što zamislite, možemo pretvoriti u stvarnost.'
        },
        {
            id: 3,
            title: 'Sito štampa',
            content: 'Sitoštampa je vrhunska tehnika koja omogućuje precizan i živopisan ispis na različitim površinama, od papira do tekstila i plastike. Bez obzira trebate li personalizirane majice, promotivne materijale ili umjetnička djela visoke kvalitete, naša sitoštampa pruža nevjerojatnu detaljnost i trajnost. Otkrijte snagu ovog klasičnog procesa i pretvorite svoje ideje u stvarnost s našom stručnom ekipom i naprednom opremom.'
        },
        {
            id: 4,
            title: 'Graviranje',
            content: 'Otkrijte eleganciju i profinjenost graviranja. Naša tehnika graviranja omogućuje vam da istaknete svoj brend ili osobni stil na metalnim, drvenim, staklenim ili plastičnim površinama s izvanrednom preciznošću i detaljima. Bez obzira jeste li u potrazi za personaliziranim poklonom ili želite dodati ekskluzivni pečat svojim poslovnim materijalima, graviranje je savršen izbor.'
        }
    ])

    const [textContent, setTextContet] = useState(['bg-[#00FFFF]', actionList[0].content])

    const [activeColor, setActiveColor] = useState([1, 'bg-[#00FFFF]', 'text-black', 'black'])

    const pickItem = (id) => {
        if (id === 1) {
            setTextContet(['bg-[#00FFFF]', actionList[id-1].content])
            setActiveColor([1,'bg-[#00FFFF]', 'text-black', 'black'])
        } else if (id === 2) {
            setTextContet(['bg-[#FF00FF]', actionList[id-1].content])
            setActiveColor([2, 'bg-[#FF00FF]', 'text-slate-100', 'white'])
        } else if (id === 3) {
            setTextContet(['bg-[#FFFF00]', actionList[id-1].content])
            setActiveColor([3, 'bg-[#FFFF00]', 'text-black','black'])
        } else if (id === 4) {
            setTextContet(['bg-[#131313]', actionList[id-1].content])
            setActiveColor([4, 'bg-[#131313]', 'text-slate-100', 'white'])
        }
    }

  return (
    <div className='mt-72'>
        <div className='flex items-center xxs:mb-10 md:mb-20'>
            <span className='xxs:w-12 mdd:w-24 mr-6 block h-px bg-slate-800'></span>
            <h2 className='font-light xxs:text-md md:text-4xl cursor-default'>Čime se bavimo</h2>
        </div>
        <div className='flex'>
            <div className='xxs:w-full mdd:w-1/2 mdd:mr-20'>
            {
                actionList.map(content => (
                    <div key={content.id} 
                    className={`cursor-pointer flex p-4 ${content.id != 4 ? 'mb-4' : ''} 
                    shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-md items-center justify-between
                    ${content.id === activeColor[0] ? activeColor[1] : ''}`} onClick={() => pickItem(content.id)}>
                        <p className={`${content.id === activeColor[0] ? activeColor[2] : ''}`}>
                            {content.title}
                        </p>
                        <GoChevronRight color={`${content.id === activeColor[0] ? activeColor[3] : ''}`}
                                        className='xxs:hidden mdd:block'/>
                    </div>
                ))
            }
            </div>
            <div className='w-1/2 flex flex-col justify-between xxs:hidden mdd:block cursor-default'>
                <p className="relative indent-16 mb-5">
                    <span className={`absolute top-3 left-0 w-12 h-0.5 ${textContent[0]}`}></span>
                    {textContent[1]}
                </p>
                <a className='bg-black hover:bg-slate-700 text-white font-light py-3 px-4 rounded-md'
                        href="mailto:intragdoo@gmail.com" target="_blank">
                    Upit za narudžbu
                </a>
            </div>
        </div>
    </div>
    

  )
}
