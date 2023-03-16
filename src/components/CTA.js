import React from 'react'

function CTA() {
  return (
    <>
      <section className='btn-blue px-8 py-20'>
        <article className='max-width-7xl mx-auto'>
          <h3 className='text-white font-normal text-sm uppercase tracking-widest mb-8 text-center'>35,000+ aleady joined</h3>
          <h2 className='text-white text-3xl mb-8 text-center lg:w-96 lg:mx-auto'>Stay up to date with what we are doing</h2>
          <form className='flex flex-col gap-4 md:flex-row md:items-center md:justify-center md:max-w-xl md:mx-auto'>
            <input type="email" name="email" id="email" placeholder='Enter your email address' className='w-full py-3 px-4 rounded shadow-lg text-sm' required />
            <button type='submit' className='btn-red text-white py-3 px-4 rounded shadow-lg font-bold hover:opacity-75 md:w-full text-sm'>Contact Us</button>
          </form>
        </article>

      </section>
    </>
  )
}

export default CTA