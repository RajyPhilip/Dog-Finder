import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./style.scss";

const Navbar = ({user, setUser}) => {

  const navigate = useNavigate();

  useEffect(() => {
    let u = localStorage.getItem("user");
    setUser(u);
  }, [user, setUser]);

  const handleLogout = async () => {
    await localStorage.removeItem("user");
    setUser(null);
    navigate('/login');
  }

  return (
    <div className="navbar">
      <nav className="navContainer">
        <Link to={'/'} className="logo">
          <img
            src="https://w7.pngwing.com/pngs/430/764/png-transparent-five-assorted-breed-dogs-labrador-retriever-puppy-cat-dog-breed-dog-type-a-group-of-pet-dogs-border-animals-pet-thumbnail.png"
            alt="logo"
          />
        </Link>
        <div className="navItems">
          {user != null ? (
            <>
              <Link to={('/home')}><button className="navButton">Home</button></Link>
              <Link to={('/result')}><button className="navButton">Result</button></Link>
              <button className="navButton" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <Link to={'/login'}><button className="navButton">Sign In</button></Link>
              <Link to={'/register'}><button className="navButton">Sign Up</button></Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
