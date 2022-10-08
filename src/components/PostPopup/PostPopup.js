import '../PostPopup/PostPopup.css'

export default function PostPopup(props){
    return(
        <div className="postpopup-container-bg">

            <div className='postpopup-container'>

                <img className='postpopup-content' src={props.post.content}></img>

                <div className='postpopup-sidebar-container'>

                    <div className='postpopup-sidebar-header'>
                        <img className='postpopup-icon' src='./images/placeholder-user.png'></img>
                        <p className='postpopup-username'>{props.post.username}</p>
                    </div>

                    <div className='postpopup-commentsection'>
                        
                    </div>

                </div>

            </div>
            
        </div>
    )
}