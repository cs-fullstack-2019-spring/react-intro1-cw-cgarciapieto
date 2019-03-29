import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BankAccount from "./BankAccount";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BankAccount balance = "$2112" name = 'Carlos'/>
      </div>
    );
  }
}

export default App;
