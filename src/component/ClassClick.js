import React, { Component } from "react";

class ClassClick extends Component{
    clickHandler(){
        console.log('BUtton clicked')
    }
  render(){
      return (
          <div>
          <button onClick={this.clickHandler}>click Me</button>
          </div>
      )
  }

}

export default ClassClick;