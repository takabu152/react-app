import React from 'react'
import Booklist from './components/Booklist'
import Weatherlist from './components/Weatherlist'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import axios from 'axios'

const getDataFromAPI = async keyword => {
  const requestUrl = 'https://www.googleapis.com/books/v1/volumes?q=initle:'
  const result = await axios.get(`${requestUrl}${keyword}`)
  console.log(result)
  return result
}

const getWeatherDataFromAPI = async keyword => {
  const requestUrl = 'https://covid19-japan-web-api.now.sh/api//v1/prefectures'
  const result = await axios.get(`${requestUrl}`,{ 
    withCredentials: true
  })
  console.log(result)
  return result
}

const App = () => {
  const languages = ['React', 'Vue', 'Angular', '.net']
  const weatherPlaceIDs=['400010','130010']
  return (
    <BrowserRouter>
      <div>
        <h1>react app</h1>
        <ul>
          <li><Link to='/'>React</Link></li>
          <li><Link to='/vue'>Vue</Link></li>
          <li><Link to='/angular'>Angular</Link></li>
          <li><Link to='/.net'>.net</Link></li>
          <li><Link to='/fukuoka'>福岡の天気予報</Link></li>
          <li><Link to='/tokyo'>東京の天気予報</Link></li>
          
        </ul>
        <Route
          exact
          path='/'
          render={
            props =>
              <Booklist language={languages[0]} getData={keyword => getDataFromAPI(keyword)} />
          }
        />
        <Route
          exact
          path='/vue'
          render={
            props =>
              <Booklist language={languages[1]} getData={keyword => getDataFromAPI(keyword)} />
          }
        />
        <Route
          exact
          path='/angular'
          render={
            props =>
              <Booklist language={languages[2]} getData={keyword => getDataFromAPI(keyword)} />
          }
        />
        <Route
          exact
          path='/.net'
          render={
            props =>
              <Booklist language={languages[3]} getData={keyword => getDataFromAPI(keyword)} />
          }
        />
        <Route
          exact
          path='/fukuoka'
          render={
            props =>
              <Weatherlist weatherPlaceID={weatherPlaceIDs[0]} getData={keyword => getWeatherDataFromAPI(keyword)} />
          }
        />
        <Route
        exact
        path='/tokyo'
        render={
          props =>
            <Weatherlist weatherPlaceID={weatherPlaceIDs[1]} getData={keyword => getWeatherDataFromAPI(keyword)} />
        }
      />
        {/* <Booklist language = {languages[0]} />
        <Booklist language = {languages[1]} />
        <Booklist language = {languages[2]} /> */}
      </div>
    </BrowserRouter>

  )
}

export default App
