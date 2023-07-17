import  {useEffect, useState} from "react";
import {NavLink, Outlet, Link, useParams} from "react-router-dom";
import "../../Styles/index.css"

export const HostVanDetails = () =>{

    const[van, setVan] = useState({});
    let id = useParams().vanId
 

    useEffect((e)=>{
        fetch(`/api/host/vans/${id}`)
        .then(res => {
            if(!res.ok){
                throw new Error("failed fetch request for van data");
            }
            return res.json();
        })
        .then(({vans}) =>{
              setVan(vans)
        })
    },[van])

    const activeLinks ={
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return(
        <>
        
        {van ?
        <section>
        <Link to=".." className="back-button">&larr;<span>Back to all vans</span></Link>
        <div className="host-van-detail-layout-container">
            <div className="host-van-detail">
                <img src={van.imageUrl} width={150} alt={`Picture of ${van.name}`} />
                <div className="host-van-detail-info-text">
                    <i>{van.type}</i>
                    <h2>{van.name}</h2>
                    <p>${van.price}/day</p>
                </div>
            </div>

            <nav className="host-van-detail-nav">
                <NavLink to="." end className={({isActive}) => isActive ? activeLinks : null }>Description</NavLink>
                <NavLink to="pricing"  className={({isActive}) => isActive ? activeLinks : null }>Pricing</NavLink>
                <NavLink to="photos" className={({isActive})  =>  isActive ? activeLinks : null}>Photos</NavLink>
            </nav>
            <Outlet></Outlet>
        </div> 
      </section>
        :
        <h2>Loading...</h2>
        }
        </>
    )
}