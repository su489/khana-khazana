import React from 'react'
import Home from './components/Home'
import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Recipeid from './components/Recipeid'
import Category from './components/Category'
import SearchElement from './components/SearchElement'

const App = () => {
  return (
    <>
  <Router>
    <Routes>
      <Route path ='/' element={<Home/>}/>
      <Route path= '/:idmeal' element={<Recipeid/>}/>
      <Route path= '/category/:name' element = {<Category/>}/>
      <Route path= '/search/:searchTerm' element={<SearchElement/>}/>
      
      


    </Routes>
  </Router>
  
  
      
     
    </>
  )
}

export default App