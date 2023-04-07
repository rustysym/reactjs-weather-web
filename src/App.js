import React from 'react'
import './App.css';
import MainScreen from './components/screens/MainScreen';
import ApiProvider from './components/utils/ApiContext';


const App=() =>{
  
  return(
    <ApiProvider>
      <MainScreen/>
    </ApiProvider>
  )
  
}

export default App;
