
import React, { useReducer } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const initialState = {
  email: '',
  password: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'SET_PASSWORD':
      return { ...state, password: action.payload };
    default:
      return state;
  }
}

function Login() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: state.email, password: state.password }),
      });

      if (!response.ok) {
        alert('Wrong Credentials');
        return;
      }

      const data = await response.json();
      console.log(data.token)
      localStorage.setItem('token', data.token);
      navigate('/home');
    } catch (error) {
      console.error('Internal Server Error');
    }
  };

  return (
    <div className="upper">
      <div className="forms content">
        <form method="POST" onSubmit={handleSubmit}>
          <h1 className="text-center mb-5">Login To Account</h1>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
  name="email"
  value={state.email}
  onChange={(e) => dispatch({ type: 'SET_EMAIL', payload: e.target.value })}
  type="email"
  className="form-control"
  id="exampleInputEmail1"
  aria-describedby="emailHelp"
  autoComplete="off" 
/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              name="password"
              value={state.password}
              onChange={(e) => dispatch({ type: 'SET_PASSWORD', payload: e.target.value })}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              autoComplete="off" 
            />
          </div>
          
          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
            Login
          </button>
          <div className="mt-3 form-check" style={{ padding: 0 }}>
            Don't have an account ?<Link to="/signup"> Create Account </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
