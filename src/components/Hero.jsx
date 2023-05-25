import React, { useState } from 'react';
import Typed from 'react-typed'
import {AiOutlineClose} from 'react-icons/ai'

const Hero = () => {

    const [view, noView] = useState(false);

    const handleView = () => {
        noView(!view)
    }

    const [recipe, setRecipe] = useState(null);

    const fetchRecipe = async () => {
        noView(!view)
        try {
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
            const data = await response.json();
            setRecipe(data.meals[0]);
        } catch (error) {
            console.log(error);
        }
    };

  return (
    <div className='text-white' >
        <div className={!view ? 'max-w-[800px] mx-auto text-center flex flex-col justify-center p-3 mt-40 ease-in-out duration-75' : 'fixed right-[-200%]'} >
            <p className='text-[#00df9a] font-bold p-2 md:text-5xl sm:text-3xl text-2xl md:py-5'>DON'T KNOW WHAT TO COOK TODAY?</p>
            <p className='font-bold md:text-3xl sm:text-2xl text-1xl md:py-5'>Let an Algorithm decide for you.</p>
                        
        </div>
        <div className={!view ? 'max-w-[800px] mx-auto text-center flex flex-auto justify-center ease-in-out duration-75' : 'fixed right-[-200%]'}>
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
            onClick={fetchRecipe}>
                <span class="font-bold relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    <div className='font-bold md:text-2xl sm:text-2xl text-1xl'>
                        <Typed strings={['Biriyani?' , 'Shepards Pie?' , 'Click to find out']} typeSpeed={120} backSpeed={140} loop/>
                    </div>
                </span>
            </button>
        </div>

        <div className={view ? 'border-4 border-[#00df9a] flex justify-center text-center flex-col m-10 rounded-3xl p-3 ease-in-out duration-75' : 'fixed bottom-[-350%]'}>
            <div className=' pt-4 pl-4 align-middle ease-in-out duration-300' onClick={handleView}>
                {view ? <AiOutlineClose size={20}/> : <AiOutlineClose size={20}/>} 
            </div>
            {recipe && (
                <div className='px-4 pb-4'>
                    <h2 className='text-[#00df9a] font-bold md:text-4xl sm:text-3xl text-3xl md:py-6 sm:py-5 py-5'>{recipe.strMeal}.</h2>
                    <div className='mx-auto grid md:grid-cols-2 gap-8 align-middle'>
                        <div className='grid place-items-center'>
                            <img className='w-[70%] mx-auto p-5 border-2 rounded-2xl' src={recipe.strMealThumb} alt={recipe.strMeal} />
                        </div>
                        <div>
                            <h3 className='font-bold md:text-3xl sm:text-2xl text-2xl md:py-5 text-justify px-3 py-5'>Ingredients.</h3>
                            <ul className='mx-auto grid grid-cols-2 md:grid-cols-2 gap-3 pb-3'>
                                {Object.keys(recipe).map(key => {
                                if (key.startsWith('strIngredient') && recipe[key]) {
                                    return <li className='text-[#00df9a] text-justify p-4 border-2 rounded-2xl hover:bg-gray-700' key={key}>{recipe[key]}</li>;
                                }
                                return null;
                                })}
                            </ul>
                        </div>
                    </div>
                    <h3 className='font-bold md:text-3xl sm:text-2xl text-2xl md:py-5 text-justify py-5'>Instructions.</h3>
                    <p className='text-justify'>{recipe.strInstructions}</p>
                </div>
            )}
        </div>

    </div>
  )
}

export default Hero