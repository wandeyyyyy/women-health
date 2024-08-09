import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import About from './pages/About'
import Project from './pages/Project'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
const App = () => {
  return (
<BrowserRouter>
<Header/>
<Routes>
  <Route path='/' element={<Home />}/>
  <Route path='/about' element={<About />}/>
  <Route path='/sign-in' element={<SignIn />}/>
  <Route path='/sign-up' element={<SignUp />}/>
  <Route path='/dashboard' element={<Dashboard />}/>
  <Route path='/projects' element={<Project />}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
  )
}

export default App