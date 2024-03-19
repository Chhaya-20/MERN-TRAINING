import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import Home from "./components/Home";
import Users from "./components/Users";
import Posts from "./components/Posts";
import Todos from "./components/Todos";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <div className="bg">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/todos" element={<Todos />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
