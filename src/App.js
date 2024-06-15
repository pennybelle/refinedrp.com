import { useState } from 'react';
import logo from './images/logo.png';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  const [rubles, setRubles] = useState(0);

  const handleClick = () => {
    setRubles(rubles + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        {/* <img src={logo} className="App-logo" onClick={handleClick} alt="logo" />
        <h2>
          Refined RP Landing Page WIP
        </h2>
        <p>
            Rubles: {rubles}
        </p>
        <a
          className="App-link"
          href="https://discord.gg/refinedrp"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join our Discord
        </a> */}
      </header>
    </div>
  );
}

export default App;
