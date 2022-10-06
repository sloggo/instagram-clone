import Header from "../Header/Header";
import WelcomePage from "../WelcomePage/WelcomePage";
import React, { useState, useEffect } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(true)

  return (
    <>
      {!loggedIn && <WelcomePage></WelcomePage>}
      {loggedIn && <Header></Header>}
    </>
  );
}

export default App;
