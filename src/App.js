import React from 'react';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import TextForm from './components/form';
import VideoComponent from './components/videoPlayer';

function App() {

  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/video" element={<VideoComponent />}></Route>
      <Route path="/" exact element={<TextForm />}>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
