import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import ComponentHeader from './js/components/header';
import ComponentFooter from './js/components/footer';
import BodyIndex from './js/components/bodyIndex';

class App extends Component {
  componentWillMount(){
    console.log('BodyIndex -- componentWillMount');
  }
  componentDidMount(){
    console.log('BodyIndex -- componentDidMount');
  }
  render() {
    var component = <BodyIndex userId={1234} userName='Tiny'/>;
    return (
      <div>
        <ComponentHeader />
        {component}
        <ComponentFooter />
      </div>
    );
  }
}

export default App;
