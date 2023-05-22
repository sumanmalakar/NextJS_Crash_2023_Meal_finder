/* eslint-disable @next/next/no-img-element */
// import ReactPlayer from "react-player";

const fetchMeal = async (idMeal) =>{
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
  const data = await res.json();
  return data.meals[0]
}

const page = async  ({ params: { idMeal } }) => {
   // console.log(idMeal)

   const respones = await fetchMeal(idMeal)
   console.log(respones)

  return (
    <> 
  <> 
    <h1>{respones.strMeal}</h1>
    <h2>Category:- {respones.strCategory}</h2>
    <h2>Area:- {respones.strArea}</h2>
    <img src={respones.strMealThumb} alt="" style={{"height":"30rem"}} />
    <p>  <h1>Instructions:- </h1>{respones.strInstructions}</p>


    {/* <ReactPlayer
        url={respones.strYoutube}
      /> */}

    <video src={respones.strYoutube} />
     </>
    </>
  )
}

export default page