import { Link } from "react-router-dom"

const Navbar= () => {
  return (
    <div className='p-4 text border-b-2 flex items-center h-[80px]
    justify-between border-stone-300 sticky top-0 z-[999]
     bg-gradient-to-r from-slate-100 via-purple-100 to-sky-100'>
        <div className=''>
        <h1 className='text-lg sm:text-2xl font-bold'>Dinner Party</h1>
        </div>
        <div className='flex text-sm gap-2 border border-stone-300 p-2 rounded-md'>
            <Link className='border border-stone-300 p-2 hover:bg-black hover:text-white rounded-md cursor-pointer'
            to={'/'}
            >
                Recipes
            </Link>
            <Link className='border border-stone-300 p-2 hover:bg-black hover:text-white rounded-md cursor-pointer'
            to={'/cocktail'}>
                Cocktails
            </Link>
        </div>
    </div>
  )
}

export default Navbar