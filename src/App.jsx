import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Login from './components/Login'
import { Switch, Route } from 'react-router-dom'
import { Listado } from './components/Listado'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/listado" component={Listado}/>
      </Switch>
    </>
  )
}

export default App
