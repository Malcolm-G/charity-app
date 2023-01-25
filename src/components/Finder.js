import React, { useEffect, useState } from "react";
import CardComponent from "./Card";
import "../stylesheets/finder.css"

function Finder({charityList}){

    const [categories, setCategories] = useState([])
    const [state, setState] = useState("All")
    const [category, setCategory] = useState("Not Provided")

    useEffect(() => {
        fetch("https://json-server-vercel2-gamma.vercel.app/data")
        .then(response => response.json())
        .then(data => setCategories(data))
    },[])


        const searchResults = charityList.filter((item) => {
            if(category === "Not Provided"){
                return true
            }else{
            return item.category.toLowerCase().includes(category.toLowerCase())
        }
        })
        const finalResult = searchResults.filter((result) => {
            if(state === "All"){
                return true
            }else{
            return result.state.toLowerCase().includes(state.toLowerCase())
            }
        })
    
    const categoryOptions = categories.map((category,index) => <option key={index} value={category.categoryDesc}>{category.categoryDesc}</option> )
    const states = ([...new Set(charityList.map(location => location.state))])
    const location = states.map((state,index) => <option key={index} value={state}>{state}</option>)

    const charityCard = finalResult.map((charity) => {
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
        <div class="row">   
            {/* input for search category */}
            <label id="categoryName" htmlFor="category">Category:</label>
            <select className="form-select" name="category" id="category" onChange={e => setCategory(e.target.value)} style={{width:'300px'}}>
                {categoryOptions}
            </select>

            {/*input for search location*/}
            <label id="locationName" htmlFor="location">Location:</label>
            <select id="location" className="form-select" value={state} name="location" onChange={e => setState(e.target.value)} style={{width:'300px'}}>
                <option value="All" >All</option>
                {location}
            </select>
        </div>

        <div id="searchResults" className="row">
            <h3 >Search Results({finalResult.length})</h3>
           {charityCard} 
        </div>
        
        </>
    )
}

export default Finder;