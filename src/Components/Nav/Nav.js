import React , {useState, useEffect, useCallback}  from "react"
import Button from '@material-ui/core/Button';
import LockIcon from '@material-ui/icons/Lock';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { data } from "../../data/FooterData"

import "./Nav.css"

const Nav = () => {

    const footerData = data
    const [prev, setPrev] = useState(window.scrollY)

    const handleNavigation = useCallback(
        e => {
            const window = e.currentTarget

            if(prev > 500 && prev > window.scrollY) {

                let navRef = document.querySelector(".navBar-clone")
                navRef.style.top = "0px"


            } else if(prev < window.scrollY || prev < 500) {

                let navRef = document.querySelector(".navBar-clone")
                navRef.style.top = "-100px"
            }

            setPrev(window.scrollY)
        },[prev]
    );

    useEffect(() => {
        setPrev(window.scrollY)
        window.addEventListener('scroll', handleNavigation)

        return () => {
            window.removeEventListener("scroll", handleNavigation)
        }
    },[handleNavigation])

    const handleMouseEnter = (val) => {
        console.log(45, val)
        let expandListRef = document.querySelector(".navBar-expandList")
        expandListRef.style.display = "block"
    }

    const handleMouseLeave = val => {
        let expandListRef = document.querySelector(".navBar-expandList")
        expandListRef.style.display = "none"
    }


    return (
        <>
            <div className="navBar">
                <div className="navBar-logo">
                    
                </div>
                <div className="navBar-menu">
                    <h3>CHARGEBEE</h3>
                    <p onMouseEnter={() => {handleMouseEnter("Product")}} onMouseLeave={() => {handleMouseLeave("Product")}}>Product</p>
                    <p><a href="https://www.chargebee.com/pricing/?ref=navbar">Pricing</a></p>
                    <p onMouseEnter={() => {handleMouseEnter("Product")}} onMouseLeave={() => {handleMouseLeave("Product")}}>Solutions</p>
                    <p><a href="https://www.chargebee.com/pricing/?ref=navbar">Customers</a></p>
                    <p onMouseEnter={() => {handleMouseEnter("Product")}} onMouseLeave={() => {handleMouseLeave("Product")}}>Resources</p>
                </div>
                <div className="navBar-login">
                    <a href="https://app.chargebee.com/login" className="login"><LockIcon className="lockIcon"/>Log in <ChevronRightIcon /></a>
                    <Button variant="contained" color="secondary" className="schedule-button">Schedule a Demo <ChevronRightIcon /></Button>
                </div>
            </div>
            <div className="navBar-expandList">
                <div className="navBar-expandList-content">
                    { footerData.map((item, index) => {
                        return (
                            <div className="footer-inside" key={index}>
                                <p>{item.title}</p>
                                <ul>
                                    { item.contentList.map((content, indx) => {
                                        return (
                                            <li key={indx}><a href={content.link}>{content.name}</a></li>
                                        )
                                    }) }
                                </ul>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="navBar-clone">
            <div className="navBar-logo">
                
            </div>
            <div className="navBar-menu">
                <h3>CHARGEBEE</h3>
                <p>Product</p>
                <p>Pricing</p>
                <p>Solutions</p>
                <p>Customers</p>
                <p>Resources</p>
            </div>
            <div className="navBar-login">
                <a href="https://app.chargebee.com/login" className="login"><LockIcon className="lockIcon-clone"/>Log in <ChevronRightIcon /></a>
                <Button variant="contained" color="secondary" className="schedule-button">Schedule a Demo <ChevronRightIcon /></Button>
            </div>
        </div>
        </>
    )
}

export default Nav;