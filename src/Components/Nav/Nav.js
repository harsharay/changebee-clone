import React , {useState, useEffect, useCallback}  from "react"
import Button from '@material-ui/core/Button';
import LockIcon from '@material-ui/icons/Lock';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import "./Nav.css"

const Nav = () => {

    const [prev, setPrev] = useState(window.scrollY)

    const handleNavigation = useCallback(
        e => {
            const window = e.currentTarget
            console.log(15,window.scrollY, prev)

            if(prev > 500 && prev > window.scrollY) {
                console.log("Scrolling up")

                let navRef = document.querySelector(".navBar-clone")
                navRef.style.top = "0px"


            } else if(prev < window.scrollY || prev < 500) {
                console.log("Scrolling down")

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


    return (
        <>
            <div className="navBar">
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
                    <a href="https://app.chargebee.com/login" className="login"><LockIcon className="lockIcon"/>Log in <ChevronRightIcon /></a>
                    <Button variant="contained" color="secondary" className="schedule-button">Schedule a Demo <ChevronRightIcon /></Button>
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