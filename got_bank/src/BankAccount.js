import React, { Component } from 'react';
import './App.css';

//creates two variables and passes into the BankAccount component and exports 

const name = 'Carlos';
const balance = "$2112";
class BankAccount extends Component{
    render(){
        return(
            
            <div>

            <h2> Welcome { name }</h2>
            <h3>....and your balance is {balance}</h3>    
            </div>
            
        );
    }
}

export default BankAccount;