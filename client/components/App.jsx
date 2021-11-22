import React from 'react'
import { Route } from 'react-router'

import Home from './Home'
import Notes from './Todos'

function App () {
  return (
    <>
      <div className="app">
        <Route path="/" exact component={Home} />
        <Route path="/notes" component={Notes} />
      </div>
    </>
  )
}

export default App
