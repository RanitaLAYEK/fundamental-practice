import React from 'react';
function Greet(props){
    console.log(props);
    return (<div>
    <h1>Hello {props.name} a.k.a {props.heroName} </h1>
     {props.children}
     </div>)
}
//destructuring


export default Greet;

