import React from 'react';
import './ButtonPanel.css';

type ButtonPanelProps = {
  onButtonClick: (value: string) => void;
  onClear: () => void;
  onCalculate: () => void;
};

const ButtonPanel: React.FC<ButtonPanelProps> = ({ onButtonClick, onClear, onCalculate }) => {
  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+'
  ];

  return (
    <div className="button-panel">
      {buttons.map((btn) => (
        <button
          key={btn}
          onClick={() => (btn === '=' ? onCalculate() : onButtonClick(btn))}
        >
          {btn}
        </button>
      ))}
      <button onClick={onClear}>C</button>
    </div>
  );
};

export default ButtonPanel;