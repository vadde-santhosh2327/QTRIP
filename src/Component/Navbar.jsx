import React,{Component} from "react";
import Nav1 from "./Nav1"
import Nav2 from "./Nav2"
export default class Navbar extends Component{
    render()
    {
        return(
            <div>
                <>
                <Nav1/>
                <Nav2/>
                </>
            </div>
        )
    }
}