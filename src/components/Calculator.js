import React, { useState } from 'react';
import calculate from '../logic/calculate';
import '../App.css';

const Calculator = () => {
  const [state, NewState] = useState({});

  const handleClick = (e) => {
    NewState(calculate(state, e.target.textContent));
  };

  const { next, total } = state;
  return (
    <div className="calculator">
      <table className="table">
        <thead>
          <tr>
            <td colSpan="4" className="result">{next || total || 0}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="number">
              <button type="button" onClick={handleClick}>AC</button>
            </td>
            <td className="number">
              <button type="button" operation="±" onClick={handleClick}>±</button>
            </td>
            <td className="number">
              <button type="button" operation="%" onClick={handleClick}>%</button>
            </td>
            <td className="calcSign">
              <button type="button" operation="÷" onClick={handleClick}>÷</button>
            </td>
          </tr>
          <tr>
            <td className="number">
              <button type="button" name="7" onClick={handleClick}>7</button>
            </td>
            <td className="number">
              <button type="button" name="8" onClick={handleClick}>8</button>
            </td>
            <td className="number">
              <button type="button" name="9" onClick={handleClick}>9</button>
            </td>
            <td className="calcSign">
              <button type="button" operation="×" onClick={handleClick}>×</button>
            </td>
          </tr>
          <tr>
            <td className="number">
              <button type="button" onClick={handleClick}>4</button>
            </td>
            <td className="number">
              <button type="button" onClick={handleClick}>5</button>
            </td>
            <td className="number">
              <button type="button" onClick={handleClick}>6</button>
            </td>
            <td className="calcSign">
              <button type="button" operation="-" onClick={handleClick}>-</button>
            </td>
          </tr>
          <tr>
            <td className="number">
              <button type="button" onClick={handleClick}>1</button>
            </td>
            <td className="number">
              <button type="button" onClick={handleClick}>2</button>
            </td>
            <td className="number">
              <button type="button" onClick={handleClick}>3</button>
            </td>
            <td className="calcSign">
              <button type="button" operation="+" onClick={handleClick}>+</button>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="2" className="number">
              <button type="button" onClick={handleClick}>0</button>
            </td>
            <td className="number">
              <button type="button" onClick={handleClick}>.</button>
            </td>
            <td className="calcSign">
              <button type="button" onClick={handleClick}>=</button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Calculator;
