import React from 'react'
import {BsEyeFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'

const Card = ({meal}) => {
  return (
    <div className='w-72 border-2 flex justify-center items-center flex-col p-5
     rounded-xl gap-5 relative h-[400px] shadow-lg hover:scale-105 transition duration-200 hover:shadow-xl'>
        <img src={meal.strMealThumb} className='rounded-xl' width="200px" alt="" />
        <h3>{meal.strMeal}</h3>
            <button className='text-white bg-blue-500 px-8 py-2 rounded-xl absolute bottom-3'>
                <Link to={`/detail/${meal.idMeal}`}>
                    <BsEyeFill className='text-xl'/>
                </Link>
            </button>
        
    </div>
  )
}

export default Card