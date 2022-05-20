import React from 'react'
import img from '../assets/static/img/error-404.png'
import Error from '../components/Error'
const NotFound = () => {
  return (
    <Error img={img} title={'Página no encontrada'}/>
  )
}

export default NotFound