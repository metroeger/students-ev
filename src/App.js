import React, { Component } from 'react';
import Routes from './routes'
import logo from './logo.svg';
import './App.css';
import Batch from './batch/Batch';
import background from '/home/agi/Desktop/students/students_ev/src/images/background.jpg'


class App extends Component {

    render() {
        return(
          <div className="App">
            <img style={{backgroundImage: "url(" + background + ")"}} />
            <Routes />
          </div>
        )
      }
}

export default App
