import React from 'react'

const CocktailList = (cocktail:{name: string;ingredients: string;instructions: string;}) => {
  return (
    <div className='border-2 p-6 rounded-lg flex flex-col gap-2 mb-4'>
    <h1 className='text-2xl'>{cocktail.name}</h1>
    <h2 className="font-bold">Ingredients</h2>
    <p className="font-normal text-sm">{cocktail.ingredients}</p>
    <h2 className="font-bold">Instructions</h2>
    <p className="font-normal text-sm">{cocktail.instructions}</p>
</div>
  )
}

export default CocktailList