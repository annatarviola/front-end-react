import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./DetailsScreen.module.css";
import salmon from "../../assets/salmon.jpg";

const DetailScreen = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState([]);
  
  useEffect(() => {
    axios.get(`https://recipes.devmountain.com/recipes/${id}`).then((res) => {
      setRecipe(res.data);
    });
  }, []);

  console.log(recipe)
  
  const ingredient = recipe.ingredients && recipe.ingredients.map((ing, index) => {
    return <h4>{ing.quantity} {ing.ingredient}</h4>
  })

  return (
    <section>
      <div
        className={styles.banner}
        style={{
          background: `linear-gradient(
          190deg,
          rgba(0, 0, 0, 0.8),
          rgba(0, 0, 0, 0.8)),
          url(${recipe.image_url})`,
          backgroundSize: "cover",
        }}
      >
        <h1>{recipe.recipe_name}</h1>
      </div>
      <section className={styles.details_container}>
        <div className={`${styles.ingredients} ${styles.container}`}>
          <h2>Recipe</h2>
          <h4>Prep Time: {recipe.prep_time}</h4>
          <h4>Cook Time: {recipe.cook_time}</h4>
          <h4>Serves: {recipe.serves}</h4>
          <br />
          <h2>Ingredients</h2>
          {ingredient}
        </div>

        <div className={`${styles.instructions_container} ${styles.container}`}>
          <h2>Instructions</h2>
          <p style={{whiteSpace: "pre-wrap"}}>
            {recipe.instructions && JSON.parse(recipe.instructions)}
          </p>
        </div>
      </section>
    </section>
  );
};

export default DetailScreen;
