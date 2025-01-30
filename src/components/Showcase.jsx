import CheatPicture from '../assets/cheat.png'

function Showcase() {
  return (
    <div className="overflow-hidden ">
        <div className="md:max-w-[1280px] p-2 m-auto md:flex md:mt-[15%]">
            <div className="text-center mt-[15%] md:m-auto">
                <p className="text-gray-200 text-4xl">Company Name</p>
                <p className="text-gray-400">Small Slogan, Big word, Trusting Word</p>
                <button className='p-3 text-xs text-white rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 m-6 hover:from-blue-500 hover:to-cyan-500  '>PURCHASE NOW</button>
            </div>

            <div className="m-8 drop-shadow-blue-glow md:m-auto">
              <img src={CheatPicture} className='w-[420px] m-auto' />
            </div>
        </div>
    </div>
  )
}

export default Showcase