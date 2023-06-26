import DashboardLayout from '@/Layouts/DashboardLayout';
import { User } from '@/types'
import Select from "react-select";
import React, { useMemo } from 'react'
import InputText from '@/Components/InputText';
import Button from '@/Components/Button';
import Loading from '@/Components/Loading';
import LinkButton from '@/Components/LinkButton';
import { Link } from '@inertiajs/react';

interface Props {
  user: User
}

const Show = ({ user }: Props) => {
  const userRoles = useMemo(() => user.roles?.map(role => role.name), [user]);
  console.log(userRoles?.includes('guest'));
  
  return (
    <DashboardLayout>
      <h1 className='text-3xl font-bold text-center'>User - <span className='text-primary'>{user.name}</span></h1>
      <div className="mt-4 w-[800px] mx-auto bg-white shadow-md p-4">
        <div className="flex flex-col gap-1 font-semibold mb-3">
          <label>Name</label>
          <InputText value={user.name} placeholder='John Doe' disabled />
        </div>
        <div className="flex flex-col gap-1 font-semibold mb-3">
          <label>Email</label>
          <InputText value={user.email} type='email' placeholder='johndoe@example.com' disabled />
        </div>
        <div className="flex flex-col gap-1 font-semibold mb-3">
          <label>Phone Number</label>
          <input type='number' className='rounded-lg border-primary [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' value={user.phone_number} disabled />
        </div>
        <div className="flex flex-col gap-1 font-semibold mb-3">
          <label>Roles</label>
          <Select
            isMulti
            isDisabled
            getOptionLabel={it => it.name}
            getOptionValue={it => it.id.toString()}
            value={user.roles}
            className='border border-primary rounded-md'
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                borderColor: state.isFocused ? 'bg-primary' : '',
                boxShadow: '0 !important',
                '&:hover': {
                  borderColor: 'bg-primary',
                },
              }),
            }}
            required
          />
        </div>
        <div className="flex flex-col text-center mt-4">
          <LinkButton href={route('user.edit', user.id)} as='button' disabled={!userRoles?.includes('super-admin') && !userRoles?.includes('admin')}>Edit</LinkButton>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Show