import React from "react";
import { useParams } from "react-router-dom";

export default function DetailsPage({charityList}){

    const params = useParams()

    const data = charityList.filter((charity) => charity.charityName === params.name)
    const  [details] = data

        return (
        <div style={{width:"60%", marginLeft:"280px"}}>

            <div className="card mt-3 mb-3" >
                <img src="https://econsultancy.imgix.net/content/uploads/2018/01/05151122/ROW-50-charity.png" 
                alt="charity-image" style={{height:"200px",objectFit: "cover"}}/>
                <div className="card-body">
                    <h5>{details.charityName}</h5>
                    <em>{details.category}</em>
                    <p>EIN: {details.ein}</p>
                </div>
            </div>

            <div className="card mb-1" >
                <div className="card-body">
                    <h3>LOCATION</h3>
                    <p>{details.city}, {details.state}</p>
                    <p>Zip Code: {details.zipCode}</p>
                </div>
            </div>

        </div>
            
    )
}