import React from 'react';
import { NavLink } from 'react-router-dom';  // Import NavLink correctly

const Mealcards = ({ detail }) => {
  console.log(detail);

  return (
    <div className='meals'>
      {/* Display a message if no data is available */}
      {!detail ? (
        <p>No meals found. Try searching for another dish!</p>
      ) : (
        detail.map((curItem) => {
          return (
            <div key={curItem.idMeal} className="mealImg">
              <img src={curItem.strMealThumb} alt={curItem.strMeal} />
              <p>{curItem.strMeal}</p>
              {/* Correct string interpolation in the 'to' prop */}
              <NavLink to={`/recipe/${curItem.idMeal}`}>
                <button>View Recipe</button>
              </NavLink>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Mealcards;


