import { createBrowserRouter } from "react-router";
import App from "../App";
import LoginPage from "../pages/Auth/Login";
import SignupPage from "../pages/Auth/Register";
import ForgotPass from "../pages/Auth/ForgotPass";
import VerifyOtp from "../pages/Auth/VerifyOtp";
import NewPassword from "../pages/Auth/NewPassword";
import Landing from "../pages/Home/Landing";
import MainContent from "../pages/Main/MainContent";
import AdminDashboard from "../pages/Main/parts/Admin/AdminDashboard";
import Dashboard from "../pages/Main/parts/UserParts/Dashboard";
import Rentals from "../pages/rentals/Rentals";
import Vehicls from "../pages/Vehicles/Vehicls";
const userType = localStorage.getItem("userType");

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/dashboard",
        element: <MainContent />,
        children: [
          {
            path: "",
            element: userType === "admin" ? <AdminDashboard /> : <Dashboard />,
          },
          {
            path: "manage-rentals",
            element: <Rentals />,
          },
          {
            path: "vehicles",
            element: <Vehicls />,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPass />,
  },
  {
    path: "/verify-otp",
    element: <VerifyOtp />,
  },
  {
    path: "/new-password",
    element: <NewPassword />,
  },
]);
export default router;
