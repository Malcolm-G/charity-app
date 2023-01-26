import React from "react"
import {Link, useNavigate} from "react-router-dom"

export default function CardComponent({charityName, category, city, state,takeName}){

    const navigate = useNavigate()

    function handleClick()
    {
        navigate(`/details/${charityName}`)
    }

    return (

<div className="card col-4 mb-2 me-3 mt-5 card-style" style={{width:'25rem'}}>
            <div className="card-body position-relative text-primary">
                <h5>{charityName}</h5>
                <h6>{category}</h6>
                <p>{city}, {state}</p>
                <div className="">
                  <Link className="btn btn-danger col-6 me-2" to={`/details/${charityName}`} >Show Details</Link>
                  <button className="btn btn-info col-4 ">$ Donate</button>
                 </div>
            </div>
    </div>
        
        
    )
}