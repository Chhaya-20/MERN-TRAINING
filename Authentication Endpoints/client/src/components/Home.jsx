import React, { useEffect } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    const Logout=()=>{
        localStorage.removeItem('token');
        navigate('/login')
    }
    useEffect(()=>{
        if(!localStorage.getItem('token'))
        {
            navigate('/login')
        }
        else{
            navigate('/home')
        }

    },[])
  return (
    <>
    <button  onClick={Logout} className='btn btn-primary logout'>Logout</button>
        <div className='home'>Welcome to Home Page</div>

    </>
  )
}

export default Home