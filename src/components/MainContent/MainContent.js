import './MainContent.css'
import Feed from "../Feed/Feed"
import samplefeed from '../samplefeed.json'
import { useEffect, useState } from 'react'
import PostPopup from '../PostPopup/PostPopup'

import { getAuth, onAuthStateChanged, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, query, getDocs, getDoc, collection, where, addDoc, orderBy, limit, doc } from "firebase/firestore";
import {firebaseApp, db, auth} from "../../firebase";

export default function MainContent(){
    const [currentFeed, setCurrentFeed] = useState(samplefeed)
    const [currentlyViewedPost, setCurrentlyViewedPost] = useState(null)

    useEffect(() => {
        fetchData()
    }, [db])

    async function fetchData(){
        const snapshot = await getDocs(collection(db, 'posts'));

        let newFeed = []

        snapshot.forEach((doc) => {
            console.log(doc.data())
            newFeed.push(doc.data())
        })

        setCurrentFeed(newFeed)
    }

    async function getUser(uid){
        const docRef = doc(db, 'users', uid)
        const docSnap = await getDoc(docRef)

        if(docSnap.exists()){
            return docSnap.data()
        } else{
            console.log('no user')
        }
    }

    function fetchFeed(){
        if(!(currentFeed === samplefeed)){
            setCurrentFeed(samplefeed)
        }
    }

    function viewPost(event){
        const viewedPost = currentFeed.find(item => item.id === parseInt(event.target.id))
        setCurrentlyViewedPost(viewedPost)
        console.log('Viewing post id:', viewedPost)
    }

    function resetViewedPost(){
        setCurrentlyViewedPost(null)
    }

    return(
        <div className="main-content">
            {currentlyViewedPost && <PostPopup post={currentlyViewedPost} resetViewedPost={resetViewedPost}></PostPopup>}
            <Feed currentFeed={currentFeed} fetchFeed={fetchFeed} viewPost={viewPost} getUser={getUser}></Feed>
            <p>Suggestions</p>
        </div>
    )
}