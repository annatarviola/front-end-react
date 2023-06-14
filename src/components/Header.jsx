import React from "react";
import { Link } from "react-router-dom";
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <h2>Devmountain Eatery</h2>
      <nav>
        <Link to="">
          <button className='orange-btn'>Home</button>
        </Link>
        <Link to="newRecipe">
          <button className='orange-btn'>Add Recipe</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
