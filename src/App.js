import React, { Component, Fragment, PureComponent } from 'react';
import './App.css';
import './appStyles.css';
import Focusinput from './component/Focusinput';
import ParentComponent from './component/ParentComponent';
import ReferDemo from './component/ReferDemo';


class App extends Component{

  render(){
  return (
    <div className='App'>
      {/*<ParentComponent />*/}
      {/*<ReferDemo />*/}
      <Focusinput />
    </div>
    
  )
}
}
export default App;
