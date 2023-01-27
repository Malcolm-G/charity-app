import React  from "react";
import '../stylesheets/home.css'

import CardComponent from "./Card";
import { useEffect, useState } from 'react';

function Home({charityList, categories,isLoggedIn}){

    const charityCard = charityList.map((charity,index) => {
       if (index<=10){return (
        <CardComponent 
        key={charity.ein}
        charityName={charity.charityName} 
        category={charity.category} 
        city={charity.city}
        state={charity.state}
        ein={charity.ein}
        isLoggedIn={isLoggedIn}
        />
        )}
        })

  

        const categoryOptions = categories.map((category,index) => 
        {

          console.log(category.categoryDesc)

          if (category.categoryDesc === "Not Provided" || category.categoryDesc=== "Unknown"){ return null}
          else if(category.categoryDesc === undefined){return null}
          else{

          return(
          <ul className="col-3 border border-dark card-style" key={index} value={category.categoryId}>{category.categoryDesc}</ul>
          )
          }
        }    
        
           
         )
         
        
    return(
        <div>
            {/* <header className="container bg-body-tertiary">
          <p>Come and make them Smile</p>
          </header> */}
          <div className=" container home-pic text-muted bg-body-tertiary">
            <h1 id="welcome">WELCOME !!</h1>
            <div>
            <p>We are your trusted partners in support of charity and charity organizations </p>
            <p className="me-5 ms-5">Touch A Life is a non-profit organization that represents charity organizations which have undergone a series of screening to ensure they meet the highest standards of public accountability and effectiveness. </p>

            <p>We guarantee every partner charity included is financially competent and is a non-profit organization </p>
            <p><span>For more details go to our charity-finder</span></p>
            </div>
            <h4 className="mb-0">Some of our enlisted charity organizations </h4>
            <div id='home-list' className="d-flex " >
             {charityCard}
            </div>
             <div>
            <h4 className="mt-5 display-4">Charity Categories</h4>
            <div className="container">
            <div className="row  border-dark">
              {categoryOptions}
             </div>
             </div>
             </div>
          </div>

        </div>
    )
}

export default Home;