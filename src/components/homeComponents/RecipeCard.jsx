import styles from "./RecipeCard.module.css";
import Navigate, { useNavigate } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(`/recipe/${recipe.recipe_id}`);
  };

  return (
    <div className={styles.recipe_card}>
      <div className={styles.img_container}>
        <img src={recipe.image_url} />
      </div>
      <h2>{recipe.recipe_name}</h2>
      <button className="blue-btn" onClick={clickHandler}>
        See More
      </button>
    </div>
  );
};

export default RecipeCard;
