import React, { useState } from 'react';
import ColourChangeButton from './ColourChangeButton';
import './App.css';

function App() {
  const [color, setColor] = useState('')
  return (
    <div className={'react-root ' + color}>
      <div className='centered'>
        <h1>Color Picker</h1>
        <ColourChangeButton color="red" setColor={setColor}/>
        <ColourChangeButton color="blue" setColor={setColor}/>
        <ColourChangeButton color="yellow" setColor={setColor}/>
      </div>
    </div>
  );
}

export default App;
