import React, { Component } from "react";

class Extract extends Component{
    constructor(props)
    {
        super(props)
    }
    render()
    {
        return(
            <>
            <div id="main">
            <div id="Extract_cards">
                <img  className="card_images" src={this.props.sr} alt="" />
                <button className="button2">{this.props.button_card}</button>
                <h2 className="h1_one">{this.props.h2}</h2>
                <div id="h1_div">
                <h2 className="h1_one">{this.props.h21}</h2></div>
                <div id="divi_para">
                <p id="para_one">{this.props.p1}</p></div>
                <p className="para_one1">{this.props.p12}</p>
            </div>
            </div>
            </>
        )
    }
}
export default Extract