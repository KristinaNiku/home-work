import { Component } from 'react';
import './App.css';
import ToDoList from './ToDoList';
import Image from './ToDoPic.jpg';
import ImageTwo from './kier.jpg';


function App() {
  return (
    <div className="app">
      
      <div className='container' >
<img src={Image} width="250px"/>
</div>
<div className='container' >
<h1>TO DO LIST</h1>
</div>
<ToDoList />



    </div>
  );
}

export default App;
