import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/auth';


const Navbar = () => {
  const [auth,setAuth]=useAuth()
  const navigate=useNavigate();
  const logout=()=>{
    setAuth({ ...auth, user: null, token: "" });
    localStorage.removeItem("auth");
    navigate("/login");
  }
    return (
      <>
      <ul className="nav d-flex justify-content-between shadow-sm mb-2">
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/">
            HOME
          </NavLink>
        </li>
        {!auth?.user ? (
          <>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                LOGIN
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/register">
                REGISTER
              </NavLink>
            </li>
          </>
        ) : (
          <div className="dropdown">
            <li>
              <button
                className="nav-link btn pointer dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                {auth?.user?.name}
              </button>

              <ul className="dropdown-menu">
                <li>
                  <NavLink
                    className="nav-link "
                    to={`/dashboard/${auth?.user?.role === 'admin' ? "admin" : "user"
                      }`}
                  >
                    Dashboard
                  </NavLink>
                </li>

                <li className="nav-item pointer">
                  <button onClick={logout} className="nav-link btn">
                    Logout
                  </button>
                </li>
              </ul>
            </li>
          </div>
        )}
      </ul>
    </>
    );
};

export default Navbar;