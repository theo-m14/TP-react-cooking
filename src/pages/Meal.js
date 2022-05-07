import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import MealCard from "../components/MealCard";

const Meal = () => {
  const [mealData, setMealData] = useState([]);
  const [searchedMeal, setSearchedMeal] = useState("");

  const getMeal = useCallback(() => {
    axios
      .get(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=" + searchedMeal
      )
      .then((res) => setMealData(res.data.meals));
  }, [searchedMeal]);

  useEffect(() => {
    getMeal();
  }, [getMeal]);

  return (
    <div>
      <h1>React Meal</h1>
      <input
        type="text"
        placeholder="Recherche de plat"
        onChange={(e) => {
          setSearchedMeal(e.target.value);
          getMeal();
        }}
      />
      <div className="meal-container">
        {mealData &&
          mealData.map((meal) => <MealCard meal={meal} key={meal.idMeal} />)}
      </div>
    </div>
  );
};

export default Meal;
