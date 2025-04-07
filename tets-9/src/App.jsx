import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import LoginPage from './companet/LoginPage'
import HomePage from './companet/HomePage'
import BookGallery from './companet/BookGallery'


export default function App() {

  return (
    <>
    <BrowserRouter>
    <div>
    <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/home' element={<HomePage/>}/>
      <Route path='/book' element={<BookGallery/>}/>
    </Routes>
    </div>
    </BrowserRouter>
    </>
  )
}

