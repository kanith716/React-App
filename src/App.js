import logo from './logo.svg';
import './App.css';
import MyComponents from './components/Welcome'
import { Component } from 'react';
import Style from './components/levalTwoComponents/Style';
import Hookscount from './components/hooks/Hookscount';
import MultipleHooksCount from './components/hooks/MultipleHooksCount';
import Hooksstateobject from './components/hooks/Hooksstateobject';
import HookEffect from './components/hooks/HookEffect';


function App() {
  return (
    <div className="App">
      <Hooksstateobject/>
    </div>
  );
}

export default App;
