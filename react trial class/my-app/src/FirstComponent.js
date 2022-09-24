import React from 'react'
import Test from './Test'
import Card from './Card'


const FirstComponent = () => {
  return (
    <>
        <Test/>
        <h1 style={{color:'orange', fontSize:'30px', backgroundColor:'dodgerblue'}}>Hello</h1>
        <h1>React Js</h1>
        <hr/>
        <Card/>
    </> // has to be used always
  )
}

export default FirstComponent // export so that function can be used in other places

