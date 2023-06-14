import axios from "axios";
import React, { useState } from "react";
import { Formik } from "formik";
import styles from "./NewRecipe.module.css";

const NewRecipeScreen = () => {
  const [ingredients, setIngredients] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const addIngredient = () => {
    setIngredients([...ingredients, { name, quantity }]);
    setName("");
    setQuantity("");
  };

  const initialValues = {
    type: "",
    recipeName: "",
    imageURL: "",
    prepTime: "",
    cookTime: "",
    serves: "",
    ingredients: [],
    instructions: "",
  };

  const onSubmit = (values) => {
    values.ingredients = ingredients;

    axios.post("https://recipes.devmountain.com/recipes", values);

    console.log(values);
  };

  const ingredientDisplay = ingredients.map((ing, index) => {
    return (
      <li>
        {ing.quantity} {ing.name}
      </li>
    );
  });

  return (
    <section>
      <h1>Tell us about your Recipe!</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, handleSubmit, handleChange }) => (
          <form onSubmit={handleSubmit}>
            <div className={styles.input_container}>
              <input
                placeholder="Name"
                onChange={handleChange}
                value={values.recipeName}
                name="recipeName"
              />
              <input
                placeholder="Image URL"
                onChange={handleChange}
                value={values.imageURL}
                name="imageURL"
              />
            </div>
            <div className={styles.radio_container}>
              <span>
                <input
                  type="radio"
                  value="Cook"
                  name="type"
                  onChange={handleChange}
                />
                <label>Cook</label>
              </span>
              <span>
                <input
                  type="radio"
                  value="Bake"
                  name="type"
                  onChange={handleChange}
                />
                <label>Bake</label>
              </span>
              <span>
                <input
                  type="radio"
                  value="Drink"
                  name="type"
                  onChange={handleChange}
                />
                <label>Drink</label>
              </span>
            </div>
            <div className={styles.input_container}>
              <input
                placeholder="Prep Time"
                onChange={handleChange}
                value={values.prepTime}
                name="prepTime"
              />
              <input
                placeholder="Cook Time"
                onChange={handleChange}
                value={values.cookTime}
                name="cookTime"
              />
              <input
                placeholder="Serves"
                onChange={handleChange}
                value={values.serves}
                name="serves"
              />
            </div>
            <div className={styles.input_container}>
              <div className={styles.ingredient_inputs}>
                <input
                  placeholder="Ingredient"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  placeholder="Quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
              <ul>{ingredientDisplay}</ul>
            </div>
            <button
              type="button"
              className="orange-btn"
              onClick={addIngredient}
            >
              Add
            </button>
            <div className={styles.input_container}>
              <textarea
                placeholder="What are the instructions?"
                value={values.instructions}
                onChange={handleChange}
                name="instructions"
              />
            </div>
            <button className="blue-btn" type="submit">
              Save
            </button>
          </form>
        )}
      </Formik>
    </section>
  );
};

export default NewRecipeScreen;
