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
import BookingRequestsPage from "../pages/BookingRequest/BookingRequestsPage";
import PaymentDashboard from "../pages/paymentInvoice/PaymentDashboard";
import ChatPage from "../pages/Chat/Chat";
import Notification from "../pages/Notifications/Notification";
import Reports from "../pages/Reports/Reports";
import SettingsLayout from "../pages/Settings/SettingsLayout";
import AccountPage from "../pages/Settings/pages/AccountPage";
import SecurityPage from "../pages/Settings/pages/Security";
import TermsCondition from "../pages/Settings/pages/TermsCondition";
import Policy from "../pages/Settings/pages/Policy";
import Collaborations from "../pages/Settings/pages/Collaborations";
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
          {
            path: "booking-request",
            element: <BookingRequestsPage />,
          },
          {
            path: "invoice-payment",
            element: <PaymentDashboard />,
          },
          {
            path: "messages",
            element: <ChatPage />,
          },
          {
            path: "notifications",
            element: <Notification />,
          },
          {
            path: "reports",
            element: <Reports />,
          },
          {
            path: "settings",
            element: <SettingsLayout />,
            children: [
              {
                path: "account",
                element: <AccountPage />,
              },
              {
                path: "security",
                element: <SecurityPage />,
              },
              {
                path: "terms",
                element: <TermsCondition />,
              },
              {
                path: "privacy",
                element: <Policy />,
              },
              {
                path: "collaborations",
                element: <Collaborations />,
              },
            ],
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
