import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const MyVans = () => {

  const [vans, setVans] = useState(null);
  let myVans = [];
  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then(({ vans }) => {
        setVans(vans);
      });
  }, [vans]);



  return (
    <>
      <h1>Your listed vans</h1>
      {vans ?  
      <div className="host-vans-list">
        <section>
            {
                vans.map((e) => (
                    <Link to={`/host/myvans/${e.id}`} className="host-van-link-wrapper"
                    key={e.id}>
                      <div className="host-van-single">
                        <img src={e.imageUrl} alt={`Photo of ${e.name}`} />
                        <div className="host-van-info">
                          <h3>{e.name}</h3>
                          <p>${e.price}</p>
                        </div>
                      </div>
                    </Link>
              )) 
            }
        </section> 
      </div>
       : <h2>Loading...</h2>}
    </>
  );
};
