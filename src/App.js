import './App.css';
import Calculator from './components/Calculator';
import React from 'react';

class App  extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Calculator />
    );
  }
}

export default App;
