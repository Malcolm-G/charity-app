import React from "react";

export default function DetailsPage(){
    
    return (
        <div style={{width:"60%"}}>

            <div className="card mt-3 mb-3" >
                <img src="https://econsultancy.imgix.net/content/uploads/2018/01/05151122/ROW-50-charity.png" 
                alt="charity-image" style={{height:"110px",objectFit: "cover"}}/>
                <div className="card-body">
                    <h5>HONOR SOCIETY OF PHI KAPPA PHI</h5>
                    <em>Arts, Culture and Humanities</em>
                    <p>EIN: 261149993</p>
                </div>
            </div>

            <div className="card mb-3" >
                <div className="card-body">
                    <h3>Location</h3>
                    <p>EVANSVILLE, Indiana</p>
                    <p>Zip Code: 47728-0417</p>
                </div>
            </div>

            <div className="card " >
               <div className="card-body">
                    <h3>MISSION STATEMENT</h3>
                </div>
            </div>

        </div>
            
    )
}