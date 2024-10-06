import React, { Component } from "react";
import Extractmap from "./Extractmap";
import Navigation from "./Qtrip/Navigation";
export default class Subpage extends Component{
    render()
    {
        return(
            <>
            <Navigation/>
             
            {/* <h1 className="Extarct_h1">Explore all adventures</h1>
            <h2 className="Extract_h2">Here's a list of places that you can explore in city</h2> */}
            <div id="headr">
                <h3 id="headr2">Explore all advertures</h3>
                <p id="parar">Here's a list of places that you can explore in city</p><br />
                <hr /><br />
                <p id="fil1">Filters: | <button id="btnfil">Filter by duration (Hours)</button>
                    <button id="btnclr">clear</button><span>  |</span> <input type="text" placeholder="Search" id="inp2" /> <button id="btnclr2">clear</button> |</p>
            </div><br /><br />
  <hr />
            <br /><br /><br /><br /><br />
            <Extractmap/>
            </>
        )
    }
}