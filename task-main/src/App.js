import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase-config";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home"
import { BrowserRouter as Router, Switch, Route, Link, Routes, Navigate } from "react-router-dom";

function App() {

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async (registerEmail, registerPassword) => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async (loginEmail, loginPassword) => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  const logout = async () => {
      await signOut(auth);
    };

  return (
    <Router>
    <div className="App">
      <Routes>
        {/* <Route exact path="/"><Home logout={logout} user={user}/></Route> */}
        <Route path="/" element={user ? <Home logout={logout} user={user}/> : <Register register={register}/>}></Route>
        
        <Route path="/register" element={user ? <Navigate replace to="/" /> : <Register register={register}/>}></Route>
        <Route path="/login" element={user ? <Navigate replace to="/" /> : <Login login={login}/>}></Route>
      </Routes>
      {/* {!user ? <div><Register register={register}/><Login login={login}/></div> :
      <Home logout={logout} user={user}/> } */}
    </div>
    </Router>
  );
}

export default App;