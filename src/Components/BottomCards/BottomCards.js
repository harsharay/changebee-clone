import React, { useState, useEffect } from "react"
import Button from "@material-ui/core/Button"
import RemoveIcon from '@material-ui/icons/Remove';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import { data } from "../../data/CardData"

import "./BottomCards.css"

const BottomCards = () => {

    const cardData = data;

    const [sections, setSections] = useState(["Rethink Pricing","Automate FinOps","Go Global"])
    const [counter, setCounter] = useState(0)
    const [dataToBeDisplayed, setDataToBeDisplayed] = useState(cardData[0])
    const [clicked, setClicked] = useState(false)

    // useEffect(() => console.log(dataToBeDisplayed),[])

    const handleBackNavigation = (e) => {
        setCounter(() => {
            if(counter === 0) {
                return cardData.length-1
            } else {
                return counter - 1
            }
        })
    }

    const handleFrontNavigation = (e) => {
        setCounter(() => {
            if(counter === (cardData.length-1)) {
                return 0
            }
            return counter + 1
        })
    }

    useEffect(() => {
        setDataToBeDisplayed(cardData[counter])
    },[counter])

    const handleSectionClick = index => {
        setCounter(index)
        setClicked(true)
    }

    return (
        <div className="bottomCards-block">
            <p className="bottomCards-header">Great Products Deserve Hyper Growth. Chargebee Makes it Easy.</p>
            <div>
                <div className="bottomCards-sections">
                    {sections.map((item, index) => {
                        return (
                            <p key={index} className="individualSection"  onClick={() => handleSectionClick(index)}>{item}</p>
                        )
                    })}
                </div>
                <div className="cardMain-block">
                    <div className="card-left">
                        <div className="card-left-content">
                            <p className="card-left-subText">{dataToBeDisplayed.leftBoxContent.subText}</p>
                            <p className="card-left-mainText">{dataToBeDisplayed.leftBoxContent.mainText}</p>
                            <p className="card-left-paragraph">{dataToBeDisplayed.leftBoxContent.paragraph}</p>
                            <div className="card-left-buttonBlock">
                                <RemoveIcon className="card-left-icon"/>
                                <Button variant="outlined" className="card-left-button">Read story</Button>
                            </div>
                        </div>
                    </div>
                    <div className="card-right">
                        <p className="card-right-mainText">"Chargebee has all the concepts of metered billing, flat and tiered pricing. If we decided to change the way we want to bill or the price structure, it would be accounted for, excuse the pun"</p>
                        <div className="card-right-userDetails">
                            <p className="card-right-userName">{dataToBeDisplayed.rightBoxContent.username}</p>
                            <p className="card-right-stream">{dataToBeDisplayed.rightBoxContent.stream}</p>
                        </div>
                        <div className="card-right-companyName">
                            <img src={dataToBeDisplayed.rightBoxContent.logo} alt={dataToBeDisplayed.rightBoxContent.logoName} className="card-right-image"/>
                        </div>
                    </div>
                </div>
                <div>
                    <Button variant="contained" className="leftButton" onClick={handleBackNavigation}><ArrowBackIcon className="buttonIcons"/></Button>
                    <Button variant="contained" className="rightButton" onClick={handleFrontNavigation}><ArrowForwardIcon className="buttonIcons"/></Button>
                </div>
            </div>
            <div className="finalDiv">
                <div className="finalDiv-content">
                    <p>Still unsure? Step Inside and See What The Future Looks Like.</p>
                    <Button variant="contained" className="hero-block-demoButton">Schedule a Demo<ArrowForwardIcon className="buttonIcons"/></Button>
                </div>
            </div>

            <div className="finalSeperator">

            </div>
        </div>
    )
}

export default BottomCards;