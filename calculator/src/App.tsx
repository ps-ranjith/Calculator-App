import React, { useState } from 'react';
import './App.css';
import Display from './components/Display';
import ButtonPanel from './components/ButtonPanel';

const App: React.FC = () => {
  const [input, setInput] = useState('');

  const handleClick = (value: string) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="calculator">
      <Display value={input} />
      <ButtonPanel
        onButtonClick={handleClick}
        onClear={handleClear}
        onCalculate={handleCalculate}
      />
    </div>
  );
};

export default App;
