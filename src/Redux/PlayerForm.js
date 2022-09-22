import React,{useState} from 'react'
import { useDispatch } from 'react-redux'

const PlayerForm = () => {
    const dispatch=useDispatch()

    const [gameName,setGameName]=useState('')
    const [playerName,setPlayerName]=useState('')

    const changeGame=()=> (
        dispatch({type:'CHANGE_GAME',payload:gameName})
    )

    const changePlayer=()=> (
        dispatch({type:'CHANGE_PLAYER',payload:playerName})
    )

  return (
    <>
    <h2 className='text-muted'>Player Form</h2>
    <div className='mb-3 col-6'>
        <input type='text' placeholder='type any game name here' className='form-control'
        onChange={(e)=>setGameName(e.target.value)} // event.target.value (e not compulsive not to notify event as e is good)
        />  
    </div>
    <button className='btn btn-warning' onClick={changeGame}>Change Game </button>
    <div className='mb-3 col-6'>
        <input type='text' placeholder='type any player name here' className='form-control'
        onChange={(e)=>setPlayerName(e.target.value)} // event.target.value (e not compulsive not to notify event as e is good)
        />  
    </div>
    <button className='btn btn-warning' onClick={changePlayer}>Change Player </button>
    </>
  )
}

export default PlayerForm