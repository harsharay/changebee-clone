import React from "react"
import { data } from "../../data/FooterData"
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import "./Footer.css"

const Footer = () => {

    const footerData = data

    return (
        <div className="footer-block">
            <div className="footer-content">
                { footerData.map((item, index) => {
                    return (
                        <div className="footer-inside" key={index}>
                            <p>{item.title}<ChevronRightIcon /></p>
                            <ul>
                                { item.contentList.map((content, indx) => {
                                    return (
                                        <li key={indx}><a href={content.link}>{content.name}</a></li>
                                    )
                                })}
                            </ul>
                        </div>
                    )
                }) }
            </div>


        </div>
    )
}

export default Footer;