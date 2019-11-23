import React from 'react';
import { Main } from "./components/Main"
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
       <Main />  
    </>
    
  );
}

export default App;
