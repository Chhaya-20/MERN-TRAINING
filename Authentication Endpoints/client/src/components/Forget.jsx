import React from 'react'
import '../App.css'
import { Link  } from 'react-router-dom'

function Login() {
  return (
   
    <div className="forms content">
    <form>
        <h1 className='text-center mb-5'>Reset Password</h1>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Enter email</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Enter new Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
 
  <button type="submit" style={{width:"100%"}} className="btn btn-primary">
 
    <Link to="/login" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold', outline: 'none' }}>Update Password</Link>

</button>
</form>
    </div>
   
    

  )
}

export default Login