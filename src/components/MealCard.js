import React from "react";

const MealCard = ({ meal }) => {
  return (
    <div>
      <h3>{meal.strMeal}</h3>
      <img src={meal.strMealThumb} alt={"Image de " + meal.strMeal} />
      <p>Origine : {meal.strArea}</p>
      <p>{meal.strInstructions.slice(0, 800) + "..."}</p>
    </div>
  );
};

export default MealCard;
