// import './Calculator.css';
import React from 'react';
import calculate from '../logic/calculate';
import isNumber from '../logic/calculate';
import Display from './display';
import Button from './button';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  constructor() {
    super();
    this.state = { data: ''}
  }

  calculate = () => {
    try {
      const result = eval(this.state.data);
      this.setState({data: result});
    } catch (e) {
      this.setState({data: 'error'})
    }
  }

  handleClick = e => {
    const value = e.target.getAttribute('data-value');
    switch(value) {
      case 'clear':
        this.setState({ data: ''});
        break;
      case '=':
        this.calculate();
        break;
      default:
        this.setState({
          data: this.state.data + value
        });
    }
  }
  render() {
    return (
      <div className="calculator">
        <table className="table">
          <thead>
            <tr>
              <td colSpan="4" className="result">
                <Display data={this.state.data}/>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="number">
                <Button onClick={this.handleClick} label="AC" value="clear" />
              </td>
              <td className="number">
                <Button onClick={this.handleClick} label="±" value="±" />
              </td>
              <td className="number">
                <Button onClick={this.handleClick} label="%" value="%" />
              </td>
              <td className="calcSign">
                <Button onClick={this.handleClick} label="÷" value="÷" />
              </td>
            </tr>
            <tr>
              <td className="number">
                <Button onClick={this.handleClick} label="7" value="7" />
              </td>
              <td className="number">
                <Button onClick={this.handleClick} label="8" value="8" />
              </td>
              <td className="number">
                <Button onClick={this.handleClick} label="9" value="9" />
              </td>
              <td className="calcSign">
                <Button onClick={this.handleClick} label="×" value="×" />
              </td>
            </tr>
            <tr>
              <td className="number">
                <Button onClick={this.handleClick} label="4" value="4" />
              </td>
              <td className="number">
                <Button onClick={this.handleClick} label="5" value="5" />
              </td>
              <td className="number">
                <Button onClick={this.handleClick} label="6" value="6" />
              </td>
              <td className="calcSign">
                <Button onClick={this.handleClick} label="-" value="-" />
              </td>
            </tr>
            <tr>
              <td className="number">
                <Button onClick={this.handleClick} label="1" value="1" />
              </td>
              <td className="number">
                <Button onClick={this.handleClick} label="2" value="2" />
              </td>
              <td className="number">
                <Button onClick={this.handleClick} label="3" value="3" />
              </td>
              <td className="calcSign">
                <Button onClick={this.handleClick} label="+" value="+" />
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="2" className="number">
                <Button onClick={this.handleClick} label="0" value="0" />
              </td>
              <td className="number">
                <Button onClick={this.handleClick} label="." value="." />
              </td>
              <td className="calcSign">
                <Button onClick={this.handleClick} label="=" value="=" />
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

export default Calculator;
