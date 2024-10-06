// import React, { Component } from "react";
// export default class Mid extends Component{
//     render(){
//         return(
//             <>
//             <div id="mid">
//             <h1 id="h">Welcome to Qtrip</h1>
//             <p id="p">Explore the world with fantastic places to venture around</p>
//             <input type="text" placeholder="Search a City" id="in" />
//             </div>
//             </>
//         )
//     }
// }   



import React, { Component } from "react";
export default class Mid extends Component {
    handleSearch = (event) => {
        this.props.onsearchchange(event.target.value); 
    }
    render() {
        return (
            <>
                <div id="mid">
                    <h1 id="h">Welcome to Qtrip</h1>
                    <p id="p">Explore the world with fantastic places to venture around</p>
                    <input 
                        type="text" 
                        placeholder="Search a City" 
                        id="in" 
                        onChange={this.handleSearch} 
                    />
                </div>
            </>
        );
    }
}