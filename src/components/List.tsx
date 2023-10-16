
const List = (recipe:{title: string;ingredients: string;servings: string;instructions: string;}) => {
  return (
    <div className='border-2 p-6 rounded-lg flex flex-col gap-2 mb-4'>
    <h1 className='text-2xl'>{recipe.title}</h1>
    <h2 className="font-bold">Ingredients</h2>
    <p className="font-normal text-sm">{recipe.ingredients}</p>
    <h2 className="font-bold">Servings</h2>
    <p className="font-normal text-sm">{recipe.servings}</p>
    <h2 className="font-bold">Instructions</h2>
    <p className="font-normal text-sm">{recipe.instructions}</p>
</div>
  )
}

export default List