import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import FirstComponent from './FirstComponent'
import SecondComponent from './SecondComponent'
import Card from './Card'
import IncrementDecrement from './hooks/IncrementDecrement'
import Counting from './hooks/Counting'
import Datafetching from './hooks/Datafetching'
import Main from './hooks/Main'
import Show from './context/Show'
import Cart from './Redux/Cart'


const MyRoute = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<FirstComponent/>}/>
            <Route path='/test' element={<SecondComponent/>}/>
            <Route path='/card' element={<Card/>}/>
            <Route path='/hooks/usestate' element={<IncrementDecrement/>}/>
            <Route path='/hooks/effect' element={<Counting/>}/>
            <Route path='/hooks/datafetch' element={<Datafetching/>}/>
            <Route path='/main' element={<Main/>}/>
            <Route path='/context/api' element={<Show/>}/>
            <Route path='/Redux/Cart' element={<Cart/>}/>
           
        </Routes>
    </Router>
  )
}

export default MyRoute