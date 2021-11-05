import { Component } from "react";
//import React{ Component } from "react";
class Classcomp extends Component{
    render(){
        return<h1>Company {this.props.name} location {this.props.loc} Using classComponent</h1>
    }
}
export default Classcomp;