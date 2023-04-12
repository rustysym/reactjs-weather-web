import React, { useState, useEffect } from "react";
import { useApiContext } from "../utils/ApiContext";

function WeatherStatus() {
  const { data } = useApiContext();

  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 500);
  }, []);

  
  const winDir = data.current.wind_dir;

  const winDirHandle = (windir) => {
    
    switch (windir) {
      case 'N':
        return "ri-arrow-up-s-line";
      case 'S':
        return "ri-arrow-down-s-line";
      case 'SSE':
      case 'SE':
        return "ri-arrow-right-down-line";
      case 'SSW':
      case 'SW':
      case 'WSW':
        return "ri-arrow-left-down-line";
      case 'NNW':
      case 'NW':
      case 'WNW':
        return "ri-arrow-left-up-line";
      case 'NE':
      case 'NNE':
        return "ri-arrow-right-up-line";
      case 'W':
        return "ri-arrow-left-s-line";
      case 'E':
        return "ri-arrow-right-s-line";
      default:
        return [];
    }
  };

  return (
    <div>
      <div className="mt-12">
        <div className="flex flex-col ml-10">
          <img
            src={`${data.current.condition.icon}`}
            style={{ height: 50, width: 50 }}
          ></img>
          <div className="flex flex-row ml-4">
            <h1 className=" text-9xl text-gray-200">
              {Math.floor(data.current.temp_c)}
            </h1>
            <span className="text-2xl text-gray-200">°C</span>
          </div>
          <div className="ml-6">
            <h1 className="text-2xl text-gray-200">
              {data.location.name}/{data.location.country}
            </h1>
            <h1 className="text-xl text-gray-300">
              {data.current.condition.text}
            </h1>
            <h1 className="text-gray-400">
              Son Güncelleme {data.current.last_updated}
            </h1>
            <div className="mt-2">
            <span className="text-xl text-gray-200 text-center">
                {dateState.toLocaleDateString("tr-TR", {
                  dateStyle: "medium",
                })}
              </span>
            </div>
            <div className="flex flex-row divide-x border-gray-200 space-x-6 mt-2">
              <span className="text-xl text-gray-200 text-center">
                {dateState.toLocaleDateString("tr-TR", {
                  weekday: "long",
                })}
              </span>
              <span className="text-xl text-gray-200 text-center pl-6">
                {dateState.toLocaleTimeString("tr-TR", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 divide-x divide-gray-200 w-auto mt-24">
          <div className="flex flex-row justify-center">
            <i className={`${winDirHandle(winDir)} text-gray-200 text-xl mr-2`}>
              <span className="font-[Inter] ml-2">Rüzgar</span>
            </i>
            <h1 className="text-gray-200 text-xl">
              {data.current.wind_kph} km/h
            </h1>
            <h1 className="text-gray-200 text-xl ml-2">
              {data.current.wind_dir}
            </h1>
          </div>
          <div className="flex justify-center">
            <i className="ri-drop-line text-xl text-gray-200"></i>
            <h1 className="text-xl text-gray-200 ml-2">
              Nem {data.current.humidity} %
            </h1>
          </div>
          <div className="flex justify-center">
            <i className="ri-rainy-line text-xl text-gray-200"></i>
            <h1 className="text-xl text-gray-200 ml-2">
              Yağmur {data.current.precip_mm} mm
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherStatus;
