import React from 'react'
import bgImg from "../assets/van.png"
import {Link} from "react-router-dom"

export default  function About ()  {
  return (
    <div className='about-page-container'>
        <img src={bgImg} alt="About Image" className='about-hero-image' />
        <div className='about-page-content'>
            <h1>Don't squeeze in a sedan when you could relax in a van</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ipsa quam eligendi aliquam dicta reiciendis earum accusamus aspernatur veritatis dolor in, quis sed sint maxime? Dolore quasi eaque expedita nulla.</p>
        </div>
        <div className='about-page-cta'>
            <h2>Your destination is waiting</h2>
            <Link className="link-button" to="/vans"></Link>
        </div>
    </div>
  )
}
