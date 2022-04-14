class component
======================
welcome.js
-------------
import React,{Component} from "react";

class Welcome extends React.Component{
    render(){
        return <h1>class Component</h1>
    }
}

export default Welcome;

App.js
------
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet';
import Welcome from './component/welcome';

function App() {
  return (
    <div className='App'>
      <Greet />
      <Welcome/>
    </div>
    
  );
}

export default App;

=======================================================
function component
------------------
Greet.js
------------
import React from 'react';
function Greet(){
    return <h1>Hello world</h1>
}

export default Greet;
---------------------------------------
app.js
------
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet';
import Welcome from './component/welcome';

function App() {
  return (
    <div className='App'>
      <Greet />
      <Welcome/>
    </div>
    
  );
}

export default App;
==================================================
