import logo from './logo.svg';
import './App.css';
import MyComponents from './components/Welcome'
import TestClass from './components/TestClass'
import Counter from './components/Counter'
import Parent from './components/Parent';
import Conditional from './components/Conditional';
import ListRender from './components/ListRender';
import Welcome from './components/levalTwoComponents/Welcome';
import { Component } from 'react';
import Style from './components/levalTwoComponents/Style';


function App() {
  return (
    <div className="App">
      <Style />

      {/* <Counter /> */}
     {/* <MyComponents name="Kumar" job="Developer"/>
    
     <TestClass name="Kumar" job="Developer" /> */}
    </div>
  );
}

export default App;
