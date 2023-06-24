import Sidebar from '@/Components/Sidebar'
import React from 'react'

const DashboardLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className='flex flex-row'>
      <Sidebar />
      <div className="mt-14 p-4">
        {children}
      </div>
    </div>
  )
}

export default DashboardLayout