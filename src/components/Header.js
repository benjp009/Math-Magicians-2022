import React from 'react';

export default function Header() {
  return (
    <header>
      <div>
        <h1>Math Magicians</h1>
      </div>
      <div className="topnav">
        <a href="/">Home</a>
        <a> | </a>
        <a href="/">Calculator</a>
        <a> | </a>
        <a href="/">Quote</a>
        <a> | </a>
      </div>
    </header>
  )
}
