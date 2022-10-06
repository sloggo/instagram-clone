import './MainContent.css'
import Feed from "../Feed/Feed"

export default function MainContent(){
    return(
        <div className="main-content">
            <Feed></Feed>
            <p>Suggestions</p>
        </div>
    )
}