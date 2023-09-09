import React from 'react';
import {FaCircle} from 'react-icons/fa';
import {Link} from 'react-router-dom';

const CompanyCard = (props) => {
    const {
      id,
      company,
      position,
      postedAt,
      contract,
      location,
    } = props;

  return (
      <Link to={`company/${id}`}>
        <div className="bg-slate-50 rounded-lg relative">
            <div className="p-6 font-openSans relative">
            <div className="text-gray-400 flex items-center text-lg mt-6">
                <p className='mr-2'>{postedAt}</p>
                <FaCircle size={'0.5rem'} />
                <p className='ml-2'>{contract}</p>
            </div>
            <p className="font-bold text-xl my-2">{position}</p>
            <p className="text-slate-400 text-lg ">company : <span className='font-semibold text-slate-800'>{company}</span></p>
            <p className="text-indigo-600 font-poppins font-semibold text-sm mt-8">
                {location}
            </p>
            </div>
        </div>
      </Link>
  );
}

export default CompanyCard