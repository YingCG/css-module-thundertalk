import React from 'react'
import { Link } from 'react-router-dom'
import CSSModule from './Button.module.css'
import CSSContent from './Content.module.css'

function Todos () {
  return (
    <>

      <div className='container'>
        <div className='main'>

          <h2 className={CSSContent.title}>Check out CSS Module</h2>
          <button className={CSSModule.button}>
            <Link to='/'>Home Page</Link>
          </button>
          <button className="button">
            <Link to='/'>Another Button</Link></button>
        </div>

      </div>
    </>
  )
}

export default Todos
