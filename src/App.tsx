import React from 'react';
import logo from './logo.svg';
import {testInterface} from "types";
import './App.css';

function App() {
  const myData: testInterface = {
    data: "Michal Bornikowski"
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>{myData.data}</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
