import React from 'react';
import { Main } from "./components/Main"
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  return (  <>
      <header>
        <h1>Contact List</h1>
        <label>
          <input placeholder="search..." type="search" />
          <span>🔍</span>
        </label>
      </header>
      <main>
         <Main />
      </main>
    </>
    
  );
}

export default App;
