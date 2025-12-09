import { StarIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

function Rating() {
    const [hovered, setHovered] = useState(0)


  return (
     <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => {
        const starNumber = i + 1;
        return (
          <StarIcon
            key={i}
            className={`w-5 h-5 cursor-pointer transition-colors ${
              starNumber <= hovered
                ? "text-yellow-400"
                : "text-gray-300"
            }`}
            onMouseEnter={() => setHovered(starNumber)}
            onMouseLeave={() => setHovered(0)}
          />
        );
      })}
    </div>
  )
}

function SalesEntry() {
    return (
        <div className="flex flex-col justify-start items-center border bg-gray-50 w-50 h-80 rounded-xl">
            <img 
                className="w-30 h-40 m-2 mt-5 self-center" 
                src="https://covers.openlibrary.org/b/id/10298504-M.jpg"
            />
            <a className='font-medium'>Some Book Title</a>
            <Rating/>
            <a className='font-extrabold'>Price</a>
            <button className='border w-35 h-10'>Buy</button>
        </div>
    )
}

export default SalesEntry