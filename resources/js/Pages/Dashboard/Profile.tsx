import Button from '@/Components/Button'
import InputText from '@/Components/InputText'
import Loading from '@/Components/Loading'
import DashboardLayout from '@/Layouts/DashboardLayout'
import { Roles, User } from '@/types'
import { useForm } from '@inertiajs/react'
import React, { useMemo } from 'react'
import Select from "react-select";

interface Props {
  user: User,
  roles: Roles,
}

const Profile = ({ user, roles }: Props) => {
  const form = useForm({
    name: user.name || '',
    email: user.email || '',
    phone_number: user.phone_number || '',
    roles: user.roles || [],
    current_password: '',
    password: '',
    confirm_password: '',
  });

  const isPasswordMatched = useMemo(() => form.data.password === form.data.confirm_password, [form.data.password, form.data.confirm_password]);

  const canSubmit = (form.data.name !== "" && form.data.email !== "" && form.data.phone_number !== "" && form.data.roles.length > 0) && (isPasswordMatched);

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form.data);
    form.put(route('user.update', user.id), {
      onFinish: () => form.reset('password', 'confirm_password')
    });
  }

  return (
    <DashboardLayout>
      <h1 className='text-center font-bold text-2xl'>Edit - <span className='text-primary'>{user.name}</span></h1>
      <div className="mt-4 w-[800px] mx-auto bg-white shadow-md p-4">
        <form onSubmit={onSubmitHandler}>
          <div className="flex flex-col gap-1 font-semibold mb-3">
            <label>Name</label>
            <InputText value={form.data.name} onChange={(e) => form.setData('name', e.target.value)} placeholder='John Doe' />
            {form.errors.name && (<p className='text-xs text-red-500 font-thin'>{form.errors.name}</p>)}
          </div>
          <div className="flex flex-col gap-1 font-semibold mb-3">
            <label>Email</label>
            <InputText value={form.data.email} onChange={(e) => form.setData('email', e.target.value)} type='email' placeholder='johndoe@example.com' />
            {form.errors.email && (<p className='text-xs text-red-500 font-thin'>{form.errors.email}</p>)}
          </div>
          <div className="flex flex-col gap-1 font-semibold mb-3">
            <label>Phone Number</label>
            <input type='number' className='rounded-lg border-primary [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' value={form.data.phone_number} onChange={(e) => form.setData('phone_number', e.target.value)} placeholder='081234567890' />
            {form.errors.phone_number && (<p className='text-xs text-red-500 font-thin'>{form.errors.phone_number}</p>)}
          </div>
          <div className="flex flex-col gap-1 font-semibold mb-3">
            <label>Roles</label>
            <Select
              isMulti
              //@ts-ignore
              options={roles}
              //@ts-ignore
              getOptionLabel={it => it.name}
              //@ts-ignore
              getOptionValue={it => it.id.toString()}
              value={form.data.roles}
              //@ts-ignore
              onChange={(value) => form.setData('roles', value.concat())}
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
            {form.errors.roles && (<p className='text-xs text-red-500 font-thin'>{form.errors.roles}</p>)}
          </div>
          <div className="flex flex-col gap-1 font-semibold mb-3">
            <label>Current Password</label>
            <InputText value={form.data.current_password} onChange={(e) => form.setData('current_password', e.target.value)} type='password' placeholder='Current Password' />
            {form.errors.current_password && (<p className='text-xs text-red-500 font-thin'>{form.errors.current_password}</p>)}
          </div>
          <div className="flex flex-col gap-1 font-semibold mb-3">
            <label>Password</label>
            <InputText value={form.data.password} onChange={(e) => form.setData('password', e.target.value)} type='password' placeholder='Password' className={(form.data.confirm_password && !isPasswordMatched) ? "border-red-500 focus:ring-1 focus:border-red-500 focus:ring-red-500 focus:outline-none" : ""} required={form.data.current_password ? true : false} />
            {form.errors.password && (<p className='text-xs text-red-500 font-thin'>{form.errors.password}</p>)}
          </div>
          <div className="flex flex-col gap-1 font-semibold mb-3">
            <label>Confirm Password</label>
            <InputText value={form.data.confirm_password} onChange={(e) => form.setData('confirm_password', e.target.value)} type='password' placeholder='Confirm Password' className={(form.data.confirm_password && !isPasswordMatched) ? "border-red-500 focus:ring-1 focus:border-red-500 focus:ring-red-500 focus:outline-none" : ""} required={form.data.current_password ? true : false} />
            {form.errors.confirm_password && (<p className='text-xs text-red-500 font-thin'>{form.errors.confirm_password}</p>)}
          </div>
          <div className="flex flex-col text-center">
            <Button type='submit' disabled={!canSubmit || form.processing}>{form.processing ? (
              <div className="flex flex-row items-center">
                <Loading />
                <div className='-ml-1 text-primary'>{"."}</div>
              </div>) :
              "Submit"}
            </Button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
}

export default Profile