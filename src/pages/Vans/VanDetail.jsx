
import {useState, useEffect} from "react"

import {useParams} from 'react-router-dom'

export default function VanDetail() {

    const [van, setVan] = useState([])
    let vanIdd = useParams().id;


    useEffect(()=> {
        fetch(`/api/vans/${vanIdd}`)
        .then(res => res.json())
        .then(data => {
            setVan(data.vans)
        })
    },
    [vanIdd])


    return(
        <div className="van-detail-container">

            {
                van ? (
                    <div className="van-detail">
                        <img src={van.imageUrl} alt="Van Image" />
                        <i className={`van-type ${van.type} selected`}>{van.type}</i>
                        <h2>{van.name}</h2>
                        <p className="van-price"><span>${van.price}</span>/day</p>
                        <p>{van.description}</p>
                        <button className="link-button">Rent this</button>
                    </div>
                ) : <h2>Loading</h2>
            }
        </div>
    )
}