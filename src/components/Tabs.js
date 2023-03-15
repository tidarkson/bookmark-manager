import React, { useState } from 'react'


const data = [
    {
        id: 1,
        title: "Bookmark in one click",
        desc: "Organise your bookmarks however you like. Our simple drag and drop interface give you complete control over how you manage your favourite sites",
        link: "More Info",
        button: "Simple bookmarking",
        image: "./images/illustration-features-tab-1.svg"
    },
    {
        id: 2,
        title: "Intelligent Search",
        desc: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks",
        link: "More Info",
        button: "Speedy searching",
        image: "./images/illustration-features-tab-2.svg"
    },

    {
        id: 3,
        title: "Share your bookmarks",
        desc: "Easily share your bookmarks and collections with others. Create a sharable link that you can send at the click of a button",
        link: "More Info",
        button: "Easy sharing",
        image: "./images/illustration-features-tab-3.svg"
    }
]

function Tabs() {
    const [tabs] = useState(data)
    const [value, setValue] = useState(2)
    const {image, title, desc, link} = tabs[value]

    return (
        <div>
            <section className='max-w-7xl mx-auto px-8'>
                <article className='text-center'>
                    <h2 className='text-3xl mb-8'> Features</h2>
                    <p className='lg:mx-auto lg:w-96'>Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between y our devices so you can access them on the go</p>
                </article>

                <div>
                    <ul className='flex justify-center text-center flex-col my-10 md:flex-row'>
                        {tabs.map((tab, index) => (
                            <li key={tab.id} className="border-t border-slate-600 last:border-b md:border-t-0 md:border-b">
                                <button className={`text-slate-600 py-3 md:px-6 ${index === value && "border-b-2 border-red-400"}`} onClick={()=>setValue(index)}>{tab.button}</button>
                            </li>
                        ))}
                    </ul>

                    <div className='lg:grid lg:grid-cols-2 lg:gap-16 lg:place-items-center max-w-5xl mx-auto'>
                        <article className='relative'>
                            <img src={image} alt="" className='block mx-auto w-full'/>
                            <div className='bg-left'></div>
                        </article>

                        <article className='text-center lg:text-left'>
                            <h2 className='text-3xl mt-16 mb-8'>{title}</h2>
                            <p className='mb-10'>{desc}</p>
                            <button className='bg-indigo-600 text-white py-2 px-4 rounded shadow-lg font-bold hover:opacity-75'>{link}</button>
                        </article>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Tabs