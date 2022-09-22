import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Login from './components/Login'
import { Switch, Route } from 'react-router-dom'
import { Listado } from './components/Listado'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

import './css/bootstrap.min.css'
import { Detalle } from './components/Detalle'
import { Resultados } from './components/Resultados'


function App() {

  return (
    <>
      <Header/>
    <div className='container my-5'>
      <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/listado" component={Listado}/>
          <Route path="/detalle" component={Detalle}/>
          <Route path="/resultados" component={Resultados}/>
      </Switch>
    </div>
      <Footer/>
    </>
  )
}

export default App
