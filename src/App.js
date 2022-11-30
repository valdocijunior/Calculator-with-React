import { useState } from 'react';

import { FaLongArrowAltLeft } from "react-icons/fa";

function App() {
    const [calc, setCalc] = useState("");
    const [result, setResult] = useState("");

    const operators = ['/', '*', '+', '-', '.'];

    const updateCalc = value => {
      if (operators.includes(value) && calc === '' || operators.includes(value) && operators.includes(calc.slice(-1))) {
        return;
      }
      setCalc(calc + value);

      if(!operators.includes(value)) {
        setResult(eval(calc + value).toString());
      }
    }

    const calculate = () => {
      setCalc(eval(calc).toString());
    }

    const deleteLastOperation = () => {
      if(calc == '') {
        return;
      }
      const value = calc.slice(0, -1);
      if (operators.includes(value.slice(-1))) {
      setResult(eval(value.toString().slice(0,-1)));  
    }
    else{
      setResult(eval(value.toString()));  
    }
      setCalc(value);
    }

    const deleteAll = () => {
      setCalc('');
     const value = calc.slice(0, -1);
      if (operators.includes(value.slice(-1))) {
      setResult(eval(value.toString().slice(0,-1)));  
    }
    else{
      setResult('');  
    }
    }


      return (
        <div className="app">
          <div className="calculadora">
            <div className="display">
              { result ? <span>({result})</span> : '' } &nbsp; { calc || "0"}
            </div>
            <div className="operadores">
              <button className="clearAll" onClick={deleteAll}>AC</button>
              <button onClick={() => updateCalc('/')}>/</button>
              <button onClick={() => updateCalc('*')}>*</button>
              <button onClick={() => updateCalc('+')}>+</button>
              <button onClick={() => updateCalc('-')}>-</button>

              <button onClick={deleteLastOperation}><FaLongArrowAltLeft /></button>
            </div>
            <div className="key">
              <button onClick={() => updateCalc('1')}>1</button>
              <button onClick={() => updateCalc('2')}>2</button>
              <button onClick={() => updateCalc('3')}>3</button>
              <button onClick={() => updateCalc('4')}>4</button>
              <button onClick={() => updateCalc('5')}>5</button>
              <button onClick={() => updateCalc('6')}>6</button>
              <button onClick={() => updateCalc('7')}>7</button>
              <button onClick={() => updateCalc('8')}>8</button>
              <button onClick={() => updateCalc('9')}>9</button>
              <button onClick={() => updateCalc('0')}>0</button>
              <button onClick={() => updateCalc('.')}>.</button>

              <button onClick={calculate}>=</button>
            </div>
          </div>
        </div>
      );
}

export default App;
