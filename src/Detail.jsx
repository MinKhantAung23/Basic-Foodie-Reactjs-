import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {AiFillYoutube} from 'react-icons/ai'
import Loading from './loader/Loading'

const Detail = () => {
  const {id} = useParams()
  const [meal, setMeal] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const getSingleMeal = async () => {
    const {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    setMeal(data.meals[0])
    setIsLoading(false)
  }
  useEffect(() => {
    getSingleMeal()
  },[])
  return (
    <>
      {isLoading ? <Loading/> : (
        <div className='flex flex-col gap-4'>
          <img src={meal.strMealThumb} alt="" width={'350px'} className='rounded-xl shadow-xl' />
          <div className='flex gap-10 my-2'>
            <h3 className='text-white bg-pink-500 py-1 w-20 text-sm rounded-lg text-center'>
              {meal.strCategory}
            </h3>
            <h3 className='text-white bg-pink-500 py-1 w-20 text-sm rounded-lg text-center'>
              {meal.strArea}
            </h3>
          </div>
          <h1 className='text-2xl'>{meal.strMeal}</h1>
          <div>
            <h2 className='text-2xl mb-2'>Instruction</h2>
            <p className='tracking-wider leading-5 text-gray-500'>{meal.strInstructions}</p>
          </div>
          <div className='flex items-center gap-5'>
            <a href={meal.strYoutube} target='__blank'>
              <AiFillYoutube className='text-5xl text-red-600 cursor-pointer'/>
            </a>
            <p className='text-gray-500'>Watch on youtube</p>
          </div>
        </div>
      )}
    </>
  )
}

export default Detail