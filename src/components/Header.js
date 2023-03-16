import React, {useState} from 'react'
import logo from '../images/logo-bookmark.svg'
import logoLight from '../images/logo-bookmark-light.svg'
import menu from '../images/icon-hamburger.svg'
import closeMenu from '../images/icon-close.svg'
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'


function Header() {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <>
        <header className='flex items-center justify-between p-8 max-w-5xl mx-auto'>
            <div>
                <img src={logo} alt="Bookmark" />
            </div>

            <nav className={`${isOpen && "open"} lg:block lg:mt-5`}>
                <div className='flex items-center justify-between lg:hidden'>
                    <img src={logoLight} alt="" />

                    <button onClick={() => setIsOpen(!isOpen)}>
                        <img src={closeMenu} alt="" />
                    </button>
                </div>
                <ul className='flex flex-col text-center justify-center lg:text-left lg:flex-row lg:items-center lg:gap-6'>
                    <li className='border-t border-slate-400 py-4 lg:border-transparent lg:py-0'><button className='uppercase lg:text-slate-800 lg:text-xs tracking-widest hover:text-red-400 '>Features</button></li>
                    <li className='border-t border-slate-400 py-4 lg:border-transparent lg:py-0'><button className='uppercase lg:text-slate-800 lg:text-xs tracking-widest hover:text-red-400 '>Pricing</button></li>
                    <li className='border-t border-slate-400 py-4  lg:border-transparent lg:py-0'><button className='uppercase lg:text-slate-800 lg:text-xs tracking-widest hover:text-red-400 '>Contact</button></li>
                    <li className='border-t border-slate-400 py-4 lg:border-transparent lg:py-0'><button className='lg:bg-red-400 btn-red text-white border-2 py-3 px-4 rounded shadow-lg hover:opacity-75 md:w-full lg:text-xs uppercase tracking-widest hover:bg-white lg:hover:text-slate-800 transition-all duration-200 w-full '>Log in</button></li>
                </ul>

                <ul className='flex items-center justify-center gap-6 lg:hidden'>
                    <li>
                        <img src={facebook} alt="" />
                    </li>
                    <li>
                        <img src={twitter} alt="" />
                    </li>
                </ul>
            </nav>

            <div className='lg:hidden'>
                <button onClick={()=> setIsOpen(!isOpen)}>
                <img src={menu} alt="" />
                </button>
            </div>
        </header>
    </>
  )
}

export default Header