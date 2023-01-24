import { RouteObject, useRoutes } from "react-router-dom";

import { Error404, Home, Login, ForgotPassword, SignUp } from "../pages";

export const dashboardRoutes: RouteObject[] = [
  { path: "login", element: <Login /> },
  { path: "/", element: <Home /> },
  { path: "*", element: <Error404 /> },
  { path: "forgot-password", element: <ForgotPassword /> },
  { path: "sign-up", element: <SignUp /> },
];

export const Routes = () => {
  const routes = useRoutes(dashboardRoutes);

  return routes;
};
