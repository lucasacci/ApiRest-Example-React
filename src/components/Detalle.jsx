import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const Detalle = () => {

  const [movie, setMovie] = useState(null)

  const token = sessionStorage.getItem('token');

  const MySwal = withReactContent(Swal)

  let query = new URLSearchParams(window.location.search);

  let movieID = query.get('movieID')

  useEffect(() => {

    const endPoint =`https://api.themoviedb.org/3/movie/${movieID}?api_key=11755de5998dedd3454bfd4d09aeccc6&language=es-ES`;


    axios.get(endPoint)
    .then(response =>{
      const movieData = response.data;
      setMovie(movieData);
    })
    .catch(error =>{
      MySwal.fire(
        'Hubo un error, intenta mas tarde'
      )
    })



  }, [])
  

  return (
    <>
      {!token && <Redirect to={'/'}/>}

      <h2 className='my-5 text-center'>Detalle de la pelicula</h2>
      {!movie && (
        <p>Cargando...</p>
      )}
      {movie &&  (
      <div className="row">
        <div className="col-4">
        <img src={'https://image.tmdb.org/t/p/w500/'+ movie.poster_path} className="img-fluid" alt='movieposter'/>
        </div>
        <div className="col-8">
          <h5>Titulo: {movie.title}</h5>
          <h5>Fecha de estreno: {movie.release_date}</h5>
          <h5>Reseña:</h5>
          <p>{movie.overview}</p>
          <h5>Generos</h5>
          <ul>
            {movie.genres.map(g =>
              <li key={g.id}> {g.name}</li>
            )}
          </ul>
        </div>
      </div>
      )}
    </>
  )
}
