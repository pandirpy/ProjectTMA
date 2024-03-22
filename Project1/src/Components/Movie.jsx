//import React from 'react'

function Movie({movie}) {
  return (
    <h1>
        <li>Director : {movie.Director}</li>
        <li>Title :{movie.Title}</li>
        <li>Lead Actor: {movie.LeadActor}</li>
        <li>Release Date : {movie.ReleaseDate}</li>
    </h1>
  )
}

export default Movie