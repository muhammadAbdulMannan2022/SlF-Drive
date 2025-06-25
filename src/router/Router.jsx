import { createBrowserRouter } from "react-router";
import App from "../App";
import LoginPage from "../pages/Auth/Login";
import SignupPage from "../pages/Auth/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
]);
export default router;
