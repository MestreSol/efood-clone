import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Perfil from '../pages/Perfil'

const Router = () => {
  return (
    <Routes>
      <Route path="/" Component={Home}></Route>
      <Route path="/perfil/:id" Component={Perfil}></Route>
    </Routes>
  )
}

export default Router
