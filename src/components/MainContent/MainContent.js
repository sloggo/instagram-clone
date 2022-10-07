import './MainContent.css'
import Feed from "../Feed/Feed"
import samplefeed from '../samplefeed.json'
import { useState } from 'react'
import PostPopup from '../PostPopup/PostPopup'

export default function MainContent(){
    const [currentFeed, setCurrentFeed] = useState(samplefeed)
    const [currentlyViewedPost, setCurrentlyViewedPost] = useState(null)

    function fetchFeed(){
        if(!(currentFeed === samplefeed)){
            setCurrentFeed(samplefeed)
        }
    }

    function viewPost(event){
        setCurrentlyViewedPost(event.target.id)
        console.log('Viewing post id:', event.target.id)
    }

    return(
        <div className="main-content">
            <PostPopup></PostPopup>
            <Feed currentFeed={currentFeed} fetchFeed={fetchFeed} viewPost={viewPost}></Feed>
            <p>Suggestions</p>
        </div>
    )
}