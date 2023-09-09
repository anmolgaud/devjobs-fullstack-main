import React, { useEffect, useState } from 'react'
import CompanyCard from '../Components/atoms/CompanyCard'
import Search from '../Components/molecules/Search';
import companyList from '../data.json';
const Home = () => {
  const [query, setQuery] = useState('');
  const [list, setList] = useState(companyList);
  useEffect(() =>{
    if(query == '')
      setList(companyList);
    else{
      let temp = [];
    temp = list.filter((item) => {
      return (
        item.company.toLowerCase().includes(query)  ||
        item.position.toLowerCase().includes(query) ||
        item.location.toLowerCase().includes(query) ||
        item.contract.toLowerCase().includes(query)
      );
    })
    setList(temp);
    }
  }, [query,])

  return (
    <main className="mx-32 relative">
      <div className="w-full mt-8">
        <Search setQuery={setQuery}/>
      </div>
      <div className="mt-8">
        <ul className="grid grid-cols-3 gap-8">
          {list.map((item) => (
              <li className="relative" key={item.id}>
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