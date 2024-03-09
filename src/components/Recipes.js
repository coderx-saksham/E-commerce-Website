import React from 'react'
import {useEffect,useState} from 'react';
import Recipe from './Recipe';
import styled from 'styled-components'

const Recipes = () => {

    const APP_ID = "159fc47c";
    const APP_KEY = "4e272c328a090a45e4945962452db7b0";

    const [recipes, setRecipes] = useState([]);

    const [search, setSearch] = useState('');

    const [query, setQuery] = useState('paneer');

    useEffect(() => {
        getRecipes(); //react-hooks/exhaustive-deps
    }, [query]) //react-hooks/exhaustive-deps

    const getRecipes = async () => {
        //we don't know we will get response so we will add await everytime 
        //everytime we have any promise we will add await or you can use .then()
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    
        const data = await response.json();
        // console.log(data);
        // console.log(data.hits);
    
        setRecipes(data.hits);
    
        // fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
        // .then(response => {
        //   response.json
        // }) 
    }

    // everytime you click onChange this event will run 
  const updateSearch = e => {
    setSearch(e.target.value)
    // console.log(e.target.value)
    // console.log(search)
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    //it will make it to empty string again
    setSearch('');
  }

    return (
    <Wrapper>    
    <div>
        <div className="center">
                <form className="search-form" onSubmit={getSearch}>
                    <input className="search-bar" type="text" value={search} onChange={updateSearch} />
                    <button className="btn" type="submit">
                         Search
                    </button>
        {/* <h1 onClick={() => setCounter(counter+1)}>{counter}</h1> */}

                </form>
        </div>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe 
            key = {recipe.recipe.shareAs}
            title = {recipe.recipe.label} 
            calories = {recipe.recipe.calories} 
            image = {recipe.recipe.image}
            ingredients = {recipe.recipe.ingredients}
          />
        ))}
      </div>
            
    </div>
    </Wrapper>
    )
}

const Wrapper = styled.section`
  
  .search-bar {
    width: 75%;
    border: none;
    padding: 10px;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);  
  }
  
  .search-button {
    background: #01ca70;
    border: none;
    padding: 10px 20px;
    color: white;
  }
  
  .recipes {
    // display: flex;
    // justify-content: space-around;
    // flex-wrap: wrap;
  }
  
  @media (max-width: 780px) {
    .recipes {
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
    }
  }
`

export default Recipes


