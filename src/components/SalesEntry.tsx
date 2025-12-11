import { StarIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Buy } from './Buttons'

export const createSalesRow = (amount: number) => {
  return (
    <div className='flex space-x-4 m-2'>
      {[...Array(amount)].map(() => {
        return (
          <SalesEntry/>
        )
      })}
    </div>
  )
}

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

export function SalesEntry() {
    return (
        <div className="flex flex-col justify-start items-center border bg-gray-50 w-50 h-80 rounded-xl">
            <Link to={"/product"}>
              <img 
                  className="w-30 h-40 m-2 mt-10 self-center" 
                  src="https://covers.openlibrary.org/b/id/10298504-M.jpg"
              />
            </Link>
            <Rating/>
            <a className='font-extrabold'>Price</a>
            <button className='border w-35 h-10'>Buy</button>
        </div>
    )
}

export function SalesEntryBig() {
  return (
    <>
      <div className='border w-180 h-80 rounded-3xl flex flex-row'>
        <img
          className='m-5'
          src="https://covers.openlibrary.org/b/id/10298504-M.jpg"
        />
        <div className='flex flex-col justify-center items-center'>
          <a className='m-2 mt-5 font-bold'>The Mystery of the yellow room</a>
          <a className='m-2 mt-5 font-extrabold text-2xl'>Price</a>
          <div className='mt-5 m-2'><Rating/></div>
          <Buy/>
        </div>
        <div className='flex flex-col border w-50 h-70 rounded-3xl mt-5 m-2'>
          <a className='mt-8 font-bold text-2l'>Book Details:</a>
          <div className='mt-5'> 
            <div className='flex flex-row'><a className='font-bold m-1'>Author: </a> <a className='m-1'>Some Author</a></div>
            <div className='flex flex-row'><a className='font-bold m-1'>Format: </a> <a className='m-1'>Some Author</a></div>
            <div className='flex flex-row'><a className='font-bold m-1'>ISBN: </a> <a className='m-1'>Some Author</a></div>
            <div className='flex flex-row'><a className='font-bold m-1'>Category: </a> <a className='m-1'>Some Author</a></div>
          </div>
         </div>
      </div>
    </>
  )
}