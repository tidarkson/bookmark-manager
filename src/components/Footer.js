import React from 'react'
import logoLight from '../images/logo-bookmark-light.svg'
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'


function Footer() {
    return (
        <div>
            <footer style={{ backgroundColor: "hsl(229,31%,21%)" }} className="flex justify-center flex-col items-center px-8 py-10 md:flex-row justify-between">
                <img src={logoLight} alt="" className='mt-3' />
                <div className='my-3'>
                    <ul className='mt-3 md:mt-0 md:flex items-center md:justify-start md:gap-3'>
                        <li className='text-white text-sm uppercase tracking-wide'>Features</li>
                        <li className='text-white text-sm uppercase tracking-wide my-3 md:my-0'>Pricing</li>
                        <li className='text-white text-sm uppercase tracking-wide'>Contact</li>
                    </ul>
                </div>
                <ul className='flex items-center gap-6 mt-3'>
                    <li><button><img src={facebook} alt="" /></button></li>
                    <li><button><img src={twitter} alt="" /></button></li>
                </ul>
            </footer>
        </div>
    )
}

export default Footer