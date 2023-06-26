import { PageProps } from '@/types'
import React from 'react'

const Navbar = ({ auth }: PageProps) => {
  return (
    <nav className='w-full bg-primary text-complementary z-50 fixed top-0 left-0 px-5 shadow-md'>
      <div className="flex justify-between items-center h-14 mx-auto">
        <h1 className="text-xl font-bold">
          BoilerPlate
        </h1>

        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <svg className="absolute w-10 h-10 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
          </div>
          <h2>{auth.user.name}</h2>
        </div>
      </div>
    </nav>
  )
}

export default Navbar