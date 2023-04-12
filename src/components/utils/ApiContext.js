import axios from "axios";
import React, { useContext } from "react";
import { createContext, useEffect, useState } from "react";

const ApiContext = createContext();

export const useApiContext = () => useContext(ApiContext);

function ApiProvider({ children }) {
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("Istanbul");
  const [searchText, setSearchText] = useState("");
  const [alert, setAlert] = useState(false);
  const [error, setError] = useState(null);

  // you can change &lang parameter for your language
  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q="${searchQuery}"&dt=2023-05-04&lang=tr&aqi=yes`;
  const searchApiUrl = `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q="${searchText}"`;

  const fetchData = () => {
    const options = {
      method: "GET",
      url: apiUrl,
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .request(options)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setAlert(true);
        setError(err);
        console.clear();
      });
  };

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 1000);
  }, []);

  const fetchSearch = async () => {
    try {
      const res = await axios.get(searchApiUrl);
      setSearchData(res.data);
    } catch (err) {
      setAlert(true);
      setError(err);
      console.clear();
    }
  };

  useEffect(() => {
    fetchSearch();
  }, [searchApiUrl]);

  return (
    <ApiContext.Provider
      value={{
        data,
        loading,
        searchQuery,
        setSearchQuery,
        searchData,
        setSearchData,
        setSearchText,
        searchText,
        fetchData,
        alert,
        setAlert,
        error,
        setError,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
}

export default ApiProvider;
