import LinkButton from '@/Components/LinkButton';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { User } from '@/types'
import { useMemo } from 'react';
import { useForm, usePage } from '@inertiajs/react';
import { Dialog, DialogContent } from "@mui/material";
import MaterialReactTable, { MRT_ColumnDef } from "material-react-table";
import useModal from '@/Hooks/useModal';
import Loading from '@/Components/Loading';

interface Props {
  users: Array<User>,
}

const Index = ({ users }: Props) => {
  const [modal, dispatch] = useModal();
  const form = useForm();
  const page = usePage();
  const flash = page.props.flash;

  const deleteUserHandler = () => {
    dispatch({ type: "CLOSE", payload: null });
    form.delete(route('user.destroy', modal.id));
  }

  const dataColumns = useMemo(() =>
    [
      {
        accessorKey: 'name',
        header: 'Name',
      },
      {
        accessorKey: 'email',
        header: 'Email',
      },
      {
        accessorKey: 'phone_number',
        header: 'Phone Number',
      },
      {
        //@ts-ignore
        accessorFn: (row) => row.roles.map((role) => role.name).join(', '),
        header: 'Status',
      }
    ] as MRT_ColumnDef<typeof users[0]>[]
    , [users]);

  return (
    <DashboardLayout>
      <Dialog open={modal.open} onClose={() => { dispatch({ type: "CLOSE", payload: null }) }}>
        <DialogContent className='w-80'>
          <h1 className='font-bold text-2xl text-center'>Are you sure want to delete this data?</h1>
          <div className="flex flex-row justify-around items-center mt-4 text-lg">
            <button className='px-4 py-2 text-white rounded-lg font-bold bg-red-500 hover:bg-red-600' onClick={() => deleteUserHandler()
            }>Yes</button>
            <button className='px-4 py-2 text-white rounded-lg font-bold bg-[#137CBD] hover:bg-[#1587ce]' onClick={() => dispatch({ type: "CLOSE", payload: null })}>No</button>
          </div>
        </DialogContent>
      </Dialog>

      <div className="flex flex-row justify-between items-center w-full">
        <div className="flex flex-row items-center gap-2">
          <h1 className='font-bold text-3xl'>Users</h1>
          {form.processing && <Loading color='black' className='w-8' />}
        </div>
        <div className="flex flex-row items-center gap-2">
          {
            //@ts-ignore
            flash.success && <span className="font-bold text-xl text-primary">{flash.success}</span>
          }
          <LinkButton href={route('user.create')} className='font-bold'>Add User</LinkButton>
        </div>
      </div>
      <div className="w-full mt-2 shadow-md">
        <MaterialReactTable
          columns={dataColumns}
          data={users}
          enableColumnFilters
          enableRowActions
          enablePagination
          enableSorting
          enableBottomToolbar
          enableTopToolbar
          enableRowNumbers
          positionActionsColumn='last'
          renderRowActions={({ row }) => (
            <div className='flex gap-2'>
              <LinkButton href={route('user.show', row.original.id)} className='font-bold'>Show</LinkButton>
              {/* {!row.original.roles?.map(role => role.name).join(', ').includes('guest') &&
                <LinkButton href={route('user.edit', row.original.id)} label='Edit' className='bg-orange-400 hover:bg-orange-500' />
              } */}
              <button className='px-4 py-2 text-white rounded-lg font-bold bg-red-500 hover:bg-red-600' onClick={() => dispatch({ type: "OPEN", payload: row.original.id })}>Delete</button>
              {/* {userId !== row.original.id &&
                <button className='px-4 py-2 text-white rounded-lg font-bold bg-red-500 hover:bg-red-600' onClick={() => {
                  setSelectedId(row.original.id)
                  setOpenDelete(true);
                }}>Delete</button>
              } */}
            </div>
          )}
        />
      </div>
    </DashboardLayout>
  )
}

export default Index