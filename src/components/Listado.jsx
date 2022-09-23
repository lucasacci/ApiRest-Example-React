
import { Link, Redirect, useHistory } from 'react-router-dom'
import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import '../css/bootstrap.min.css'
import '../css/style.css'

const MySwal = withReactContent(Swal)


export const Listado = (props) => {

    const history = useHistory();

    const [movielist, setMovielist] = useState([])

    const token = sessionStorage.getItem('token');
    
    useEffect(() => {

      const endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=11755de5998dedd3454bfd4d09aeccc6&language=es-ES&page=1';
   
      axios.get(endPoint)
      .then(response =>{
        const apiData = response.data;
        setMovielist(apiData.results);
      })
      .catch(error =>{
        MySwal.fire(
          'Hubo un error, intenta mas tarde'
        )
      })

    },[setMovielist])
    
  
 


  return (
    <>
      {!token && <Redirect to={'/'}/>}

      <section className='container '>
        <h1 className='text-center my-5'>Movie List</h1>
        <article className='row d-flex justify-content-center'>
      {
        movielist.map((movie, index)=>{
          return (  
          <div className="card widthCard col-12 col-md-4 col-lg-3 mx-3 my-4" key={index} >
            <img src={'https://image.tmdb.org/t/p/w500/'+ movie.poster_path} className="card-img-top" />
            <button className='favourite-btn' onClick={props.addOrRemove} data-movie-id={movie.id}>❤️</button>
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
      </section>
    </>
  )
}
