import React from "react"

export default function CardComponent({charityName, category, city, state}){

    return (
        <div className="card col-3 mb-2 me-5 h-100" style={{width:'350px'}}>
            <div className="card-body">
                <h5>{charityName}</h5>
                <h6>{category}</h6>
                <p>{city}, {state}</p>
                <button className="btn btn-primary col-6 me-2">Show Details</button>
                <button className="btn btn-success col-4">$ Donate</button>
            </div>
        </div>
    )
}