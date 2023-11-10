import { Outlet } from "react-router-dom";
import "./App.css";
import { NavDropdown } from "react-bootstrap";
import Navitems from "./components/Navitems";
import Footer from "./components/Footer";

function App() {
  // const auth = localStorage.getItem("authenticated");

  return (
    <>
      <Navitems />
      <div className="min-vh-100">
        <Outlet />
      </div>
      <Footer />
    </>

  );

  // return auth ? (
  //   <>
  //     <Navitems />
  //     <div className="min-vh-100">
  //       <Outlet />
  //     </div>
  //     <Footer />
  //   </>
  // ) : (
  //   <div className="min-vh-100">
  //     <Outlet />
  //   </div>
  // );
}

export default App;