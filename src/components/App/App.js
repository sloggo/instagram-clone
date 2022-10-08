import Header from "../Header/Header";
import WelcomePage from "../WelcomePage/WelcomePage";
import MainContent from "../MainContent/MainContent";

import React, { useState, useEffect } from "react";
import firebaseApp from "../../firebase";

function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    console.log(firebaseApp)
  }, [])

  function logIn(){
    setLoggedIn(true);
  }

  return (
    <>
      {!loggedIn && <WelcomePage logIn={logIn}></WelcomePage>}
      {loggedIn && <Header></Header>}
      {loggedIn && <MainContent></MainContent>}
    </>
  );
}

export default App;
