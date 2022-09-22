import React,{useState} from 'react'
import Test from '../Test'

const IncrementDecrement = () => {
    const[value,setValue]=useState(0) // value : name of variable with initial value 0 | 'string', [array],{object}
    //setValue is a function which changes and stores the state of variable value

//   const demoFunc=()=>(
//     setValue(value+1)
//   )  
  return (
    <>
        <Test/>
        <div className='d-flex justify-content-center'>
            <div className='col-md-8'>
                <h2>{value}</h2>
                {/* <button className='btn btn-primary' onClick={demoFunc}>Increment</button> */}
                <button className='btn btn-primary' onClick={()=>setValue(value+1)}>Increment</button>
                &nbsp; &nbsp;
                {value>0 &&
                <button className='btn btn-danger' onClick={()=>setValue(value-1)}>Decrement</button>
                }

            </div>
        </div>
    </>
  )
}

export default IncrementDecrement