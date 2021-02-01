import React, { useEffect } from "react"
import Nav from "../Nav/Nav"
import HeroBlock from "../HeroBlock/HeroBlock"
import MiddlePage from "../MiddlePage/MiddlePage"
import Footer from "../Footer/Footer"
import FooterBanner from "../FooterBanner/FooterBanner"

import "./HomePage.css"


const HomePage = () => {

    return (
        <>
            <Nav />
            <HeroBlock />
            <MiddlePage />
            <Footer />
            <FooterBanner />
        </>
    )
}

export default HomePage;