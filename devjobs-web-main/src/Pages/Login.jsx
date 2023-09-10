import React from "react";
import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai';
import { useState } from "react";
import {useForm} from 'react-hook-form';
import { Link } from "react-router-dom";

const Login = () => {
    const [visible, setVisible] = useState(false);
    const {register, handleSubmit, watch, clearErrors, formState:{errors}} = useForm();
    const handleVisible = () => {
        setVisible(!visible);
    }

    const onSubmit = (data) => console.log(data);

  return (
    <main className="mx-64">
      <section className="mx-64 bg-white rounded-md shadow-lg">
      <div className="py-4 text-lg font-poppins mt-32 rounded-t-md bg-indigo-500 flex items-center justify-center">
        <h1 className="text-slate-50 text-2xl font-semibold">Welcome Back</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="p-8 flex flex-col items-center justify-center">
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
        {}
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
        <button
          className="w-full mt-8 rounded-lg py-2 text-center text-xl text-white font-semibold bg-indigo-500"
          type="submit"
        >
          Login
        </button>
      </form>
      <div className="w-full px-8 pb-4 flex justify-center">
        <span>Not a member?</span>
        <Link className="ml-4 text-indigo-500" to={'/signup'}>Sign Up</Link>
      </div>
      </section>
    </main>
  );
};

export default Login;
