//parent component

import React, { Component } from 'react'
import Input from './Input'

class Focusinput extends Component {
    constructor(props) {
      super(props)
       this.ComponentRef=React.createRef()
    }

    clickHandler=()=>{
        this.ComponentRef.current.Focusinput()
    }
  render() {
    return (
      <div>
          <Input  ref={this.ComponentRef} />
          <button onClick={this.clickHandler}> Focus Input</button>
      </div>
    )
  }
}

export default Focusinput