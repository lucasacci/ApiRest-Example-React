import axios from "axios";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Redirect, useHistory } from 'react-router-dom'
import { Header } from "./Header";

import '../css/style.css'

const MySwal = withReactContent(Swal)


function Login(){

  const history = useHistory();
 
  const submitHandler = (e) =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const regexEmail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if(email === '' || password === ''){
      MySwal.fire(
        'Los campos no pueden estar vacios'
      )
    }

    if(email != '' && !regexEmail.test(email)){
      MySwal.fire(
        'Debes escribir un email valido'
      )
      return;
    }

    if(email !== 'challenge@alkemy.org' || password !== 'react'){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Credenciales invalidas!'
      })
      return;
    }

    

    axios
      .post('http://challenge-react.alkemy.org',{ email, password })
      .then(res => {
        
        Swal.fire(
          'Logueado Exitoso',
          'Todo OK para enviar la informacion',
          'success'
        )

        const token = res.data.token;
        localStorage.setItem('token', token);
        history.push('/listado');
      })

  }

  const token = localStorage.getItem('token');

  return(
    <>
    {token && <Redirect to={'/listado'}/>}
      <h2 className="text-center">Formulario</h2>
      <div className="d-flex justify-content-center cardXD">
        <form onSubmit={submitHandler}>
            <label>
              <span>Correo electronico</span>
              <br />
              <input type="email" className="widthInput" name="email"/>
            </label>
            <br />
            <label>
              <span>Contraseña</span>
              <br />
              <input type="password" className="widthInput" name="password"/>
            </label>
            <br />
            <button type="submit" className="my-2 btn btn-success ">Ingresar</button>
        </form>
      </div>
    </>
  )
}

export default Login;