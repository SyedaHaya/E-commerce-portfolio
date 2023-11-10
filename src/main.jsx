import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "swiper/css";

// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

// fonts and icons
import "././assets/css/icofont.min.css";
import "././assets/css/animate.css";
import "././assets/css/style.min.css";

import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import Home from "./home/Home.jsx";
import Blog from "./blog/Blog.jsx";
import Shop from "./shop/Shop.jsx";

import About from "./about/About.jsx";
import SingleProduct from "./shop/SingleProduct.jsx";
import { CartPage } from "./home/CartPage.jsx";
import AuthProvider from "./contexts/AuthProvider.jsx";
import Login from "./components/Login.jsx";
import SignUp from "./components/SignUp.jsx";
import NewArrival from "./arrival/NewArrival.jsx";

const auth = localStorage.getItem("authenticated");

let router;

if (auth) {
  router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/blog", element: <Blog /> },
        { path: "/shop", element: <Shop /> },
        { path: "shop/:id", element: <SingleProduct /> },
        { path: "/cart-page", element: <CartPage /> },
        { path: "/about", element: <About /> },
        { path: "/new-arrival", element: <NewArrival /> },
        { path: "*", element: <Home /> },
      
      ],
    },
  ]);
} else {
  router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/blog", element: <Blog /> },
        { path: "/about", element: <About /> },
        { path: "/sign-in", element: <Login /> },
        { path: "/sign-up", element: <SignUp /> },
        { path: "*", element: <Login /> },
      ],
    },
  ]);
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
