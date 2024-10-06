import React, { Component } from "react";
import Extract from "./Extract"
import Data1 from "./Data1";
import { Link } from "react-router-dom";
export default class Extractmap extends Component{
  render()
  {
    return(
        <>
          <div id="div_images">
             {
                Data1.map(y=>{
                    return(
                        <Extract sr={y.sr} button_card={y.button_card} h2={y.h2} h21={y.h21} p1={y.p1} p12={y.p12}/>
                    )
                })
             }
           </div>
        </>
    )
  }

}

