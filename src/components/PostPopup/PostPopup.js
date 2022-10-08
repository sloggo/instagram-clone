import '../PostPopup/PostPopup.css'

export default function PostPopup(props){
    return(
        <div className="postpopup-container-bg">

            <div className='postpopup-container'>

                <img className='postpopup-content' src={props.post.content}></img>

                <div className='postpopup-sidebar-container'>

                    <div className='postpopup-sidebar-header'>
                        <img className='postpopup-sidebar-header-icon' src='./images/placeholder-user.png'></img>
                        <p className='postpopup-sidebar-header-username'>{props.post.username}</p>
                    </div>

                </div>

            </div>
            
        </div>
    )
}