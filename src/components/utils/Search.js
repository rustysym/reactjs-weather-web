import React, { useState } from "react";
import { useApiContext } from "./ApiContext";

import { Input } from "@material-tailwind/react";

const Search = () => {
  const {
    setSearchQuery,
    fetchData,
    searchData,
    searchText,
    setSearchText,
  } = useApiContext();

  const [isTyping, setIsTyping] = useState(false);

  const handleApi = (e) => {
    if (e.key === "Enter") {
      fetchData();
    }
  };

  const handleQuery = (e) => {
    if (e.length >= 0) {
      setIsTyping(true);
      searchData.filter((val) => {
        const regex = new RegExp(`${e}`, "gi");
        return (
          val.name.match(regex) ||
          val.country.match(regex) ||
          val.region.match(regex)
        );
      });

      setSearchText(e);
      setSearchQuery(e);
    } else {
      setIsTyping(false);
    }
  };
  const onSuggestionHandler = (city, country, region) => {
    setSearchQuery(city + "," + region + "," + country);
    setSearchText(city + "," + region + "," + country);
    setIsTyping(false);
  };
  const handleButton = (e) => {
    if (e) {
      fetchData();
    }
  };

  return (
    <div>
      <div className="mt-10 flex align-center">
        <a className="self-center">
          <i className="ri-map-pin-2-line ri-xl text-white mr-8 ml-20"></i>
        </a>
        <Input
          variant="standard"
          color="indigo"
          className="bg-transparent  border-white text-white placeholder-white font-[Inter] text-xl font-thin"
          placeholder={"Istanbul,Türkiye"}
          onChange={(e) => handleQuery(e.target.value)}
          value={searchText}
          onKeyDown={(e) => handleApi(e)}
          onBlur={() =>
            setTimeout(() => {
              setIsTyping(false);
            }, 100)
          }
        />
        <button onClick={(e) => handleButton(e.target)}>
          <a className="flex justify-center h-[59px] w-[58px] backdrop-blur-lg rounded-xl drop-shadow-lg ml-12 mr-8">
            <i className="ri-search-line ri-xl text-white  self-center "></i>
          </a>
        </button>
      </div>
      {!isTyping ? (
        <div></div>
      ) : (
        <div className="flex flex-col absolute bg-white/20 rounded-lg justify-center left-0 right-0 ml-24 mr-24 backdrop-blur-sm">
          {searchData.map((sug, i) => {
            return (
              <div
                key={i}
                className="flex flex-col text-left hover:backdrop-blur-xl border-b last:border-b-0"
                onClick={() =>
                  onSuggestionHandler(sug.name, sug.country, sug.region)
                }
              >
                <h1 className="text-xl text-gray cursor-pointer pl-8 pr-4">
                  {sug.name + ", " + sug.region + ", " + sug.country}
                </h1>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Search;
