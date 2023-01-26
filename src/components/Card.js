import React from "react"
import {Link, useNavigate} from "react-router-dom"

export default function CardComponent({charityName, category, city, state,takeName}){

    const navigate = useNavigate()

    function handleClick()
    {
        navigate(`/details/${charityName}`)
    }

    return (
         <>
         <div className="card col-3 mb-2 me-5 h-100" style={{width:'350px'}}>
            <div className="card-body">
                <h5>{charityName}</h5>
                <h6>{category}</h6>
                <p>{city}, {state}</p>
                <Link className="btn btn-primary col-6 me-2" to={`/details/${charityName}`} >Show Details</Link>
                <button className="btn btn-success col-4">$ Donate</button>
            </div>
        </div>
         </>
        
        
    )
}