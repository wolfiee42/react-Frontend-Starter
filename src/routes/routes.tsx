import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AboutUs from "../components/layouts/AboutUs";
import ContactUs from "../components/layouts/ContactUs";
import Login from "../components/layouts/Login";
import Register from "../components/layouts/Register";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default routes;
