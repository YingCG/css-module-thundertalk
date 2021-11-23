import React from 'react'
import { Link } from 'react-router-dom'
import CSSButton from './Button.module.css'
import CSSTitle from './Title.module.css'

function Todos () {
  return (
    <>

      <div className='container'>
        <div className='main'>

          <h2 className={CSSTitle.title}>Check out CSS Module</h2>
          <button className={CSSButton.purple}>
            <Link to='/'>Home Page</Link>
          </button>
          <button className={CSSButton.green}>
            <Link to='/'>Another Button</Link></button>
            <button className={CSSButton.pink}>
            <Link to='/'>Another Button</Link></button>
        </div>

      </div>
    </>
  )
}

export default Todos
