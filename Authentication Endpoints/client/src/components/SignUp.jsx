import React, { useReducer } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const initialState = {
  name: '',
  email: '',
  password: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'SET_PASSWORD':
      return { ...state, password: action.payload };
    default:
      return state;
  }
}

function Signup() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: state.name, email: state.email, password: state.password }), 
      });

      if (!response.ok) {
        alert("Error Occured !");
        return;
      }

      const data = await response.json();
   
      localStorage.setItem('token', data.token);
      navigate('/home');
    } catch (error) {
      console.error("Internal Server Error", error);
    }
  };

  return (
    <div className="upper">
      <div className="forms content">
        <form>
          <h1 className='text-center mb-5'>Create Account</h1>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input onChange={(e) => dispatch({ type: 'SET_NAME', payload: e.target.value })} type="text" className="form-control" id="name" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input  onChange={(e) => dispatch({ type: 'SET_EMAIL', payload: e.target.value })} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input onChange={(e) => dispatch({ type: 'SET_PASSWORD', payload: e.target.value })} type="password" className="form-control" id="exampleInputPassword1"/>
          </div>
          <button onClick={handleSignup} type="submit" className="btn btn-primary" style={{ width: "100%" }}>Sign Up</button>
          <div className="mt-3 form-check" style={{ padding: 0 }}>
            Already have an account ?<Link to="/login"> Login </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
