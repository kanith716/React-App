import logo from './logo.svg';
import './App.css';
import MyComponents from './components/Welcome'
import TestClass from './components/TestClass'
import Counter from './components/Counter'
import Parent from './components/Parent';
import Conditional from './components/Conditional';
import ListRender from './components/ListRender';

function App() {
  return (
    <div className="App">
      <ListRender />

      {/* <Counter /> */}
     {/* <MyComponents name="Kumar" job="Developer"/>
    
     <TestClass name="Kumar" job="Developer" /> */}
    </div>
  );
}

export default App;
