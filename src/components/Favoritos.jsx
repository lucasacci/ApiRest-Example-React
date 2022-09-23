import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom';

export const Favoritos = (props) => {

    // const [favorites, setFavorites] = useState([]);

    // useEffect(() => {
     
    //     const favsInLocal = localStorage.getItem('favs');

    //     if(favsInLocal !== null){
    //         const favs = JSON.parse(favsInLocal);
    //         setFavorites(favs);
           
    //     }


    // }, [])

   console.log(props.favorites);
  return (
    <>
        <h2>Pagina de Favoritos</h2>
        <article className='row d-flex justify-content-center'>
            {
                props.favorites.map((movie, index)=>{
                return (  
                <div className="card widthCard col-12 col-md-4 col-lg-3 mx-3 my-4" key={index} >
                    <img src={movie.imgUrl} className="card-img-top" />
                    <button className='favourite-btn' onClick={props.addOrRemove} data-movie-id={movie.id}>❌</button>
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
