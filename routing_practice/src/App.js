import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react';
import Home from './Components/Home';
import Combo from './Components/Combo';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/:word" element={<Combo/>}/>
          <Route path="/:word" element={<Combo/>}/>
          <Route path="/:word/:color/:colorBack" element={<Combo/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
