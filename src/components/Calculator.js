// import './Calculator.css';
import React from 'react';

class Calculator extends React.Component {
  render() {
    return (
      <div className="Calculator">
        <table>
          <thead>
            <tr>
              <td colSpan="4">0</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>AC</td>
              <td>±</td>
              <td>%</td>
              <td>÷</td>
            </tr>
            <tr>
              <td>7</td>
              <td>8</td>
              <td>9</td>
              <td>×</td>
            </tr>
            <tr>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>-</td>
            </tr>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>+</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan='2'>0</td>
              <td>.</td>
              <td>=</td>
            </tr>
            </tfoot>
        </table>
      </div>
    );
  }
}

export default Calculator;
