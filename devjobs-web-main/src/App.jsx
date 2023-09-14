import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './Pages/Home';
import Company from './Pages/Company';
import Login from './Pages/Login'
import SignUp from './Pages/SignUp';
import NotFound from './Pages/NotFound';
import Navbar from './Components/molecules/Navbar';
//Admin components
import AdminPortal from './Components/atoms/AdminPortal';
import AdminHome from './Pages/AdminHome';
import AddJob from './Pages/AddJob';
import EditJob from './Pages/EditJob';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route index element={<Home />} />
      <Route path='company/:id' element={<Company />} />
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<SignUp />} />
      <Route path='admin' element={<AdminPortal />}>
        <Route path='home' element={<AdminHome />} />
        <Route path='addJob' element={<AddJob />} />
        <Route path='editJob/:id?' element={<EditJob />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App