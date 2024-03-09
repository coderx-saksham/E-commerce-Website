import React from 'react'
import styled from 'styled-components'

const Recipe = ({title,calories,image,ingredients}) => {
    return (
        <Wrapper>
        <div >
            <h1>{title}</h1>
            <img className='image' src={image} alt=""/>
            <ul>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>       
                ))}
            </ul>
            <p>Total Calories: {calories}</p>            
        </div>
        </Wrapper>
    )
}

export default Recipe

const Wrapper = styled.section`
div{
  border-radius: 10px;
  box-shadow: 0px 5px 20px (71, 71, 71);
  margin: 20px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
  background: white;
  align-items: center;
  width: 40%;
}
.image {
    border-radius: 50%;
    /* width: 200px;
    height: 200px; */
  }
`
