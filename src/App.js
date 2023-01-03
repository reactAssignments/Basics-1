import React from 'react';
import './style.css';

export default function App() {
  var name = 'Child';
  return <Child name={name} />;
}

function Child(props) {
  return <h1>Hello I am from {props.name}</h1>;
}
