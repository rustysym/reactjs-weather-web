import React from "react";
import ProgressBar from "./ProgressBar";
import { useApiContext } from "./ApiContext";

const AirQuality = () => {
  const { data } = useApiContext();
  const epaIndex = data.current.air_quality["us-epa-index"];
  const uvIndex = data.current.uv;

  const epaIndexHandling = (epa) => {
    return {
      1: "İyi",
      2: "Orta",
      3: "Hassaslar için sağlıksız",
      4: "Sağlıksız",
      5: "Çok Sağlıksız",
      6: "Riskli",
    }[epa];
  };
  const uvIndexHandling = (uv) => {
    return {
      1: "Düşük",
      2: "Düşük",
      3: "Orta",
      4: "Orta",
      5: "Yüksek",
      6: "Yüksek",
      7: "Çok Yüksek",
      8: "Çok Yüksek",
      9: "Aşırı Yüksek",
      10: "Aşırı Yüksek",
    }[uv];
  };
  return (
    <div>
      <div className="bg-cover grid grid-cols-3 gap-4 p-20 text-center mt-16">
        <div className="w-24 h-56 bg-white bg-opacity-40 rounded-full flex flex-col justify-center ">
          <h1 className="text-gray-100 w-24">Karbon Monoksit (μg/m3)</h1>
          <span className="text-white mt-12">
            {Math.floor(data.current.air_quality.co)}
          </span>
        </div>
        <div className="w-24 h-56 bg-white bg-opacity-40 rounded-full flex flex-col justify-center relative bottom-6 -z-10">
          <h1 className="text-gray-100 w-24 relative bottom-6">Ozon <br/>(μg/m3)</h1>
          <span className="text-white mt-12">
            {Math.floor(data.current.air_quality.o3)}
          </span>
        </div>
        <div className="w-24 h-56 bg-white bg-opacity-40 rounded-full flex flex-col justify-center ">
          <h1 className="text-gray-100 w-24">Azot dioksit (μg/m3)</h1>
          <span className="text-white mt-12">
            {Math.floor(data.current.air_quality.no2)}
          </span>
        </div>
      </div>
      <div>
        <i className="ri-information-fill ri-xl text-gray-200 absolute left-0 right-0 text-end mr-10"></i>
        <div className="border-t-2 border-gray-300 ml-24 mr-24"></div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col space-x-4">
          <div className="flex flex-row justify-between mt-10 mr-8 ml-8">
            <h1 className="text-2xl text-gray-100">Hava Kalitesi</h1>
            <h1 className="text-2xl text-gray-100">UV İndeksi</h1>
          </div>
          <div className="flex flex-row space-x-8">
            <div className="flex flex-col">
              <ProgressBar value={epaIndex} />
              <div className="text-center flex flex-col relative bottom-28">
                <span className="text-center text-gray-200">{epaIndex}/6</span>
                <span className="text-center text-gray-200">
                  {epaIndexHandling(epaIndex)}
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <ProgressBar value={uvIndex} max={10} />
              <div className="text-center flex flex-col relative bottom-28">
                <span className="text-center text-gray-200">{uvIndex}/10</span>
                <span className="text-center text-gray-200">
                  {uvIndexHandling(uvIndex)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirQuality;
