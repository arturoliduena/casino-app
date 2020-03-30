import React, { useState } from 'react';
import Countries from './countries';
import Machine from './slotMachine'
import './App.css';

function App() {
  const [ tabActive, setTabActive ] = useState(1)
  const color = '#ccc';
  const handleOnClick = (tabNumber: number) => {
    setTabActive(tabNumber);
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="tab">
          <button className="tablinks" onClick={() => handleOnClick(1)} style={{backgroundColor: tabActive == 1 ? color : ''}}>Countries</button>
          <button className="tablinks" onClick={() => handleOnClick(2)} style={{backgroundColor: tabActive == 2 ? color : ''}}>Slot Machine</button>
        </div>
        <p>
          Arturo Liduena.
        </p>

      </header>
      {
        tabActive === 1 && <Countries />
      }
       {
        tabActive === 2 && <Machine />
      }
      
      <footer>
        <a
          className="App-link"
          href="https://github.com/arturoliduena/casino-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub repository
        </a>
      </footer>
    </div>
  );
}

export default App;
