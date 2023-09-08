import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './Pages/Home';
import Company from './Pages/Company';
import SignUp from './Pages/SignUp';
import NotFound from './Pages/NotFound';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path='company/:id' element={<Company />} />
      <Route path='signup' element={<SignUp />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App