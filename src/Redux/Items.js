import React from 'react'
import { useDispatch } from 'react-redux'

const Items = () => {
    const dispatch=useDispatch()

    const addItem=()=>(
        dispatch({type:'ADD_ITEM'})
    )
    const removeItem=()=>(
        dispatch({type:'REMOVE_ITEM'})
    )

  return (
    <>
    <h1 className='text-muted'>This is Items Component</h1>
    <button className='btn btn-primary' onClick={addItem}>Add item to cart</button>
    &nbsp; &nbsp; &nbsp;
    <button className='btn btn-danger' onClick={removeItem}>Remove Item from the Cart</button>
    </>
  )
}

export default Items