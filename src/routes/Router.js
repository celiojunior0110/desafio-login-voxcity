import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from '../pages/Login'
import { Dashboard } from '../pages/Dashboard'

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
)
