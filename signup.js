import React from'react'
import {link} from 'react-router-dom'
function signup(){
    return(
        <div className='signup template d-flex justify-content-center align-items-center vh-100 bg-primary'>
        <div className='form_container p-5 rounded bg-white'>
        <form> 
            <h3 className='text-center'>Sign up</h3>
            <div className='mb-2'>
                <label htmlFor="fname">Frist Name</label>
                <input type="text" placeholder='Enter Frist Name'className='from-control'/>
            </div> 
            <div className='mb-2'>
                <label htmlFor="lname">Last Name</label>
                <input type="text" placeholder='Enter Last Name'className='from-control'/>
            </div>
            <div className='mb-2'>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder='Enter Email'className='from-control'/>
            </div>
            <div className='mb-2'>
                <label htmlFor="password">Password</label>
                <input type="email" placeholder='Enter Email' className='form-control'/>
            </div>
            
            
            <div className='d-grid mt-2'>

            <button className='btn btn-primary'>Sign up</button>

            </div>
            <p className='text-end mt-2'>
                Already Registerd <a link to= "profile.html" className='ms-2'>Sign in</a>
            </p>
        </form>

    </div>
    </div>
    )
}