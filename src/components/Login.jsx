import axios from "axios";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useHistory } from 'react-router-dom'

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

  return(
    <>
      <h2>Formulario</h2>
      <form onSubmit={submitHandler}>
          <label>
            <span>Correo electronico</span>
            <br />
            <input type="email" name="email"/>
          </label>
          <br />
          <label>
            <span>Contraseña</span>
            <br />
            <input type="password" name="password"/>
          </label>
          <br />
          <button type="submit">Ingresar</button>
      </form>
    </>
  )
}

export default Login;