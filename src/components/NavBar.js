import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  let navigate = useNavigate();
  let handleLogout = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("name2");
    localStorage.removeItem("email");
    localStorage.removeItem("email2");
    localStorage.removeItem("token");
    navigate("/");
  };

  

  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          ChatApp
        </Link>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            {!localStorage.getItem("name") ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">
                    Signup
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              </>
            ) : (
              <button onClick={handleLogout} className="btn btn-primary mx-1">
                Logout
              </button>
            )}
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Enter User"
                aria-label="Search"
              />
              <button  className="btn btn-outline-success " type="submit">
                Search User
              </button>
            </form>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
