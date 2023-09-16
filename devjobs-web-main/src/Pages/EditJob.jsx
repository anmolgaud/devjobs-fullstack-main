import React from 'react'
import axios from 'axios';
import {useForm} from 'react-hook-form';

const EditJob = () => {
    const {register,handleSubmit, formState : {errors}} = useForm();

    const onSubmit = async (data) => {
      const formData = new FormData();
      formData.append("file", data.file[0]);

      const res = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      }).then((res) => res.json());
      alert(JSON.stringify(`${res.message}, status: ${res.status}`));
    };
  return (
    <section className="mx-64 mt-4 mb-8 bg-white rounded-md p-8">
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-8 grid grid-cols-6 ">
          <div className="col-span-3">
            <label className="font-medium leading-6" htmlFor="company">
              Company
            </label>
            <div className="mt-2 pl-2 flex rounded-md ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
              <input
                className="block outline-none flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0"
                {...register("company", { required: true })}
                type="text"
                placeholder="Google"
              />
            </div>
            {errors.company && (
              <p className="text-xs text-red-500">Required!</p>
            )}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-6 ">
          <div className="col-span-3">
            <label className="font-medium leading-6" htmlFor="company">
              Logo
            </label>
            <div className="mt-2 pl-2 flex rounded-md ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
              <input
                className="block outline-none flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0"
                {...register("file")}
                type="file"
              />
            </div>
          </div>
        </div>

        <button
          className="mt-8 w-full px-6 py-2 text-lg bg-indigo-500 rounded-md font-semibold text-white"
          type="submit"
        >
          Submit
        </button>
        </form>
    </section>
  )
}

export default EditJob