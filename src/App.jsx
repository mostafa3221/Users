import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About"
import Contact from "./pages/Contact"
import User from "./pages/user";
import "./styles/Nav.css";
import { Route, Routes } from "react-router-dom";
import UserDetails from "./pages/UserDetails";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Home /> */}
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/About" element={<About />} />
  <Route path="/Contact" element={< Contact/>} />
  <Route path="/User" element={< User/>} />
 <Route path="/User/:id" element={<UserDetails />} />   
</Routes>;
    </>
  );
}
export default App;
