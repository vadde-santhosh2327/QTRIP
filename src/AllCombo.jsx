// import React from "react";
// import Navigation from "./Qtrip/Navigation";
// import Mid from "./Qtrip/Mid";
// import Extractmap from "./Extractmap";
// import Data from "./Data";
// import Down from "./Qtrip/Down";
// import Footer from "./Qtrip/Footer";
// import { Link } from "react-router-dom";
// export default function AllCombo() {
//     return (
//         <>
//             <Navigation />
//             <Mid />
//             <Link to="/BengSubp-1" id="link">
//                 <div id="main_div">
//                     {
//                         Data.map(x => {
//                             return (
//                                 <Down src={x.src} h1={x.h1} p={x.p} />
//                             )
//                         })
//                     }
//                 </div>

//             </Link>
//             <Footer />
//         </>
//     )
// }



import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import './App.css';
import Mid from "./Qtrip/Mid";
import Navigation from "./Qtrip/Navigation";
import Data from "./Data";
import Down from "./Qtrip/Down";
import Footer from "./Qtrip/Footer";

export default function AllCombo() {
    const [searchTerm, setSearchTerm] = useState("");
    const filteredData = Data.filter(item =>
        item.h1.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <>
            <Navigation />
            <Mid onsearchchange={setSearchTerm} /> 
            <Link to="/BengSubp-1" id="link">
                <div id="main_div">
                    {
                        filteredData.map((x, index) => {
                            return (
                                <Down key={index} src={x.src} h1={x.h1} p={x.p} />
                            );
                        })
                    }
                </div>
            </Link>
            <Footer />
        </>
    );
}