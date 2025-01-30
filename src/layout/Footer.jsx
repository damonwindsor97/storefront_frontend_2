import Logo from '../assets/default.png';
import Mastercard from '../assets/mastercard.jpeg';
import Visa from '../assets/visa.jpg';
import Bitcoin from '../assets/bitcoin.jpg';

function Footer() {
  return (
    <div className="border-t border-gray-800 mt-12">
      <div className="text-white border-b border-gray-800 m-auto md:w-[80%] flex">
        <div className='md:w-[45%]'>
          <img src={Logo} className='h-24'/>
          <ul className="flex bg-black">
              <li className='mr-3 p-2 hover:bg-zinc-900 rounded cursor-pointer'>Features</li>
              <li className='mr-3 p-2 hover:bg-zinc-900 rounded cursor-pointer'>Reviews</li>
              <li className='mr-3 p-2 hover:bg-zinc-900 rounded cursor-pointer'>Pricing</li>
              <li className='mr-3 p-2 hover:bg-zinc-900 rounded cursor-pointer'>FAQs</li>
            </ul>
        </div>

          <div className=' md:flex md:space-x-32 items-center'>
            <div>
              <p className='text-stone-600 uppercase font-semibold text-sm'>Accepted Payment</p>
              <ul className=' text-white flex'>
                <img className='cursor-pointer h-10 rounded m-2' src={Mastercard}/>
                <img className='cursor-pointer h-10 rounded m-2' src={Visa}/>
                <img className='cursor-pointer h-10 rounded m-2' src={Bitcoin}/>
              </ul>
            </div>
            <div>
              <p className='text-stone-600 uppercase font-semibold text-sm'>Legal</p>
              <ul className=' text-white'>
                <li className='hover:underline cursor-pointer'>Legal Link 1</li>
                <li className='hover:underline cursor-pointer'>Legal Link 2</li>
              </ul>
            </div>
            <div>
              <p className='text-stone-600 uppercase font-semibold text-sm'>Help</p>
              <ul className=' text-white'>
                <li className='hover:underline cursor-pointer'>Help Link 1</li>
                <li className='hover:underline cursor-pointer'>Help Link 2</li>
              </ul>
            </div>


          </div>
      </div>

      
      <div className="m-auto md:w-[80%] ">
        <p className="m-2 text-stone-600 float-end">&copy; Copyright 2025. All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer