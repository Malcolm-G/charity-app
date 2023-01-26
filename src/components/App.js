import React,{ useEffect, useState } from 'react';
import { Route,Routes } from 'react-router-dom';
import '../stylesheets/App.css';
import Home from './Home';
import Finder from './Finder';
import Navbar from './Navbar';
import DonationPage from './DonationPage';


function App() {

  const SEARCH_API = "https://charity-app-charity-list-db-json.vercel.app/api/data"

  const [charityList,setCharityList] = useState([]);

  useEffect(()=>{
    fetch(SEARCH_API)
    .then(resp=>resp.json())
    .then(data=>setCharityList(()=>data))
    console.log(charityList)
  },[])
  
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route
        exact path="/"
        element={<Home charityList={charityList} />}
        />
        <Route
        path="/finder"
        element={<Finder charityList={charityList}/>}
        />
        <Route
         path="/donations"
         element={<DonationPage />}
         />
      </Routes>
    </div>

  );
}

export default App;
