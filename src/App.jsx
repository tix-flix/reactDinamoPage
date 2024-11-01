import React from 'react'
import Layout from './components/Layout/Layout'
import {Route, Routes } from 'react-router-dom'
import Main from './components/Pages/Main/Main'
import Home from './components/Pages/Home/Home'
import About from './components/Pages/About/About'
import Else from './components/Pages/Else/Else'

function App() {
  return (
    <>
    <Layout>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/*' element={<Else/>}/>
      </Routes>
    </Layout>
    </>
  )
}

export default App