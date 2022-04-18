import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {
    //constructor MOUNT life cycle method

    constructor(props){
        super(props)

        this.state={
         userName:'Saibo'
        }
        console.log('LifeCycleA Constructor')
    }
    //Static getderivedstatefromprops method

    static getDerivedStateFromProps(props,state){
        //either return null or new state
        console.log('LifeCycleA getDerivedStateFromProps')
        return null;
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
             return true
              }
    //RENDER method
    render() {
  console.log('LifeCycleA Render')
      return (
      <div>
          <div>LifeCycleA</div>
          <LifeCycleB />
          </div>
      )
  }
}

export default LifeCycleA