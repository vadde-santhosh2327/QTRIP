import React, { Component } from "react";
export default class Navigation extends Component{
    render(){
        return(
            <div id="nav">
                   <ul>
                       <li className="one">Qtrip</li>
                       <li className="two">Home</li>
                       <li className="two1">Reservation</li>
                       <li className="two1">Login Here</li>
                       <li className="two1"><button id="fisrt_button">Register</button></li>
                   </ul>
            </div>
        )
    }
}