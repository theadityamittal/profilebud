import React from 'react';
import Cardgrid from './components/Cardgrid/Cardgrid';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Subscription from './components/Subscription/Subscription';
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Cardgrid />
      <Subscription />
    </div>
  );
}

export default App;
