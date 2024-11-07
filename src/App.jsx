import React from 'react'
import Layout from './components/Layout/Layout'
import {Navigate, Route, Routes } from 'react-router-dom'
import Main from './components/Pages/Main/Main'
import Home from './components/Pages/Home/Home'
import About from './components/Pages/About/About'
import Else from './components/Pages/Else/Else'
import PageOne from './components/Pages/Home/PageOne'
import PageTwo from './components/Pages/Home/PageTwo'
import PageThree from './components/Pages/Home/PageThree'
import PageFour from './components/Pages/Home/PageFour'
import PageFive from './components/Pages/Home/PageFive'

function App() {
  return (
    <>
    <Layout>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/home' element={<Home/>}>
        <Route index element={<Navigate to="pageOne"/>}/>
          <Route path='pageOne' element={<PageOne/>}/>       
          <Route path='pageTwo' element={<PageTwo/>}/>       
          <Route path='pageThree' element={<PageThree/>}/>       
          <Route path='pageFour' element={<PageFour/>}/>       
          <Route path='pageFive' element={<PageFive/>}/>       
        </Route>
        <Route path='/about' element={<About/>}/>
        <Route path='/*' element={<Else/>}/>
      </Routes>
    </Layout>
    </>
  )
}

export default App