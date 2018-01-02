import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import ComponentHeader from './js/components/header';
import ComponentFooter from './js/components/footer';
import BodyIndex from './js/components/bodyIndex';
import Form from './js/components/form';
import Calculator from './js/components/calculator';
//import { DatePicker } from 'antd';
import { Button,DatePicker } from 'antd';
//import 'antd/dist/antd.css';

class App extends Component {
  componentWillMount(){
    console.log('BodyIndex -- componentWillMount');
  }
  componentDidMount(){
    console.log('BodyIndex -- componentDidMount');
  }
  render() {
    var component = <BodyIndex userId={134} userName='Tiny'/>;
    return (
      <div>
        <div className='App'>中间</div>
        <DatePicker />
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
        <ComponentHeader />
        {component}
        <ComponentFooter />
        <Form />
        <Calculator />
      </div>
    );
  }
}

export default App;
