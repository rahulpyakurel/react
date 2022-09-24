import React from 'react'
import Test from '../Test'
import ComA from './ComA'
import GlobalContextProvider from './GlobalContext'

const Show = () => {
  return (
    <>
    <Test/>
   
   <GlobalContextProvider>
        <ComA/>
   </GlobalContextProvider>
   
  
    
    </>
  )
}

export default Show