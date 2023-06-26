import Sidebar from '@/Components/Sidebar'
import React from 'react'

const DashboardLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className='flex flex-row'>
      <Sidebar />
      <div className="mt-14 ml-64 w-full p-4">
        {children}
      </div>
    </div>
  )
}

export default DashboardLayout