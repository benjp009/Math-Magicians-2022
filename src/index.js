import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import './index.css';
import CalculatorPage from './components/CalculatorPage';
import Quote from './components/Quote';
import Home from './components/Home';
import Header from './components/Header';

import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/" element={<Home />} />
        <Route path="calculator" element={<CalculatorPage />} />
        <Route path="quote" element={<Quote />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
