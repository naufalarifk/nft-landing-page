import React from 'react'
import Footer from '../common/footer/Footer'
import Header from '../common/header/Header'

export const Layout = ({children}) => {
  return (
    <>
    <Header/>
    {children}
    <Footer/>
    </>
  )
}