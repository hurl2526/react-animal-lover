import React from 'react';
import Animals from './Animals'
import Header from './Header'
// import Sidebar from './Sidebar'
import './App.css';

const App = () => {
  return (
    <div>
      <hr style={{maringTop:'3em'}}/>
      <Header/>
      <Animals />
      {/* <Sidebar/> */}
    </div>
  )
}

export default App;