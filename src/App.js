import React from "react";
import Navbar from "./component/Navbar/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mens from "./pages/Mens";
import Womens from "./pages/Womens";
import Kids from "./pages/Kids";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
// import { Home } from "lucide-react";
import Home from "./pages/Home";

const router=createBrowserRouter([
    {
        path:"/",
        element:<><Navbar/><Home/></>
    },
    {
        path:"/mens",
        element:<><Navbar/><Mens/></>
    },
    {
        path:"/womens",
        element:<><Navbar/><Womens/></>
    },
    {
        path:"/kids",
        element:<><Navbar/><Kids/></>
    },
    {
        path:"/login",
        element:<><Navbar/><Login/></>
    },
    {
        path:"/cart",
        element:<><Navbar/><Cart/></>
    }
])

function App(){
    return(
        <>
          <RouterProvider router={router}/>

          {/* <Home/> */}
        </>
    )
}
export default App
