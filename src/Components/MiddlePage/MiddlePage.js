import { Button } from "@material-ui/core"
import React, { useState, useEffect } from "react"
import CheckIcon from '@material-ui/icons/Check';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import BottomCards from "../BottomCards/BottomCards"

import "./MiddlePage.css"

const MiddlePage = () => {

    // useEffect(() => {
    //     let elementRef = document.querySelector(".middle-page-companies")
    //     let interval = setInterval(() => {
    //         elementRef.style.transform = "translateX(30px)"
    //         console.log("moving")
    //     },2000)

    //     return () => clearTimeout(interval)
    // },[])


    return (
        <div>
            <div>
                <img src="https://cdn.dribbble.com/users/1536008/screenshots/6732830/dribbble_004_4x.jpg?compress=1&resize=1000x750" alt="Dashboard" className="middlePage-topIllustration"></img>
            </div>
            <div className="middle-page-content">
                <p>Thousands of Scaling SaaS Businesses Love Us</p>
                <div className="middle-page-companies-div">
                    <div className="middle-page-companies">
                        <img src="https://webstatic.chargebee.com/assets/web/351/images/case-study/drawboard/logo.svg" alt="drawboard" />
                        <img src="https://webstatic.chargebee.com/assets/web/351/images/customers/logos/fishburners.png" alt="fishburners" />
                        <img src="https://webstatic.chargebee.com/assets/web/351/images/case-study/harvestr/logo.png" alt="harvestr" />
                        <img src="https://webstatic.chargebee.com/assets/web/351/images/case-study/drawboard/logo.svg" alt="drawboard" />
                        <img src="https://webstatic.chargebee.com/assets/web/351/images/customers/logos/fishburners.png" alt="fishburners" />
                        <img src="https://webstatic.chargebee.com/assets/web/351/images/case-study/harvestr/logo.png" alt="harvestr" />
                    </div>
                </div>
            </div>

            <div className="recurring-bill-section">
                <div className="recurring-bill-section-content">
                    <p className="recurring-bill-sub-text">No more spreadsheet errors</p>
                    <p className="recurring-bill-header">Automate Recurring Billing</p>
                    <p className="recurring-bill-paragraph">Scale your SaaS through 480+ recurring billing scenarios that automate who you bill, when, and how. No humans, no spreadsheets, no missed payments!</p>
                    <div className="recurring-bill-sections">
                        <p><CheckIcon className="sections-icons"/>Bill Schedules</p>
                        <p><CheckIcon className="sections-icons"/>Proration & Invoicing</p>
                        <p><CheckIcon className="sections-icons"/>Tax management</p>
                        <p><CheckIcon className="sections-icons"/>Payment Methods</p>
                    </div>
                    <Button variant="outlined" className="recurring-bill-sections-button">Learn more < ArrowForwardIcon className="recurring-button-icon"/></Button>
                </div>
                <div>
                    <img src="https://webstatic.chargebee.com/assets/web/351/images/home/lemon/recurring-billing-graphic.svg" alt="recurring-bill"/>
                </div>
            </div>

            <div className="subscription-management-section">
                <div className="recurring-bill-section-content">
                    <p className="recurring-bill-sub-text">No more spreadsheet errors</p>
                    <p className="recurring-bill-header">Automate Recurring Billing</p>
                    <p className="recurring-bill-paragraph">Scale your SaaS through 480+ recurring billing scenarios that automate who you bill, when, and how. No humans, no spreadsheets, no missed payments!</p>
                    <div className="recurring-bill-sections">
                        <p><CheckIcon className="sections-icons"/>Bill Schedules</p>
                        <p><CheckIcon className="sections-icons"/>Proration & Invoicing</p>
                        <p><CheckIcon className="sections-icons"/>Tax management</p>
                        <p><CheckIcon className="sections-icons"/>Payment Methods</p>
                    </div>
                    <Button variant="outlined" className="recurring-bill-sections-button">Learn more < ArrowForwardIcon className="recurring-button-icon"/></Button>
                </div>
                <div>
                    <img src="https://webstatic.chargebee.com/assets/web/351/images/home/lemon/subscription-graphic.svg" alt="recurring-bill"/>
                </div>
            </div>

            <div className="streamline-revenue-section">
                <div className="recurring-bill-section-content">
                    <p className="recurring-bill-sub-text">No more spreadsheet errors</p>
                    <p className="recurring-bill-header">Automate Recurring Billing</p>
                    <p className="recurring-bill-paragraph">Scale your SaaS through 480+ recurring billing scenarios that automate who you bill, when, and how. No humans, no spreadsheets, no missed payments!</p>
                    <div className="recurring-bill-sections">
                        <p><CheckIcon className="sections-icons"/>Bill Schedules</p>
                        <p><CheckIcon className="sections-icons"/>Proration & Invoicing</p>
                        <p><CheckIcon className="sections-icons"/>Tax management</p>
                        <p><CheckIcon className="sections-icons"/>Payment Methods</p>
                    </div>
                    <Button variant="outlined" className="recurring-bill-sections-button">Learn more < ArrowForwardIcon className="recurring-button-icon"/></Button>
                </div>
                <div>
                    <img src="https://webstatic.chargebee.com/assets/web/351/images/home/lemon/revenue-operations-graphic.svg" alt="recurring-bill"/>
                </div>
            </div>


            <div className="revenue-management-block">
                <div className="revenue-management-content">
                    <p className="revenue-mgmt-header">Works With Your </p>
                    <p className="revenue-mgmt-header-second">Revenue Management Stack</p>
                    <p className="revenue-mgmt-subText">Managing sales, payments, customer experience or your books: if it affects your revenue cycle, Chargebee works with it.</p>
                </div>
                <div>
                    <img src="https://webstatic.chargebee.com/assets/web/351/images/home/lemon/revenue-management.svg" alt="revenue-mangement" className="revenue-mgmt-image"/>
                </div>
            </div>

            <div className="revenue-grid-block">
                <div className="revenue-grid">
                    <div className="revenue-singleGrid">
                        <p className="revenue-grid-subText">Quote-to-Cash Automation</p>
                        <p className="revenue-grid-header">Powers Sales and Marketing CRM</p>
                        <div>
                            <img src="https://webstatic.chargebee.com/assets/web/351/images/home/lemon/crm-logos.png" alt="salesforce" />
                        </div>
                        <p className="revenue-grid-bottomText">Handle quotes, approvals, acceptance, and collections seamlessly from within the CRM.</p>
                        <Button variant="contained" className="revenue-grid-buttons">Learn more < ArrowForwardIcon className="recurring-button-icon"/></Button>
                    </div>
                    <div className="revenue-singleGrid">
                        <p className="revenue-grid-subText">Offer More Payment Methods</p>
                        <p className="revenue-grid-header">25+ Payment Gateways</p>
                        <div>
                            <img src="https://webstatic.chargebee.com/assets/web/351/images/home/lemon/pg-logos.png" alt="salesforce" />
                        </div>
                        <p className="revenue-grid-bottomText">Accept payments across a wide array of gateways, geographies, and currencies.</p>
                        <Button variant="contained" className="revenue-grid-buttons">Learn more < ArrowForwardIcon className="recurring-button-icon"/></Button>
                    </div>
                    <div className="revenue-singleGrid">
                        <p className="revenue-subText">Streamline Finance Operations</p>
                        <p className="revenue-grid-header">Syncs with Accounting Software</p>
                        <div>
                            <img src="https://webstatic.chargebee.com/assets/web/351/images/home/lemon/acc-logos.png" alt="salesforce" />
                        </div>
                        <p className="revenue-grid-bottomText">Reconcile books in seconds, handle compliance, and recognize revenue painlessly.</p>
                        <Button variant="contained" className="revenue-grid-buttons">Learn more < ArrowForwardIcon className="recurring-button-icon"/></Button>
                    </div>
                </div>

                <div className="talk-to-us-section">
                    <p>Talk to us today about your revenue workflow</p>
                    <Button variant="contained" className="hero-block-demoButton">Schedule a Demo<ArrowForwardIcon className="buttonIcons"/></Button>
                </div>
                <div className="seperator"></div>

                <BottomCards />
            </div>
        </div>
    )
}

export default MiddlePage;
