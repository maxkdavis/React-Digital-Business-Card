import React from "react";

//import all my components
import Info from "./components/Info.js";
import About from "./components/About.js";
import Interests from "./components/Interests.js";
import Footer from "./components/Footer.js";

//create a App component
export default function App() {
    return (
        <div className="app--container">
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    );
}
