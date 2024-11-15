import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import { useParams } from 'react-router-dom'; // Corrected 'useparams' to 'useParams'
import './Mealinfo.css';


const Mealinfo = () => {
  const { mealid } = useParams(); // Destructuring mealid from the URL params
  const [info, setInfo] = useState(null); // Initialize state for storing meal info

  // Function to fetch meal data
  const getInfo = async () => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
    const jsonData = await response.json();
    console.log(jsonData.meals[0]);
    setInfo(jsonData.meals[0]); // Update state with fetched meal data
  };

  useEffect(() => {
    if (mealid) {
      getInfo(); // Only fetch info when mealid is available
    }
  }, [mealid]); // Dependency on mealid to refetch when it changes

  // Loading or error handling can be added here
  if (!info) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mealInfo">
      <img src={info.strMealThumb} alt={info.strMeal} />
      <div className="info">
        <h1>Recipe Detail</h1>
        <button>{info.strMeal}</button>
        <h3>Instructions</h3>
        <p>{info.strInstructions}</p>
      </div>
    </div>
  );
};

export default Mealinfo;
