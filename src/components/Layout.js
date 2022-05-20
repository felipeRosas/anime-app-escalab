import React from 'react'
import { Container } from 'react-bootstrap'
import '../assets/styles/layout.css'
import Header from './Header'
const Layout = ({children}) => {
  return (

    <>
        <Header/>
        <Container className='pt-5'>
        {children}
        </Container>
    </>
  )
}

export default Layout