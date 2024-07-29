import React from 'react'
import Header from './Components/Sections/Header';
import Herosection from './Components/Sections/Herosection';
import Showgrounds from './Components/Sections/Showgrounds';
//redux
import { Provider } from 'react-redux';
import { store } from './Store';
//css
import './App.css';
const App = () => {
  return (
    <>
      <Provider store={store}>
          <Header/>
          <Herosection/>
          <Showgrounds/>
      </Provider>
    </>
  )
}

export default App