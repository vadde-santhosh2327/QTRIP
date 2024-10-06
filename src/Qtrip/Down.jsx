import React, { Component } from "react";
 class Down extends Component{
    constructor(props)
    {
        super(props)
    } 
    render(){
        return(
            <>
                <div id="down1">
                    <img className="card_image" src={this.props.src} alt="" />
                    <h1 className="text">{this.props.h1}</h1>
                    <p className="text">{this.props.p}</p>
                </div>
            </>
            
        )
    }
}
export default Down;