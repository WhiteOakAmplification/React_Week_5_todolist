import { useState } from 'react';

import logo from './logo.svg';
import './App.css';

let counter = 0;

const SecondWelcomeMessage = () => {
  return <p>Second Welcome Message! 2</p>
}

const WelcomeMessage = (props) => {
  return <p>Welcome { props.name}!</p>
}



function App() {

  const [ count, setCount ] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <WelcomeMessage name={'Blake'}/>
        {SecondWelcomeMessage()}
        <p>{count}</p>
        <button onClick = { ()=> setCount(count + 1) }>Click Me!</button>
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
