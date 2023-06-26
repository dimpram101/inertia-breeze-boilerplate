import Navbar from '@/Components/Navbar';
import Sidebar from '@/Components/Sidebar'
import { PageProps } from '@/types';
import { usePage } from '@inertiajs/react'
import React from 'react'

const DashboardLayout = ({ children }: React.PropsWithChildren) => {
  const { auth } = usePage<PageProps>().props;
  return (
    <div className='flex flex-row'>
      <Navbar auth={auth}/>
      <Sidebar auth={auth}/>
      <div className="mt-14 ml-64 w-full p-4">
        {children}
      </div>
    </div>
  )
}

export default DashboardLayout