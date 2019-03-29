import React, { Component } from 'react';
import './App.css';

//creates two variables and passes into the BankAccount component and exports 


class BankAccount extends Component{
    render(){
        return(
            
            <div>

            <h2> Welcome {this.props.name}</h2>
            <h3>....and your balance is {this.props.balance}</h3>
            </div>
            
        );
    }
}

export default BankAccount;