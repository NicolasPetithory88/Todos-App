import React from 'react'
import Navbar from '../functionBased/components/Navbar'
// import {useMatch } from 'react-router-dom'

const About = () => {
    // console.log(useMatch());
    return (
        <div className="about__content">
            <Navbar />
            <h3>Hello from the about page</h3>
        </div>
    )
}

export default About