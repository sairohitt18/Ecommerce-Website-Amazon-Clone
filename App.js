import './App.css';
import { Routes, Route } from "react-router-dom"
import React, {useEffect} from "react";
import Home from "./Home";
import Header from "./Header";
import Login from "./Login";
import { auth } from "./firebase";
import dispatch from "./Product"
function App() {
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return(
  <div className="app">
  <Routes>
       <Route path="/login" element={<Login />} />
       <Route path="/" element={[<Header/>, <Home/>]} />
  </Routes>
  </div>
  );
}
export default App;