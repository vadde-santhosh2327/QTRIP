import React, { StrictMode } from "react";
import ReactDOM from "react-dom"
import App from "./App"
import Data from "./Data"
import Down from "./Qtrip/Down"
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Subpage from "./Subpage";
import Subpage2 from "./Subpage2";
import Extractmap from "./Extractmap";
let root1= ReactDOM.createRoot(document.getElementById("root"));
root1.render(
  <>
    {/* <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/subcards" element={<Subpage/>}/>
      <Route path="/subsub" element={<Subpage2/>}/>
      <Route path="/bgrl" element={<Extractmap/>}/>
    </Routes>
    </BrowserRouter>  */}
    {/* <Subpage2/> */}
    <App/>
    </>
)