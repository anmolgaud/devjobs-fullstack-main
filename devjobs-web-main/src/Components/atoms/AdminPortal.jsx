import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminPortal = () => {
  return (
    <main>
        <section className='mx-64 p-8 mt-8 bg-white rounded-xl'>
            <h1 className='text-3xl font-semibold text-center text-indigo-500'>Admin Portal</h1>
        </section>
        <Outlet />
    </main>
  )
}

export default AdminPortal