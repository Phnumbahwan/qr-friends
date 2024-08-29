import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router'
import Main from './pages/Main'
import QrCode from './pages/QrCode'

function App() {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/qr-friends" element={<Main />} />
        <Route path="/qr-friends/:name" element={<QrCode />} />
      </Routes>
    </Suspense>
  )
}

export default App
