import React from 'react';
import "./App.css"
import { Countvictories } from './components/gameboard';
import Gameboard from './components/gameboard';
import Rules from './components/rules'

function App() {
  return (
    <div className="App">
      <Countvictories/>
      <Gameboard/>
      <Rules/>
    </div>
  );
}

export default App;
