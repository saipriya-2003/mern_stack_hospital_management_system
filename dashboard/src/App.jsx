import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Sidebar from './components/Sidebar'
import AddNewDoctor from './components/AddNewDoctor'
import AddNewAdmin from './components/AddNewAdmin'
import Messages from './components/Messages'
import Login from './components/Login'
import Doctors from './components/Doctors'
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { useContext } from 'react'
import { Context } from './main'
import { useEffect } from 'react'
import './App.css'

const App = () => {

  const {isAuthenticated,setIsAuthenticated,user,setUser}=useContext(Context);

  useEffect(()=>{
    const fetchUser=async()=>{
      try{
        const  response=await axios.get(
          "http://localhost:5000/api/v1/user/admin/me",{
            withCredentials:true
          }
        )
        setIsAuthenticated(true)
        setUser(response.data.user)
      }catch(error){
        setIsAuthenticated(false);
        setUser({})

      }

    }
  })

  return (
    <div>
      <>
      <Router>
        <Sidebar/>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/doctor/addnew' element={<AddNewDoctor/>}/>
          <Route path='/admin/addnew' element={<AddNewAdmin/>}/>
          <Route path='/messages' element={<Messages/>}/>
          <Route path='/doctors' element={<Doctors/>}/>
 
     
        </Routes>
        <ToastContainer position='top-center'/>
      </Router>
      </>
    </div>
  )
}

export default App