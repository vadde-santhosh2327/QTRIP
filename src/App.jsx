
import { BrowserRouter,Routes,Route } from "react-router-dom";
import React, { Component } from "react";
import "./style.css"
import Mid from "./Qtrip/Mid"
import Navigation from "./Qtrip/Navigation"
import Down from "./Qtrip/Down"
import Data from "./Data";
import Footer from "./Qtrip/Footer";
import Extractmap from "./Extractmap";
import Subpage2 from "./Subpage2";
import { Link } from "react-router-dom";
import AllCombo from "./AllCombo";
import Bgrl from "./Component1/Bgrl";
export default class App extends Component {
    render() {
        return (
            <div>

                {/* <AllCombo /> */}
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<AllCombo/>}/>
                <Route path="/BengSubp-1" element={<Bgrl/>}/>
                <Route path="/BengSubPage-2" element={<Subpage2/>}/>
            </Routes>
            </BrowserRouter>


            </div>

        )
    }
}
// import React from "react";
// import Bgrl from "./Component1/Bgrl";
// import Navigation from "./Qtrip/Navigation";
// export default function App()
// {
//     return(
//     <Bgrl/>
//     )
// }