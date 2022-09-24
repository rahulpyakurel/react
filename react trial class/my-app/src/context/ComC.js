import React,{useContext} from 'react'
import FormValidation from '../validation/FormValidation'
import { GlobalContext } from './GlobalContext'

const ComC = () => {
    const js=useContext(GlobalContext)
  return (
    <>
     <h2>The framework of ReactJS is {js}</h2>
     <FormValidation/>
    </>
  )
}

export default ComC