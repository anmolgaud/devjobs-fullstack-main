import React from 'react'
import {useForm, useFieldArray,} from 'react-hook-form';

const AddJob = () => {
  const {register, handleSubmit, control, formState:{errors}} = useForm({
    defaultValues: {
      company: '',
      postion: '',
      location: '',
      website: '',
      apply: '',
      description : '',
      requirements : {
        content : '',
        items : [],
      }
    }
  });

  const {fields : reqFields, append : reqAppend, remove:reqRemove} = useFieldArray({control, name: "requirements.items"});
  const {fields : roleFields, append : roleAppend, remove: roleRemove} = useFieldArray({control, name:"role.items"});

  const onSubmit = (data) => console.log(data);
  
  return (
    <section className="mx-64 mt-4 mb-8 bg-white rounded-md p-8">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-4">
            <h2 className="text-xl font-semibold leading-7 text-gray-900">
              Job Form
            </h2>
          </div>
        </div>
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

        <div className="mt-2 grid grid-cols-6">
          <div className="col-span-2">
            <label className="font-medium leading-6" htmlFor="position">
              Position
            </label>
            <div className="mt-2 p-2 flex rounded-md ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
              <select
                className="block outline-none flex-1"
                {...register("position", { required: true })}
                id="position"
              >
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Remote">Remote</option>
              </select>
            </div>
            {errors.position && (
              <p className="text-xs text-red-500">Required!</p>
            )}
          </div>
        </div>

        <div className="mt-2 grid grid-cols-6">
          <div className="col-span-2">
            <label className="font-medium leading-6" htmlFor="location">
              Location
            </label>
            <div className="mt-2 pl-2 flex rounded-md ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
              <input
                className="block outline-none flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0"
                {...register("location", { required: true })}
                type="text"
                placeholder="India"
              />
            </div>
            {errors.location && (
              <p className="text-xs text-red-500">Required!</p>
            )}
          </div>
        </div>

        <div className="mt-2 grid grid-cols-6">
          <div className="col-span-3">
            <label className="font-medium leading-6" htmlFor="location">
              Website Link
            </label>
            <div className="mt-2 pl-2 flex rounded-md ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
              <input
                className="block outline-none flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0"
                {...register("website", { required: true })}
                type="text"
                placeholder="www.example.com"
              />
            </div>
            {errors.website && (
              <p className="text-xs text-red-500">Required!</p>
            )}
          </div>
        </div>

        <div className="mt-2 grid grid-cols-6">
          <div className="col-span-3">
            <label className="font-medium leading-6" htmlFor="location">
              Apply Link
            </label>
            <div className="mt-2 pl-2 flex rounded-md ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
              <input
                className="block outline-none flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0"
                {...register("apply", { required: true })}
                type="text"
                placeholder="www.example.com/apply"
              />
            </div>
            {errors.apply && <p className="text-xs text-red-500">Required!</p>}
          </div>
        </div>

        <div className="mt-2 grid grid-cols-6">
          <div className="col-span-4">
            <label className="font-medium leading-6" htmlFor="location">
              Description
            </label>
            <div className="mt-2 pl-2 flex rounded-md ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
              <textarea
                className="block outline-none flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0"
                {...register("description", { required: true })}
                type="text"
                rows={4}
                placeholder=""
              />
            </div>
            {errors.apply && <p className="text-xs text-red-500">Required!</p>}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-6">
          <div className="col-span-4">
            <label className="font-medium leading-6" htmlFor="location">
              Requirements
            </label>
            <div className="mt-2 pl-2 flex rounded-md ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
              <textarea
                className="block outline-none flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0"
                {...register("requirements.content", { required: true })}
                type="text"
                rows={2}
                placeholder=""
              />
            </div>
            {errors.requirements && (
              <p className="text-xs text-red-500">Required!</p>
            )}
          </div>
        </div>

        <div className="mt-2 grid grid-cols-8">
          <div className="col-span-7">
            <label className="font-medium leading-6" htmlFor="location">
              Requirements List <span className='italic font-light'>(optional)</span>
            </label>
            <ul className=''>
                {reqFields.map((item, index) => (
                  <li className='my-2 flex justify-between' key={item.id}>
                    <div className="w-full pl-2 flex rounded-md ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                    <input className='outline-none flex-1 bg-transparent' {...register(`requirements.items.${index}.value`)} />
                    </div>
                    <button className='ml-4 px-4 py-2 bg-red-300 rounded-md text-gray-900 font-semibold' type="button" onClick={() => reqRemove(index)}>
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            <button
              type="button"
              className="mt-4 px-6 py-2 bg-blue-300 rounded-md font-semibold"
              onClick={() => reqAppend({value : ""})}
            >
              Add
            </button>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-6">
          <div className="col-span-4">
            <label className="font-medium leading-6" htmlFor="location">
              Role
            </label>
            <div className="mt-2 pl-2 flex rounded-md ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
              <textarea
                className="block outline-none flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0"
                {...register("role.content", { required: true })}
                type="text"
                rows={2}
                placeholder=""
              />
            </div>
            {errors.role && (
              <p className="text-xs text-red-500">Required!</p>
            )}
          </div>
        </div>

        <div className="mt-2 grid grid-cols-8">
          <div className="col-span-7">
            <label className="font-medium leading-6" htmlFor="location">
              Roles List <span className='italic font-light'>(optional)</span>
            </label>
            <ul className=''>
                {roleFields.map((item, index) => (
                  <li className='my-2 flex justify-between' key={item.id}>
                    <div className="w-full pl-2 flex rounded-md ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                    <input className='outline-none flex-1 bg-transparent' {...register(`role.items.${index}.value`)} />
                    </div>
                    <button className='ml-4 px-4 py-2 bg-red-300 rounded-md text-gray-900 font-semibold' type="button" onClick={() => roleRemove(index)}>
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            <button
              type="button"
              className="mt-4 px-6 py-2 bg-blue-300 rounded-md font-semibold"
              onClick={() => roleAppend({value : ""})}
            >
              Add
            </button>
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
  );
}

export default AddJob