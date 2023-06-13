import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AdBanner from './AdBanner'

const HomeScreen = () => {
  const [recipes, setRecipes] = useState([])
  const getRecipes = () =>{
    const results = axios.get('https://recipes.devmountain.com/recipes').then((res) => {
      setRecipes(res.data)
      console.log(res.data)
    })

  }

  useEffect(() => {
    getRecipes();
  }, [])
   
  return (
    <div>
      <AdBanner />
      {/* Much code from Part 2 will be placed around here. Do your best! */}
    </div>
  )
}

export default HomeScreen