import { Link } from '@inertiajs/react'
import React from 'react'
import Navbar from './Navbar'

const Sidebar = () => {
  return (
    <>
      <Navbar />
      <div className="h-screen w-64 fixed bg-primary text-complementary shadow-2xl top-0 left-0 pt-16">
        <div className="pt-2 px-3 flex flex-col font-semibold">
          <Link href={route('dashboard')} className="text-lg px-2 py-2 rounded-lg hover:bg-secondary">Dashboard</Link>
          <Link href={route('profile.edit')} className="text-lg px-2 py-2 rounded-lg hover:bg-secondary">Profile</Link>
          <Link href={route('user.index')} className="text-lg px-2 py-2 rounded-lg hover:bg-secondary">Users</Link>
          <hr className='mt-1' />
        </div>
        <div className="pt-2 px-3 flex flex-col font-semibold">
          <Link href='/' className="text-lg px-2 py-2 rounded-lg hover:bg-secondary">
            <div className="flex justify-between items-center">
              Home
              <span className='w-6'>
                <svg fill="#fff" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" stroke="#fff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M27 18.039L16 9.501 5 18.039V14.56l11-8.54 11 8.538v3.481zm-2.75-.31v8.251h-5.5v-5.5h-5.5v5.5h-5.5v-8.25L16 11.543l8.25 6.186z"></path></g></svg>
              </span>
            </div>
          </Link>
          <Link href={route('logout')} method='post' className="text-lg px-2 py-2 rounded-lg hover:bg-secondary" as='button'>
            <div className="flex justify-between items-center">
              Logout
              <span className='w-6'>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21 12L13 12" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M18 15L20.913 12.087V12.087C20.961 12.039 20.961 11.961 20.913 11.913V11.913L18 9" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M16 5V4.5V4.5C16 3.67157 15.3284 3 14.5 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H14.5C15.3284 21 16 20.3284 16 19.5V19.5V19" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
              </span>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Sidebar