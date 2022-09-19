
import { Redirect, useHistory } from 'react-router-dom'
import React, { useEffect } from 'react';



export const Listado = () => {

    const history = useHistory();

    const token = localStorage.getItem('token');
    
    // useEffect(() => {

    //   localStorage.getItem('token');
   
    // },[])
    

 


  return (
    <>
      {!token && <Redirect to={'/'}/>}
      <h1>Componente listado</h1>
    </>
  )
}
