import './App.css';
import React from 'react';
import CalculatorPage from './components/CalculatorPage';
import Header from './components/Header';
import Quote from './components/Quote';
import Home from './components/Home';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Home />
        <Quote />
        <CalculatorPage />
      </>
    );
  }
}
