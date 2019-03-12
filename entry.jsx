import Hello from './hello';
import React from 'react';
import ReactDOM from 'react-dom';
import ThemeContext from './theme-context';

ReactDOM.render(
  <ThemeContext.Provider value={{color: 'red'}}>
    <Hello/>
  </ThemeContext.Provider>,
  document.getElementById("content")
);

