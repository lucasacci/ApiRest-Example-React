import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const Resultados = () => {

    const MySwal = withReactContent(Swal)

    let query = new URLSearchParams(window.location.search);

    let keyword = query.get('keyword')

    const [movie, setMovie] = useState([]);

    useEffect(() => {
     
        const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=11755de5998dedd3454bfd4d09aeccc6&language=es-ES&page=1&include_adult=false&query=${keyword}`

        axios.get(endPoint)
        .then(response =>{
          const apiData = response.data.results;
          setMovie(apiData);
          
          if(apiData.length === 0){
            MySwal.fire(
              'Tu busqueda no arrojo resultados'
            )
          }
        })
      .catch(error =>{
        MySwal.fire(
          'Hubo un error, intenta mas tarde'
        )
      })

    },[keyword])
    

  return (
    <>
        <h2>Buscaste: <em>{keyword}...</em></h2>
        <article className='row d-flex justify-content-center'>
          {movie.length === 0 && <h3 className='text-center display-6 my-5'>Sin resultados</h3>}
      {
        movie.map((movie, index)=>{
          return (  
          <div className="card widthCard col-12 col-md-6 col-lg-6 mx-3 my-4" key={index} >
            <img src={'https://image.tmdb.org/t/p/w500/'+ movie.poster_path} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>
              <p className="card-text">{movie.overview.substring(0,100)+ `...`}</p>
              <Link to={`/detalle?movieID=${movie.id}`} className="btn btn-primary">View detail</Link>
            </div>
          </div>
          )
        })
      }
        </article>
    </>
  )
}
