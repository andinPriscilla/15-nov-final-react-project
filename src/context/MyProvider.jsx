import React, { useEffect, useState } from "react";

import MyContext from "./MyContext";

const MyProvider = (props) => {
  const [categories, setCategories] = useState([]);
  const [meals, setMeals] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [searchFeedback, setSearchFeedback] = useState("")

  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");

  

  useEffect(() => {
    try {
      const getInfo = async () => {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        const data = await response.json();
        setCategories(data.categories);
      };
      getInfo();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <MyContext.Provider
      value={{
        categories,
        meals,
        setMeals,
        ingredients,
        setIngredients,
        setInput,
        input,
        search,
        setSearch,
        searchFeedback,
        setSearchFeedback
        
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default MyProvider;
