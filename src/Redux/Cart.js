import React from 'react'
import Test from '../Test'
import { useSelector } from 'react-redux'
import Items from './Items'
import PlayerForm from './PlayerForm'


const Cart = () => {
    const cartNumber=useSelector(store=>store.cart)
    const gamesValue=useSelector(store=>store.game)
  return (
    <>
    <Test/>
    <h1 className='text-primary'>The number of items in the cart is {cartNumber.cartCount}</h1>
    <hr/>
    <Items/>
    <hr/>
    <h1 className='text-danger'>The game name is {gamesValue.games}</h1>
    <h1 className='text-info'>The player name is {gamesValue.player}</h1>
    <PlayerForm/>
    </>
  )
}

export default Cart