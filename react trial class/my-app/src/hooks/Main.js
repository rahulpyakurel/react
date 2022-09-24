import React from 'react'
import Test from '../Test'
import Prop from './Prop'

const Main = () => {
  return (
    <>
    <Test/>
    <Prop language={'React'} technology={'Web'}/>
    <Prop language={'Flutter'} technology={'Mobile App'}/>
    <Prop language={'XD'} technology={'UI/UX'}/>
    </>
  )
}

export default Main