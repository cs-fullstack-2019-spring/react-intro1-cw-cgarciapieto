import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SayHello from "./SayHello";
import SayHowdy from "./SayHowdy";


//pulls is the components sayHello and sayhowdy and renders them in a html format
class App extends Component {
  render() {
    return (
      <div className="App">
        <SayHello/> <SayHowdy/>
      </div>
    );
  }
}

export default App;
