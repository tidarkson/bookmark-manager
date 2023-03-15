import React from 'react'
import logo from '../images/logo-bookmark.svg'
import logoLight from '../images/logo-bookmark-light.svg'
import menu from '../images/icon-hamburger.svg'
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'


function Header() {
  return (
    <>
        <header className='flex items-center justify-between p-8 max-w-5xl mx-auto'>
            <div>
                <img src={logo} alt="Bookmark" />
            </div>

            <nav className='hidden'>
                <ul>
                    <li><button>Features</button></li>
                    <li><button>Pricing</button></li>
                    <li><button>Contact</button></li>
                    <li><button>Log in</button></li>
                </ul>

                <ul>
                    <li>
                        <img src={facebook} alt="" />
                    </li>
                    <li>
                        <img src={twitter} alt="" />
                    </li>
                </ul>
            </nav>

            <div>
                <button>
                <img src={menu} alt="" />
                </button>
            </div>
        </header>
    </>
  )
}

export default Header