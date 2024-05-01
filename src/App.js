import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import  header from './img/header.png';
import logo2 from './img/logo2.png';
import Footer from "./pages/Footer";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const currentRoute = window.location.pathname;
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  const showBackgroundImage = currentRoute === "/";
  return (
    <div>
    <Router>
      <nav>
        <div className="logo-container">
        <img src={logo2} height={50} width={50} />
        </div>
        <div className="links-container">
        <Link to="http://localhost:5500/">Power of Knowledge Blog</Link>
          <Link  to="/"> Home </Link>

        {!isAuth ? (
          <Link to="/login"> Login </Link>
        ) : (
          <>
            <Link to="/createpost"> Create Post </Link>
            <button   onClick={signUserOut} className="text-button"> Log Out</button>
          </>
        
        )}
        </div>
        
      </nav>
      {showBackgroundImage && (
        <div className="header-image-container">
          {/* Apply CSS to the image */}
          <img src={header} alt="Header" className="header-image" />

          {/* Text overlay */}
          <div className="image-overlay">
            <h1>Welcome to our Blog</h1>
            <p>Start writing your blog today!</p>
            <Link to="/createpost" className="write-blog-button">Write Your Blog</Link>
          </div>
        </div>
      )}
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>
    <Footer/>
    </div>
  );
}

export default App;