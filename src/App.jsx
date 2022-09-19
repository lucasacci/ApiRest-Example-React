import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Login from './components/Login'
import { Switch, Route } from 'react-router-dom'
import { Listado } from './components/Listado'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

import './css/bootstrap.min.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
    <div className='container my-5'>
      <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/listado" component={Listado}/>
      </Switch>
    </div>
      <Footer/>
    </>
  )
}

export default App
