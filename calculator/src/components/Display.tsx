import React from 'react';
import './Display.css';

type DisplayProps = {
  value: string;
};

const Display: React.FC<DisplayProps> = ({ value }) => {
  return <div className="display">{value}</div>;
};

export default Display;