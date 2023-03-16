import React from 'react'
import chrome from '../images/logo-chrome.svg'
import firefox from '../images/logo-firefox.svg'
import opera from '../images/logo-opera.svg'
import dots from '../images/bg-dots.svg'


function Download() {
    return (
        <>
            <section className='max-width-7xl mx-auto px-8 py-20'>
                <article className='text-center mb-10'>
                    <h2 className='text-3xl mb-8 lg:text-4xl'>Download the extension</h2>
                    <p>We've got more browsers in the pipeline. Please let us know if you've got a favourite you'd like us to prioritize</p>
                </article>

                <article className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 '>
                    <div className='bg-white shadow-2xl text-center p-8 rounded'>
                        <img src={chrome} alt="" className='block mx-auto mb-8'/>
                        <h2 className='text-xl mb-4'>Add to Chrome</h2>
                        <p className='text-sm '>minimum version 62</p>
                        <img src={dots} alt="" className='block mx-auto my-6' />
                        <button className='btn-blue text-white py-2 px-4 rounded shadow-lg font-bold hover:opacity-75'>Add & install extension</button>
                    </div>
                    <div className='bg-white shadow-2xl text-center p-8 rounded  lg:transform lg:translate-y-10'>
                        <img src={firefox} alt=""  className='block mx-auto mb-8'/>
                        <h2 className='text-xl mb-4'>Add to Firefox</h2>
                        <p className='text-sm '>minimum version 55</p>
                        <img src={dots} alt="" className='block mx-auto my-6' />
                        <button className='btn-blue text-white py-2 px-4 rounded shadow-lg font-bold hover:opacity-75'>Add & install extension</button>
                    </div> 
                    <div className='bg-white shadow-2xl text-center p-8 rounded lg:transform lg:translate-y-20'>
                        <img src={opera} alt="" className='block mx-auto mb-8' />
                        <h2 className='text-xl mb-4'>Add to Opera</h2>
                        <p className='text-sm '>minimum version 46 </p>
                        <img src={dots} alt="" className='block mx-auto my-6' />
                        <button className='btn-blue text-white py-2 px-4 rounded shadow-lg font-bold hover:opacity-75'>Add & install extension</button>
                    </div>

                </article>
            </section>
        </>
    )
}

export default Download