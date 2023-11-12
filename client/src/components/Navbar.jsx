import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUserAction } from "../actions/userAction";

function Navbar() {
  const cartState = useSelector((state) => state.cartReducer);
  const { cartItems } = cartState;
  const falanState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = falanState;

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logoutUserAction());
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (currentUser) {
      if (currentUser.isAdmin != true) {
        navigate("/");
      }
    }
  }, [currentUser]);
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            <img
              src="https://www.burgerking.com.tr/assets/Img/logo@2x.png?v=1"
              width={"80px"}
              alt=""
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Products
                </Link>
              </li>
              {currentUser && currentUser.isAdmin == true ? (
                <li className="nav-item">
                  <Link className="nav-link" to="/admin">
                    Admin
                  </Link>
                </li>
              ) : (
                <></>
              )}
            </ul>
            {currentUser ? (
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link">
                    <i
                      className="fa-solid fa-user fa-flip"
                      style={{ color: "#000000" }}
                    />{" "}
                    Welcome, {currentUser.name}{" "}
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/myorders">
                    Orders
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" onClick={logoutHandler} to="/">
                    Logout
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sepet">
                    Cart
                    <i className="fa-solid fa-cart-shopping fa-beat mx-2"></i>
                    <span className="position-absolute top-10 start-80 translate-middle badge rounded-pill bg-white text-danger px-2">
                      {cartItems.length}
                    </span>
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
