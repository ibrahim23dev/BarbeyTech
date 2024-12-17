import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Common/MainLayout';
//import Home from './pages/Home';
//import About from './pages/About';
//import Contact from './pages/Contact';
//import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout Wrapper */}
        <Route path="/" element={<Layout />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
