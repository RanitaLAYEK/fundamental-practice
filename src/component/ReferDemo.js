import React, { Component } from 'react'

class ReferDemo extends Component {
    constructor(props) {
      super(props)
    //1st method for refer
      this.inputRef=React.createRef()
      this.cbRef=null;
      this.setcbRef=element=>{
          this.cbRef=element;
      }
         }
         componentDidMount(){
             if(this.cbRef)
             {
                 this.cbRef.focus()
             }
            //  this.inputRef.current.focus()
            //  console.log(this.inputRef)
         }
         clickHandler=()=>{
      alert(this.inputRef.current.value)
         }
  render() {
    return (
      <div>ReferDemo
          <input type='text' ref={this.inputRef}/>
          <input type='text' ref={this.setcbRef}/>
          <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default ReferDemo