import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Calculator from './components/Calculator';
import Header from './components/Header';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Calculator />
      </>
    );
  }
}
