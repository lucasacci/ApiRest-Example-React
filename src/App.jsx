import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import Login from './components/Login'
import { Switch, Route } from 'react-router-dom'
import { Listado } from './components/Listado'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

import './css/bootstrap.min.css'
import { Detalle } from './components/Detalle'
import { Resultados } from './components/Resultados'
import { Favoritos } from './components/Favoritos'


function App() {

  const [favorites, setFavorites] = useState([]);


 
  useEffect(() => {
   
      const favsInLocal = localStorage.getItem('favs');

      if(favsInLocal !== null){
          const favs = JSON.parse(favsInLocal);
          setFavorites(favs);
         
      }


  }, [])
  

  const favMovies = localStorage.getItem('favs');

  let tempMovies;

  if(favMovies === null){
    tempMovies = [];
  } else{
    tempMovies = JSON.parse(favMovies);
  }

  const addOrRemove = (e) =>{
    const btn  =  e.currentTarget;
    const parent = btn.parentElement;
    const imgUrl = parent.querySelector('img').getAttribute('src');
    const title = parent.querySelector('h5').innerText;
    const overview = parent.querySelector('p').innerText;

    const movieData = {
      imgUrl, title, overview,
      id : btn.dataset.movieId
    }

    let moviesInFav = tempMovies.find(movie => {
      return movie.id === movieData.id
    })

    if(!moviesInFav){
      tempMovies.push(movieData);
      localStorage.setItem('favs',JSON.stringify(tempMovies));
      setFavorites(tempMovies);

    }else{
      let moviesLeft = tempMovies.filter(movie => {
        return movie.id !== movieData.id
      })
      localStorage.setItem('favs',JSON.stringify(moviesLeft))
      setFavorites(moviesLeft);
      console.log('se elimino');
    }
  }

  return (
    <>
      <Header  favorites={favorites}/>
    <div className='container my-5'>
      <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/listado" render={(props) => <Listado addOrRemove={addOrRemove} {...props}/>}/>
          <Route path="/detalle" component={Detalle}/>
          <Route path="/resultados" component={Resultados}/>
          <Route path="/favoritos"  render={(props) => <Favoritos favorites={favorites} addOrRemove={addOrRemove} {...props}/>}/>
      </Switch>
    </div>
      <Footer/>
    </>
  )
}

export default App
