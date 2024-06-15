// src/App.js
import React, { useState } from 'react';
import './App.css';
import { Wrapper } from './components/Wrapper';
import { Globe } from './components/Globe';


function App() {
  return (
    <div className="App">
      <Wrapper/>
      <Globe/>
    </div>
  );
}

export default App;
