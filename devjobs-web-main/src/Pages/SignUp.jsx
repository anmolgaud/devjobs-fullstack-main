import React from "react";
import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai';
import { useState } from "react";
import {useForm} from 'react-hook-form';
import { Link } from "react-router-dom";

const SignUp = () => {
  const [visible, setVisible] = useState(false);
    const {register, handleSubmit, watch, clearErrors, formState:{errors}} = useForm();
    const handleVisible = () => {
        setVisible(!visible);
    }

    const onSubmit = (data) => console.log(data);

  return (
    <main className="mx-64">
      <section className="mx-64 mt-16 bg-white rounded-md shadow-lg">
      <div className="py-4 text-lg font-poppins rounded-t-md bg-indigo-500 flex items-center justify-center">
        <h1 className="text-slate-50 text-2xl font-semibold">Sign Up</h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="p-8 flex flex-col items-center justify-center">
        <div className="w-full grid grid-cols-2 gap-2">
        <div>
        <div className="mt-3 w-full px-4 border-2 border-indigo-300 rounded-md">
        <input
          className="w-full h-10 max-h-12 rounded-sm outline-none "
          name="firstname"
          type="text"
          placeholder="First Name"
          {...register("firstname", {required : true})}
        />
        </div>
        {errors.firstname && <p className="text-xs pl-4 text-red-500 self-start" >Required!</p>}
        </div>

        <div>
        <div className="mt-3 w-full px-4 border-2 border-indigo-300 rounded-md">
        <input
          className="w-full h-10 max-h-12 rounded-sm outline-none "
          name="lastname"
          type="text"
          placeholder="Last Name"
          {...register("lastname", {required : true})}
        />
        </div>
        {errors.lastname && <p className="text-xs pl-4 text-red-500 self-start" >Required!</p>}
        </div>

        </div>
        <div className="mt-3 w-full px-4 border-2 border-indigo-300 rounded-md">
        <input
          className="w-full h-10 max-h-12 rounded-sm outline-none "
          name="email"
          type="email"
          placeholder="Email"
          {...register("email", {required : true, pattern : /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        })}
        />
        </div>
        {errors.email && <p className="text-xs pl-4 text-red-500 self-start">Invalid email</p>}
        
        <div className="mt-3 flex items-center w-full px-4 border-2 border-indigo-300 rounded-md">
        <input
          className="w-full h-10 max-h-12 rounded-sm outline-none"
          name="password"
          type={visible ? 'text' : 'password'}
          placeholder="Password"
          {...register("password", {required: true, minLength : 8})}
        />
        <AiFillEye className={visible ? 'block' : 'hidden'}  onClick={handleVisible} size={'1.7rem'}/>
        <AiFillEyeInvisible className={visible ? 'hidden' : 'block'} onClick={handleVisible} size={'1.7rem'}/>
        </div>
        {errors.password && <p className="text-xs pl-4 text-red-500 self-start">Password length can't be smaller than 8</p>}
        
        <div className="self-start mt-3 flex items-center">
          <input {...register('policy', {required:true})} 
          className="h-4 w-4 border-[0.125rem] border-solid border-neutral-300"
          id='policy' type="checkbox" name="policy" value='accepted' />
          <label className="ml-2 text-sm" htmlFor='policy'>I agree to devjobs Privacy Policy</label>
        </div>
        {errors.policy && <p className=" text-xs pl-6 text-red-500 self-start">Please accept the policy!</p>}

        <button
          className="w-full mt-8 rounded-lg py-2 text-center text-xl text-white font-semibold bg-indigo-500"
          type="submit"
        >
          Sign Up
        </button>
        
      </form>
      <div className="w-full px-8 pb-4 flex justify-center">
        <span>Already a member?</span>
        <Link className="ml-4 text-indigo-500" to={'/login'}>Login</Link>
      </div>
      </section>
    </main>
  )
}

export default SignUp