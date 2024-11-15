import React from 'react';
import { useState } from 'react';
import './Mainpage.css';  // Assuming you will create this CSS file
import Mealcards from './Mealcards';

const Mainpage = () => {
    const [data, setData] = useState();
    const [search, setSearch] = useState();

    const handleInput = (event) => {
        setSearch(event.target.value)
    }

    const myFun = async () => {
        const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
        const jsonData = await get.json();
        console.log(jsonData.meals);
        setData(jsonData.meals);
    }
    
    console.log(data);

  return (
    <div className="container">
      <div className="searchBar">
        <input type="text" placeholder="Enter your Dish" onChange={handleInput}/>
        <button onClick={myFun}>Search</button>
      </div>
      <div>
       <Mealcards detail = {data} /> 
      </div>
    </div>
  );
};

export default Mainpage;
