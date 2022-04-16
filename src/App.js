import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet';
import Welcome from './component/welcome';
import Hello from './component/hello';
import Message from './component/message';
import Counter from './component/counter';
import FunctionClick from './component/FunctionClick';
import ClassClick from './component/ClassClick';
import EventBind from './component/EventBind';

function App() {
  return (
    <div className='App'>
      {/*<Message />*/}
      {/*<Counter />*/}
      {/*<Greet name="Bruce" heroName="Batman"/>*/}
      {/*<Greet name="Bruce" heroName="Batman">
        <p>This is a child property</p>
      {/*</Greet>
      <Greet name="Clark" heroName="superman"/>
      <button>Action</button>*/}
      {/*<Greet name="Denmark" heroName="opps!city"/>
      <Welcome name="Bruce" heroName="Batman"/>
      <Welcome name="Clark" heroName="superman"/>
    <Welcome name="Clark" heroName="superman"/>*/}
      <Hello />
      <FunctionClick />
      <ClassClick />
      <EventBind />
    </div>
    
  );
}

export default App;
