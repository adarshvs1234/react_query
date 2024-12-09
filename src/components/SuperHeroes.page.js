import axios from "axios"
import { useEffect, useState } from "react"



export const SuperHeroesPage = () => {

const [isloading,setIsLoading] = useState(true)
const [data,setData] = useState([])
const [error,setError]  = useState('')

useEffect(()=>{

  axios.get('http://localhost:4000/superheroes').then((res)=>{

    setData(res.data)
    setIsLoading(false)
  }).catch(error =>{

    setError(error.message)
    setIsLoading(false)
  })
},[])


if(isloading){
  return <h2>Loading...</h2>
}

if(error){
  return <h2>
    {error}
  </h2>
}

  return (
    <>
    <div>SuperHeroesPage</div>
    {data.map((hero)=>{
      return <div key={hero.name}>{hero.name}</div>
    })}
    </>
  )
}


