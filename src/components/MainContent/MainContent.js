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
            <Feed currentFeed={currentFeed} fetchFeed={fetchFeed} viewPost={viewPost}></Feed>
            <p>Suggestions</p>
        </div>
    )
}