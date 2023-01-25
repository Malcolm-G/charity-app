import React, { useEffect, useState } from "react";
import CardComponent from "./Card";
import "../stylesheets/finder.css"

function Finder({charityList}){

    const [charities,setCharities] =useState([...charityList])
    const [categories, setCategories] = useState([])
    const [state, setState] = useState("")
    const [category, setCategory] = useState("")

    useEffect(() => {
        fetch("https://json-server-vercel2-gamma.vercel.app/data")
        .then(response => response.json())
        .then(data => setCategories(data))
    },[])

    useEffect(() => {
        setCharities([...charityList])
    },[charityList])

    function handleSearch(e){
        e.preventDefault()
        const newResults = charities.filter(charity => charity.state === state && charity.category === category)
        setCharities(newResults)
        setCategory("")
        setState("")
    }

    const categoryOptions = categories.map((category,index) => <option key={index} value={category.categoryDesc}>{category.categoryDesc}</option> )

    const states = ([...new Set(charities.map(location => location.state))])
    const location = states.map((state,index) => <option key={index} value={state}>{state}</option>)

    const charityCard = charities.map((charity) => {
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
        <form onSubmit={handleSearch}>   

            {/* input for search category */}
            <label htmlFor="category">Category:</label>
            <select className="form-select" name="category" id="category" onChange={e => setCategory(e.target.value)}>
                {categoryOptions}
            </select>

            {/*input for search location*/}
            <label htmlFor="location">Location:</label>
            <select className="form-select" name="location" id="location" onChange={e => setState(e.target.value)}>
                <option value="All" selected>All</option>
                {location}
            </select>

            <input type="submit" className="btn btn-primary" value="Search"/>

        </form>

        <div id="searchResults" className="row">
            <h3 >Search Results({charities.length})</h3>
           {charityCard} 
        </div>
        
        </>
    )
}

export default Finder;