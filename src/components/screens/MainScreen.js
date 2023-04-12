import React, { Fragment } from "react";
import Search from "../utils/Search";
import WeatherStatus from "./WeatherStatus";
import FutureCards from "../utils/FutureCards";
import AirQuality from "../utils/AirQuality";
import { useApiContext } from "../utils/ApiContext";
import BounceLoader from "../utils/indicator/Indicator";
import { Alert } from "@material-tailwind/react";

const MainScreen = () => {
  const { loading, error, alert, setAlert } = useApiContext();

  return (
    <section className="container">
      {loading ? (
        <BounceLoader />
      ) : (
        <div className="w-screen h-screen flex">
          <div className="w-full ">
            <div className="flex justify-center mt-2">
              <Fragment>
                {error && (
                  <Alert
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    }
                    show={alert}
                    animate={{
                      mount: { y: 0 },
                      unmount: { y: 100 },
                    }}
                    dismissible={{
                      onClose: () => setAlert(false),
                    }}
                    className="max-w-screen-md"
                    color="orange"
                  >
                    {`${error}`}
                  </Alert>
                )}
              </Fragment>
            </div>
            <WeatherStatus />
            <FutureCards />
          </div>
          <div className="w-6/12 h-full bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg border-l border-gray-300 ">
            <Search />

            <AirQuality />
          </div>
        </div>
      )}
    </section>
  );
};

export default MainScreen;
