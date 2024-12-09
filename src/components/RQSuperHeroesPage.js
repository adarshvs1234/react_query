//Handling of  error using react query 


import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const RQSuperHeroesPage = () => {
  
  const { isLoading, data, isError, error,isFetching,refetch } = useQuery({
    queryKey: ['super-heroes'],
    queryFn: () => axios.get('http://localhost:4000/superheroes').then(res => res.data),
    enabled:false
  });


  console.log({isLoading,isFetching});
  

  if (isLoading || isFetching)
     return <h2>Loading...</h2>;


  if (isError) {
    return <h2>Error: {error.message}</h2>; 
  }

  return (
    <>
      <h2>RQSuperHeroesPage</h2>
      <button onClick={refetch}>Fetch heroes</button>
      {data?.map(hero => (
        <div key={hero.id}>{hero.name}</div>
      ))}
    </>
  );
}
