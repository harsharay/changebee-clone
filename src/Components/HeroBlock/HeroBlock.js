import React from "react"
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import "./HeroBlock.css"

const HeroBlock = () => {
    return (
        <div className="hero-block">
            <div>
                <p className="hero-block-mainText"><span className="mainText-span">Subscription Billing & Revenue Operations</span> for Fast-growth B2B SaaS</p>
                <p className="hero-block-subText">Get the operational sophistication to achieve, sustain, and scale recurring revenue.</p>
                <div className="buttonGroup">
                    <Button variant="contained" className="hero-block-demoButton">Schedule a Demo<ArrowForwardIcon className="buttonIcons"/></Button>
                    <Button variant="outlined" className="hero-block-signUpButton">Sign up for free<ArrowForwardIcon className="buttonIcons"/></Button>
                </div>
            </div>
        </div>
    )
}

export default HeroBlock;