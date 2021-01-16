import './App.scss';
import React from 'react'
import Card from './components/Card'
import storage from './data/storage'

function App() {
  return pug`
    .wrapper
      h1 My Component
      
      p This is my component using pug.

      Card
  `;
}

export default App;
