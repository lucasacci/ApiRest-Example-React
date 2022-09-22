import React from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

 const Buscador = () => {
    const MySwal = withReactContent(Swal)

    const submitHandler = e =>{
        e.preventDefault();
        const keyword = e.currentTarget.keyword.value.trim();
        console.log(keyword);
        if(keyword.length === 0){
            MySwal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Tienes que escribir una palabra'
            })
        }else if(keyword.length < 4 ){
            MySwal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Tienes que escribir mas de 3 caracteres'
          })
        }
    }

  return (
    <form onSubmit={submitHandler}>
            <label className=''>
              <span>Correo electronico</span>
              <input type="text" className="form-control" name="keyword" placeholder='Escribe una palabra'/>
            </label>
            <button type="submit" className="btn btn-success mx-2 mb-1">Buscar</button>
        </form>
  )
}
export default Buscador;