import React from 'react';
import Header from './components/Header';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import Home from './components/Home';

export default function BenApp() {
  return (
    <>
      <Header />
      <Home />
      <Quote />
      <Calculator />
    </>
  );
}
