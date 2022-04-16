import React, { Component, useCallback } from "react";

class Counter extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
        
    }
    increment(){
        /*this.setState ({ 
            if we use this.state it will reflect in console not in UI.to get the result we use setstate
           count:this.state.count+1
        },()=>{console.log('Increment value',this.state.count)})
        //console.log(this.state.count)*/
    }

    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    
    render(){
        return (
            (<div>
            <div>count---{this.state.count}</div>
            <button onClick={()=>this.incrementFive()}>Increment</button>
            </div>
            )
        )
    }
}

export default Counter;
