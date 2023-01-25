import React, { useEffect, useState } from "react";
import CardComponent from "./Card";

function Finder({charityList}){

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch("https://json-server-vercel2-gamma.vercel.app/data")
        .then(response => response.json())
        .then(data => setCategories(data))
    },[])

    const categoryOptions = categories.map(category => <option key={category.categoryId} value={category.categoryId}>{category.categoryDesc}</option> )

    const charityCard = charityList.map((charity) => {
        return (
        <CardComponent 
        key={charity.ein}
        charityName={charity.charityName} 
        category={charity.category} 
        city={charity.city}
        state={charity.state}
        />
        )})

    return(
        <>
        <form>   

            {/* input for search category */}
            <label htmlFor="category">Category:</label>
            <select className="form-select" name="category" id="category">
                {categoryOptions}
            </select>

            {/*input for search location*/}
            <label htmlFor="location">Location:</label>
            <select className="form-select" name="location" id="location">
                <option value="All" selected>All</option>
            </select>

            <input type="submit" className="btn btn-primary" value="Search"/>

        </form>

        <div id="searchResults" className="row">
            <h3 >Search Results({charityList.length})</h3>
           {charityCard} 
        </div>
        
        </>
    )
}

export default Finder;