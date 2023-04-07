import axios from "axios";
import React, { useContext } from "react";
import { createContext, useEffect, useState } from "react";

const ApiContext = createContext();

export const useApiContext = () => useContext(ApiContext);

function ApiProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("Istanbul");
  const [alert, setAlert] = useState(false);
  const [error, setError] = useState(null);

  // you can change &lang parameter for your language
  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${searchQuery}&dt=2023-05-04&lang=tr&aqi=yes`;

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
  return (
    <ApiContext.Provider
      value={{
        data,
        loading,
        searchQuery,
        setSearchQuery,
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
