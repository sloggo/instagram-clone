import Header from "../Header/Header";
import WelcomePage from "../WelcomePage/WelcomePage";
import MainContent from "../MainContent/MainContent";
import { onAuthStateChanged, signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
import { query, getDocs, collection, where, addDoc } from "firebase/firestore";

import React, { useState } from "react";
import {db, auth} from "../../firebase";

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [loggedInAs, setLoggedInAs] = useState(null)

  onAuthStateChanged(auth, (user) => {
    if(user){
      setLoggedIn(true)
      setLoggedInAs('user')
    } else{
      setLoggedIn(false)
      setLoggedInAs('user')
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
    setLoggedIn(true);
    setLoggedInAs('guest')
  }

  function logOut(){
    signOut(auth)
  }

  function userOrGuestProfile(){
    if(loggedInAs === 'user'){
      return auth.currentUser
    } else if(loggedInAs === 'guest'){
      return {name: 'Guest', photoURL: './images/placeholder-user.png'}
    }
  }

  return (
    <>
      {!loggedIn && <WelcomePage signInWithGoogle={signInWithGoogle} loginAsGuest={loginAsGuest}></WelcomePage>}
      {loggedIn && <Header userOrGuestProfile={userOrGuestProfile} logOut={logOut}></Header>}
      {loggedIn && <MainContent></MainContent>}
    </>
  );
}

export default App;
