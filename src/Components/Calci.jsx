import React from 'react'
 import { useState } from'react'    
const Calci = () => {

     const [input, setInput] = useState('');

  const handleClick = (val) => {
    if (input === 'Invalid Input'  || input === 'Welcome'|| input === 'Error') {
      setInput(val);
    } else {
      setInput(input + val);
    }
  };

  const clearScreen = () => {
    setInput('');
  };
  const turnOn = () => {
    setInput('Welcome');
  };
  const backspace = () => {
    if (input.length > 0) {
      setInput(input.slice(0, -1));
    }
  };
  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
    
    
  };
  return (
    <>
     <div>
      <h1 className="heading"><b>This is a calculator🧮 project built with React</b></h1>
      <div className="calculator-container">
        <p className="brand-name">AV</p>
        <input type="text" className="calculator-screen" value={input} readOnly />
        <div className="button-container">
          <div  onClick={turnOn} className="button2 bg-red"> ON</div>
          <div  className="button2 bg-green1" onClick={clearScreen}> OFF</div>
          <div className="button2 bg-blue" onClick={clearScreen}> CLR</div>
          <div className="button2 bg-blue" onClick={backspace}>←</div>
        </div>
        <div className="button-container">
          <div className="button" onClick={() => handleClick('7')}>7</div>
          <div className="button" onClick={() => handleClick('8')}>8</div>
          <div className="button" onClick={() => handleClick('9')}>9</div>
          <div className="button" onClick={() => handleClick('%')}>%</div>
        </div>
        <div className="button-container">
          <div className="button" onClick={() => handleClick('4')}>4</div>
          <div className="button" onClick={() => handleClick('5')}>5</div>
          <div className="button" onClick={() => handleClick('6')}>6</div>
          <div className="button" onClick={() => handleClick('*')}>×</div>
        </div>
        <div className="button-container">
          <div className="button" onClick={() => handleClick('1')}>1</div>
          <div className="button" onClick={() => handleClick('2')}>2</div>
          <div className="button" onClick={() => handleClick('3')}>3</div>
          <div className="button" onClick={() => handleClick('-')}>-</div>
        </div>
        <div className="button-container">
          <div className="button" onClick={() => handleClick('0')}>0</div>
          <div className="button" onClick={() => handleClick('.')}>.</div>
          <div className="button" onClick={() => handleClick('+')}>+</div>
          <div className="button bg-green" onClick={calculate}>=</div>
        </div>
      </div>
    </div>
  </>
  );
}



export default Calci