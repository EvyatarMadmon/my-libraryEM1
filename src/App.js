import Hero from "./components/Hero";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import UploadBooks from "./components/UploadBooks";
import About from "./components/About";
import PersonalArea from "./components/PersonalArea";
import SignIn from "./components/SignIn";
import ForgotPassword from "./components/ForgotPassword";


function App() {


  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element=
          {
            <div>
              <Hero />
            </div>

          } />

        <Route path="Login" element=
          {
            <div>
              <Login />
            </div>
          } />

        <Route path="SignIn" element=
          {
            <div>
              <SignIn />
            </div>
          } />

        <Route path="ForgotPassword" element=
          {
            <div>
              <ForgotPassword />
            </div>
          } />

        <Route path="Home" element=
          {
            <div>
              <Navbar />
              <Home />

            </div>
          } />

        <Route path="UploadingBooks" element=
          {
            <div>
              <Navbar />
              <UploadBooks />
            </div>
          } />

        <Route path="PersonalArea" element=
          {
            <div>
              <Navbar />
              <PersonalArea />
            </div>
          } />

        <Route path="About" element=
          {
            <div>
              <Navbar />
              <About />
            </div>
          }>




        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
