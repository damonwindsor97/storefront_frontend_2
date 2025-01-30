

function Pricing() {
  return (
<div className="md:w-full bg-slate-950 p-20">
    <div className=" mx-auto md:mt-4">
        <p className="text-gray-100 text-3xl text-center">Pricing</p>

        <div className="md:mt-20 flex flex-wrap justify-center gap-8">
            
            {/* <!-- Card 1 --> */}
            <div className="rounded-2xl bg-gray-800 text-center min-w-[300px] max-w-[30%] p-2 shadow-lg shadow-blue-900">
                <div>
                    <p className="text-gray-200 font-light">Day</p>
                    <p className="text-white text-4xl my-4">$5</p>
                    <p className="text-gray-100 font-light">Stripe, BTC, LTC</p>
                </div>
                <div className="my-6">
                    <ul className="text-white divide-y divide-gray-700 font-light">
                        <li className="py-2">Access for 24 hours.</li>
                        <li className="py-2">Premium Support</li>
                        <li className="py-2">HWID Locked</li>
                    </ul>
                </div>
                <div>
                    <button 
                    data-sellix-product="67485873280e9"
                    type="submit"
                    alt="Buy Now with sellix.io"
                    className="p-2 text-white font-bold rounded-lg w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500">Purchase</button>
                </div>
                <div className="m-4">
                    <p className="text-gray-200 hover:text-gray-400 cursor-pointer">Terms of Service</p>
                </div>
            </div>

            {/* <!-- Card 2 --> */}
            <div className="rounded-2xl bg-gray-800 text-center min-w-[300px] max-w-[30%] p-2 shadow-lg shadow-blue-900">
                <div>
                    <p className="text-gray-200 font-light">Week</p>
                    <p className="text-white text-4xl my-4">$20</p>
                    <p className="text-gray-100 font-light">Stripe, BTC, LTC</p>
                </div>
                <div className="my-6">
                    <ul className="text-white divide-y divide-gray-700 font-light">
                        <li className="py-2">Access for 7 Days.</li>
                        <li className="py-2">Premium Support</li>
                        <li className="py-2">HWID Locked</li>
                    </ul>
                </div>
                <div>
                    <button 
                        data-sellix-product="6748596cf3ecf"
                        type="submit"
                        alt="Buy Now with sellix.io"
                        className="p-2 text-white font-bold rounded-lg w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500">Purchase</button>
                </div>
                <div className="m-4">
                    <p className="text-gray-200 hover:text-gray-400 cursor-pointer">Terms of Service</p>
                </div>
            </div>

            {/* <!-- Card 3 --> */}
            <div className="rounded-2xl bg-gray-800 text-center min-w-[300px] max-w-[30%] p-2 border border-blue-500 shadow-lg shadow-blue-900">
                <div>
                    <p className="text-gray-200 font-light">Month</p>
                    <p className="text-white text-4xl my-4">$45</p>
                    <p className="text-gray-100 font-light">Stripe, BTC, LTC</p>
                </div>
                <div className="my-6">
                    <ul className="text-white divide-y divide-gray-700 font-light">
                        <li className="py-2">Access for 30 Days.</li>
                        <li className="py-2">Premium Support</li>
                        <li className="py-2">HWID Locked</li>
                    </ul>
                </div>
                <div>
                    <button 
                        data-sellix-product="67485972d360a"
                        type="submit"
                        alt="Buy Now with sellix.io"
                        className="p-2 text-white font-bold rounded-lg w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500">Purchase</button>
                </div>
                <div className="mt-4">
                    <p className="text-gray-200 hover:text-gray-400 cursor-pointer">Terms of Service</p>
                </div>
            </div>

        </div>
    </div>
</div>

  )
}

export default Pricing