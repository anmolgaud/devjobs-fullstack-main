import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaCircle } from 'react-icons/fa';
import list from '../data.json';
const Company = () => {
  let {id} = useParams();
  const companyObj = list.filter((item) => item.id === Number(id))[0];
  const {
    company,
    logo,
    logoBackground,
    position,
    postedAt,
    contract,
    location,
    website,
    apply,
    description,
    requirements,
    role,
  } = companyObj;

  const divStyle = {
    backgroundColor: logoBackground,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <main className=''>

      <section className='mx-64 mt-8 bg-white grid grid-cols-5 rounded-xl'>
        <div style={divStyle} className='col-end-2 flex items-center justify-center p-6 rounded-bl-xl'>
          <img className='w-[50%]' alt='company logo' src={logo} />
        </div>
        <div className='col-start-2 col-end-6 flex justify-between w-full py-8 px-8'>
          <div>
            <h1 className='font-bold text-3xl'>{company}</h1>
            <p className='mt-1 text-gray-400'>{company}.com</p>
          </div>
          <Link to={website}>
            <button className='bg-indigo-100 px-8 py-4 rounded-md text-lg font-semibold text-indigo-600'>Company Site</button>
          </Link>
        </div>
      </section>

      <section className="mx-64 p-8 bg-slate-50 rounded-md mt-8">
        <div className="text-gray-400 flex items-center text-lg">
          <p className="mr-4">{postedAt}</p>
          <FaCircle size={"0.4rem"} />
          <p className="ml-4">{contract}</p>
        </div>

        <div className='flex items-baseline justify-between'>
          <div>
            <p className='text-3xl font-semibold'>{position}</p>
            <p className='text-indigo-500 font-semibold mt-2'>{location}</p>
          </div>
          <Link to={apply}>
            <button className='px-4 py-2 bg-indigo-600 text-white rounded-md font-semibold'>Apply Now</button>
          </Link>
        </div>

        <p className='mt-8 text-lg text-slate-500'>
          {description}
        </p>

        <div className=''>
          <h3 className='my-8 font-semibold text-2xl'>Requirements</h3>
          <p className='text-lg text-slate-500'>{requirements.content}</p>
          <ul className='text-lg text-slate-500 list-disc'>
            {requirements.items.map((item, index) => 
              <li key={index} className='mt-2 ml-4'>{item}</li>
              )}
          </ul>
        </div>

        <div className=''>
          <h3 className='my-8 font-semibold text-2xl'>What You Will Do</h3>
          <p className='text-lg text-slate-500'>{role.content}</p>
          <ol className='text-lg text-slate-500 w-[90%]'>
            {role.items.map((item, index) => {
              return (
                <li key={index} className="flex mt-2">
                  <div className="text-lg font-semibold text-indigo-500 mr-4">{index + 1}</div>
                  <p className="text-slate-500 text-lg text-justify">{item}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>
      
      <section className='w-full bg-white mt-16'>
        <div className='py-6 mx-64 flex items-center justify-between'>
            <div>
              <p className='text-2xl font-semibold'>{position}</p>
              <p className='text-gray-400 font-semibold'>{company}</p>
            </div>
            <Link to={apply}>
              <button className='px-4 py-2 bg-indigo-600 text-white rounded-md font-semibold'>Apply Now</button>
            </Link>
          </div>
      </section>
    </main>
  );
}

export default Company