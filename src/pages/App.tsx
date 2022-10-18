import React from 'react';
import Forms from '../components/forms';
import List from '../components/List';
import style from './style.module.scss';
import Stopwatch from '../components/Stopwatch';

function App() {
  return (
    <div className={style.AppStyle}>
      <Forms />
      <List />
      <Stopwatch />
    </div>
  );
}

export default App;
