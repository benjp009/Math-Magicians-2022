// import './Calculator.css';
import React from 'react';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState((state) => calculate(state, e.target.textContent));
  }

  render() {
    const { next, total } = this.state;
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
                <button type="button" onClick={this.handleClick}>AC</button>
              </td>
              <td className="number">
                <button type="button" operation="±" onClick={this.handleClick}>±</button>
              </td>
              <td className="number">
                <button type="button" operation="%" onClick={this.handleClick}>%</button>
              </td>
              <td className="calcSign">
                <button type="button" operation="÷" onClick={this.handleClick}>÷</button>
              </td>
            </tr>
            <tr>
              <td className="number">
                <button type="button" name="7" onClick={this.handleClick}>7</button>
              </td>
              <td className="number">
                <button type="button" name="8" onClick={this.handleClick}>8</button>
              </td>
              <td className="number">
                <button type="button" name="9" onClick={this.handleClick}>9</button>
              </td>
              <td className="calcSign">
                <button type="button" operation="×" onClick={this.handleClick}>×</button>
              </td>
            </tr>
            <tr>
              <td className="number">
                <button type="button" onClick={this.handleClick}>4</button>
              </td>
              <td className="number">
                <button type="button" onClick={this.handleClick}>5</button>
              </td>
              <td className="number">
                <button type="button" onClick={this.handleClick}>6</button>
              </td>
              <td className="calcSign">
                <button type="button" operation="-" onClick={this.handleClick}>-</button>
              </td>
            </tr>
            <tr>
              <td className="number">
                <button type="button" onClick={this.handleClick}>1</button>
              </td>
              <td className="number">
                <button type="button" onClick={this.handleClick}>2</button>
              </td>
              <td className="number">
                <button type="button" onClick={this.handleClick}>3</button>
              </td>
              <td className="calcSign">
                <button type="button" operation="+" onClick={this.handleClick}>+</button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="2" className="number">
                <button type="button" onClick={this.handleClick}>0</button>
              </td>
              <td className="number">
                <button type="button" onClick={this.handleClick}>.</button>
              </td>
              <td className="calcSign">
                <button type="button" onClick={this.handleClick}>=</button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}
