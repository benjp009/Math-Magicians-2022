// import './Calculator.css';
import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator">
        <table className="table">
          <thead>
            <tr>
              <td colSpan="4" className="result">0</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="number">
                <button type="button">Ac</button>
              </td>
              <td className="number">
                <button type="button">±</button>
              </td>
              <td className="number">
                <button type="button">%</button>
              </td>
              <td className="calcSign">
                <button type="button">÷</button>
              </td>
            </tr>
            <tr>
              <td className="number">
                <button type="button">7</button>
              </td>
              <td className="number">
                <button type="button">8</button>
              </td>
              <td className="number">
                <button type="button">9</button>
              </td>
              <td className="calcSign">
                <button type="button">×</button>
              </td>
            </tr>
            <tr>
              <td className="number">
                <button type="button">4</button>
              </td>
              <td className="number">
                <button type="button">5</button>
              </td>
              <td className="number">
                <button type="button">6</button>
              </td>
              <td className="calcSign">
                <button type="button">-</button>
              </td>
            </tr>
            <tr>
              <td className="number">
                <button type="button">1</button>
              </td>
              <td className="number">
                <button type="button">2</button>
              </td>
              <td className="number">
                <button type="button">3</button>
              </td>
              <td className="calcSign">
                <button type="button">+</button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="2" className="number">
                <button type="button">0</button>
              </td>
              <td className="number">
                <button type="button">.</button>
              </td>
              <td className="calcSign">
                <button type="button">=</button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

export default Calculator;
