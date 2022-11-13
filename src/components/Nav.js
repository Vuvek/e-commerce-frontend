import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../customHooks/useAuth";

function Nav() {
  const { user, logout } = useAuth();
  console.log(user, "user is here bro");

  return (
    <div className="nav">
      <div className="logo-box">
        <img
          alt="logo"
          className="logo"
          src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/06/2ada4b36-0c2a-4221-826d-043ddf76bcc2-e1657269817437.jpeg?auto=format&q=60&fit=max&w=930"
        />
      </div>
      {user ? (
        <ul className="nav-ul">
          <li>
            <Link to="/">Products</Link>
          </li>
          <li>
            <Link to="/add">Add Product</Link>
          </li>
          <li>
            <Link to="/update">Update Product</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link onClick={logout} to="/login">
              Logout
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="nav-ul nav-right">
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Nav;
