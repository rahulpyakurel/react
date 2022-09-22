import React from 'react'
import {Link} from 'react-router-dom'
import './test.css'

const Test = () => {
  return (
    <>
        <nav>
            <ul>
                <li><Link to="/">FirstComponent</Link></li>
                <li><Link to="/test">SecondComponent</Link></li>
                <li><Link to="/card">CardComponent</Link></li>
                <li><Link to="/hooks/usestate">useState</Link></li>
                <li><Link to="/hooks/effect">useEffect</Link></li>
                <li><Link to="/hooks/datafetch">datafetch</Link></li>
                <li><Link to="/main">props</Link></li>
                <li><Link to="/context/api">context</Link></li>
                <li><Link to="/Redux/cart">Cart</Link></li>
                
            </ul>
        </nav>
    </>
  )
}

export default Test