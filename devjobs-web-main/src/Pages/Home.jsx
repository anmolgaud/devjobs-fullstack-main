import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CompanyCard from '../Components/atoms/CompanyCard'
import Search from '../Components/molecules/Search';
import companyList from '../data.json';
const Home = () => {
  const [query, setQuery] = useState("");
  const [list, setList] = useState([]);
  const fetchList = async () => {
    try {
      const res = await axios.get('http://localhost:3000/jobs/getAllJobs');
      setList(res.data);
    } catch (error) {
      console.log(res);
    }
  }

  useEffect(() => {
    fetchList();
  }, []);
  
  return (
    <main className="mx-32 relative">
      <div className="w-full mt-8">
        <Search setQuery={setQuery}/>
      </div>
      <div className="mt-8">
        <ul className="grid grid-cols-3 gap-8">
          {list.map((item) => (
              <li className="relative" key={item._id}>
                <CompanyCard {...item} />
              </li>
            ))}
        </ul>
        <div className="mt-16 mb-24 flex items-center justify-center">
          <button className="bg-indigo-600 px-4 py-2 rounded-md font-semibold text-slate-50">
            Load More
          </button>
        </div>
      </div>
    </main>
  );
}

export default Home