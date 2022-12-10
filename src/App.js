import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import SignIn from "./pages/login";
import Main from "./pages/main";
import Register from "./pages/register";
import { login } from "./service/userRequest";
import Protected from "./utility/protected";
import { storeData, logOut , getUserID } from "./utility/store";

function App() {
  const navigate = useNavigate();

  const [isSignedIn, setIsSignedIn] = useState(null);

  useEffect(() => {
    let userID = getUserID();
    if (userID !== null) {
      setIsSignedIn(true);
    } else {
      setIsSignedIn(false);
    }
  }, [isSignedIn]);

  const signin = (user) => {
    login(user).then((res) => {
      if (res.status === "success") {
        storeData(res.value);
        setIsSignedIn(true);
        navigate("/");
      } else {
        alert(res.message);
      }
    });
  };
  const signout = () => {
    logOut();
    setIsSignedIn(false);
    navigate("/login");
  };

  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Protected isSignedIn={isSignedIn}>
                <Main signout={signout} />
            </Protected>
          }
        />
        <Route
          exact
          path="/register"
          element={<Register isSignedIn={isSignedIn} signin={signin} />}
        />
        <Route
          exact
          path="/login"
          element={<SignIn isSignedIn={isSignedIn} signin={signin}></SignIn>}
        />
        <Route path="*" element={<>Page Not Found</>} />
      </Routes>
    </div>
  );
}

export default App;
