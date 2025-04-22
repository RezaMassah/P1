import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');

  const change_the_content = (event) => {
    setInputValue(event.target.value);
  }
  return (
    <div>
      <p>
        Please write a value here!
      </p>
      <input 
      type='text'
      value = {inputValue}
      onChange={change_the_content}
      />
      <p>
      Length: {inputValue.length}
      </p>
    </div>
  );
}

export default App; 
