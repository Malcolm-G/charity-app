import React,{ useEffect, useState } from 'react';
import { Route,Routes } from 'react-router-dom';
import '../stylesheets/App.css';
import Home from './Home';
import Finder from './Finder';

function App() {

  const SEARCH_API = "https://charity-app-charity-list-db-json.vercel.app/api/data"

  const [charityList,setCharityList] = useState([]);

  useEffect(()=>{
    fetch(SEARCH_API)
    .then(resp=>resp.json())
    .then(data=>setCharityList(()=>data))
  },[])
  return (
    <div>
        <Routes>
          <Route
          exact path="/"
          element={<Home charityList={charityList} />}
          />
          <Route
          path="/finder"
          element={<Finder charityList={charityList}/>}
          />
        </Routes>
    </div>

  );
}

export default App;
