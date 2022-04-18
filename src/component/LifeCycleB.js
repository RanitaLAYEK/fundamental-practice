//If we have child component

import React, { Component } from 'react'

class LifeCycleB extends Component {
    //constructor MOUNT life cycle method

    constructor(props){
        super(props)

        this.state={
         userName:'Saibo'
        }
        console.log('LifeCycleB Constructor')
    }
    //Static getderivedstatefromprops method

    static getDerivedStateFromProps(props,state){
        //either return null or new state
        console.log('LifeCycleB getDerivedStateFromProps');
        return null;
    }
    //ComponentDidMount
    componentDidMount(){
        console.log('LifeCycleB componentDidMount')
    }

        //shouldComponentUpdate

        shouldComponentUpdate(nextProps,nextState){
            console.log('LifeCycleA shouldComponentUpdate')
            return true;
        }
    
        //ComponentDidMount
        componentDidMount(){
            console.log('LifeCycleA componentDidMount')
        }
    
            //getSnapshotBeforeUpdate
    
            getSnapshotBeforeUpdate(prevProps,prevState){
                console.log('LifeCycleA getSnapshotBeforeUpdate')
                 return null
                  }
    //RENDER method
    render() {
  console.log('LifeCycleB Render')
      return <div>LifeCycleB</div>
  }
}

export default LifeCycleB