import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useLocalStorage } from './hooks/useLocalStorage';
import RootView from './components/RootView';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Invoice from './components/Invoice';
import Employees from './components/Employees';
import 'primereact/resources/themes/saga-blue/theme.css';  // Theme
import 'primereact/resources/primereact.min.css';           // Core CSS
import 'primeicons/primeicons.css';
import '@coreui/coreui/dist/css/coreui.min.css';

function App() {

  const [icon_username, setUsername] = useLocalStorage('');



  return (
    <Router>
      <section className='sepio'>
        <div className="App">
          <Routes>

             <Route path = '/' element = {<SignUp/>}/>
            <Route path = '/login' element = {<Login setUsername={setUsername}/>}/>
            <Route path='/hrsystem' element={<RootView icon_username = {icon_username} />} />
            <Route path = '/invoice' element = {<Invoice/>}/>
            <Route path = '/employees' element = {<Employees icon_username = {icon_username} />}/>
 

          </Routes>
        </div>
      </section>
    </Router>
  );
}

export default App;