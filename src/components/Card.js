import React from "react";


export default function CardComponent({charityName, category, city, state}){

    return (
        <div className="card col-4 mb-2 me-3 mt-5 card-style" style={{width:'25rem'}}>
            <div className="card-body position-relative text-primary">
                <h5>{charityName}</h5>
                <h6>{category}</h6>
                <p>{city}, {state}</p>
                <div className="">
                <button className="btn btn-danger col-6 me-2 ">Show Details</button>
                <button className="btn btn-info col-4 ">$ Donate</button>
                </div>
            </div>
        </div>
    )
}