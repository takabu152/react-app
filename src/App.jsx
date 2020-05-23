import React from 'react'
import Booklist from './components/Booklist'
import {BrowserRouter, Route, Link} from 'react-router-dom'


const App = () => {
  const languages = ['React','Vue','Angular']
  return (
    <BrowserRouter>
      <div>
        <h1>react app</h1>

        <Route exact path = '/' component={Booklist} />
        <Route exact path = '/vue' component={Booklist} />
        <Route exact path = '/angular' component={Booklist} />
        {/* <Booklist language = {languages[0]} />
        <Booklist language = {languages[1]} />
        <Booklist language = {languages[2]} /> */}
      </div>
    </BrowserRouter>
    
  )
}

export default App
