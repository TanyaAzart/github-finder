import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layouts/Navbar'
import User from './components/users/User'
import Alert from './components/layouts/Alert'
import About from './components/pages/About'
import Home from './components/pages/Home'
import NotFound from './components/pages/NotFound'
import GithubState from './context/github/githubState'
import AlertState from './context/alert/alertState'
import './App.css';

const App = () =>{
  
  return (
    <GithubState>
      <AlertState>
      <Router>
      <div className="App">
        <Navbar />
        <div className='container'>
          <Alert />
          <Routes>
            <Route path ='/' element = {<Home />} />          
            <Route path='/about' element = {<About />} />
            <Route path='/user/:login' element={ <User />}/>   
            <Route  path='/*' element={ <NotFound />}/>   
          </Routes>          
        </div>        
      </div>
      </Router> 
      </AlertState>
      </GithubState>     
    );
          }        
export default App;
