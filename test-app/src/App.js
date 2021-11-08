//import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Welcome from './components/functionalComp';
import Classcomp from './components/classcomp';
import FunctionalComp from './components/functionalComp';
import Hello from './components/hello';
import Hellojsx from './components/jsxTry';
import State from './components/state';
import Counter from './components/counter';
import Memo from './components/memo';
import { Parent } from './components/Parent';
import Reducer from './components/Reducer';




class App extends Component {
  

  render (){
  return(
    <div className="App">

    <Reducer/>
      <Parent/>
      {/* <Memo name="Memmo rendering"></Memo> */}
      <Welcome/>
      <FunctionalComp />
      <Hellojsx />
      <Hello name="Nithin" company='Cronj'/>
      <Classcomp name='Cronj' loc='blr' /> 
<State/>
<Counter></Counter>

    </div>
  );
} 
}

export default App;
