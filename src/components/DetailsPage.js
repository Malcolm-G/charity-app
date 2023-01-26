import React from "react";

export default function DetailsPage(){
    
    return (
        <div style={{width:"70%"}}>

            <div className="card mb-3" >
                <img src="https://econsultancy.imgix.net/content/uploads/2018/01/05151122/ROW-50-charity.png" 
                alt="charity-image" style={{height:"110px",objectFit: "cover"}}/>
                <div className="card-body">
                    <h5>HONOR SOCIETY OF PHI KAPPA PHI</h5>
                    <h6>EIN: 261149993</h6>
                    <p>EVANSVILLE, Indiana</p>
                </div>
            </div>

            <div className="card " >
                <div className="card-body">
                    <h3>MISSION STATEMENT</h3>
                </div>
            </div>

            <div className="card " >
                <div className="card-body">

                </div>
            </div>

        </div>
            
    )
}