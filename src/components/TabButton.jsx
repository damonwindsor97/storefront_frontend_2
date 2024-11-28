

function TabButton({title, description}) {
  return (
    <div className="w-[480px] h-38 p-4 ">
        <p className="font-semibold text-gray-100 mb-2">{title}</p>
        <p className="text-sm font-light text-gray-300">{description}</p>
    </div>
  )
}

export default TabButton