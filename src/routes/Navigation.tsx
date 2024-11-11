import { BrowserRouter } from "react-router-dom";
import { Route, Routes, Navigate, NavLink } from "react-router-dom";
import ReactLogo from "../assets/react.svg";

import { ShoppingPage } from "../component-patterns/pages/ShoppingPage";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={ReactLogo} alt="Logo React" />
          <ul>
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Shooping
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/users"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Users
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="home" element={<ShoppingPage />} />
          <Route path="about" element={<h2>About</h2>} />
          <Route path="users" element={<h2>Soy users </h2>} />
          <Route path="/*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
