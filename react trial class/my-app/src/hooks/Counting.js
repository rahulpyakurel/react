import React,{useState,useEffect} from 'react'
import Test from '../Test'

const Counting = () => {
  
    const[count,setCount]=useState(0)
    const[item,setItem]=useState(1)

    useEffect(()=>{
        alert('this is effect of using useEffect')
    },[item]) //empty array to initialize array one time only when page loads/renders
    return (
    <>
        <Test/>
        <h2>{count}</h2>
        <button className='btn btn-info' onClick={()=>setCount(count+1)}>Click to Increase</button>
        <hr/>
        <h2>{item}</h2>
        <button className='btn btn-warning' onClick={()=>setItem(item+2)}>Click to Increase</button>
    </>
  )
}

export default Counting