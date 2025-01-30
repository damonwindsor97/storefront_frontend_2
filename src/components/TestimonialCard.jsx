import { IoIosStar } from "react-icons/io";

function TestimonialCard({stars, review, name}) {
  return (
    <div className="mx-auto max-w-[375px] rounded-2xl bg-zinc-800 text-gray-300 p-6">
        <div className="flex mb-2">
            <IoIosStar className=""/>
            <IoIosStar/>
            <IoIosStar/>
            <IoIosStar/>
            <IoIosStar/>
        </div>
        <div>
            <p className="mb-2">{review}</p>
            <p className="text-gray-400">- {name}</p>
        </div>
    </div>
  )
}

export default TestimonialCard