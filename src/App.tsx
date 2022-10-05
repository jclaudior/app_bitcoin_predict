import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import BitcoinPredict from './pages/BitcoinPredict';

function App() {
  return (
    <div>
      <BrowserRouter>
        <BitcoinPredict />
      </BrowserRouter>

    </div>
  );
}

export default App;
