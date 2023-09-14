import React, { useState } from 'react';
import { Outlet, useNavigate, Link } from 'react-router-dom';
import {AiFillFileAdd} from 'react-icons/ai';
import {RiFileEditFill} from 'react-icons/ri';

const AdminHome = (props) => {
    const navigate = useNavigate();
    const [isAuthorized, setIsAuthorized] = useState(true);
    if(!isAuthorized)
        navigate('/login');

    const handlelogout = () => {
        setIsAuthorized(false);
    }

  return (
    <section className='mx-64 shadow-md mt-16 grid grid-cols-2 gap-x-8'>
        <div className='bg-gray-700 px-2  py-12 rounded-md grid place-items-center'>
            <AiFillFileAdd size={'5rem'} color='#6366f1' />
            <p className='my-4 text-lg text-gray-200'>Visit to add new job</p>
            <Link className='px-4 py-2 bg-indigo-500 rounded-md text-white font-semibold' to='/admin/addJob'>Add Job</Link>
        </div>
        <div className='bg-gray-700 px-2  py-12 rounded-md grid place-items-center'>
            <RiFileEditFill size={'5rem'} color='#f43f5e' />
            <p className='my-4 text-lg text-gray-200'>Visit to edit existing job</p>
            <Link className='px-4 py-2 bg-rose-500 rounded-md text-white font-semibold' to='/admin/editJob'>Edit Job</Link>
        </div>
    </section>
  )
}

export default AdminHome