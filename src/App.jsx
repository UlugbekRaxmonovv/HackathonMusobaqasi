import './App.css'
import { Route,Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import Auth from './pages/Auth/Auth'
import Area from './pages/Area/Area'
import Home from './pages/Home/Home'
import Cars from './pages/Cars/Cars'
import Race from './pages/Race/Race'
import Regester from './pages/Regester/Regester'
import Users from './pages/Users/Users'
import CarsClick from './pages/CarsSingle/CarsSingle'
import Inform from './pages/Inform/Inform'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Map from './pages/Map/Map'

function App() {

  return (
    <>
    <ToastContainer/>
    <Routes>
    
      <Route exact path="/" element={<Login />} />
      <Route exact path="/regester" element={<Regester />} />
      <Route exact path="/" element={<Auth />}>
      <Route exact path="/home" element={<Home />} />
        <Route exact path="area/:areaLocation" element={<Area />} />
        <Route exact path="cars" element={<Cars />} />
        <Route exact path="race" element={<Race />} />
        <Route exact path="cars/:id" element={<CarsClick />} />
        <Route exact path="inform" element={<Inform />} /> 
        <Route exact path="map" element={<Map />} />  
        <Route exact path="users" element={<Users />} />
      </Route>
    </Routes>
    
    </>
  )
}

export default App
