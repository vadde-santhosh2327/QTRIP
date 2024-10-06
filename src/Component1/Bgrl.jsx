import React, { useEffect, useState } from "react";
import Navigation from "../Qtrip/Navigation";
import "../../src/style.css"
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../Qtrip/Footer";
export default function Bgrl() {
    let [api, setapi] = useState([])
    useEffect(() => {
        axios.get("http://localhost:2003/Bgrl").then(res => setapi(res.data))
        console.log(api)
    }, [])

    return (
        <>
            <Navigation />
            <div id="headr">
                <h3 id="headr2">Explore all advertures</h3>
                <p id="parar">Here's a list of places that you can explore in city</p><br />
                <hr /><br />
                <p id="fil1">Filters: | <button id="btnfil">Filter by duration (Hours)</button>
                    <button id="btnclr">clear</button><span>  |</span> <input type="text" placeholder="Search" id="inp2" /> <button id="btnclr2">clear</button> |</p> </div><br />

            <div id="Parent-cont">
                <div id="Parent-cont-2">
                    {
                        api.map(x => {
                            return (
                                <>
                                    <Link to="/BengSubPage-2" id="link3" >
                                        <div id="hjk">

                                            <img id="Bgrl_images" src={x.image} alt="" /><br /><br />
                                            <h3 id="heading_one">{x.name}</h3><br />
                                            <h3 id="heading_two">Duration</h3>
                                            <p id="para1">₹{x.costPerHead}</p><br />
                                            <p id="para2">{x.duration} Hours</p>
                                            <button id="button_123">{x.category}</button>
                                        </div>
                                    </Link>
                                </>
                            )
                        })
                    }
                </div>
            </div> <br />
            <Footer/>
        </>
    )
}