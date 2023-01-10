import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
    

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Mohit Pinninti</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/testing" style={{color: 'white', backgroundColor: "#f1356d", borderRadius: "8px"}}>Testing</Link>
            </div>
        </nav>
        //<p>hello</p>
    )
}



export default Navbar;