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
              <td className="number">AC</td>
              <td className="number">±</td>
              <td className="number">%</td>
              <td className="calcSign">÷</td>
            </tr>
            <tr>
              <td className="number">7</td>
              <td className="number">8</td>
              <td className="number">9</td>
              <td className="calcSign">×</td>
            </tr>
            <tr>
              <td className="number">4</td>
              <td className="number">5</td>
              <td className="number">6</td>
              <td className="calcSign">-</td>
            </tr>
            <tr>
              <td className="number">1</td>
              <td className="number">2</td>
              <td className="number">3</td>
              <td className="calcSign">+</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="2" className="number">0</td>
              <td className="number">.</td>
              <td className="calcSign">=</td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

export default Calculator;
