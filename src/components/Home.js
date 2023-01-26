import React  from "react";
import '../stylesheets/home.css'
import CardComponent from "./Card";
import { useEffect, useState } from 'react';

function Home({charityList, categories}){

    const charityCard = charityList.map((charity,index) => {
       if (index<=10){return (
        <CardComponent 
        key={charity.ein}
        charityName={charity.charityName} 
        category={charity.category} 
        city={charity.city}
        state={charity.state}
        />
        )}
        })

  

        const categoryOptions = categories.map((category,index) => 
            
        <ul className="col-3 border border-dark" key={index} value={category.categoryId}>{category.categoryDesc}</ul>
           
         )
         
         
    return(
        <div>
            <header>
          <h1>TOUCH A LIFE</h1>
          <p>Come and make them Smile</p>
          </header>
          <div className="home-pic text-muted">
            <h3>WELCOME !!</h3>
            <p>We are your trusted partners in support of charity and charity organizations </p>
            <p>Touch A Life is a non-profit organization that represents charity organizations which have undergone a series of screening to ensure they meet the highest standards of public accountability and effectiveness. </p>
            <p>We guarantee every patner charity included is financially competent and is a non-profit organization </p>
            <h4>Some of our enlisted charity organizations </h4>
            <div id='home-list' className="d-flex " >
             {charityCard}
            </div>
             <div>
            <h4 className="mt-5 display-4">Charity Categories</h4>
            <div className="container">
            <div className="row border border-dark">
              {categoryOptions}
             </div>
             </div>
             </div>
          </div>

        </div>
    )
}

export default Home;