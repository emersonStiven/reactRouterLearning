import React from "react";
import {NavLink, Outlet} from "react-router-dom"
import {useState} from "react"


const activeLinks = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
}

export const LayoutHost = () =>{
    return(
        <div>
            <nav className="host-nav">
                <NavLink to="/host" end style={({isActive}) => isActive ? activeLinks : null  }>Dashboard</NavLink> 

                <NavLink to="/host/income" style={({isActive}) => isActive ? activeLinks : null}>Income</NavLink>

                <NavLink to="/host/myvans" style={(objj) => objj.isActive ? activeLinks : null}>My Vans</NavLink>

                <NavLink to="/host/reviews" style={({isActive}) => isActive ? activeLinks : null}>Reviews</NavLink>
            </nav>
            <Outlet></Outlet>
        </div>
    )
}