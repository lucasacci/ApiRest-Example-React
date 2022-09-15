
import { useHistory } from 'react-router-dom'
import React, { useEffect } from 'react';



export const Listado = () => {

    const history = useHistory();

    
    useEffect(() => {
        const token = localStorage.getItem('token');

        console.log(token);
        if(token === null){
            history.push('/');
        }
    
    },[])
    

 


  return (
    <h2>Hola soy el componente Listado</h2>
  )
}
