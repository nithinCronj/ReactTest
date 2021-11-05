import { Component } from "react";
//import React{ Component } from "react";
class State extends Component{
    constructor(){
        super()
        this.state={message:'Welcome visitor' }
    }
    changeMessage(){
        this.setState({
            message:'Thanks for the visit'
        })
    }
    render(){
        return(
        <div><h1>State things: {this.state.message}</h1>
        <button onClick={()=>this.changeMessage()}>Exit</button>
        </div>)
        }
}
export default State;