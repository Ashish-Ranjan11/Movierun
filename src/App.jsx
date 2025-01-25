import React from 'react'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/home'
import Watchlist from './pages/watchlist'
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/watchlist" element={<Watchlist/>}></Route>
      </Routes>

    </>

  )
}

export default App