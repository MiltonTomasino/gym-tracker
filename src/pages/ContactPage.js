import React from "react";
import { Link } from "react-router-dom"
import ContactComp from "../components/Contact";
import FAQ from "../components/FAQ";

function Contact() {
    return (
        <div>
            <header>
                <h1></h1>
            </header>
        <body>
        <ContactComp />
        <FAQ />
        </body>
        </div>
        
        
    )
}

export default Contact