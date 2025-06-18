import React from "react";
import "./HeroSection.css";
function HeroSection() {

    return (
    <>
    <div className="hero-wrapper">
        <div className="hero-content-container">

        <div className="hero-heading">
            <span className="hero-heading1">Connecting Data.
        </span>
            <span className="hero-heading2">Embedding Finance.
        </span>
            <span className="hero-heading3">Unlocking Opportunity.
        </span>
        
        </div>
        <div className="buttons">
            <button className="ourSolutionsButton">
                <span className="spanButton1">
                Our solutions
                </span>
            </button>
            <button className="ExplorecareersButton">
                <span className="spanButton2">
                    Explore careers
                    </span>
            </button>
            </div>
        </div>
    </div>
        <img className="background2image" src="../../public/background2.jpg" alt="" />
    </>
    );
}

export default HeroSection;
