import React from 'react';
import {Link} from "react-router-dom"
import "../Styles/index.css"


export default function Home  () {
  return (
    <div className='home-container'>
        <h1>You got the travel plans, we got the travel vans.</h1>
        <p>Add adventrue to your life by joining the #vanlife movement, make your perfect road trip</p>
        <Link to="vans">Find your van</Link>
    </div>
  )
}
