import React, {Component} from 'react';
import ThemeContext from './theme-context';

class Hello extends Component {

  render() {
    return <div>
      <ThemeContext.Consumer>{context =>
        (<h1 style={{color: context.color}}>Hello Freewind</h1>)
      }</ThemeContext.Consumer>
    </div>;
  }
}

export default Hello;
