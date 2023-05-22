/* eslint-disable @next/next/no-img-element */
import RepoItem from "@/app/components/RepoItem";


// server componet for fetching the data
const fetchMeal = async () =>{
   const res = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
   const data = await res.json();
   return data.meals
}

const RepoPage = async () => {
   const response = await fetchMeal()
   console.log(response);

  return (
    <>
    <div className="flex">
    {response.map((data)=> <RepoItem key={data.idMeal} data={data} />)}
    </div>
    </>
  )
}

export default RepoPage