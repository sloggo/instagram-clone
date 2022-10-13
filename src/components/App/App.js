import Header from "../Header/Header";
import WelcomePage from "../WelcomePage/WelcomePage";
import MainContent from "../MainContent/MainContent";
import { onAuthStateChanged, signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
import { query, getDocs, collection, where, addDoc } from "firebase/firestore";

import React, { useState } from "react";
import {db, auth} from "../../firebase";

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [guest, setGuest] = useState(false)

  onAuthStateChanged(auth, (user) => {
    if(user){
      setLoggedIn(true)
    } else{
      setLoggedIn(false)
    }
  })

  async function signInWithGoogle(){
    console.log('signinwithg')
    try{
        const googleProvider = new GoogleAuthProvider()
        const res = await signInWithPopup(auth, googleProvider)
        const user = res.user;
        const userQuery = query(collection(db, "users"), where("uid", "==", user.uid))

        const docs = await getDocs(userQuery);

        if(docs.docs.length === 0){
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                pfp: user.photoURL,
                name: user.displayName,
                authProvider: 'google',
                email: user.email
            })
        }
    } catch (err){
        console.log(err)
    }
  }

  function loginAsGuest(){
    setGuest(true);
  }

  function logOut(){
    signOut(auth)
  }

  return (
    <>
      {(!loggedIn && !guest) && <WelcomePage signInWithGoogle={signInWithGoogle} loginAsGuest={loginAsGuest}></WelcomePage>}
      {(loggedIn || guest) && <Header user={auth.currentUser} guest={guest} logOut={logOut}></Header>}
      {(loggedIn || guest) && <MainContent></MainContent>}
    </>
  );
}

export default App;
