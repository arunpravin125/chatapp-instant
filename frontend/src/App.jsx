import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Signup from './pages/signup/Signup'
import Login from "./pages/login/Login"
import  { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/authContext'
function App() {
  const {authUser}=useAuthContext()
  return (
  <div className="p-4 h-screen flex items-center justify-center">
    {/* <Login></Login> */}
    {/* <Signup/> */}
    <Routes>
     <Route path="/"  element={authUser?<Home/>:<Navigate to="/login" />} ></Route>
     <Route path="/signup" element={authUser?<Navigate to="/" />:<Signup/>}   ></Route>
     <Route path="/login" element={authUser?<Navigate to="/" />:<Login/>} ></Route>
    </Routes>
    <Toaster/>

  </div>
  )
}

export default App
