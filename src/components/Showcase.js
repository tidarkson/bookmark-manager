import React from 'react'
import hero from '../images/illustration-hero.svg'

function Showcase() {
  return (
    <>
        <section className='flex flex-col-reverse pl-8 py-20 lg:grid lg:grid-cols-2 lg:gap-16 lg:place-items-center max-w-7xl mx-auto'>
            <article className='text-center lg:text-left'>
                <h1 className='text-4xl my-8 lg:text-5xl'>A simple bookmark manager</h1>
                <p>A clean and simple interface to organise your websites. Open a new browser tab and see your site load instantly. Try it for free</p>
                <ul className='mt-10 flex items-center justify-center flex-wrap gap-4 lg:text-left'>
                    <li><button className='btn-blue text-white py-2 px-4 rounded shadow-lg font-bold hover:opacity-75'>Get it on chrome</button></li>
                    <li><button className='bg-slate-100 text-slate-800 py-2 px-4 rounded shadow-lg hover:opacity-75 font-bold'>Get it on firefox</button></li>
                </ul>
            </article>
            <article className='relative'>
                <img src={hero} alt="" className='w-full' />
                <div className='bg'></div>
                </article>
        </section>
    </>
  )
}

export default Showcase