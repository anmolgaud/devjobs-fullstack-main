import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CompanyCard from '../Components/atoms/CompanyCard'
import Search from '../Components/molecules/Search';
import MoonLoader from 'react-spinners/MoonLoader';
const Home = () => {
  const [query, setQuery] = useState("");
  const [list, setList] = useState([]);
  const [fetched, setFetched] = useState(false);
  const fetchList = async () => {
    try {
      const res = await axios.get('http://localhost:3000/jobs/getAllJobs');
      setList(res.data);
      setFetched(true);
    } catch (error) {
      console.log(res);
    }
  }

  useEffect(() => {
    fetchList();
  }, [fetched,]);

  if(!fetched){
    return(
      <main className='flex mt-32 items-center justify-center'>
        <MoonLoader color='#4338ca' speedMultiplier={0.7}/>
      </main>
    )
  }
  else return (
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