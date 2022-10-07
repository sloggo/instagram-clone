import './MainContent.css'
import Feed from "../Feed/Feed"
import samplefeed from '../samplefeed.json'
import { useState } from 'react'

export default function MainContent(){
    const [currentFeed, setCurrentFeed] = useState(samplefeed)

    function fetchFeed(){
        if(!(currentFeed === samplefeed)){
            setCurrentFeed(samplefeed)
        }
    }

    return(
        <div className="main-content">
            <Feed currentFeed={currentFeed} fetchFeed={fetchFeed}></Feed>
            <p>Suggestions</p>
        </div>
    )
}