import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import RecipeCard from "./RecipeCard";
import styles from "./HomeScreen.module.css";

const RecipeContainer = ({recipes}) => {
  const [search, setSearch] = useState("");

  const recipeDisplay = recipes
    .filter((recipe, index) => {
      let title = recipe.recipe_name.toLowerCase();
      let searchParams = search.toLowerCase();
      return title.includes(searchParams);
    })
    .map((recipe, index) => {
      return <RecipeCard recipe={recipe} />;
    });

  return (
    <div className={styles.recipe_section}>
      <div className={styles.search_bar}>
        <AiOutlineSearch size="2em" color="rgb(216, 115, 0)" />
        <label htmlFor="search" />
        <input
          type="text"
          placeholder=" Search for a Recipe"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>
      <div className={styles.recipes_container}>
        {recipeDisplay ? recipeDisplay : <p>No Recipes Found</p>}
      </div>
    </div>
  );
};

export default RecipeContainer;
