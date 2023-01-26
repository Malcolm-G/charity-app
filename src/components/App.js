import React,{ useEffect, useState } from 'react';
import { Route,Routes } from 'react-router-dom';
import '../stylesheets/App.css';
import Home from './Home';
import Finder from './Finder';
import Navbar from './Navbar';
import DonationPage from './DonationPage';
import LoginPage from './login/LoginPage';
import SignUp from './login/SignUp';
import Login from './login/Login';


function App() {

  const SEARCH_API = "https://charity-app-charity-list-db-json.vercel.app/api/data"

  const [charityList,setCharityList] = useState([]);

  useEffect(()=>{
    fetch(SEARCH_API)
    .then(resp=>resp.json())
    .then(data=>setCharityList(()=>data))
    console.log(charityList)
  },[])

  const [categories, setCategories] = useState([])

  useEffect(() => {
      fetch("https://json-server-vercel2-gamma.vercel.app/data")
      .then(response => response.json())
      .then(data => setCategories(data))
  },[])
  
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route
         path="/login"
         element={<Login />}
         />
         <Route
         path="/signup"
         element={<SignUp />}
         />
        <Route
        exact path="/"
        element={<Home charityList={charityList} categories={categories} />}
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
