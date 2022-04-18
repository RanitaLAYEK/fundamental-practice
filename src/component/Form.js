import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userName: '',
            comments:' '
        }
    }

    handleUserNameChange = (event) => {
        this.setState({
            userName: event.target.value
        })
    }
    handleCommentsChange=(event)=>{
        this.setState({
            comments:event.target.value
        })
    }
    handleTopicChange=(event)=>{
     this.setState({
         topic:event.target.value
     })
    }
    handleSubmit=(event)=>{
 alert(`${this.state.userName} ${this.state.comments} ${this.state.topic}`)
  event.preventDefault();//after refresh also we can see the previous input in page
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                <label>Name :</label>
                <input type='text' value={this.state.userName} onChange={this.handleUserNameChange} >{this.setState.userName}</input>
            </div>
            <div>
              <label>comments</label>
             <textarea value={this.state.comments} onChange={this.handleCommentsChange}></textarea>
            </div>
            <div>
                <label>Topic</label>
                <select value={this.state.topic} onChange={this.handleTopicChange}>
                <option value="Angular">Angular</option>
                <option value="React">React</option>
                <option value="vue">vue</option>
                </select>
            </div>
            <button type="submit">Submit</button>
            </form>

        )
    }
}

export default Form