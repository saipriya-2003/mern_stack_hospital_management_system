import React from 'react'
import './App.css'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register  from './pages/Register'
import AboutUs from './pages/AboutUs'
//import Sidebar from '../../dashboard/src/components/Sidebar'
// import AddNewAdmin from '../../dashboard/src/components/AddNewAdmin'
import Appointment from './pages/Appointment'
import './App.css'
import { ToastContainer } from 'react-toastify'
import Navbar from './components/Navbar'
import 'react-toastify/dist/ReactToastify.css'
import { Context } from './main'
import { useContext,useEffect } from 'react'
import Footer from './components/Footer'
import axios from 'axios'

const  App=()=> {
  const {isAuthenticated,setIsAuthenticated,setUser}=useContext(Context)
  useEffect(()=>{
    const fetchUser=async()=>{
      try{
        const response=await axios.get("http://localhost:5000/api/v1/user/patient/me",{
          withCredentials:true
        }
     ); setIsAuthenticated(true)
     setUser(response.data.user);

      }catch(error){
        setIsAuthenticated(false)
        setUser({})
      }
    }
    fetchUser();
  },[isAuthenticated])
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/appointment' element={<Appointment/>}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/about' element={<AboutUs />}/>
      </Routes>
      <Footer/>
      <ToastContainer position='top-center' />
    </Router>
    </>
  )
}

export default App