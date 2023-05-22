/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'

const RepoItem = ({data}) => {
  return (
    <>
    <Link href={`code/repos/${data.idMeal}`} >
    <div className="card">
    <img src={data.strMealThumb} alt="" style={{"width":"100%", "height":"200px"}} />
    </div>
    </Link>
    </>
  )
}

export default RepoItem