import React from 'react'
import { useApiContext } from './ApiContext'

const Search = () => {
  const{setSearchQuery,fetchData,error} = useApiContext();

  const handleApi = (e) =>{
    if(e.key === 'Enter'){
     fetchData();
    }
  }
  const handleQuery = (e) =>{
    setSearchQuery(e);
  }
  const handleButton = (e) =>{
    if(e){
    fetchData();
    }
  }
  return (
    <div className="mt-10 mb-12 flex align-center">
            <a className='self-center'>
              <i className="ri-map-pin-2-line ri-xl text-white mr-8 ml-20"></i>
            </a>
            <input
              className="bg-transparent focus:outline-0 focus:border-b border-white text-white placeholder-white font-[Inter] text-2xl"
              placeholder={"Istanbul,Türkiye"}
              onChange={e=> handleQuery(e.target.value)}
              onKeyDown={e => handleApi(e)}
            ></input>
            <button onClick={e=> handleButton(e.target)}><a className="flex justify-center h-[59px] w-[58px] backdrop-blur-lg rounded-xl drop-shadow-lg ml-12 mr-8">
              <i className="ri-search-line ri-xl text-white  self-center "></i>
            </a>
            </button>
          </div>
  )
}

export default Search