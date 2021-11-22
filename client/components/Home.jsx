import React from 'react'
import { Link } from 'react-router-dom'

const customStyle = {
  color: 'red',
  fontSize: '50px'
}

customStyle.color = 'blueviolet'

function Home () {
  return (
    <>

      <div className='container'>
        <h2 style={customStyle}>Good Morning Horoeka</h2>

        <div className='main'>
          <button className='btn'><Link to='/notes'>CSS Module</Link></button>

        </div>

      </div>
    </>
  )
}

export default Home
