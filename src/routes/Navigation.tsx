import { BrowserRouter } from "react-router-dom";
import { Route, Routes, Navigate, NavLink } from "react-router-dom";
import ReactLogo from "../assets/react.svg";
import { routes } from "./routes.ts";
import { Suspense } from "react";

export const Navigation = () => {
  return (
    <Suspense fallback={<p>Loading</p>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={ReactLogo} alt="Logo React" />
            <ul>
              {routes.map((route) => (
                <li key={route.id}>
                  <NavLink
                    to={route.to}
                    className={({ isActive }) => (isActive ? "nav-active" : "")}
                  >
                    {route.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.id}
                path={route.path}
                element={<route.Component />}
              />
            ))}
            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
