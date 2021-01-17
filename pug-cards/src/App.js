/* eslint-disable react-pug/pug-lint */
/* eslint-disable react-pug/no-broken-template */
/* eslint-disable react-pug/no-interpolation */
import './App.scss';
import React from 'react'
import Card from './components/Card'
import storage from './data/storage'

function App() {
  return pug`
    .wrapper

      ${storage.map((item, index) => pug`Card(key=${index} images=${item.images} avatar=${item.avatar} name=${item.name} ageGenderType=${item.ageGenderType} contentTopics=${item.contentTopics} socials=${item.socials})`)}
  `;
}

export default App;
