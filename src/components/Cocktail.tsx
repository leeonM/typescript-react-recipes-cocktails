import { useState } from "react"
import CocktailList from "./CocktailList";

const API_KEY='your-api-key';
const URL="https://api.api-ninjas.com/v1/cocktail?name="


const headers = new Headers();
    headers.append('X-API-Key', API_KEY);

  let options = {
    method: 'GET',
    headers
  }

interface Cocktails {
    ingredients: string;instructions: string;name: string;
}

const Cocktail = () => {
    const [query, setQuery] = useState<String>("")
    const [cocktails, setCocktails] = 
    useState<Cocktails[]>([])

  const getCocktails = async () =>{
    if (!query) {
        return
    }
    try {
        await fetch(URL+query, options)
        .then(res => res.json()) // parse response as JSON
            .then(data => {
            if (data.length < 1){
                alert('Not Found')
            } else {
                setCocktails(data)
            }
            })
            .catch(err => {
                console.log(`error ${err}`)
            });  
    } catch (error) {
        console.log(error)
    }
    
  }

  return (
    <div className='flex flex-col items-center mt-[40px] font-semibold'>
        <h1 className="text-3xl ">Cocktail Search</h1>
        <div className="p-4 w-[80%] sm:w-[60%] lg:w-[40%] flex justify-center">
            <input type="text" 
            className="text-sm p-2 px-4 bg-transparent border-2 border-stone-300 rounded-l-full
            outline-none w-[100%]"
            placeholder="Search for a recipe..." 
            onChange={(e)=>setQuery(e.target.value)}
            onKeyDown={getCocktails} 
            />
            <button className="border-2 border-stone-300 rounded-r-full text-xs p-2 cursor-pointer bg-stone-300"
            onClick={getCocktails}
            >Search</button>
        </div>
        <div className="flex flex-col gap-4 p-4">
            {cocktails.map((cocktail,index)=>(
                <CocktailList {...cocktail} key={index} />
            ))}
        </div>
    </div>
  )
}

export default Cocktail