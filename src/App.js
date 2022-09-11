import './App.css';
import React from 'react';
import Sidebar from './components/Sidebar.js'
import Nonogram from './components/Nonogram.js'
import TicTacToe from './components/TicTacToe';

function App() {
  return (
    <div id=''>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='container-fluid'>
          <h1 className='navbar-brand'>Puzzle Paradise</h1>
        </div>
      </nav>
      <Sidebar />
      <Nonogram />
    </div>
  );
}



export default App;
