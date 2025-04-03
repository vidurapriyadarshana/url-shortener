import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import AboutPage from './pages/AboutPage'
import MainLayout from './layout/MainLayout'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route
            path='/'
            element={<MainLayout> <HomePage /> </MainLayout>}
          />
        

          <Route
            path='*'
            element={<MainLayout> <NotFoundPage /> </MainLayout>}
          />

          <Route
            path='/about'
            element={<MainLayout> <AboutPage /> </MainLayout>}
          />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App