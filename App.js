import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import login from './Login'
import Signup from'./signup'
import 'bootstrap/dist/css/bootstrap.min.css'
function App(){
    return(
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<login/>}></Route>
        
        <Route path='/' element={<Signup/>}></Route>
        </Routes>
        </BrowserRouter>

    )
    }
export default APP