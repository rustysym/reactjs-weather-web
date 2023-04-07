import React from 'react'

const FutureCards = ()=> {
  return (
    <div className='flex flex-col'>
        <div>
        <div className="bg-cover grid grid-cols-7 gap-14 p-20 text-center">
            <div className="w-24 h-48 bg-white bg-opacity-20 rounded-lg border border-gray-300 flex flex-col space-y-9">
              <h1 className="text-gray-100 text-center mt-2">24°C</h1>
              <i className='ri-cloudy-fill text-4xl text-gray-100'></i>
              <span className="text-white">Çarşamba</span>
            </div>
            <div className="w-24 h-48 bg-white bg-opacity-20 rounded-lg border border-gray-300 flex flex-col space-y-9">
              <h1 className="text-gray-100 text-center mt-2">24°C</h1>
              <i className='ri-thunderstorms-fill text-4xl text-gray-100'></i>
              <span className="text-white">Perşembe</span>
              
            </div>
            <div className="w-24 h-48 bg-white bg-opacity-20 rounded-lg border border-gray-300 flex flex-col space-y-9">
              <h1 className="text-gray-100 text-center mt-2">24°C</h1>
              <i className='ri-sun-fill text-4xl text-gray-100'></i>
              <span className="text-white">Cuma</span>
            </div>
            <div className="w-24 h-48 bg-white bg-opacity-20 rounded-lg border border-gray-300 flex flex-col space-y-9">
              <h1 className="text-gray-100 text-center mt-2">24°C</h1>
              <i className='ri-sun-fill text-4xl text-gray-100'></i>
              <span className="text-white">Cumartesi</span>
            </div>
            <div className="w-24 h-48 bg-white bg-opacity-20 rounded-lg border border-gray-300 flex flex-col space-y-9">
              <h1 className="text-gray-100 text-center mt-2">24°C</h1>
              <i className='ri-meteor-fill text-4xl text-gray-100'></i>
              <span className="text-white">Pazar</span>
            </div>
            <div className="w-24 h-48 bg-white bg-opacity-20 rounded-lg border border-gray-300 flex flex-col space-y-9">
              <h1 className="text-gray-100 text-center mt-2">24°C</h1>
              <i className='ri-typhoon-fill text-4xl text-gray-100'></i>
              <span className="text-white">Pazartesi</span>
            </div>
            <div className="w-24 h-48 bg-white bg-opacity-20 rounded-lg border border-gray-300 flex flex-col space-y-9">
              <h1 className="text-gray-100 text-center mt-2">24°C</h1>
              <i className='ri-foggy-fill text-4xl text-gray-100'></i>
              <span className="text-white">Salı</span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default FutureCards