

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login'
// import Login from '../components/login';
 import Signup from './components/SignUp';
 import Forget from './components/Forget';
import Home from './components/Home';

function App() {
 

  return (
    <>
     <Router>
      <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/home" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route exact path="/forget" element={<Forget />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
