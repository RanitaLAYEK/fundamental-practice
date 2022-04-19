import React, {Component} from 'react';
import MemoComp from './MemoComp';
import PureComp from "./PureComp";
import RegularComponent from "./RegularComponent";


class ParentComponent extends Component{

constructor(props) {
  super(props)

  this.state = {
    name:'vuban'
  }
}

componentDidMount(){
    
    setInterval(()=>{
        this.setState({
            name:'vuban'
        })
    },2000)
}
    render(){
        console.log('Max................')
        return(
            <div>Parent Component
                {/* <RegularComponent name={this.state.name}></RegularComponent>
                <PureComp name={this.state.name}></PureComp> */}
                <MemoComp name={this.state.name}/>
            </div>
        )
        }
}

export default ParentComponent;