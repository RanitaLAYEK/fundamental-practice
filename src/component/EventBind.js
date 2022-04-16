import React, { Component } from "react";

class EventBind extends Component{

    constructor(props){
        super(props)
        this.state={
            message:'Hellow'
        }
        {/*this.clickHandler=this.clickHandler.bind(this);
    /*clickHandler()*/}
    }
    clickHandler=()=>{
       this.setState({
            message:'Goodbye!'
        })
        console.log(this)
    }
    render(){
        return (
            <div>
     
     <div>{this.state.message}</div>
     {/*<button onClick={this.clickHandler.bind(this)}>click</button>  EVENT HANDLING 1st method*/}
     {/*<button onClick={()=>this.clickHandler()}>click</button>*/}
     <button onClick={this.clickHandler}>click</button>
     </div>
        )
    }
}
export default EventBind;