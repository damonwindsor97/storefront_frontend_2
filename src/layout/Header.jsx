import { useState } from 'react'

import DefaultLogo from '../assets/default.png'
import DiscordLogo from '../assets/Discord-logo.png'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <nav className="bg-black w-screen font-inter md:text-sm">
      <div className="pt-2 flex text-white mx-auto md:max-w-[1280px] md:justify-between items-center">
        <div className="relative z-10 flex">
          <img src={DefaultLogo} alt="" className='h-16'/>
        </div>

        <div className="mr-auto md:static">
          <ul className={`${isMenuOpen ? "z-50 absolute bg-black border-b border-gray-900 top-[10%] w-screen left-0" : "hidden"} md:text-sm md:flex p-2 text-gray-200`}>
            <li className='mr-3 p-2 hover:bg-zinc-900 rounded cursor-pointer'>Features</li>
            <li className='mr-3 p-2 hover:bg-zinc-900 rounded cursor-pointer'>Reviews</li>
            <li className='mr-3 p-2 hover:bg-zinc-900 rounded cursor-pointer'>Pricing</li>
            <li className='mr-3 p-2 hover:bg-zinc-900 rounded cursor-pointer'>FAQs</li>
          </ul>
        </div>

        <div className="m-2">
          <button className="bg-zinc-800 rounded-lg pl-2 pr-2 hover:bg-zinc-900"><img src={DiscordLogo} className='h-8'/></button>
          <ion-icon
            onClick={toggleMenu}
            name={isMenuOpen ? "close" : "menu"}
            class="text-3xl cursor-pointer md:hidden ml-2"
          ></ion-icon>
        </div>
      </div>
    </nav>
  )
}

export default Header